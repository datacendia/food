import { DISHES } from "@/data/dishes";
import { EVENTS } from "@/data/events";
import { matchesEvent } from "@/lib/dishes";

const hits = (id: string) => {
  const ev = EVENTS.find((e) => e.id === id)!;
  return DISHES.filter((d) => matchesEvent(d, ev.filter));
};

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

  it("excludes every licensed dish from the no-licence event", () => {
    const out = hits("no-licence");
    expect(out.every((d) => !d.needsLicence)).toBe(true);
    expect(out.length).toBeGreaterThan(100);
  });

  it("keeps the corporate event to unstaffed drop-off only", () => {
    for (const d of hits("corporate")) {
      expect(d.format).toBe("drop-off");
      expect(d.tiers).toContain("scran");
    }
  });

  it("returns only vegetarian dishes for the vegetarian menu", () => {
    expect(hits("vegetarian").every((d) => d.veg)).toBe(true);
  });

  it("returns only live-station dishes for the live event", () => {
    const out = hits("live-station");
    expect(out.every((d) => d.format === "live-station")).toBe(true);
    expect(out.length).toBeGreaterThan(5);
  });

  it("splits heritage cleanly — no dish in both Scottish and Beyond Britain", () => {
    const scottish = new Set(hits("heritage-scottish").map((d) => d.id));
    const beyond = hits("beyond-britain").map((d) => d.id);
    expect(beyond.filter((id) => scottish.has(id))).toEqual([]);
  });
});

describe("matchesEvent", () => {
  const dish = DISHES.find((d) => d.id === 1)!;

  it("treats an empty filter as no constraint", () => {
    expect(matchesEvent(dish, {})).toBe(true);
  });

  it("applies clauses together, not as alternatives", () => {
    expect(matchesEvent(dish, { categories: ["canape"], tier: "plated" })).toBe(true);
    expect(matchesEvent(dish, { categories: ["main"], tier: "plated" })).toBe(false);
  });

  it("distinguishes false from undefined on boolean clauses", () => {
    expect(matchesEvent({ ...dish, veg: false }, { veg: false })).toBe(true);
    expect(matchesEvent({ ...dish, veg: false }, { veg: true })).toBe(false);
    expect(matchesEvent({ ...dish, veg: false }, {})).toBe(true);
  });
});
