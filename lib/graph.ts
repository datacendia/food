/**
 * Ingredient graph — the Graph port.
 *
 * The remedies site orbited herbs around concerns, sizing each by how many
 * concerns it bridged. The catering question is the same shape and more
 * useful: which ingredients unlock the most menu, and which dishes are the
 * sole consumer of something, because those are the wastage liabilities.
 */

import type { Dish } from "./dishes";

export interface IngredientNode {
  /** Normalised ingredient name. */
  name: string;
  /** Dish ids that use it. */
  dishes: number[];
  /** Menu value unlocked, in soles. Buying decisions follow money, not counts. */
  value: number;
}

/** Ingredient strings in the sheet are comma-separated free text. */
function splitIngredients(raw: string): string[] {
  return raw
    .split(/[,;]/)
    .map((s) => s.trim().toLowerCase())
    .filter((s) => s.length > 2)
    // Drop parenthetical asides: "oats (jumbo)" and "oats" are one line item.
    .map((s) => s.replace(/\s*\([^)]*\)/g, "").trim())
    .filter(Boolean);
}

/**
 * Reads names and key ingredients, and a price only if the caller has one.
 *
 * `value` is the menu value an ingredient unlocks - the sum of the prices of
 * the dishes that use it. That is a price by aggregation, so a caller holding
 * price-stripped dishes gets nodes ranked by how many dishes use them and
 * nothing more, which is the right answer for a kitchen and no answer at all
 * about money.
 */
export function buildIngredientGraph(
  dishes: (Pick<Dish, "id" | "name" | "keyIngredients"> & { price?: number })[]
): IngredientNode[] {
  const map = new Map<string, IngredientNode>();
  for (const d of dishes) {
    for (const name of new Set(splitIngredients(d.keyIngredients))) {
      const node = map.get(name) ?? { name, dishes: [], value: 0 };
      node.dishes.push(d.id);
      node.value += d.price ?? 0;
      map.set(name, node);
    }
  }
  return [...map.values()].sort(
    (a, b) => b.dishes.length - a.dishes.length || b.value - a.value
  );
}

/**
 * Dishes that are the only consumer of at least one ingredient. Cooking one of
 * these means buying something nothing else on the menu will use up.
 */
export function orphanDishes<D extends Pick<Dish, "id">>(
  dishes: D[],
  graph: IngredientNode[]
): { dish: D; soleUseOf: string[] }[] {
  const sole = new Map<number, string[]>();
  for (const node of graph) {
    if (node.dishes.length !== 1) continue;
    const id = node.dishes[0];
    sole.set(id, [...(sole.get(id) ?? []), node.name]);
  }
  return dishes
    .filter((d) => sole.has(d.id))
    .map((d) => ({ dish: d, soleUseOf: sole.get(d.id)! }))
    .sort((a, b) => b.soleUseOf.length - a.soleUseOf.length);
}

/** The shopping list: ingredients ranked by how much menu they unlock. */
export function buyList(graph: IngredientNode[], top = 20): IngredientNode[] {
  return graph.slice(0, top);
}
