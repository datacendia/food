import { DISTRICTS, VENUE_TYPES } from "@/data/venues";
import { transportCost, KITCHEN_DISTRICT, VAN_TRIPS } from "@/lib/venues";
import { buildQuote, TIERS } from "@/lib/pricing";
import { DISHES } from "@/data/dishes";

const byId = (id: string) => DISTRICTS.find((d) => d.id === id)!;
const venue = (id: string) => VENUE_TYPES.find((v) => v.id === id)!;

const hotel = venue("hotel");
const sanIsidro = byId("san-isidro");
const asia = byId("asia");

describe("the district list", () => {
  it("contains the kitchen's own district, so a local job costs something but not much", () => {
    const home = DISTRICTS.find((d) => d.id === KITCHEN_DISTRICT);
    expect(home).toBeDefined();
    const c = transportCost({ tier: "scran", district: home!, venue: hotel });
    expect(c.total).toBeGreaterThan(0);
    expect(c.total).toBeLessThan(60);
  });

  it("gives every district a positive drive, distance and peak penalty", () => {
    for (const d of DISTRICTS) {
      expect(d.driveMinutes).toBeGreaterThan(0);
      expect(d.km).toBeGreaterThan(0);
      expect(d.peakExtra).toBeGreaterThan(0);
    }
  });

  it("has no duplicate ids in either list", () => {
    expect(new Set(DISTRICTS.map((d) => d.id)).size).toBe(DISTRICTS.length);
    expect(new Set(VENUE_TYPES.map((v) => v.id)).size).toBe(VENUE_TYPES.length);
  });
});

describe("transport actually varies with where the event is", () => {
  it("costs more the further out the venue is", () => {
    const near = transportCost({ tier: "plated", district: sanIsidro, venue: hotel });
    const far = transportCost({ tier: "plated", district: asia, venue: hotel });
    expect(far.total).toBeGreaterThan(near.total * 2);
  });

  it("charges rush hour, because evening events load in during it", () => {
    const off = transportCost({ tier: "plated", district: sanIsidro, venue: hotel });
    const peak = transportCost({ tier: "plated", district: sanIsidro, venue: hotel, peak: true });
    expect(peak.total).toBeGreaterThan(off.total);
  });

  it("charges the drive once per van run, not once per event", () => {
    const one = transportCost({ tier: "scran", district: asia, venue: hotel });
    const two = transportCost({ tier: "plated", district: asia, venue: hotel });
    expect(VAN_TRIPS.plated).toBeGreaterThan(VAN_TRIPS.scran);
    expect(two.driveMinutes).toBe(one.driveMinutes * (VAN_TRIPS.plated / VAN_TRIPS.scran));
  });

  it("prices a walk-up apartment above a hotel with a goods entrance", () => {
    const easy = transportCost({ tier: "plated", district: sanIsidro, venue: hotel });
    const hard = transportCost({ tier: "plated", district: sanIsidro, venue: venue("apartment") });
    expect(hard.total).toBeGreaterThan(easy.total);
  });

  it("prices a generator in when a live station has no mains power", () => {
    const garden = venue("garden");
    expect(garden.hasPower).toBe(false);
    const withStation = transportCost({
      tier: "buffet", district: sanIsidro, venue: garden, liveStation: true
    });
    const without = transportCost({
      tier: "buffet", district: sanIsidro, venue: garden, liveStation: false
    });
    expect(withStation.total).toBeGreaterThan(without.total);
    expect(withStation.warnings.join(" ")).toMatch(/generator/i);
  });

  it("warns rather than quoting silently on a long haul", () => {
    const c = transportCost({ tier: "plated", district: asia, venue: hotel });
    expect(c.warnings.join(" ")).toMatch(/minutes each way/i);
  });
});

describe("the flat figure the tiers used to carry", () => {
  it("understates a far-out plated event badly", () => {
    // This is the whole reason the module exists: the old flat number was the
    // same for Magdalena and for Asia, 97 km down the Panamericana.
    const real = transportCost({ tier: "plated", district: asia, venue: hotel, peak: true });
    expect(real.total).toBeGreaterThan(TIERS.plated.transport);
  });
});

describe("the quote uses the venue when it is given", () => {
  const dishes = DISHES.filter((d) => [1, 133, 121, 130].includes(d.id));

  it("falls back to the flat figure and says so when no venue is set", () => {
    const q = buildQuote({ dishes, guests: 40, tier: "plated" });
    const line = q.serviceLines.find((l) => /Transport/.test(l.label))!;
    expect(line.total).toBe(TIERS.plated.transport);
    expect(line.label).toMatch(/no venue set/i);
  });

  it("names the district and venue on the line once they are set", () => {
    const q = buildQuote({
      dishes, guests: 40, tier: "plated", district: sanIsidro, venue: hotel
    });
    const line = q.serviceLines.find((l) => /Transport/.test(l.label))!;
    expect(line.label).toContain("San Isidro");
    expect(line.label).toContain(hotel.name);
  });

  it("moves the per-guest price when only the district changes", () => {
    const near = buildQuote({ dishes, guests: 40, tier: "plated", district: sanIsidro, venue: hotel });
    const far = buildQuote({ dishes, guests: 40, tier: "plated", district: asia, venue: hotel });
    expect(far.netPerGuest).toBeGreaterThan(near.netPerGuest);
  });

  it("carries the venue's own warnings into the quote", () => {
    const q = buildQuote({
      dishes, guests: 40, tier: "plated", district: asia, venue: venue("beach")
    });
    expect(q.warnings.join(" ")).toMatch(/no kitchen|minutes each way/i);
  });
});
