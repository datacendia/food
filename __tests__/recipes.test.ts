import { DISHES } from "@/data/dishes";
import { dishDietary } from "@/lib/dietary";
import { RECIPES } from "@/data/recipes";

const byId = new Map(DISHES.map((d) => [d.id, d]));

describe("recipe coverage", () => {
  it("reports how far through the matrix the recipes are", () => {
    const pct = ((RECIPES.length / DISHES.length) * 100).toFixed(0);
    // Informational, not a gate: a partial set is a legitimate state.
    console.log(`  recipes written: ${RECIPES.length} of ${DISHES.length} (${pct}%)`);
    expect(RECIPES.length).toBeGreaterThan(0);
  });

  it("only writes recipes for dishes that exist", () => {
    const ghosts = RECIPES.filter((r) => !byId.has(r.dishId)).map((r) => r.dishId);
    expect(ghosts).toEqual([]);
  });

  it("never writes two recipes for one dish", () => {
    const ids = RECIPES.map((r) => r.dishId);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe("every recipe is cookable", () => {
  it.each(RECIPES.map((r) => [r.dishId, byId.get(r.dishId)?.name ?? "?"] as const))(
    "%i %s",
    (id) => {
      const r = RECIPES.find((x) => x.dishId === id)!;

      expect(r.yields.trim()).not.toBe("");
      expect(r.ingredients.length).toBeGreaterThanOrEqual(3);
      expect(r.method.length).toBeGreaterThanOrEqual(3);

      // Every ingredient needs a quantity — "some butter" is not a recipe.
      for (const ing of r.ingredients) {
        expect(ing.qty.trim()).not.toBe("");
        expect(ing.item.trim()).not.toBe("");
      }

      // Method steps are instructions, not fragments.
      for (const step of r.method) expect(step.trim().length).toBeGreaterThan(15);

      // The two fields that make this a catering recipe rather than a home one.
      expect(r.makeAhead.trim().length).toBeGreaterThan(15);
      expect(r.holds.trim().length).toBeGreaterThan(15);

      expect(r.prepMin).toBeGreaterThan(0);
      expect(r.cookMin).toBeGreaterThanOrEqual(0);
    }
  );
});

describe("recipes agree with the matrix", () => {
  it("gives live-station dishes a hold note that admits they cannot be boxed", () => {
    const live = RECIPES.filter((r) => byId.get(r.dishId)?.format === "live-station");
    for (const r of live) {
      // A live-station dish claiming hours of hold time is a contradiction.
      expect(r.holds).not.toMatch(/several hours|indefinitely|3 hours/i);
    }
  });

  /**
   * This used to hand-write its own meat regex:
   *
   *   /\b(lamb|beef|pork|bacon|chicken|morcilla|anchov|prawn|langostino|
   *      trout|paiche|duck)\b/i
   *
   * Lard, suet and gelatine are not in that list, so it passed while nine
   * dishes badged vegetarian on the page contained animal fat or animal
   * collagen: 52 and 60 (lard), 87 and 171 (suet), 96, 101, 150, 156 and 166
   * (gelatine). Neither were rennet, isinglass, fish sauce or carmine - the
   * same hole, waiting for the next recipe.
   *
   * lib/dietary.ts already knew. It reads every line, follows sub-preparations,
   * and names what it found. Asking it is both correct and shorter.
   */
  it("does not put an animal product in a dish the matrix calls vegetarian", () => {
    const wrong: string[] = [];
    for (const r of RECIPES) {
      const dish = byId.get(r.dishId)!;
      if (!dish.veg) continue;
      const d = dishDietary(r);
      if (!d.suits.includes("vegetarian")) {
        wrong.push(`${dish.id} ${dish.name}: ${(d.because.vegetarian ?? []).join(", ")}`);
      }
    }
    expect(wrong).toEqual([]);
  });

  /** And the other way: a dish the recipe says is fine, hidden from the filter. */
  it("does not hide a vegetarian dish behind a false veg: false", () => {
    const wrong: string[] = [];
    for (const r of RECIPES) {
      const dish = byId.get(r.dishId)!;
      if (dish.veg) continue;
      if (dishDietary(r).suits.includes("vegetarian")) wrong.push(`${dish.id} ${dish.name}`);
    }
    expect(wrong).toEqual([]);
  });

  it("matches batch size to category — canapes by the piece, mains by the portion", () => {
    for (const r of RECIPES) {
      const dish = byId.get(r.dishId)!;
      // Canapes are counted, not portioned: a yield of "20 portions" on a
      // canape means it was costed as a plate somewhere.
      if (dish.category === "canape") {
        expect(r.yields).not.toMatch(/portion/i);
        expect(r.yields).toMatch(/^\d+/);
      }
      // Mains are portioned. "20 pies" counts — one pie is one portion.
      if (dish.category === "main") expect(r.yields).toMatch(/portion|pie/i);
    }
  });
});
