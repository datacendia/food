import { toCapacity, type BookingRow } from "@/lib/repo/bookings";
import { clashesForDay, canTakeBooking, DEFAULT_KIT } from "@/lib/capacity";
import { DISHES } from "@/data/dishes";

/**
 * A stored booking has to become something lib/capacity.ts can reason about.
 *
 * The interesting case is the one that cannot. A booking with no district has
 * no travel time, and defaulting it to San Isidro would produce a confident
 * answer about a journey nobody is making — the kind of wrong that reads as
 * right. It comes back null instead, and the page says which booking it could
 * not judge and why.
 */
const row = (over: Partial<BookingRow> = {}): BookingRow => ({
  id: "b1",
  quoteId: null,
  clientId: null,
  clientName: null,
  quoteName: null,
  eventDate: new Date("2026-09-12T00:00:00"),
  serviceMinutes: 19 * 60 + 30,
  durationMinutes: 180,
  guests: 60,
  tier: "plated",
  district: "san-isidro",
  venue: "hotel",
  dishIds: [133, 130],
  confirmed: true,
  notes: null,
  ...over
});

describe("a booking becomes something capacity can judge", () => {
  it("carries the district, venue and dishes across", () => {
    const c = toCapacity(row())!;
    expect(c).not.toBeNull();
    expect(c.district.id).toBe("san-isidro");
    expect(c.venue.id).toBe("hotel");
    expect(c.dishes.map((d) => d.id).sort()).toEqual([130, 133]);
    expect(c.serviceMinutes).toBe(1170);
  });

  it("refuses to guess when the district is missing", () => {
    expect(toCapacity(row({ district: null }))).toBeNull();
  });

  it("refuses to guess when the venue is missing", () => {
    expect(toCapacity(row({ venue: null }))).toBeNull();
  });

  it("survives a dish id that no longer exists", () => {
    // The menu is versioned in data/; a booking taken against an older one must
    // not throw, it must simply carry the dishes that are still there.
    const c = toCapacity(row({ dishIds: [133, 99999] }))!;
    expect(c.dishes.map((d) => d.id)).toEqual([133]);
  });
});

describe("two jobs on one day", () => {
  it("finds the clash when the same crew is in two districts at once", () => {
    const a = toCapacity(row({ id: "a", district: "san-isidro" }))!;
    const b = toCapacity(row({
      id: "b", district: "la-molina", serviceMinutes: 20 * 60
    }))!;
    const clashes = clashesForDay([a, b], DEFAULT_KIT);
    expect(clashes.length).toBeGreaterThan(0);
    expect(clashes.every((c) => c.detail.length > 0)).toBe(true);
  });

  it("says yes to a job that fits beside nothing at all", () => {
    const candidate = toCapacity(row({ id: "candidate" }))!;
    expect(canTakeBooking([], candidate, DEFAULT_KIT).ok).toBe(true);
  });

  it("only reports clashes the candidate is actually in", () => {
    const a = toCapacity(row({ id: "a", serviceMinutes: 12 * 60 }))!;
    const b = toCapacity(row({ id: "b", serviceMinutes: 12 * 60 + 30, district: "callao" }))!;
    const candidate = toCapacity(row({ id: "candidate", serviceMinutes: 22 * 60 }))!;
    const { clashes } = canTakeBooking([a, b], candidate, DEFAULT_KIT);
    for (const c of clashes) expect(c.bookings).toContain("candidate");
  });
});
