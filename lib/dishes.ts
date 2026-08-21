/** Types for the Aye Si Cena matrix. Schema follows the spreadsheet. */

export type Category =
  | "canape"
  | "main"
  | "side"
  | "bowl"
  | "breakfast"
  | "bakery"
  | "dessert";

export type ServiceTier = "scran" | "buffet" | "plated";

/** How the dish reaches the guest. Constrains which tiers can carry it. */
export type ServiceFormat = "drop-off" | "buffet" | "plated" | "live-station";

export type Flavour = "sweet" | "savoury" | "rich" | "tart" | "smoky" | "spiced" | "fresh";

export const FLAVOUR_AXES: Flavour[] = [
  "sweet", "savoury", "rich", "tart", "smoky", "spiced", "fresh"
];

export interface Dish {
  id: number;
  name: string;
  /** The dish this descends from. */
  origin: string;
  /** Which tradition: Scottish, English, Greek, Nordic, Basque, Peruvian. */
  subOrigin: string;
  /** True where the provenance is genuinely disputed, so cards don't overclaim. */
  contested: boolean;
  /** What Peru does to it, and why that works. */
  fusion: string;
  category: Category;
  format: ServiceFormat;
  /** Selling this needs the giro especial. Cooking with alcohol does not. */
  needsLicence: boolean;
  veg: boolean;
  keyIngredients: string;
  source: string;
  /** Soles, ex-IGV. */
  cost: number;
  price: number;
  /** False until a real supplier price replaces the estimate. */
  costVerified: boolean;
  /** Derived from the dish text — a starting point for an audit, not an audit. */
  allergens: string[];
  /** What the dish occupies during service: oven, fryer, griddle, hob, cold. */
  equipment: string[];
  tiers: ServiceTier[];
}

export interface SupplyLine {
  name: string;
  buy: string;
  why: string;
  verify: string;
}

export interface EventFilter {
  tier?: ServiceTier;
  categories?: Category[];
  formats?: ServiceFormat[];
  /** true = only dishes needing a licence; false = only those that don't. */
  needsLicence?: boolean;
  veg?: boolean;
  subOrigins?: string[];
}

export interface EventType {
  id: string;
  name: string;
  blurb: string;
  filter: EventFilter;
}

export const CATEGORY_LABEL: Record<Category, string> = {
  canape: "Canapés & bites",
  main: "Mains",
  side: "Sides & breads",
  bowl: "Bowls",
  breakfast: "Breakfast",
  bakery: "Bakery",
  dessert: "Desserts"
};

export const CATEGORY_ORDER: Category[] = [
  "canape", "main", "bowl", "side", "breakfast", "bakery", "dessert"
];

export const FORMAT_LABEL: Record<ServiceFormat, string> = {
  "drop-off": "Drop-off",
  buffet: "Buffet",
  plated: "Plated",
  "live-station": "Live station"
};

/** A dish matches when it satisfies every clause the filter sets. */
export function matchesEvent(dish: Dish, filter: EventFilter): boolean {
  if (filter.tier && !dish.tiers.includes(filter.tier)) return false;
  if (filter.categories && !filter.categories.includes(dish.category)) return false;
  if (filter.formats && !filter.formats.includes(dish.format)) return false;
  if (filter.needsLicence !== undefined && dish.needsLicence !== filter.needsLicence) return false;
  if (filter.veg !== undefined && dish.veg !== filter.veg) return false;
  if (filter.subOrigins && !filter.subOrigins.some((o) => dish.subOrigin.startsWith(o))) {
    return false;
  }
  return true;
}

/** A seasonal ingredient and the dishes that depend on it. */
export interface Ingredient {
  id: string;
  name: string;
  note: string;
  /** Peak months, 1-12. Empty when yearRound. */
  months: number[];
  yearRound: boolean;
  /** False until someone has confirmed the window at a Lima market. */
  verified: boolean;
  dishes: number[];
}

export const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export function inSeason(ing: Ingredient, month: number): boolean {
  return ing.yearRound || ing.months.includes(month);
}

/**
 * Dish ids compromised in a given month: every dish whose seasonal ingredient
 * is out of window. A dish with no seasonal dependency never appears here.
 */
export function dishesOutOfSeason(ings: Ingredient[], month: number): Set<number> {
  const out = new Set<number>();
  for (const ing of ings) {
    if (!inSeason(ing, month)) for (const id of ing.dishes) out.add(id);
  }
  return out;
}

export { DISHES } from "@/data/dishes";
export { FLAVOURS } from "@/data/flavours";
export { EVENTS } from "@/data/events";
export { INGREDIENTS } from "@/data/ingredients";
export { SOURCING } from "@/data/sourcing";
