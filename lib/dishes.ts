/** Types for the Aye Si Cena dish matrix. */

export type Category = "canape" | "main" | "side" | "sweet" | "drink";

export type ServiceTier = "scran" | "buffet" | "plated";

export type Tag =
  | "vegetarian"
  | "vegan"
  | "seafood"
  | "alcohol"
  | "make-ahead"
  | "breakfast"
  | "signature";

/** The axes of the Flavour Compass. */
export type Flavour = "sweet" | "savoury" | "rich" | "tart" | "smoky" | "spiced" | "fresh";

export const FLAVOUR_AXES: Flavour[] = [
  "sweet",
  "savoury",
  "rich",
  "tart",
  "smoky",
  "spiced",
  "fresh"
];

export interface Dish {
  id: number;
  name: string;
  /** The British or Scottish original the dish descends from. */
  uk: string;
  /** The Peruvian ingredient or technique swapped in. */
  pe: string;
  blurb: string;
  /** Food cost per unit or portion, in soles. */
  cost: number;
  /** Menu value per unit or portion, in soles, excluding IGV. */
  price: number;
  category: Category;
  /** Primary supplier for the defining ingredient. */
  source: string;
  tags: Tag[];
  tiers: ServiceTier[];
}

/** A dish with its flavour axes attached. */
export interface DishWithFlavour extends Dish {
  flavours: Flavour[];
}

export interface EventFilter {
  tier?: ServiceTier;
  categories?: Category[];
  anyTags?: Tag[];
  excludeTags?: Tag[];
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
  side: "Sides, salads & breads",
  sweet: "Bakery & desserts",
  drink: "Signature drinks"
};

/**
 * A dish matches an event when it satisfies every clause the filter sets.
 * Absent clauses are not constraints.
 */
export function matchesEvent(dish: Dish, filter: EventFilter): boolean {
  if (filter.tier && !dish.tiers.includes(filter.tier)) return false;
  if (filter.categories && !filter.categories.includes(dish.category)) return false;
  if (filter.anyTags && !filter.anyTags.some((t) => dish.tags.includes(t))) return false;
  if (filter.excludeTags && filter.excludeTags.some((t) => dish.tags.includes(t))) return false;
  return true;
}

export { DISHES } from "@/data/dishes";
export { FLAVOURS } from "@/data/flavours";
export { EVENTS } from "@/data/events";
