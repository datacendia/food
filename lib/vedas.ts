/**
 * Turning a legal closed season into something the quote refuses to ignore.
 *
 * The seasonal tab already knew when produce was out of window. A veda is a
 * different kind of fact: not "this will be expensive and poor", but "selling
 * this is an offence". The two should never render the same way, so this is a
 * blocker and not a warning.
 */
import type { Dish, Recipe } from "./dishes";
import { canonicalIngredient } from "./ingredient-key";

export interface Veda {
  id: string;
  species: string;
  /** Months, 1-12, when sale is closed. */
  closed: number[];
  /** Canonical ingredient keys this veda covers. */
  ingredientKeys: string[];
  note: string;
  /** True only once somebody has checked the current resolución ministerial. */
  verified: boolean;
}

export interface VedaHit {
  veda: Veda;
  dish: Dish;
  ingredient: string;
}

/** Which dishes use a species that is closed in this month. */
export function vedaHits(
  dishes: Dish[],
  recipes: Recipe[],
  vedas: Veda[],
  month: number
): VedaHit[] {
  const byId = new Map(recipes.map((r) => [r.dishId, r]));
  const hits: VedaHit[] = [];

  for (const dish of dishes) {
    const recipe = byId.get(dish.id);
    if (!recipe) continue;
    const keys = recipe.ingredients.map((i) => canonicalIngredient(i.item));
    for (const veda of vedas) {
      if (!veda.closed.includes(month)) continue;
      const found = veda.ingredientKeys.find((k) => keys.includes(k));
      if (found) hits.push({ veda, dish, ingredient: found });
    }
  }
  return hits;
}

/** Every dish that cannot legally be sold in this month. */
export function illegalInMonth(
  dishes: Dish[],
  recipes: Recipe[],
  vedas: Veda[],
  month: number
): Set<number> {
  return new Set(vedaHits(dishes, recipes, vedas, month).map((h) => h.dish.id));
}

/** The months a given dish cannot be sold at all. */
export function closedMonthsFor(
  dish: Dish,
  recipes: Recipe[],
  vedas: Veda[]
): { month: number; veda: Veda }[] {
  const out: { month: number; veda: Veda }[] = [];
  for (let m = 1; m <= 12; m++) {
    for (const h of vedaHits([dish], recipes, vedas, m)) out.push({ month: m, veda: h.veda });
  }
  return out;
}

/**
 * The sentence that goes on a quote. Deliberately blunt: this is the one
 * message in the app that is about the law rather than about the food.
 */
export function vedaBlockerText(hits: VedaHit[], monthName: string): string[] {
  const byVeda = new Map<string, VedaHit[]>();
  for (const h of hits) {
    const list = byVeda.get(h.veda.id) || [];
    list.push(h);
    byVeda.set(h.veda.id, list);
  }
  return [...byVeda.values()].map((group) => {
    const v = group[0].veda;
    const names = group.map((g) => g.dish.name).join(", ");
    return (
      `${v.species} is in veda in ${monthName}. Selling ${names} that month is an offence, ` +
      `not a risk. ${v.note} Dates move every year — confirm the current resolución ministerial ` +
      `before you quote.`
    );
  });
}
