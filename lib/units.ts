/**
 * Turning a recipe quantity into something you can multiply by a price.
 *
 * Recipe quantities are written for a cook - "6 kg", "3 tbsp", "1 bunch", "8".
 * Costing needs them in one of four bases: mass in grams, volume in
 * millilitres, count, or bunch. Nothing here guesses: a quantity it cannot
 * read comes back as null and the caller reports it rather than costing it
 * as zero.
 */

export type Base = "g" | "ml" | "each" | "bunch";

export interface Measure {
  amount: number;
  base: Base;
}

/**
 * Spoons are a volume, but most things measured in spoons here are sold by
 * weight (pastes, spices). Callers pass the base the price is quoted in and
 * we convert into it; water-like density is close enough for a paste at
 * these quantities, and the error is pennies on a batch.
 */
const SPOON_ML = { tbsp: 15, tsp: 5 } as const;

const MASS: Record<string, number> = { g: 1, gram: 1, grams: 1, kg: 1000, kilo: 1000 };
const VOLUME: Record<string, number> = {
  ml: 1, l: 1000, litre: 1000, litres: 1000, liter: 1000, liters: 1000
};
/** Things sold as a unit however they are written. */
const EACH_WORDS = new Set([
  "", "batch", "quantity", "pack", "tin", "loaf", "sheet", "sheets",
  "clove", "cloves", "cob", "cobs", "stick", "sticks", "pod", "pods", "leaf", "leaves"
]);
const BUNCH_WORDS = new Set(["bunch", "bunches", "handful", "handfuls"]);

/** "1/2" and "2.5" both need to work; "a" and "some" deliberately do not. */
function parseAmount(raw: string): number | null {
  const t = raw.trim();
  if (/^\d+\s*\/\s*\d+$/.test(t)) {
    const [n, d] = t.split("/").map((x) => Number(x.trim()));
    return d === 0 ? null : n / d;
  }
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}

/**
 * Read a recipe quantity string. Returns null when it cannot be read, which
 * is the honest answer for "to taste" or "a splash".
 */
export function parseQty(qty: string): Measure | null {
  const m = /^\s*([\d./]+)\s*(.*)$/.exec(qty ?? "");
  if (!m) return null;
  const amount = parseAmount(m[1]);
  if (amount === null) return null;

  const unit = m[2].trim().toLowerCase().replace(/\.$/, "");
  if (unit in MASS) return { amount: amount * MASS[unit], base: "g" };
  if (unit in VOLUME) return { amount: amount * VOLUME[unit], base: "ml" };
  if (unit === "tbsp" || unit === "tsp") {
    return { amount: amount * SPOON_ML[unit], base: "ml" };
  }
  if (BUNCH_WORDS.has(unit)) return { amount, base: "bunch" };
  if (EACH_WORDS.has(unit)) return { amount, base: "each" };
  return null;
}

/**
 * Convert a measure into the base a price is quoted in. Mass and volume are
 * treated as interchangeable at 1 g per ml - true for water, near enough for
 * milk, cream, oil and pastes at recipe quantities, and never applied to
 * counts or bunches.
 */
export function convert(measure: Measure, target: Base): number | null {
  if (measure.base === target) return measure.amount;
  const fluid = (b: Base) => b === "g" || b === "ml";
  if (fluid(measure.base) && fluid(target)) return measure.amount;
  return null;
}
