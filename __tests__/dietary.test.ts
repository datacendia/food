import { DISHES } from "@/data/dishes";
import { RECIPES } from "@/data/recipes";
import { INGREDIENT_ATTRS, PLANT_PLAIN } from "@/data/ingredient-attributes";
import {
  dietaryIndex, dishDietary, dishesFor, isClassified,
  ALLERGENS, DIETS, DIET_LABEL, DIET_NOTE
} from "@/lib/dietary";
import { canonicalIngredient } from "@/lib/ingredient-key";

const index = dietaryIndex(RECIPES);
const recipe = (id: number) => RECIPES.find((r) => r.dishId === id)!;

describe("nothing is unclassified", () => {
  it("has an entry for every ingredient any recipe uses", () => {
    // An unclassified ingredient must be an error, never an assumption that it
    // is probably fine. This is the test the whole module exists to pass.
    const missing = new Set<string>();
    for (const r of RECIPES) {
      for (const i of r.ingredients) {
        const k = canonicalIngredient(i.item);
        if (!isClassified(k)) missing.add(k);
      }
    }
    expect([...missing]).toEqual([]);
  });

  it("reports nothing unknown on any dish", () => {
    const bad = [...index.values()].filter((p) => p.unknown.length);
    expect(bad.map((p) => `${p.dishId}: ${p.unknown.join(",")}`)).toEqual([]);
  });

  it("never lists an ingredient in both tables", () => {
    const plain = new Set<string>(PLANT_PLAIN);
    const both = Object.keys(INGREDIENT_ATTRS).filter((k) => plain.has(k));
    expect(both).toEqual([]);
  });

  it("uses only declared allergen names", () => {
    for (const [k, a] of Object.entries(INGREDIENT_ATTRS)) {
      for (const al of a.allergens ?? []) {
        expect(ALLERGENS).toContain(al);
      }
      // A key the canonicaliser would never produce can never be reached.
      expect(canonicalIngredient(k)).toBe(k);
    }
    for (const k of PLANT_PLAIN) expect(canonicalIngredient(k)).toBe(k);
  });
});

describe("reading a dish's diet from its actual ingredients", () => {
  it("calls a lamb dish neither vegetarian nor pescatarian", () => {
    const p = dishDietary(recipe(133));   // Anticuchos de Cordero
    expect(p.suits).not.toContain("vegetarian");
    expect(p.suits).not.toContain("pescatarian");
    expect(p.because["vegetarian"]).toContain("lamb leg");
  });

  it("calls a fish dish pescatarian but not vegetarian", () => {
    const p = dishDietary(recipe(134));   // Ceviche de Corvina
    expect(p.suits).toContain("pescatarian");
    expect(p.suits).not.toContain("vegetarian");
  });

  it("declares milk on anything built with butter", () => {
    const p = dishDietary(recipe(107));   // Shortbread
    expect(p.allergens).toContain("milk");
    expect(p.allergens).toContain("gluten");
    expect(p.suits).not.toContain("dairy-free");
    expect(p.suits).not.toContain("gluten-free");
  });

  it("keeps oats out of a coeliac menu", () => {
    // Coeliac disease is not a preference. Peruvian oats are milled on wheat
    // lines, so they are gluten until somebody produces a certificate.
    const p = dishDietary(recipe(61));    // Porridge with Kiwicha
    expect(p.because["gluten-free"]?.some((k) => /oat/.test(k))).toBe(true);
  });

  it("sees through a sub-preparation instead of declaring nothing", () => {
    // The Nordic Cure Box is four other recipes and a spoon of creme fraiche.
    // Before this walked into sub-recipes it declared no allergens at all.
    const p = dishDietary(recipe(74));
    expect(p.allergens.length).toBeGreaterThan(0);
    expect(p.allergens).toContain("fish");
  });

  it("treats alcohol as present, because cooking burns off less than people think", () => {
    const p = dishDietary(recipe(93));    // Tipsy Laird
    expect(p.allergens).toContain("alcohol");
    expect(p.suits).not.toContain("no-alcohol");
  });

  it("keeps anything boozy or hot off the children's menu", () => {
    for (const p of index.values()) {
      if (!p.suits.includes("kid-friendly")) continue;
      expect(p.allergens).not.toContain("alcohol");
      expect(p.because["kid-friendly"]).toBeUndefined();
    }
  });

  it("excludes hard and crisp things from a soft-texture menu", () => {
    const p = dishDietary(recipe(52));    // Oatcakes
    expect(p.suits).not.toContain("soft-texture");
  });
});

describe("filtering a menu by diet", () => {
  it("returns everything when no diet is asked for", () => {
    expect(dishesFor(DISHES, index, [])).toHaveLength(DISHES.length);
  });

  it("narrows as diets are added, never widens", () => {
    const veg = dishesFor(DISHES, index, ["vegetarian"]).length;
    const vegan = dishesFor(DISHES, index, ["vegan"]).length;
    const both = dishesFor(DISHES, index, ["vegetarian", "vegan"]).length;
    expect(vegan).toBeLessThanOrEqual(veg);
    expect(both).toBeLessThanOrEqual(vegan);
  });

  it("finds at least one dish for every single diet, or the menu has a hole", () => {
    const empty = DIETS.filter((d) => dishesFor(DISHES, index, [d]).length === 0);
    expect(empty).toEqual([]);
  });

  it("reports how thin the hardest diets are", () => {
    // Not a gate - a finding. Nine vegan dishes out of 150 is a real gap in
    // the menu, and it should be visible rather than discovered at an event.
    const counts = DIETS.map((d) => `${d} ${dishesFor(DISHES, index, [d]).length}`);
    // eslint-disable-next-line no-console
    console.log("  " + counts.join(" | "));
    expect(dishesFor(DISHES, index, ["vegan"]).length).toBeGreaterThan(0);
  });
});

describe("the diets are described honestly", () => {
  it("labels and explains every one", () => {
    for (const d of DIETS) {
      expect(DIET_LABEL[d]).toBeTruthy();
      expect(DIET_NOTE[d].length).toBeGreaterThan(30);
    }
  });

  it("says plainly that lower-sugar is not a medical claim", () => {
    expect(DIET_NOTE["lower-sugar"]).toMatch(/not a medical claim/i);
  });

  it("says plainly that soft-texture is not an IDDSI assessment", () => {
    expect(DIET_NOTE["soft-texture"]).toMatch(/IDDSI/);
  });
});
