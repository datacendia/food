/**
 * "Chirimoya is out this month and it takes four dishes with it. What do I
 * put there instead?"
 *
 * The app could already answer the first half. This answers the second.
 *
 * A substitute has to survive four separate tests at once, which is why this
 * is the one thing here that a competitor with a spreadsheet cannot copy: it
 * needs the flavour axes, the seasonal windows, the costed recipes and the
 * kitchen-conflict rules in the same place.
 *
 *   1. It has to taste like the thing it replaces, or the menu changes shape.
 *   2. It has to be in season this month, or you have swapped one hole for another.
 *   3. It has to cost about the same, or the quote moves under the client.
 *   4. It has to serve the same way - a plated dish cannot replace a box item.
 */
import type { Dish, Ingredient, ServiceFormat } from "./dishes";
import type { Diet, DishDietary } from "./dietary";
import { FLAVOURS } from "@/data/flavours";

export interface SubstituteOptions {
  /** 1-12. Anything out of window this month is excluded outright. */
  month: number;
  /** Seasonal windows, so we know what is actually available. */
  ingredients: Ingredient[];
  /** Dietary profiles, so a swap cannot quietly break a guest's diet. */
  dietary?: Map<number, DishDietary>;
  /** Diets the replacement must also satisfy. */
  diets?: Diet[];
  /** How far the price may move, as a fraction. Default 25%. */
  priceTolerance?: number;
  /** How many to return. */
  limit?: number;
}

export interface Substitute {
  dish: Dish;
  /** 0-1. How much of the original's flavour profile it carries. */
  flavourMatch: number;
  /** Signed fraction: +0.2 means it costs the client 20% more. */
  priceShift: number;
  score: number;
  /** Why it was offered, in words a person can check. */
  reasons: string[];
}

/** Dishes blocked this month because an ingredient is out of window. */
export function offMenu(ingredients: Ingredient[], month: number): Set<number> {
  const blocked = new Set<number>();
  for (const ing of ingredients) {
    if (ing.yearRound || ing.months.includes(month)) continue;
    for (const id of ing.dishes) blocked.add(id);
  }
  return blocked;
}

/** Which out-of-window ingredients are to blame for a given dish. */
export function blockedBy(ingredients: Ingredient[], month: number, dishId: number): string[] {
  return ingredients
    .filter((i) => !i.yearRound && !i.months.includes(month) && i.dishes.includes(dishId))
    .map((i) => i.name);
}

function jaccard(a: string[], b: string[]): number {
  if (!a.length && !b.length) return 1;
  const A = new Set(a);
  const B = new Set(b);
  let shared = 0;
  for (const x of A) if (B.has(x)) shared++;
  const union = new Set([...a, ...b]).size;
  return union === 0 ? 0 : shared / union;
}

/**
 * What could stand in for this dish, best first.
 *
 * Returns an empty list rather than a bad suggestion. A menu with a hole in
 * it is a problem you can see; a substitute that breaks a diet or blows the
 * quote is one you find out about at the event.
 */
export function substitutesFor(
  target: Dish,
  all: Dish[],
  opts: SubstituteOptions
): Substitute[] {
  const tolerance = opts.priceTolerance ?? 0.25;
  const blocked = offMenu(opts.ingredients, opts.month);
  const targetFlavours = FLAVOURS[target.id] ?? [];

  const out: Substitute[] = [];

  for (const d of all) {
    if (d.id === target.id) continue;
    if (blocked.has(d.id)) continue;                       // in season, or not at all
    if (d.category !== target.category) continue;          // a pudding replaces a pudding
    if (!servesTheSameWay(d.format, target.format)) continue;

    const priceShift = (d.price - target.price) / target.price;
    if (Math.abs(priceShift) > tolerance) continue;

    // A substitute must not quietly break a diet the original satisfied.
    if (opts.dietary && opts.diets?.length) {
      const p = opts.dietary.get(d.id);
      if (!p || !opts.diets.every((x) => p.suits.includes(x))) continue;
    }

    const flavourMatch = jaccard(targetFlavours, FLAVOURS[d.id] ?? []);
    if (flavourMatch === 0) continue;                      // nothing in common is not a substitute

    const reasons: string[] = [];
    const shared = (FLAVOURS[d.id] ?? []).filter((f) => targetFlavours.includes(f));
    if (shared.length) reasons.push(`shares ${shared.join(", ")}`);
    reasons.push(
      Math.abs(priceShift) < 0.02
        ? "same price"
        : `${priceShift > 0 ? "+" : ""}${Math.round(priceShift * 100)}% on the menu price`
    );
    if (d.subOrigin === target.subOrigin) reasons.push(`same ${d.subOrigin} line`);
    if (d.veg && !target.veg) reasons.push("vegetarian, where the original is not");

    // Flavour is what the guest notices; price is what you notice. Weight
    // accordingly, and prefer the same heritage line as a tiebreak.
    const score =
      flavourMatch * 0.7 +
      (1 - Math.abs(priceShift) / tolerance) * 0.25 +
      (d.subOrigin === target.subOrigin ? 0.05 : 0);

    out.push({ dish: d, flavourMatch, priceShift, score, reasons });
  }

  out.sort((a, b) => b.score - a.score);
  return out.slice(0, opts.limit ?? 5);
}

/**
 * A drop-off box item can be served anywhere; a live station cannot be
 * dropped off. Substitution has to respect that or the swap is undeliverable.
 */
function servesTheSameWay(candidate: ServiceFormat, target: ServiceFormat): boolean {
  if (candidate === target) return true;
  // Anything can be replaced by something less demanding, never by more.
  const demand: Record<ServiceFormat, number> = {
    "drop-off": 0, buffet: 1, plated: 2, "live-station": 3
  };
  return demand[candidate] <= demand[target];
}

export interface MonthPlan {
  month: number;
  blocked: { dish: Dish; because: string[]; options: Substitute[] }[];
  /** Dishes knocked out with nothing to replace them. The real problem. */
  unreplaceable: Dish[];
}

/** Everything the month takes off the menu, and what to do about each. */
export function planForMonth(all: Dish[], opts: SubstituteOptions): MonthPlan {
  const blocked = offMenu(opts.ingredients, opts.month);
  const rows: MonthPlan["blocked"] = [];
  const unreplaceable: Dish[] = [];

  for (const d of all) {
    if (!blocked.has(d.id)) continue;
    const options = substitutesFor(d, all, opts);
    rows.push({ dish: d, because: blockedBy(opts.ingredients, opts.month, d.id), options });
    if (!options.length) unreplaceable.push(d);
  }

  rows.sort((a, b) => a.options.length - b.options.length || b.dish.price - a.dish.price);
  return { month: opts.month, blocked: rows, unreplaceable };
}
