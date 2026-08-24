/**
 * Scaling recipes to a real event, and turning the result into a shop.
 *
 * A recipe yields what it yields - 40 portions, 120 shards. An event has a
 * head count that will not match. This scales each recipe to what the event
 * needs, then adds the scaled lines together across the whole menu so
 * "butter" appears once with a total, not eleven times.
 */
import { canonicalIngredient } from "./ingredient-key";
import { parseQty, convert, type Base } from "./units";
import { costLine, portionsFromYield } from "./costing";
import { TIERS } from "./pricing";
import type { Dish, Recipe, ServiceTier } from "./dishes";

export interface ScaledRecipe {
  dishId: number;
  name: string;
  /** Portions the event needs of this dish. */
  needed: number;
  /** Recipe batches to cook. Always rounded up - you cannot cook 1.4 batches. */
  batches: number;
  /** Portions those batches actually produce. */
  produced: number;
  factor: number;
  lines: { qty: string; item: string; note?: string }[];
  foodCost: number;
}

export interface ShoppingLine {
  key: string;
  /** Summed amount in the base the ingredient is measured in. */
  amount: number;
  base: Base;
  display: string;
  soles: number;
  /** Which dishes want it, so a cut to the menu can be traced to the shop. */
  dishes: string[];
}

/**
 * How many portions of one dish an event needs.
 *
 * Canapes are counted in bites per guest, spread across whichever canapes
 * are on the menu - the same rule lib/pricing.ts prices by, so the shopping
 * list and the quote cannot disagree about how much food is being made.
 */
export function portionsNeeded(dish: Dish, menu: Dish[], guests: number, tier: ServiceTier): number {
  if (dish.category !== "canape") return guests;
  const canapes = menu.filter((d) => d.category === "canape").length || 1;
  return Math.ceil((guests * TIERS[tier].bitesPerGuest) / canapes);
}

/** Multiply a written quantity by a factor, keeping it readable. */
export function scaleQty(qty: string, factor: number): string {
  const m = parseQty(qty);
  if (!m) return qty;

  // Scale the number as written, not the converted one: "6 kg" doubled is
  // "12 kg", not "12000 kg".
  const parts = /^\s*([\d./]+)\s*(.*)$/.exec(qty);
  if (!parts) return qty;
  const unit = parts[2].trim();
  const written = parts[1].includes("/")
    ? Number(parts[1].split("/")[0]) / Number(parts[1].split("/")[1])
    : Number(parts[1]);
  if (!Number.isFinite(written) || written <= 0) return qty;

  const scaled = written * factor;

  // Counts cannot be fractional - you buy four eggs, not 3.6.
  if (m.base === "each" && !unit) return String(Math.ceil(scaled));
  if (m.base === "bunch" || m.base === "each") {
    return `${Math.ceil(scaled)}${unit ? " " + unit : ""}`;
  }

  const rounded = scaled >= 100 ? Math.round(scaled) : Math.round(scaled * 10) / 10;
  return unit ? `${rounded} ${unit}` : String(rounded);
}

export function scaleRecipe(
  recipe: Recipe,
  dish: Dish,
  needed: number
): ScaledRecipe {
  const yieldPortions = portionsFromYield(recipe.yields) ?? 1;
  // You cook whole batches. Half a batch of shortbread is a different biscuit.
  const batches = Math.max(1, Math.ceil(needed / yieldPortions));
  const factor = batches;

  const lines = recipe.ingredients.map((i) => ({
    qty: scaleQty(i.qty, factor),
    item: i.item,
    note: i.note
  }));

  const foodCost = lines
    .map((l) => costLine(l.qty, l.item))
    .filter((l) => l.status === "costed" && !l.nonFood)
    .reduce((s, l) => s + l.soles, 0);

  return {
    dishId: recipe.dishId,
    name: dish.name,
    needed,
    batches,
    produced: batches * yieldPortions,
    factor,
    lines,
    foodCost: Math.round(foodCost * 100) / 100
  };
}

/** Every scaled line added up, one row per ingredient. */
export function shoppingList(scaled: ScaledRecipe[]): ShoppingLine[] {
  const rows = new Map<string, ShoppingLine>();

  for (const s of scaled) {
    for (const l of s.lines) {
      const key = canonicalIngredient(l.item);
      const m = parseQty(l.qty);
      if (!m) continue;
      const cost = costLine(l.qty, l.item);

      const existing = rows.get(key);
      if (!existing) {
        rows.set(key, {
          key,
          amount: m.amount,
          base: m.base,
          display: "",
          soles: cost.status === "costed" ? cost.soles : 0,
          dishes: [s.name]
        });
        continue;
      }
      // Grams and millilitres add together; a count never joins a weight.
      const asBase = convert(m, existing.base);
      if (asBase === null) continue;
      existing.amount += asBase;
      existing.soles += cost.status === "costed" ? cost.soles : 0;
      if (!existing.dishes.includes(s.name)) existing.dishes.push(s.name);
    }
  }

  for (const r of rows.values()) {
    r.display = displayAmount(r.amount, r.base);
    r.soles = Math.round(r.soles * 100) / 100;
  }

  return [...rows.values()].sort((a, b) => b.soles - a.soles);
}

/** 6000 g is 6 kg on a shopping list, and 6000 g on nobody's. */
function displayAmount(amount: number, base: Base): string {
  if (base === "g") {
    return amount >= 1000 ? `${round(amount / 1000)} kg` : `${round(amount)} g`;
  }
  if (base === "ml") {
    return amount >= 1000 ? `${round(amount / 1000)} L` : `${round(amount)} ml`;
  }
  if (base === "bunch") return `${Math.ceil(amount)} bunch`;
  return String(Math.ceil(amount));
}

function round(n: number): number {
  return n >= 100 ? Math.round(n) : Math.round(n * 10) / 10;
}
