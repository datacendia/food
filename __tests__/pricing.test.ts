import {
  IGV_RATE,
  addIgv,
  removeIgv,
  foodCostRatio,
  marginFlag,
  buildQuote,
  TIERS
} from "@/lib/pricing";
import { DISHES } from "@/data/dishes";
import type { Dish } from "@/lib/dishes";

const byId = (id: number): Dish => {
  const d = DISHES.find((x) => x.id === id);
  if (!d) throw new Error(`No dish ${id}`);
  return d;
};

describe("IGV", () => {
  it("is 18%", () => {
    expect(IGV_RATE).toBeCloseTo(0.18);
  });

  it("round-trips", () => {
    expect(removeIgv(addIgv(400))).toBeCloseTo(400, 6);
  });

  it("adds S/ 72 to a S/ 400 net head price", () => {
    expect(addIgv(400) - 400).toBeCloseTo(72, 6);
  });

  // The mistake this codebase exists to prevent: quoting 400 gross while
  // budgeting as if it were net loses ~61 per guest.
  it("costs S/ 61.02 per guest when a gross quote is mistaken for net", () => {
    const quotedGross = 400;
    const actuallyKept = removeIgv(quotedGross);
    expect(quotedGross - actuallyKept).toBeCloseTo(61.02, 2);
  });
});

describe("food cost ratios", () => {
  it("computes the ratio", () => {
    expect(foodCostRatio({ cost: 3, price: 12 })).toBeCloseTo(0.25);
  });

  it("flags an over-spec dish", () => {
    expect(marginFlag({ cost: 5, price: 12 })).toBe("over");
  });

  it("flags headroom as under, not as an error", () => {
    expect(marginFlag({ cost: 2, price: 12 })).toBe("under");
  });

  it("rejects a zero price rather than dividing by zero", () => {
    expect(() => foodCostRatio({ cost: 3, price: 0 })).toThrow();
  });
});

describe("buildQuote", () => {
  // canapé, canapé, plated main, bakery — a realistic plated selection
  const platedMenu = [byId(1), byId(2), byId(26), byId(77)];

  it("rejects an empty menu", () => {
    expect(() => buildQuote({ dishes: [], guests: 20, tier: "plated" })).toThrow(
      /at least one dish/
    );
  });

  it("rejects a nonsense head count", () => {
    expect(() => buildQuote({ dishes: platedMenu, guests: 0, tier: "plated" })).toThrow(
      /positive number/
    );
  });

  it("warns below the tier minimum instead of silently quoting", () => {
    const q = buildQuote({ dishes: platedMenu, guests: 4, tier: "plated" });
    expect(q.warnings.join(" ")).toMatch(/20-guest minimum/);
  });

  it("counts canapes as bites per guest, not one of each", () => {
    // Two canapes on an 8-bite tier should bill 8 bites total, not 2 pieces.
    const twoCanapes = [byId(1), byId(2)];
    const q = buildQuote({ dishes: twoCanapes, guests: 20, tier: "scran" });
    const avgPrice = (byId(1).price + byId(2).price) / 2;
    expect(q.menuValuePerGuest).toBeCloseTo(avgPrice * TIERS.scran.bitesPerGuest, 6);
  });

  it("subtracts service costs before calling anything contribution", () => {
    const q = buildQuote({ dishes: platedMenu, guests: 20, tier: "plated" });
    expect(q.serviceCostPerGuest).toBeGreaterThan(0);
    // Contribution must be strictly less than the naive revenue-minus-food figure.
    const naive = q.netPerGuest - q.foodCostPerGuest;
    expect(q.contributionPerGuest).toBeLessThan(naive);
    expect(q.contributionPerGuest).toBeCloseTo(naive - q.serviceCostPerGuest, 6);
  });

  it("charges IGV on top of the net total", () => {
    const q = buildQuote({ dishes: platedMenu, guests: 20, tier: "plated" });
    expect(q.igvTotal).toBeCloseTo(q.netTotal * IGV_RATE, 6);
    expect(q.grossTotal).toBeCloseTo(q.netTotal + q.igvTotal, 6);
  });

  it("spreads per-event costs, so bigger events cost less per head", () => {
    const small = buildQuote({ dishes: platedMenu, guests: 20, tier: "plated" });
    const large = buildQuote({ dishes: platedMenu, guests: 60, tier: "plated" });
    expect(large.serviceCostPerGuest).toBeLessThan(small.serviceCostPerGuest);
  });

  it("adds no menaje to a Scran Box, and no packaging to plated service", () => {
    const box = buildQuote({ dishes: [byId(77)], guests: 20, tier: "scran" });
    expect(box.serviceLines.find((l) => l.label === "Menaje hire")).toBeUndefined();

    const plated = buildQuote({ dishes: platedMenu, guests: 20, tier: "plated" });
    expect(plated.serviceLines.find((l) => l.label === "Packaging")).toBeUndefined();
  });

  it("keeps a plated dinner in a sane commercial range", () => {
    const q = buildQuote({ dishes: platedMenu, guests: 20, tier: "plated" });
    expect(q.netPerGuest).toBeGreaterThan(150);
    expect(q.netPerGuest).toBeLessThan(700);
    expect(q.contributionRatio).toBeGreaterThan(0.3);
  });
});
