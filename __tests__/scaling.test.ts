import { DISHES } from "@/data/dishes";
import { RECIPES } from "@/data/recipes";
import { scaleQty, scaleRecipe, shoppingList, portionsNeeded } from "@/lib/scaling";
import { portionsFromYield } from "@/lib/costing";

const dish = (id: number) => DISHES.find((d) => d.id === id)!;
const recipe = (id: number) => RECIPES.find((r) => r.dishId === id)!;

describe("scaling a written quantity", () => {
  it("scales the number as written, keeping the unit", () => {
    expect(scaleQty("6 kg", 2)).toBe("12 kg");
    expect(scaleQty("300 ml", 3)).toBe("900 ml");
    expect(scaleQty("2 tbsp", 2.5)).toBe("5 tbsp");
  });

  it("never asks for a fraction of a countable thing", () => {
    // You buy four eggs, not 3.6.
    expect(scaleQty("3", 1.2)).toBe("4");
    expect(scaleQty("1 bunch", 1.4)).toBe("2 bunch");
  });

  it("leaves a quantity it cannot read alone rather than mangling it", () => {
    expect(scaleQty("to taste", 3)).toBe("to taste");
  });
});

describe("scaling a recipe to an event", () => {
  it("cooks whole batches, because half a batch of shortbread is a different biscuit", () => {
    const r = recipe(107);
    const yieldSize = portionsFromYield(r.yields)!;
    const s = scaleRecipe(r, dish(107), yieldSize + 1);
    expect(s.batches).toBe(2);
    expect(s.produced).toBe(yieldSize * 2);
  });

  it("never scales below one batch", () => {
    const s = scaleRecipe(recipe(107), dish(107), 1);
    expect(s.batches).toBe(1);
  });

  it("scales the cost with the quantity", () => {
    const one = scaleRecipe(recipe(133), dish(133), 40);
    const two = scaleRecipe(recipe(133), dish(133), 80);
    expect(two.batches).toBe(one.batches * 2);
    expect(two.foodCost).toBeCloseTo(one.foodCost * 2, 0);
  });
});

describe("how much of each dish an event needs", () => {
  const menu = [dish(1), dish(3), dish(133), dish(130)];

  it("gives every guest a portion of anything that is not a canape", () => {
    expect(portionsNeeded(dish(133), menu, 40, "plated")).toBe(40);
  });

  it("counts canapes in bites per guest, split across the canapes on the menu", () => {
    // Two canapes on this menu and six bites a guest, so three each.
    const n = portionsNeeded(dish(1), menu, 40, "plated");
    expect(n).toBe(Math.ceil((40 * 6) / 2));
  });
});

describe("the shopping list", () => {
  const menu = [dish(1), dish(3), dish(133), dish(121), dish(130)];
  const scaled = menu.map((d) => {
    const r = RECIPES.find((x) => x.dishId === d.id)!;
    return scaleRecipe(r, d, portionsNeeded(d, menu, 40, "plated"));
  });
  const list = shoppingList(scaled);

  it("adds an ingredient up once across the whole menu", () => {
    const keys = list.map((l) => l.key);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it("says which dishes want each line, so a menu cut can be traced to the shop", () => {
    for (const l of list) expect(l.dishes.length).toBeGreaterThan(0);
  });

  it("writes 6 kg rather than 6000 g", () => {
    const heavy = list.find((l) => l.base === "g" && l.amount >= 1000);
    if (heavy) expect(heavy.display).toMatch(/kg$/);
  });

  it("puts the money at the top, because that is the row worth checking", () => {
    for (let i = 1; i < list.length; i++) {
      expect(list[i - 1].soles).toBeGreaterThanOrEqual(list[i].soles);
    }
  });

  it("totals to roughly what the scaled recipes cost", () => {
    const listTotal = list.reduce((s, l) => s + l.soles, 0);
    const recipeTotal = scaled.reduce((s, r) => s + r.foodCost, 0);
    // Non-food sundries sit in the list but not in food cost, so allow a gap.
    expect(listTotal).toBeGreaterThan(recipeTotal * 0.9);
  });
});
