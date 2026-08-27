import { dietClashes } from "@/lib/repo/clients";
import { DISHES } from "@/data/dishes";
import { RECIPES } from "@/data/recipes";
import { dietaryIndex, dishesFor } from "@/lib/dietary";

/**
 * A client's recorded diet, checked against a menu.
 *
 * This is the reason the clients table exists. An allergy is a fact about the
 * people eating, not about one event: recorded once, it has to catch a dish on
 * every menu quoted for them afterwards. "Didn't we do a coeliac last time?" is
 * not a food safety process.
 */
const index = dietaryIndex(RECIPES);

describe("a recorded diet catches the dish", () => {
  it("names the dishes a coeliac client cannot eat, and why", () => {
    const menu = DISHES.slice(0, 40);
    const clashes = dietClashes({ diets: ["gluten-free"] }, menu);

    expect(clashes).toHaveLength(1);
    expect(clashes[0].dietLabel).toMatch(/gluten/i);
    expect(clashes[0].dishes.length).toBeGreaterThan(0);
    // Every flagged dish must come with a reason, or the warning is unactionable.
    for (const d of clashes[0].dishes) expect(d.because.length).toBeGreaterThan(0);
  });

  it("says nothing when every dish on the menu is safe", () => {
    const safe = dishesFor(DISHES, index, ["gluten-free"]).slice(0, 8);
    expect(safe.length).toBeGreaterThan(0);
    expect(dietClashes({ diets: ["gluten-free"] }, safe)).toEqual([]);
  });

  it("checks every diet the client carries, not just the first", () => {
    const menu = DISHES.slice(0, 60);
    const clashes = dietClashes({ diets: ["gluten-free", "vegan", "no-pork"] }, menu);
    expect(clashes.map((c) => c.diet).sort()).toEqual(["gluten-free", "no-pork", "vegan"]);
  });

  it("agrees with the filter the rest of the app uses", () => {
    // The warning and the /find filter must never disagree about one dish.
    const menu = DISHES.slice(0, 80);
    for (const diet of ["gluten-free", "vegan", "nut-free"] as const) {
      const safe = new Set(dishesFor(menu, index, [diet]).map((d) => d.id));
      const flagged = new Set(
        (dietClashes({ diets: [diet] }, menu)[0]?.dishes ?? []).map((d) => d.id)
      );
      for (const d of menu) {
        expect(safe.has(d.id)).toBe(!flagged.has(d.id));
      }
    }
  });

  it("ignores a diet the engine cannot answer for, rather than pretending", () => {
    // Free text stored as a diet would look like a check and be nothing of the
    // kind. It is dropped on the way in and ignored here too.
    expect(dietClashes({ diets: ["no coriander"] }, DISHES.slice(0, 20))).toEqual([]);
  });
});
