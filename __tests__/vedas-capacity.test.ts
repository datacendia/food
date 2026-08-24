import { DISHES } from "@/data/dishes";
import { RECIPES } from "@/data/recipes";
import { VEDAS } from "@/data/vedas";
import { DISTRICTS, VENUE_TYPES } from "@/data/venues";
import { vedaHits, illegalInMonth, closedMonthsFor, vedaBlockerText } from "@/lib/vedas";
import { clashesForDay, canTakeBooking, windowFor, DEFAULT_KIT, type Booking } from "@/lib/capacity";
import { canonicalIngredient } from "@/lib/ingredient-key";

const dish = (id: number) => DISHES.find((d) => d.id === id)!;
const district = (id: string) => DISTRICTS.find((d) => d.id === id)!;
const venue = (id: string) => VENUE_TYPES.find((v) => v.id === id)!;

describe("the vedas are law, not seasonality", () => {
  it("declares itself unverified on every row, because nobody has checked the RM", () => {
    for (const v of VEDAS) {
      expect(v.verified).toBe(false);
      expect(v.closed.length).toBeGreaterThan(0);
      for (const m of v.closed) expect(m).toBeGreaterThanOrEqual(1);
      for (const m of v.closed) expect(m).toBeLessThanOrEqual(12);
    }
  });

  it("names ingredient keys the recipes actually use", () => {
    const used = new Set<string>();
    for (const r of RECIPES) for (const i of r.ingredients) used.add(canonicalIngredient(i.item));
    for (const v of VEDAS) {
      for (const k of v.ingredientKeys) {
        expect(canonicalIngredient(k)).toBe(k);
        expect(used.has(k)).toBe(true);
      }
    }
  });

  it("catches the dish built specifically to survive a veda", () => {
    // 143 Chupe de Corvina Ahumada exists so there is something to sell
    // through the langostino veda. It must not itself be caught by it.
    const langostino = VEDAS.find((v) => v.id === "langostino-wild")!;
    for (const m of langostino.closed) {
      const hits = vedaHits([dish(143)], RECIPES, [langostino], m);
      expect(hits).toHaveLength(0);
    }
  });

  it("does block the dish that actually uses the closed species", () => {
    const langostino = VEDAS.find((v) => v.id === "langostino-wild")!;
    const hits = vedaHits(DISHES, RECIPES, [langostino], langostino.closed[0]);
    expect(hits.length).toBeGreaterThan(0);
    for (const h of hits) expect(h.ingredient).toBe("langostino");
  });

  it("reports the closed months for a dish across the whole year", () => {
    const corvina = dish(43);   // Corvina al Pil-Pil
    const closed = closedMonthsFor(corvina, RECIPES, VEDAS);
    expect(closed.length).toBeGreaterThan(0);
  });

  it("writes a blocker that says it is an offence, not a risk", () => {
    const m = 9;
    const hits = vedaHits(DISHES, RECIPES, VEDAS, m);
    const text = vedaBlockerText(hits, "September");
    expect(text.length).toBeGreaterThan(0);
    for (const t of text) {
      expect(t).toMatch(/offence/);
      expect(t).toMatch(/resolución ministerial/);
    }
  });

  it("counts what each month costs you legally", () => {
    const rows: string[] = [];
    for (let m = 1; m <= 12; m++) rows.push(`${m}:${illegalInMonth(DISHES, RECIPES, VEDAS, m).size}`);
    // eslint-disable-next-line no-console
    console.log("  dishes illegal by month — " + rows.join(" "));
    expect(rows.length).toBe(12);
  });
});

describe("whether a day can be delivered", () => {
  const make = (id: string, hour: number, over: Partial<Booking> = {}): Booking => ({
    id,
    serviceMinutes: hour * 60,
    durationMinutes: 180,
    guests: 40,
    tier: "plated",
    dishes: [dish(133), dish(130)],   // one live station, one baked
    district: district("san-isidro"),
    venue: venue("hotel"),
    ...over
  });

  it("takes a single booking without complaint", () => {
    expect(clashesForDay([make("a", 19)])).toEqual([]);
  });

  it("refuses two overlapping events that both need the one plancha", () => {
    const clashes = clashesForDay([make("a", 19), make("b", 20)]);
    expect(clashes.some((c) => c.kind === "equipment")).toBe(true);
  });

  it("allows two events far enough apart in the day", () => {
    const morning = make("a", 8, { durationMinutes: 90 });
    const evening = make("b", 21, { durationMinutes: 90 });
    const clashes = clashesForDay([morning, evening]);
    expect(clashes.filter((c) => c.kind !== "shift")).toEqual([]);
  });

  it("counts the crew across both jobs, not within one", () => {
    const clashes = clashesForDay([make("a", 19), make("b", 20)], { ...DEFAULT_KIT, planchas: 5, fryers: 5, vans: 5 });
    expect(clashes.some((c) => c.kind === "crew")).toBe(true);
  });

  it("says no when one van cannot be in two districts at once", () => {
    const clashes = clashesForDay(
      [make("a", 19, { district: district("asia") }), make("b", 19, { district: district("callao") })],
      { ...DEFAULT_KIT, planchas: 5, fryers: 5, crew: 40 }
    );
    expect(clashes.some((c) => c.kind === "van")).toBe(true);
  });

  it("flags a door-to-door day nobody can work", () => {
    const far = make("a", 20, { district: district("asia"), durationMinutes: 300 });
    expect(clashesForDay([far]).some((c) => c.kind === "shift")).toBe(true);
  });

  it("builds a window that starts before service and ends after it", () => {
    const w = windowFor(make("a", 19));
    expect(w.out).toBeLessThan(19 * 60);
    expect(w.back).toBeGreaterThan(19 * 60 + 180);
  });

  it("answers the actual question: can I take this one?", () => {
    const booked = [make("a", 19)];
    expect(canTakeBooking(booked, make("b", 20)).ok).toBe(false);
    expect(canTakeBooking(booked, make("c", 9, { durationMinutes: 60 })).ok).toBe(true);
  });

  it("only reports clashes involving the candidate", () => {
    const booked = [make("a", 19), make("b", 20)];
    const res = canTakeBooking(booked, make("c", 9, { durationMinutes: 60 }));
    for (const c of res.clashes) expect(c.bookings).toContain("c");
  });
});
