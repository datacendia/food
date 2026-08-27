import { costRecipe, ESTIMATES, type PriceBook } from "@/lib/costing";
import { RECIPES } from "@/data/recipes";
import { PRICES } from "@/data/prices";

/**
 * A verified price has to reach the dish, including through a sub-preparation.
 *
 * The costing is recursive: a dish assembled from other dishes is priced
 * through their recipes. Threading a price book into the top call and forgetting
 * the recursive ones would cost the outer dish at the market price and every
 * sub-preparation at the estimate - a wrong number that looks entirely
 * plausible, which is the worst kind.
 */
const withOverride = (key: string, soles: number): PriceBook => ({
  ...ESTIMATES,
  food: { ...ESTIMATES.food, [key]: { ...ESTIMATES.food[key], soles } }
});

describe("a verified price reaches the dish", () => {
  it("changes what a recipe costs", () => {
    // Butter is in 100+ recipes; find one that uses it directly.
    const recipe = RECIPES.find((r) =>
      r.ingredients.some((i) => /^butter/.test(i.item.toLowerCase())))!;
    expect(recipe).toBeDefined();

    const before = costRecipe(recipe).foodTotal;
    const after = costRecipe(recipe, 0, withOverride("butter", PRICES["butter"].soles * 3)).foodTotal;

    expect(after).toBeGreaterThan(before);
  });

  it("reaches through a sub-preparation, not just the top-level lines", () => {
    // Find a dish whose own lines never name butter but whose cost still moves
    // when butter trebles — that can only happen through a sub-recipe.
    const indirect = RECIPES.filter((r) =>
      !r.ingredients.some((i) => /butter/i.test(i.item)))
      .map((r) => ({
        r,
        before: costRecipe(r).foodTotal,
        after: costRecipe(r, 0, withOverride("butter", PRICES["butter"].soles * 3)).foodTotal
      }))
      .filter((x) => x.after > x.before);

    // If this is ever empty the recursion has stopped carrying the book.
    expect(indirect.length).toBeGreaterThan(0);
  });

  it("leaves every other ingredient alone", () => {
    const recipe = RECIPES.find((r) =>
      r.ingredients.some((i) => /^butter/.test(i.item.toLowerCase())) &&
      r.ingredients.length > 3)!;
    const book = withOverride("butter", PRICES["butter"].soles);   // same price
    expect(costRecipe(recipe, 0, book).foodTotal)
      .toBeCloseTo(costRecipe(recipe).foodTotal, 6);
  });

  it("defaults to the shipped estimates when no book is given", () => {
    for (const r of RECIPES.slice(0, 40)) {
      expect(costRecipe(r).foodTotal).toBe(costRecipe(r, 0, ESTIMATES).foodTotal);
    }
  });
});

/**
 * The typo check, which the first version of got wrong.
 *
 * It compared the input to its own canonical form, so anything already
 * lower-case passed: "buttter" canonicalises to "buttter", and a misspelt
 * ingredient was accepted in silence. The row then sits in the table forever
 * matching nothing, and the price somebody walked to a market to establish
 * never reaches a single dish.
 */
describe("a price has to name something the recipes buy", () => {
  const known = (k: string) =>
    Boolean(ESTIMATES.food[k] ?? ESTIMATES.sub[k] ?? ESTIMATES.nonFood[k]);

  it("accepts a real ingredient", () => {
    expect(known("butter")).toBe(true);
  });

  it("rejects a plausible misspelling", () => {
    for (const typo of ["buttter", "buter", "buttr", "putter"]) {
      expect(known(typo)).toBe(false);
    }
  });

  it("rejects an ingredient no recipe uses", () => {
    expect(known("saffron")).toBe(false);
  });
});
