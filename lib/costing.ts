/**
 * Costing a recipe from its own ingredient list.
 *
 * Until now a dish carried a food cost - S/ 9.00 for the anticuchos - that
 * came from nowhere the app could check. The recipe said "6 kg lamb leg" and
 * the two numbers never met. This module makes them meet: price every line,
 * divide by the yield, and compare the answer to the figure the quote is
 * built on.
 *
 * Where they disagree, the disagreement is the finding. Nothing here silently
 * overwrites the matrix; it reports.
 */
import {
  PRICES, NON_FOOD_PRICES, NON_FOOD,
  SUB_RECIPE_OF, SUB_PREP_PRICES, COMPOUND_ALIAS
} from "@/data/prices";
import { RECIPES } from "@/data/recipes";
import { canonicalIngredient } from "./ingredient-key";
import { parseQty, convert, type Base } from "./units";
import type { Recipe, Dish } from "./dishes";

export interface Price {
  per: "kg" | "L" | "each" | "bunch";
  soles: number;
  /**
   * What one of them weighs, in grams, when the price is per kg or L but a
   * recipe counts them - "3 onions" against a per-kilo price - or the other
   * way round. Without this the line cannot be costed and is reported.
   */
  unitGrams?: number;
  note?: string;
}

/** The base a price's unit is quoted against, and how many of it you buy. */
const PER_BASE: Record<Price["per"], { base: Base; size: number }> = {
  kg: { base: "g", size: 1000 },
  L: { base: "ml", size: 1000 },
  each: { base: "each", size: 1 },
  bunch: { base: "bunch", size: 1 }
};

export type LineStatus = "costed" | "unpriced" | "unreadable" | "sub-preparation";

export interface CostedLine {
  qty: string;
  item: string;
  key: string;
  status: LineStatus;
  soles: number;
  /** True for skewers and cocktail sticks: real money, but not food cost. */
  nonFood: boolean;
}

export interface RecipeCost {
  dishId: number;
  /** Portions or pieces the recipe yields, read off the yield string. */
  portions: number | null;
  lines: CostedLine[];
  foodTotal: number;
  sundryTotal: number;
  /** Food cost per portion, or null when the yield could not be read. */
  perPortion: number | null;
  /** Lines the price list has no answer for. These are the gaps. */
  unpriced: string[];
  coverage: number;
}

const SUNDRIES = new Set<string>(NON_FOOD);

/**
 * How many portions a batch makes. Yields are written for a cook - "40
 * portions", "3 cakes, 36 portions", "50 bonbons" - so take the last count
 * that is followed by a portion-ish word, else the first number.
 */
export function portionsFromYield(yields: string): number | null {
  const explicit = /(\d+)\s*(portions?|pieces?|servings?|slices?)/i.exec(yields);
  if (explicit) return Number(explicit[1]);
  // "2 cakes, 24 slices" is 24 servings, not 2. Where a yield carries more
  // than one count, the batch serves the larger of them.
  const all = yields.match(/\d+(?:\.\d+)?/g);
  if (!all || !all.length) return null;
  return Math.max(...all.map(Number));
}

/** What one ingredient line costs, or why it could not be costed. */
/**
 * Where prices come from.
 *
 * data/prices.ts is the seed: every figure in it is an unverified estimate, and
 * the whole matrix still says costVerified: false. Once somebody stands at a
 * stall and writes down what they actually paid, that price lives in the
 * database and supersedes the estimate - which is the difference between a
 * market run reaching every device this afternoon and waiting for a rebuild.
 *
 * Passed in rather than reached for, so this module stays pure and testable and
 * two requests can never see each other's prices.
 */
export interface PriceBook {
  food: Record<string, Price>;
  sub: Record<string, Price>;
  nonFood: Record<string, Price>;
}

/** The estimates as shipped. The default, and the fallback for any key not verified. */
export const ESTIMATES: PriceBook = {
  food: PRICES,
  sub: SUB_PREP_PRICES,
  nonFood: NON_FOOD_PRICES
};

export function costLine(
  qty: string, item: string, depth = 0, book: PriceBook = ESTIMATES
): CostedLine {
  const raw = canonicalIngredient(item);
  const key = COMPOUND_ALIAS[raw] ?? raw;
  const base: CostedLine = { qty, item, key, status: "costed", soles: 0, nonFood: false };

  // A sub-preparation is priced through its own recipe where it has one, so
  // a dish assembled from other dishes carries their cost rather than none.
  const subId = SUB_RECIPE_OF[raw];
  if (subId !== undefined) {
    const soles = costSubPreparation(subId, qty, depth, book);
    return soles === null
      ? { ...base, status: "sub-preparation" }
      : { ...base, status: "costed", soles };
  }

  const nonFood = SUNDRIES.has(key);
  const price = nonFood ? book.nonFood[key] : (book.food[key] ?? book.sub[key]);
  if (!price) return { ...base, status: "unpriced", nonFood };

  const measure = parseQty(qty);
  if (!measure) return { ...base, status: "unreadable", nonFood };

  const spec = PER_BASE[price.per];
  let amount = convert(measure, spec.base);

  // A count or a bunch against a weight price, or the reverse. Only possible
  // when the price says what one of them weighs.
  if (amount === null && price.unitGrams) {
    const counted = measure.base === "each" || measure.base === "bunch";
    const wanted = spec.base === "each" || spec.base === "bunch";
    if (counted && !wanted) amount = measure.amount * price.unitGrams;
    else if (!counted && wanted) amount = measure.amount / price.unitGrams;
  }
  if (amount === null) return { ...base, status: "unreadable", nonFood };

  return { ...base, nonFood, soles: (amount / spec.size) * price.soles };
}

export function costRecipe(
  recipe: Recipe, depth = 0, book: PriceBook = ESTIMATES
): RecipeCost {
  const lines = recipe.ingredients.map((i) => costLine(i.qty, i.item, depth, book));
  const foodTotal = lines
    .filter((l) => l.status === "costed" && !l.nonFood)
    .reduce((s, l) => s + l.soles, 0);
  const sundryTotal = lines
    .filter((l) => l.status === "costed" && l.nonFood)
    .reduce((s, l) => s + l.soles, 0);

  const portions = portionsFromYield(recipe.yields);
  const costable = lines.filter((l) => l.status !== "sub-preparation");
  const costed = costable.filter((l) => l.status === "costed").length;

  return {
    dishId: recipe.dishId,
    portions,
    lines,
    foodTotal: round2(foodTotal),
    sundryTotal: round2(sundryTotal),
    perPortion: portions && portions > 0 ? round2(foodTotal / portions) : null,
    unpriced: lines.filter((l) => l.status === "unpriced").map((l) => l.key),
    coverage: costable.length ? costed / costable.length : 1
  };
}

export interface CostVariance {
  dishId: number;
  name: string;
  /** What the matrix claims, and the quote uses. */
  claimed: number;
  /** What the recipe actually prices out at, per portion. */
  computed: number | null;
  /** computed / claimed. Above 1 means the dish costs more than booked. */
  ratio: number | null;
  coverage: number;
}

/**
 * Compare every recipe's own arithmetic with the cost the matrix asserts.
 *
 * A ratio far from 1 means one of the two is wrong, and which one is a
 * question for a market run, not for this function.
 */
export function costVariance(
  dishes: Dish[], recipes: Recipe[], book: PriceBook = ESTIMATES
): CostVariance[] {
  const byId = new Map(dishes.map((d) => [d.id, d]));
  const out: CostVariance[] = [];
  for (const r of recipes) {
    const dish = byId.get(r.dishId);
    if (!dish) continue;
    const c = costRecipe(r, 0, book);
    out.push({
      dishId: r.dishId,
      name: dish.name,
      claimed: dish.cost,
      computed: c.perPortion,
      ratio: c.perPortion !== null && dish.cost > 0 ? c.perPortion / dish.cost : null,
      coverage: c.coverage
    });
  }
  return out;
}

/**
 * What a quantity of another dish's recipe costs. "1 batch" is the whole
 * recipe; a weight is that share of the batch's yield.
 *
 * Depth-guarded: a sub-preparation that referred back to its own dish would
 * otherwise recurse until the stack gave out.
 */
function costSubPreparation(
  dishId: number, qty: string, depth: number, book: PriceBook = ESTIMATES
): number | null {
  if (depth >= 3) return null;
  const sub = RECIPES.find((r) => r.dishId === dishId);
  if (!sub) return null;
  const cost = costRecipe(sub, depth + 1, book);
  if (cost.foodTotal <= 0) return null;

  const measure = parseQty(qty);
  if (!measure) return null;
  if (measure.base === "each") return cost.foodTotal * measure.amount;   // "1 batch"

  // A weight or volume is a share of the batch. Without a batch weight the
  // honest answer is that we cannot say.
  const batchGrams = batchWeight(sub);
  if (batchGrams === null) return null;
  const grams = convert(measure, "g");
  return grams === null ? null : cost.foodTotal * (grams / batchGrams);
}

/** Total weighable mass a recipe makes, for scaling a part-batch. */
function batchWeight(recipe: Recipe): number | null {
  let g = 0;
  for (const i of recipe.ingredients) {
    const m = parseQty(i.qty);
    if (!m) continue;
    const asGrams = convert(m, "g");
    if (asGrams !== null) g += asGrams;
  }
  return g > 0 ? g : null;
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}
