import { DISHES } from "@/data/dishes";
import { buildRunSheet, leadStation } from "@/lib/runsheet";
import type { Dish } from "@/lib/dishes";

const mk = (id: number, equipment: string[]): Dish => ({
  ...DISHES[0],
  id,
  name: `Dish ${id}`,
  equipment
});

describe("leadStation", () => {
  it("times a dish against whichever station starts earliest", () => {
    expect(leadStation(mk(1, ["fryer", "oven"]))).toBe("oven");
    expect(leadStation(mk(2, ["cold", "oven"]))).toBe("cold");
    expect(leadStation(mk(3, ["fryer"]))).toBe("fryer");
  });
});

describe("buildRunSheet", () => {
  it("returns nothing for an empty menu", () => {
    expect(buildRunSheet([])).toEqual([]);
  });

  it("always closes on service", () => {
    const s = buildRunSheet([mk(1, ["oven"])], "19:30");
    expect(s[s.length - 1].label).toBe("Service");
    expect(s[s.length - 1].clock).toBe("19:30");
  });

  it("runs backwards — earliest work first", () => {
    const s = buildRunSheet([mk(1, ["fryer"]), mk(2, ["cold"]), mk(3, ["oven"])], "19:30");
    const offsets = s.map((x) => x.offset);
    expect(offsets).toEqual([...offsets].sort((a, b) => b - a));
    expect(s[0].station).toBe("Cold section");
  });

  it("collapses dishes sharing a station into one line", () => {
    const s = buildRunSheet([mk(1, ["oven"]), mk(2, ["oven"]), mk(3, ["oven"])], "19:30");
    const oven = s.filter((x) => x.station === "Oven");
    expect(oven).toHaveLength(1);
    expect(oven[0].dishes).toHaveLength(3);
  });

  it("puts fried work minutes before service, not hours", () => {
    const s = buildRunSheet([mk(1, ["fryer"])], "19:30");
    const fry = s.find((x) => x.station === "Fryer")!;
    expect(fry.clock).toBe("19:15");
  });

  it("wraps a day-before task onto the previous day's clock", () => {
    const s = buildRunSheet([mk(1, ["cold"])], "19:30");
    const cold = s.find((x) => x.station === "Cold section")!;
    // 24h earlier is the same clock time, the day before.
    expect(cold.clock).toBe("19:30");
    expect(cold.offset).toBe(1440);
  });

  it("rejects a malformed service time rather than emitting NaN:NaN", () => {
    expect(() => buildRunSheet([mk(1, ["oven"])], "nonsense")).toThrow(/Bad time/);
  });
});
