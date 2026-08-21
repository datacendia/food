/**
 * Menu conflict detection — the interaction engine.
 *
 * The remedies site flagged herb-drug interactions before you brewed the pot.
 * The catering equivalent is three questions you want answered before you send
 * a quote, not on the night:
 *
 *   1. Allergen  — is there a guest this menu cannot feed at all?
 *   2. Kitchen   — can one kitchen and one crew actually produce this at once?
 *   3. Margin    — does the blended food cost still clear the target?
 *
 * None of these are visible from a list of dish names, which is exactly why
 * they get missed.
 */

import type { Dish, Category, ServiceTier } from "./dishes";
import { CATEGORY_LABEL } from "./dishes";
import { TIERS, FOOD_COST_TARGET } from "./pricing";

export type ConflictKind = "allergen" | "kitchen" | "margin";
export type Severity = "warning" | "blocker";

export interface Conflict {
  kind: ConflictKind;
  severity: Severity;
  title: string;
  detail: string;
  /** Dish ids implicated, so the UI can point at them. */
  dishes: number[];
}

/**
 * Capacity of one kitchen and one crew during a single service. These are
 * deliberately conservative: exceeding them does not make the event
 * impossible, it makes it late.
 */
export const CAPACITY = {
  /** Distinct dishes needing the fryer at once. */
  fryer: 2,
  /** Oven dishes in one service. Different dishes want different temperatures. */
  oven: 4,
  /** Live stations, each of which needs a body standing at it. */
  liveStation: 2,
  /** Griddle items during a single seating. */
  griddle: 3
} as const;

const ALLERGEN_LABEL: Record<string, string> = {
  gluten: "gluten",
  dairy: "dairy",
  egg: "egg",
  fish: "fish",
  shellfish: "shellfish",
  nuts: "nuts",
  pork: "pork",
  alcohol: "alcohol"
};

/**
 * A course with no safe option. If every dish in a category carries the same
 * allergen, a guest with that allergy gets nothing for that course.
 *
 * Only meaningful once a course has at least two dishes — a single-dish course
 * is a choice the host already made.
 */
function allergenConflicts(dishes: Dish[]): Conflict[] {
  const out: Conflict[] = [];
  const byCategory = new Map<Category, Dish[]>();
  for (const d of dishes) {
    const list = byCategory.get(d.category) ?? [];
    list.push(d);
    byCategory.set(d.category, list);
  }

  for (const [cat, list] of byCategory) {
    if (list.length < 2) continue;
    for (const allergen of Object.keys(ALLERGEN_LABEL)) {
      if (list.every((d) => d.allergens.includes(allergen))) {
        out.push({
          kind: "allergen",
          severity: "blocker",
          title: `No ${ALLERGEN_LABEL[allergen]}-free option in ${CATEGORY_LABEL[cat]}`,
          detail:
            `All ${list.length} dishes in this course contain ${ALLERGEN_LABEL[allergen]}. ` +
            `A guest avoiding it has nothing to eat at this course.`,
          dishes: list.map((d) => d.id)
        });
      }
    }
  }
  return out;
}

/** Equipment contention during one service. */
function kitchenConflicts(dishes: Dish[]): Conflict[] {
  const out: Conflict[] = [];
  const using = (kit: string) => dishes.filter((d) => d.equipment.includes(kit));

  const fryer = using("fryer");
  if (fryer.length > CAPACITY.fryer) {
    out.push({
      kind: "kitchen",
      severity: "warning",
      title: `${fryer.length} fried dishes, one fryer`,
      detail:
        `Frying is sequential and oil temperature drops between batches. ` +
        `Above ${CAPACITY.fryer} fried items the last one reaches the guest cold.`,
      dishes: fryer.map((d) => d.id)
    });
  }

  const oven = using("oven");
  if (oven.length > CAPACITY.oven) {
    out.push({
      kind: "kitchen",
      severity: "warning",
      title: `${oven.length} oven dishes in one service`,
      detail:
        `Pastry, sponge and roasting all want different temperatures. ` +
        `Above ${CAPACITY.oven} you are either staging or compromising one of them.`,
      dishes: oven.map((d) => d.id)
    });
  }

  const live = dishes.filter((d) => d.format === "live-station");
  if (live.length > CAPACITY.liveStation) {
    out.push({
      kind: "kitchen",
      severity: "blocker",
      title: `${live.length} live stations`,
      detail:
        `Each live station needs someone standing at it for the whole service. ` +
        `Above ${CAPACITY.liveStation} this is a staffing cost the quote does not carry.`,
      dishes: live.map((d) => d.id)
    });
  }

  const griddle = using("griddle");
  if (griddle.length > CAPACITY.griddle) {
    out.push({
      kind: "kitchen",
      severity: "warning",
      title: `${griddle.length} griddle items`,
      detail: `One plancha, cooked to order. Above ${CAPACITY.griddle} the queue is the problem.`,
      dishes: griddle.map((d) => d.id)
    });
  }

  return out;
}

/** Blended food cost across the selection, weighted the way the quote bills it. */
export function blendedFoodCost(dishes: Dish[], tier: ServiceTier): number {
  if (dishes.length === 0) return 0;
  const rules = TIERS[tier];
  const canapes = dishes.filter((d) => d.category === "canape");
  const plates = dishes.filter((d) => d.category !== "canape");

  let cost = 0;
  let value = 0;
  if (canapes.length > 0) {
    const avgCost = canapes.reduce((s, d) => s + d.cost, 0) / canapes.length;
    const avgPrice = canapes.reduce((s, d) => s + d.price, 0) / canapes.length;
    cost += avgCost * rules.bitesPerGuest;
    value += avgPrice * rules.bitesPerGuest;
  }
  for (const d of plates) {
    cost += d.cost;
    value += d.price;
  }
  return value > 0 ? cost / value : 0;
}

function marginConflicts(dishes: Dish[], tier: ServiceTier): Conflict[] {
  if (dishes.length === 0) return [];
  const blended = blendedFoodCost(dishes, tier);
  if (blended <= FOOD_COST_TARGET.max) return [];

  const worst = [...dishes]
    .sort((a, b) => b.cost / b.price - a.cost / a.price)
    .slice(0, 3);

  return [
    {
      kind: "margin",
      severity: "warning",
      title: `Blended food cost ${(blended * 100).toFixed(1)}%`,
      detail:
        `Above the ${(FOOD_COST_TARGET.max * 100).toFixed(0)}% ceiling. ` +
        `The heaviest items are ${worst.map((d) => d.name).join(", ")}. ` +
        `Swap one out or lift the price.`,
      dishes: worst.map((d) => d.id)
    }
  ];
}

/** Every conflict in one selection, blockers first. */
export function findConflicts(dishes: Dish[], tier: ServiceTier): Conflict[] {
  const all = [
    ...allergenConflicts(dishes),
    ...kitchenConflicts(dishes),
    ...marginConflicts(dishes, tier)
  ];
  return all.sort((a, b) =>
    a.severity === b.severity ? 0 : a.severity === "blocker" ? -1 : 1
  );
}
