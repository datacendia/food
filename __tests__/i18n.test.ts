import { RECIPES } from "@/data/recipes";
import { ES_INGREDIENTS } from "@/data/i18n-ingredients";
import { ES, ES_PATTERNS } from "@/data/i18n";
import { DISHES } from "@/data/dishes";
import { canonicalIngredient } from "@/lib/ingredient-key";

describe("the market list", () => {
  it("names every ingredient a recipe uses", () => {
    // If you cannot ask for it at the stall, the translation has failed at
    // the only job it has.
    const missing = new Set<string>();
    for (const r of RECIPES) {
      for (const i of r.ingredients) {
        const k = canonicalIngredient(i.item);
        if (!ES_INGREDIENTS[k]) missing.add(k);
      }
    }
    expect([...missing]).toEqual([]);
  });

  it("carries no dead keys the canonicaliser could never produce", () => {
    for (const k of Object.keys(ES_INGREDIENTS)) {
      expect(canonicalIngredient(k)).toBe(k);
    }
  });

  it("gives a non-empty market name for every entry", () => {
    // Plenty are identical in both languages - manjar blanco, chancaca,
    // aguaymanto, pisco, huacatay. That is the right answer, not a gap.
    for (const [, v] of Object.entries(ES_INGREDIENTS)) {
      expect(v.trim().length).toBeGreaterThan(0);
    }
  });

  it("actually translates the ones that are English words", () => {
    const englishOnly = ["butter", "flour", "onion", "egg", "milk", "lamb", "beef"];
    for (const k of englishOnly) expect(ES_INGREDIENTS[k]).not.toBe(k);
  });

  it("uses the butcher's name, not a literal one", () => {
    // Asking a Lima butcher for "beef shin" gets you nowhere; osobuco works.
    expect(ES_INGREDIENTS["beef shin"]).toBe("osobuco");
    expect(ES_INGREDIENTS["spring onion"]).toBe("cebolla china");
    expect(ES_INGREDIENTS["ginger"]).toBe("kion");
    expect(ES_INGREDIENTS["cornflour"]).toMatch(/chuño|maicena/);
  });
});

describe("the interface dictionary", () => {
  it("translates every dish description", () => {
    const missing = DISHES.filter((d) => !ES[d.fusion]).map((d) => d.id);
    expect(missing).toEqual([]);
  });

  it("leaves dish names alone, because the name is the product", () => {
    for (const d of DISHES) expect(ES[d.name]).toBeUndefined();
  });

  it("compiles every pattern, with a replacement for each group it captures", () => {
    for (const [rx, es] of ES_PATTERNS) {
      const compiled = new RegExp(rx);
      const groups = (new RegExp(rx + "|")).exec("")!.length - 1;
      for (let g = 1; g <= groups; g++) {
        expect(es).toContain("$" + g);
      }
      expect(() => compiled.test("anything")).not.toThrow();
    }
  });
});
