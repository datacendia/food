import { DISHES } from "@/data/dishes";
import { FLAVOURS } from "@/data/flavours";
import { EVENTS } from "@/data/events";
import { FLAVOUR_AXES, matchesEvent, type Flavour } from "@/lib/dishes";

describe("flavour map", () => {
  it("covers every dish", () => {
    const missing = DISHES.filter((d) => !FLAVOURS[d.id]).map((d) => `${d.id} ${d.name}`);
    expect(missing).toEqual([]);
  });

  it("has no entries for dishes that do not exist", () => {
    const ids = new Set(DISHES.map((d) => d.id));
    const orphans = Object.keys(FLAVOURS).filter((k) => !ids.has(Number(k)));
    expect(orphans).toEqual([]);
  });

  it("uses only known axes", () => {
    const bad: string[] = [];
    for (const [id, fs] of Object.entries(FLAVOURS)) {
      for (const f of fs) {
        if (!FLAVOUR_AXES.includes(f)) bad.push(`${id}: ${f}`);
      }
    }
    expect(bad).toEqual([]);
  });

  it("gives every dish at least one axis and no duplicates", () => {
    for (const d of DISHES) {
      const f = FLAVOURS[d.id];
      expect(f.length).toBeGreaterThan(0);
      expect(new Set(f).size).toBe(f.length);
    }
  });

  it("uses every axis at least once, or the compass has a dead button", () => {
    const unused = FLAVOUR_AXES.filter(
      (f) => !Object.values(FLAVOURS).some((list: Flavour[]) => list.includes(f))
    );
    expect(unused).toEqual([]);
  });
});

describe("events", () => {
  it("has unique ids", () => {
    const ids = EVENTS.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("returns at least one dish for every event", () => {
    const empty = EVENTS.filter(
      (e) => DISHES.filter((d) => matchesEvent(d, e.filter)).length === 0
    ).map((e) => e.id);
    expect(empty).toEqual([]);
  });

  it("never returns the whole matrix — a filter that filters nothing is a bug", () => {
    const useless = EVENTS.filter(
      (e) => DISHES.filter((d) => matchesEvent(d, e.filter)).length === DISHES.length
    ).map((e) => e.id);
    expect(useless).toEqual([]);
  });

  it("excludes alcohol from the no-licence event", () => {
    const ev = EVENTS.find((e) => e.id === "no-licence")!;
    const hits = DISHES.filter((d) => matchesEvent(d, ev.filter));
    expect(hits.every((d) => !d.tags.includes("alcohol"))).toBe(true);
    // And it must leave a usable menu behind, not three biscuits.
    expect(hits.length).toBeGreaterThan(50);
  });

  it("keeps the corporate event inside the Scran tier", () => {
    const ev = EVENTS.find((e) => e.id === "corporate")!;
    const hits = DISHES.filter((d) => matchesEvent(d, ev.filter));
    expect(hits.every((d) => d.tiers.includes("scran"))).toBe(true);
  });

  it("offers a drink at the cocktail event", () => {
    const ev = EVENTS.find((e) => e.id === "cocktail")!;
    const hits = DISHES.filter((d) => matchesEvent(d, ev.filter));
    expect(hits.some((d) => d.category === "drink")).toBe(true);
    expect(hits.some((d) => d.category === "canape")).toBe(true);
  });
});

describe("matchesEvent", () => {
  const dish = DISHES.find((d) => d.id === 51)!;

  it("treats an empty filter as no constraint", () => {
    expect(matchesEvent(dish, {})).toBe(true);
  });

  it("applies clauses together, not as alternatives", () => {
    expect(matchesEvent(dish, { categories: ["canape"], tier: "plated" })).toBe(true);
    expect(matchesEvent(dish, { categories: ["main"], tier: "plated" })).toBe(false);
  });
});
