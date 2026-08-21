import { DISHES } from "@/data/dishes";
import { INGREDIENTS } from "@/data/ingredients";
import { inSeason, dishesOutOfSeason, MONTH_NAMES } from "@/lib/dishes";

describe("ingredient data", () => {
  it("has unique ids and only references dishes that exist", () => {
    const ids = INGREDIENTS.map((i) => i.id);
    expect(new Set(ids).size).toBe(ids.length);

    const dishIds = new Set(DISHES.map((d) => d.id));
    const bad: string[] = [];
    for (const i of INGREDIENTS) {
      for (const d of i.dishes) if (!dishIds.has(d)) bad.push(`${i.id} -> ${d}`);
    }
    expect(bad).toEqual([]);
  });

  it("attaches every ingredient to at least one dish", () => {
    expect(INGREDIENTS.filter((i) => i.dishes.length === 0).map((i) => i.id)).toEqual([]);
  });

  it("uses month numbers in range, without duplicates", () => {
    for (const i of INGREDIENTS) {
      for (const m of i.months) {
        expect(m).toBeGreaterThanOrEqual(1);
        expect(m).toBeLessThanOrEqual(12);
      }
      expect(new Set(i.months).size).toBe(i.months.length);
    }
  });

  it("keeps yearRound and months consistent", () => {
    for (const i of INGREDIENTS) {
      if (i.yearRound) expect(i.months).toEqual([]);
      else expect(i.months.length).toBeGreaterThan(0);
    }
  });

  it("lists no ingredient as seasonal for all twelve months", () => {
    expect(
      INGREDIENTS.filter((i) => !i.yearRound && i.months.length === 12).map((i) => i.id)
    ).toEqual([]);
  });
});

describe("season maths", () => {
  it("treats year-round ingredients as always available", () => {
    const pantry = INGREDIENTS.filter((i) => i.yearRound);
    expect(pantry.length).toBeGreaterThan(0);
    for (let m = 1; m <= 12; m++) for (const i of pantry) expect(inSeason(i, m)).toBe(true);
  });

  it("leaves most of the matrix buildable in every month", () => {
    for (let m = 1; m <= 12; m++) {
      expect(dishesOutOfSeason(INGREDIENTS, m).size).toBeLessThan(DISHES.length / 2);
    }
  });

  it("puts chirimoya dishes off the menu in December", () => {
    const chirimoya = INGREDIENTS.find((i) => i.id === "chirimoya")!;
    const off = dishesOutOfSeason(INGREDIENTS, 12);
    for (const id of chirimoya.dishes) expect(off.has(id)).toBe(true);
  });

  it("names twelve months", () => {
    expect(MONTH_NAMES).toHaveLength(12);
    expect(MONTH_NAMES[0]).toBe("January");
  });
});
