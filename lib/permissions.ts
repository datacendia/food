/**
 * What each role is allowed to see, enforced before anything is serialised.
 *
 * The whole reason this app has a server is that the standalone file cannot
 * keep a secret: it carries all 223 costs, prices, suppliers and food-cost
 * percentages, so anyone holding the file holds your commercial position. A
 * login only helps if the figures never reach the browser in the first place.
 *
 * So this is not a display concern. Hiding a column in CSS leaves the number
 * in the HTML, in the JSON payload, and in devtools. Every dish that goes to a
 * page passes through `visibleDish` here, and __tests__/permissions.test.ts
 * fails if any cost figure survives into a chef or client payload for any of
 * the 223 dishes.
 *
 * The rule, in one line: `cost`, `source` and everything derived from them are
 * owner-only. `price` is what the guest pays, so a client may see it; a chef
 * may not, because a chef has no reason to and money in the kitchen is how
 * cost and price get confused.
 */
import type { Dish } from "./dishes";
import type { Role } from "@/db/schema";

/** Fields that reveal what you pay, what you make, or who you buy from. */
export const OWNER_ONLY_DISH_FIELDS = ["cost", "source", "costVerified"] as const;

/** Fields that reveal what the guest pays. */
export const PRICE_FIELDS = ["price"] as const;

/** A dish as a chef sees it: everything needed to cook, nothing about money. */
export type KitchenDish = Omit<Dish, "cost" | "source" | "costVerified" | "price">;

/** A dish as a client sees it: the menu, and what it costs them. */
export type ClientDish = Omit<Dish, "cost" | "source" | "costVerified">;

export type VisibleDish = Dish | ClientDish | KitchenDish;

/**
 * Strip a dish to what `role` may see.
 *
 * Deletes rather than blanks: a `cost: 0` would be a lie that reads as a fact,
 * and something downstream would eventually total it up.
 */
export function visibleDish(dish: Dish, role: Role): VisibleDish {
  if (role === "owner") return dish;

  const { cost, source, costVerified, ...rest } = dish;
  if (role === "client") return rest as ClientDish;

  const { price, ...noPrice } = rest;
  return noPrice as KitchenDish;
}

export function visibleDishes(dishes: Dish[], role: Role): VisibleDish[] {
  return dishes.map((d) => visibleDish(d, role));
}

/**
 * The full dish, for a page that genuinely needs cost and margin.
 *
 * Exists so that no page ever writes `dishes={DISHES}`. That line is correct on
 * an owner-only page and catastrophic on any other, and telling the two apart
 * means reading the guard twenty lines above it. Going through here instead
 * means the check travels with the data, and __tests__/route-guards.test.ts can
 * simply ban the raw form.
 */
export function fullDishes(dishes: Dish[], role: Role): Dish[] {
  assertCan(CAN.seeMoney, role, "see dish costs and margins");
  return dishes;
}

/* ─────────────────────────── what each role may do ─────────────────────────── */

export const CAN = {
  /** See cost, margin, food-cost % and supplier anywhere in the app. */
  seeMoney: (role: Role) => role === "owner",
  /** See what the guest pays. */
  seePrice: (role: Role) => role === "owner" || role === "client",
  /** Open the recipes, quantities and run sheet. */
  seeKitchen: (role: Role) => role === "owner" || role === "chef",
  /** Create and edit quotes. */
  writeQuotes: (role: Role) => role === "owner",
  /** Record a verified market price. A chef buys too, so a chef may. */
  writePrices: (role: Role) => role === "owner" || role === "chef",
  /** Add and edit bookings. */
  writeBookings: (role: Role) => role === "owner",
  /** Manage client records and logins. */
  manageClients: (role: Role) => role === "owner",
  /** See every client's work rather than only your own. */
  seeAllClients: (role: Role) => role === "owner" || role === "chef"
} as const;

/**
 * Which quotes this viewer may read.
 *
 * A client sees their own and nothing else. Returning a filter rather than a
 * boolean keeps the check in the query, so a client's quote list is narrowed
 * by the database and never assembled in memory and then filtered - which is
 * the version that leaks the day someone forgets the filter.
 */
export function quoteScope(role: Role, clientId: string | null):
  { all: true } | { clientId: string } | { none: true } {
  if (role === "owner" || role === "chef") return { all: true };
  if (role === "client" && clientId) return { clientId };
  return { none: true };
}

/** Throw rather than render: an unauthorised page must not half-exist. */
export function assertCan(
  allowed: (role: Role) => boolean, role: Role, what: string
): void {
  if (!allowed(role)) {
    throw new Error(`Not permitted: a ${role} cannot ${what}.`);
  }
}
