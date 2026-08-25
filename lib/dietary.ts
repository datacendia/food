/**
 * Who can eat what.
 *
 * The old allergen tags were derived from a dish's marketing text - the name,
 * the fusion line, the "key local ingredients" column. That is a description
 * written to sell, and reading allergens out of it is how somebody gets hurt.
 *
 * These are derived from the recipe's actual ingredient lines instead: 1,140
 * of them, each already priced, so the same list that buys the food declares
 * what is in it.
 *
 * THIS IS STILL NOT A LEGAL ALLERGEN AUDIT. It is as good as a derived answer
 * gets, and it is good enough to plan a menu and to know which dishes need
 * checking. Before anyone is fed, a human confirms it against the actual
 * products bought - brands change, "may contain" is not in any recipe, and
 * cross-contamination happens in the kitchen, not in the data.
 */

import {
  INGREDIENT_ATTRS, PLANT_PLAIN, HARD_TEXTURE_DISHES, NOT_FOR_CHILDREN,
  HIGH_FODMAP, HIGH_CARB
} from "@/data/ingredient-attributes";
import { canonicalIngredient } from "./ingredient-key";
import { SUB_RECIPE_OF } from "@/data/prices";
import { RECIPES } from "@/data/recipes";
import type { Dish, Recipe } from "./dishes";
import type { Allergen } from "@/data/allergens";

// The vocabulary itself lives in data/allergens.ts, so the standalone build can
// load the same list this file checks against. Re-exported here because this is
// where every caller already looks for it.
export { ALLERGENS, ALLERGEN_LABEL } from "@/data/allergens";
export type { Allergen } from "@/data/allergens";

/**
 * Diets the app can answer for. Each is a question a real guest asks, not a
 * marketing label.
 */
export const DIETS = [
  "vegetarian", "vegan", "pescatarian", "gluten-free", "dairy-free",
  "nut-free", "no-pork", "no-alcohol", "halal-ingredients", "kosher-ingredients",
  "low-fodmap", "lower-carb", "lower-sugar", "kid-friendly", "soft-texture"
] as const;
export type Diet = (typeof DIETS)[number];

export const DIET_LABEL: Record<Diet, string> = {
  vegetarian: "Vegetarian",
  vegan: "Vegan",
  pescatarian: "Pescatarian",
  "gluten-free": "Coeliac / gluten-free",
  "dairy-free": "Lactose / dairy-free",
  "nut-free": "Nut-free",
  "no-pork": "No pork",
  "no-alcohol": "No alcohol",
  "halal-ingredients": "Halal — ingredients only",
  "kosher-ingredients": "Kosher — ingredients only",
  "low-fodmap": "Low FODMAP",
  "lower-carb": "Lower carb / keto-leaning",
  "lower-sugar": "Lower sugar",
  "kid-friendly": "Children",
  "soft-texture": "Soft texture"
};

export const DIET_NOTE: Record<Diet, string> = {
  vegetarian: "No meat, fish or shellfish. Dairy and eggs are fine.",
  vegan: "No animal product at all, including honey, gelatine and dairy.",
  pescatarian: "Fish and shellfish are fine; no meat.",
  "gluten-free":
    "For coeliac disease, not a preference. Oats are excluded here unless certified — most are milled alongside wheat.",
  "dairy-free":
    "Covers lactose intolerance and milk allergy. Butter and cream are dairy; so is the manjar blanco in half the desserts.",
  "nut-free": "Tree nuts and peanuts. Ask the venue whether other guests are bringing any.",
  "no-pork": "Pork, bacon, morcilla, lard. Often asked with no-alcohol.",
  "no-alcohol": "Cooking burns off less than people think. Treat any alcohol in a recipe as present.",
  "lower-sugar":
    "A guide for guests managing blood sugar, not a medical claim. It flags dishes built on added sugar — it does not count carbohydrate.",
  "halal-ingredients":
    "No pork and no alcohol — the half of halal that is about ingredients. It says NOTHING about whether the meat was slaughtered halal, which is a sourcing question and the part that actually matters. Do not describe a dish as halal on this basis alone.",
  "kosher-ingredients":
    "No pork, no shellfish, and no meat and dairy in the same dish. That is the ingredient half only. Kosher also requires certified supply and a supervised kitchen, neither of which this app can see.",
  "low-fodmap":
    "No onion, garlic, wheat, legumes or the high-FODMAP fruits. The list is short because the aderezo under half the Peruvian dishes is onion and garlic. Portion size matters and this cannot model it — a shortlist to discuss, not a clinical tool.",
  "lower-carb":
    "Not built on flour, sugar, rice, potato or oats. A filter, not a nutrition panel: it flags dishes whose structure is carbohydrate, and does not count grams.",
  "kid-friendly": "Nothing hot, nothing boozy, nothing that needs a knife or hides a bone.",
  "soft-texture":
    "For guests who cannot chew easily — after surgery, with dysphagia, or elderly. Excludes hard, crisp and chewy items. Not a substitute for an IDDSI assessment."
};

export interface IngredientAttrs {
  allergens?: Allergen[];
  /** Default true. False means it is meat, fish or shellfish. */
  vegetarian?: boolean;
  /** Default follows vegetarian. False on honey, gelatine, dairy, eggs. */
  vegan?: boolean;
  /** Carries added or free sugar in quantity. */
  sugary?: boolean;
  /** Chilli heat. */
  hot?: boolean;
  /** Hard, crisp or chewy: excluded from a soft-texture menu. */
  hardTexture?: boolean;
}

const PLAIN = new Set<string>(PLANT_PLAIN);
const FODMAP = new Set<string>(HIGH_FODMAP);
const CARB = new Set<string>(HIGH_CARB);

/** True when an ingredient has been classified. Unknown is an error, never "fine". */
export function isClassified(key: string): boolean {
  return key in INGREDIENT_ATTRS || PLAIN.has(key);
}

export interface DishDietary {
  dishId: number;
  allergens: Allergen[];
  /** Diets this dish is suitable for, as written. */
  suits: Diet[];
  /** Ingredients that put it outside a diet, so a swap can be considered. */
  because: Record<string, string[]>;
  /** Ingredients no one has classified. Non-empty means do not trust the rest. */
  unknown: string[];
}

function attrsFor(key: string): IngredientAttrs | null {
  if (key in INGREDIENT_ATTRS) return INGREDIENT_ATTRS[key];
  if (PLAIN.has(key)) return {};
  return null;
}

/**
 * Walk a recipe's ingredients - including any sub-recipe it leans on, or the
 * Nordic Cure Box would declare nothing.
 */
function collect(recipe: Recipe, depth = 0, seen = new Set<number>()): {
  keys: string[];
  unknown: string[];
} {
  const keys: string[] = [];
  const unknown: string[] = [];
  if (depth > 3 || seen.has(recipe.dishId)) return { keys, unknown };
  seen.add(recipe.dishId);

  for (const ing of recipe.ingredients) {
    const key = canonicalIngredient(ing.item);
    const subId = SUB_RECIPE_OF[key];
    if (subId !== undefined) {
      const sub = RECIPES.find((r) => r.dishId === subId);
      if (sub) {
        const inner = collect(sub, depth + 1, seen);
        keys.push(...inner.keys);
        unknown.push(...inner.unknown);
        continue;
      }
    }
    if (attrsFor(key) === null) unknown.push(key);
    else keys.push(key);
  }
  return { keys, unknown };
}

export function dishDietary(recipe: Recipe): DishDietary {
  const { keys, unknown } = collect(recipe);
  const allergens = new Set<Allergen>();
  const because: Record<string, string[]> = {};
  function blame(diet: Diet, key: string): void {
    const list = because[diet] || (because[diet] = []);
    if (!list.includes(key)) list.push(key);
  }

  let vegetarian = true, vegan = true, hasFish = false, hasMeat = false;

  for (const key of keys) {
    const a = attrsFor(key)!;
    for (const al of a.allergens ?? []) allergens.add(al);

    const isVeg = a.vegetarian ?? true;
    const isVegan = a.vegan ?? isVeg;
    if (!isVeg) {
      vegetarian = false;
      blame("vegetarian", key);
      const al = a.allergens ?? [];
      if (al.includes("fish") || al.includes("crustaceans") || al.includes("molluscs")) hasFish = true;
      else hasMeat = true;
    }
    if (!isVegan) { vegan = false; blame("vegan", key); }
    if (a.allergens?.includes("gluten")) blame("gluten-free", key);
    if (a.allergens?.includes("milk")) blame("dairy-free", key);
    if (a.allergens?.includes("nuts") || a.allergens?.includes("peanuts")) blame("nut-free", key);
    if (a.allergens?.includes("pork")) blame("no-pork", key);
    if (a.allergens?.includes("alcohol")) blame("no-alcohol", key);
    if (a.sugary) blame("lower-sugar", key);
    if (a.hot) { blame("kid-friendly", key); }
    if (a.hardTexture) blame("soft-texture", key);
  }

  // Texture and child-suitability are properties of the finished dish, which
  // no ingredient list can tell you. An oatcake is hard; oatmeal is not.
  // Kosher forbids meat and dairy in one dish, which is a property of the
  // combination rather than of any single ingredient.
  const hasMeatFlesh = keys.some((k) => {
    const a = attrsFor(k);
    if (!a || (a.vegetarian ?? true)) return false;
    const al = a.allergens ?? [];
    return !al.includes("fish") && !al.includes("crustaceans") && !al.includes("molluscs");
  });
  const hasDairy = keys.some((k) => (attrsFor(k)?.allergens ?? []).includes("milk"));
  if (hasMeatFlesh && hasDairy) blame("kosher-ingredients", "meat and dairy in one dish");
  for (const k of keys) {
    const al = attrsFor(k)?.allergens ?? [];
    if (al.includes("pork")) { blame("halal-ingredients", k); blame("kosher-ingredients", k); }
    if (al.includes("alcohol")) blame("halal-ingredients", k);
    if (al.includes("crustaceans") || al.includes("molluscs")) blame("kosher-ingredients", k);
    if (FODMAP.has(k)) blame("low-fodmap", k);
    if (CARB.has(k)) blame("lower-carb", k);
  }

  if (HARD_TEXTURE_DISHES.includes(recipe.dishId)) {
    blame("soft-texture", "the dish is hard or crisp as served");
  }
  if (NOT_FOR_CHILDREN.includes(recipe.dishId)) {
    blame("kid-friendly", "skewered, boned or offal");
  }

  // Children: no heat, no alcohol, and nothing they have to fight.
  const boozy = because["no-alcohol"];
  if (boozy) for (const k of boozy) blame("kid-friendly", k);

  const suits: Diet[] = [];
  const ok = (d: Diet) => !because[d];
  if (vegetarian) suits.push("vegetarian");
  if (vegan && vegetarian) suits.push("vegan");
  if (!hasMeat) suits.push("pescatarian");
  if (ok("gluten-free")) suits.push("gluten-free");
  if (ok("halal-ingredients")) suits.push("halal-ingredients");
  if (ok("kosher-ingredients")) suits.push("kosher-ingredients");
  if (ok("low-fodmap")) suits.push("low-fodmap");
  if (ok("lower-carb")) suits.push("lower-carb");
  if (ok("dairy-free")) suits.push("dairy-free");
  if (ok("nut-free")) suits.push("nut-free");
  if (ok("no-pork")) suits.push("no-pork");
  if (ok("no-alcohol")) suits.push("no-alcohol");
  if (ok("lower-sugar")) suits.push("lower-sugar");
  if (ok("kid-friendly")) suits.push("kid-friendly");
  if (ok("soft-texture")) suits.push("soft-texture");

  // An unclassified ingredient invalidates the answer rather than shading it.
  return {
    dishId: recipe.dishId,
    allergens: [...allergens].sort(),
    suits: unknown.length ? [] : suits,
    because,
    unknown: [...new Set(unknown)]
  };
}

/** Every dish's dietary profile, computed once. */
export function dietaryIndex(recipes: Recipe[]): Map<number, DishDietary> {
  return new Map(recipes.map((r) => [r.dishId, dishDietary(r)]));
}

/** Dishes that suit every diet in the list. */
export function dishesFor(
  dishes: Dish[],
  index: Map<number, DishDietary>,
  diets: Diet[]
): Dish[] {
  if (!diets.length) return dishes;
  return dishes.filter((d) => {
    const p = index.get(d.id);
    return p ? diets.every((x) => p.suits.includes(x)) : false;
  });
}
