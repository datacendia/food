import { DISHES } from "@/data/dishes";
import { INGREDIENTS } from "@/data/ingredients";
import { inSeason, dishesOutOfSeason, MONTH_NAMES } from "@/lib/dishes";

describe("ingredient data", () => {
  it("has unique ids", () => {
    const ids = INGREDIENTS.map((i) => i.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("only references dishes that exist", () => {
    const ids = new Set(DISHES.map((d) => d.id));
    const bad: string[] = [];
    for (const i of INGREDIENTS) {
      for (const d of i.dishes) if (!ids.has(d)) bad.push(`${i.id} -> ${d}`);
    }
    expect(bad).toEqual([]);
  });

  it("attaches every ingredient to at least one dish", () => {
    const orphans = INGREDIENTS.filter((i) => i.dishes.length === 0).map((i) => i.id);
    expect(orphans).toEqual([]);
  });

  it("uses month numbers in range, with no duplicates", () => {
    for (const i of INGREDIENTS) {
      for (const m of i.months) {
        expect(m).toBeGreaterThanOrEqual(1);
        expect(m).toBeLessThanOrEqual(12);
      }
      expect(new Set(i.months).size).toBe(i.months.length);
    }
  });

  it("keeps yearRound and months mutually consistent", () => {
    for (const i of INGREDIENTS) {
      if (i.yearRound) expect(i.months).toEqual([]);
      else expect(i.months.length).toBeGreaterThan(0);
    }
  });

  it("lists no ingredient as seasonal for all twelve months", () => {
    const silly = INGREDIENTS.filter((i) => !i.yearRound && i.months.length === 12).map((i) => i.id);
    expect(silly).toEqual([]);
  });
});

describe("season maths", () => {
  it("treats year-round ingredients as always available", () => {
    const pantry = INGREDIENTS.filter((i) => i.yearRound);
    expect(pantry.length).toBeGreaterThan(0);
    for (let m = 1; m <= 12; m++) {
      for (const i of pantry) expect(inSeason(i, m)).toBe(true);
    }
  });

  it("never puts a year-round dish off the menu on its account alone", () => {
    // Cochayuyo is pantry-only and feeds exactly one dish.
    const straws = 57;
    for (let m = 1; m <= 12; m++) {
      const blockers = INGREDIENTS.filter(
        (i) => i.dishes.includes(straws) && !inSeason(i, m)
      );
      expect(blockers).toEqual([]);
    }
  });

  it("leaves most of the matrix buildable in every month", () => {
    for (let m = 1; m <= 12; m++) {
      const off = dishesOutOfSeason(INGREDIENTS, m);
      // A month that knocks out more than half the menu means the data is wrong.
      expect(off.size).toBeLessThan(DISHES.length / 2);
    }
  });

  it("puts chirimoya dishes off the menu in December", () => {
    const off = dishesOutOfSeason(INGREDIENTS, 12);
    expect(off.has(18)).toBe(true); // Chirimoya Cranachan Cups
  });

  it("names twelve months", () => {
    expect(MONTH_NAMES).toHaveLength(12);
    expect(MONTH_NAMES[0]).toBe("January");
    expect(MONTH_NAMES[11]).toBe("December");
  });
});
