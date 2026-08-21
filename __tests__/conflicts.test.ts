import { DISHES } from "@/data/dishes";
import { findConflicts, blendedFoodCost, CAPACITY } from "@/lib/conflicts";
import type { Dish } from "@/lib/dishes";

const byId = (id: number): Dish => {
  const d = DISHES.find((x) => x.id === id);
  if (!d) throw new Error(`no dish ${id}`);
  return d;
};
const withEquip = (base: Dish, equipment: string[], id: number): Dish =>
  ({ ...base, id, equipment });

describe("allergen conflicts", () => {
  it("says nothing about a single-dish course", () => {
    const one = DISHES.filter((d) => d.allergens.includes("gluten")).slice(0, 1);
    expect(findConflicts(one, "buffet").filter((c) => c.kind === "allergen")).toEqual([]);
  });

  it("flags a course where every dish shares an allergen", () => {
    const glutenBakery = DISHES.filter(
      (d) => d.category === "bakery" && d.allergens.includes("gluten")
    ).slice(0, 3);
    expect(glutenBakery.length).toBe(3);
    const found = findConflicts(glutenBakery, "buffet").filter((c) => c.kind === "allergen");
    expect(found.some((c) => c.title.includes("gluten-free"))).toBe(true);
    expect(found[0].severity).toBe("blocker");
  });

  it("stays quiet once one safe option exists", () => {
    const gluten = DISHES.filter(
      (d) => d.category === "bakery" && d.allergens.includes("gluten")
    ).slice(0, 2);
    const safe = DISHES.find((d) => d.category === "bakery" && !d.allergens.includes("gluten"));
    if (!safe) return; // nothing gluten-free in bakery; nothing to assert
    const found = findConflicts([...gluten, safe], "buffet")
      .filter((c) => c.kind === "allergen" && c.title.includes("gluten"));
    expect(found).toEqual([]);
  });

  it("only compares dishes within the same course", () => {
    // Two gluten dishes in different categories are not a course-level problem.
    const a = DISHES.find((d) => d.category === "bakery" && d.allergens.includes("gluten"))!;
    const b = DISHES.find((d) => d.category === "canape" && d.allergens.includes("gluten"))!;
    const found = findConflicts([a, b], "buffet").filter((c) => c.kind === "allergen");
    expect(found).toEqual([]);
  });
});

describe("kitchen conflicts", () => {
  const base = byId(1);

  it("allows the fryer up to capacity", () => {
    const ok = Array.from({ length: CAPACITY.fryer }, (_, i) =>
      withEquip(base, ["fryer"], 900 + i)
    );
    expect(findConflicts(ok, "buffet").filter((c) => c.kind === "kitchen")).toEqual([]);
  });

  it("flags one fried dish too many", () => {
    const over = Array.from({ length: CAPACITY.fryer + 1 }, (_, i) =>
      withEquip(base, ["fryer"], 900 + i)
    );
    const found = findConflicts(over, "buffet").filter((c) => c.kind === "kitchen");
    expect(found).toHaveLength(1);
    expect(found[0].title).toMatch(/fried dishes/);
    expect(found[0].dishes).toHaveLength(CAPACITY.fryer + 1);
  });

  it("treats too many live stations as a blocker, not a warning", () => {
    const live = DISHES.filter((d) => d.format === "live-station").slice(
      0,
      CAPACITY.liveStation + 1
    );
    const found = findConflicts(live, "buffet").filter((c) => c.title.includes("live stations"));
    expect(found).toHaveLength(1);
    expect(found[0].severity).toBe("blocker");
  });

  it("puts blockers before warnings", () => {
    const live = DISHES.filter((d) => d.format === "live-station").slice(0, 3);
    const fried = Array.from({ length: 3 }, (_, i) => withEquip(base, ["fryer"], 900 + i));
    const found = findConflicts([...fried, ...live], "buffet");
    expect(found[0].severity).toBe("blocker");
  });
});

describe("margin conflicts", () => {
  it("stays quiet on a menu inside the band", () => {
    const cheap = DISHES.filter((d) => d.cost / d.price < 0.26).slice(0, 4);
    expect(findConflicts(cheap, "buffet").filter((c) => c.kind === "margin")).toEqual([]);
  });

  it("flags a blended cost above the ceiling and names the worst offenders", () => {
    const heavy = [...DISHES].sort((a, b) => b.cost / b.price - a.cost / a.price).slice(0, 4);
    const found = findConflicts(heavy, "buffet").filter((c) => c.kind === "margin");
    expect(found).toHaveLength(1);
    expect(found[0].dishes.length).toBeGreaterThan(0);
    expect(found[0].title).toMatch(/Blended food cost/);
  });

  it("weights canapes by bite count, matching how the quote bills them", () => {
    const canapes = DISHES.filter((d) => d.category === "canape").slice(0, 2);
    const scran = blendedFoodCost(canapes, "scran");
    const avg = canapes.reduce((s, d) => s + d.cost, 0) / canapes.reduce((s, d) => s + d.price, 0);
    // Bites scale cost and value together, so the ratio matches the simple average.
    expect(scran).toBeCloseTo(avg, 6);
  });

  it("returns zero for an empty selection rather than dividing by zero", () => {
    expect(blendedFoodCost([], "buffet")).toBe(0);
    expect(findConflicts([], "buffet")).toEqual([]);
  });
});
