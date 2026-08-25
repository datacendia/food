import { DISHES } from "@/data/dishes";
import { FLAVOURS } from "@/data/flavours";
import { SOURCING } from "@/data/sourcing";
import { CATEGORY_ORDER, FLAVOUR_AXES, FORMAT_LABEL } from "@/lib/dishes";
import { marginFlag, foodCostRatio } from "@/lib/pricing";

describe("the matrix", () => {
  it("holds a contiguous run of ids with no gaps and no duplicates", () => {
    // The count is not fixed - the spreadsheet is the master and grows. What
    // must hold is that ids run 1..n unbroken, or the importer dropped a row.
    const ids = DISHES.map((d) => d.id).sort((a, b) => a - b);
    expect(new Set(ids).size).toBe(DISHES.length);
    expect(ids[0]).toBe(1);
    expect(ids[ids.length - 1]).toBe(DISHES.length);
    for (let i = 0; i < ids.length; i++) expect(ids[i]).toBe(i + 1);
  });

  it("fuses in both directions, not just British dish to Peruvian ingredient", () => {
    // The matrix started one-way: a UK or European dish rebuilt with Peruvian
    // produce. A Peruvian-base block is what makes it a fusion rather than a
    // substitution exercise, so it has to stay a real share of the menu.
    const peruvianBase = DISHES.filter((d) => d.subOrigin === "Peruvian");
    expect(peruvianBase.length).toBeGreaterThanOrEqual(20);

    // A Peruvian-base dish that names no European move is just a Peruvian dish.
    const noMove = peruvianBase
      .filter((d) => !/scottish|nordic|basque|english|greek|european/i.test(d.fusion))
      .map((d) => `${d.id} ${d.name}`);
    expect(noMove).toEqual([]);

    // And it has to be a real menu, not twenty canapes: at least four
    // categories and both a cooked-to-order and a boxed format.
    expect(new Set(peruvianBase.map((d) => d.category)).size).toBeGreaterThanOrEqual(4);
    expect(peruvianBase.some((d) => d.format === "drop-off")).toBe(true);
    expect(peruvianBase.some((d) => d.format === "live-station")).toBe(true);
  });

  it("uses only known categories and formats", () => {
    for (const d of DISHES) {
      expect(CATEGORY_ORDER).toContain(d.category);
      expect(Object.keys(FORMAT_LABEL)).toContain(d.format);
    }
  });

  it("prices every dish above its cost", () => {
    for (const d of DISHES) expect(d.price).toBeGreaterThan(d.cost);
  });

  it("keeps every dish at or under the 32% food-cost ceiling", () => {
    const over = DISHES.filter((d) => foodCostRatio(d) > 0.32).map((d) => `${d.id} ${d.name}`);
    expect(over).toEqual([]);
  });

  it("gives every dish at least one tier, consistent with its service format", () => {
    for (const d of DISHES) {
      expect(d.tiers.length).toBeGreaterThan(0);
      // A plated-only dish must never be offered in a drop-off box.
      if (d.format === "plated") expect(d.tiers).toEqual(["plated"]);
      if (d.format === "drop-off") expect(d.tiers).toContain("scran");
      // Live stations need staff on site, so never the unstaffed box tier.
      if (d.format === "live-station") expect(d.tiers).not.toContain("scran");
    }
  });

  it("marks every cost unverified, because none have been checked", () => {
    const claimed = DISHES.filter((d) => d.costVerified).map((d) => d.id);
    expect(claimed).toEqual([]);
  });

  it("flags contested provenance rather than overclaiming", () => {
    const contested = DISHES.filter((d) => d.contested);
    for (const d of contested) expect(d.subOrigin.toLowerCase()).toContain("disputed");
    // Sticky toffee pudding's origin is genuinely disputed; it must not read as Scottish.
    const sticky = DISHES.find((d) => /sticky toffee/i.test(d.name));
    if (sticky) expect(sticky.contested).toBe(true);
  });

  it("keeps Scottish the largest single line, by a clear margin", () => {
    /*
     * THIS RULE CHANGED, DELIBERATELY.
     *
     * It used to be "Scottish above half the matrix", written when the matrix
     * ran one direction only - a British dish rebuilt with Peruvian produce.
     * Under that shape, Scottish-above-half and a real Peruvian-base presence
     * are arithmetically incompatible: holding 50% while taking Peruvian to a
     * third would need a 220-dish menu, which is a business problem rather
     * than a feature.
     *
     * What the brand thesis actually needs is that Scottish leads. So that is
     * what is asserted: the largest line, and at least double the next
     * non-Peruvian one. Peruvian is allowed to be the clear second, because
     * the buyers are Peruvian and a Lima client wants their own food treated
     * as a base rather than as a pantry.
     *
     * If you disagree, this is the line to change back.
     */
    const byLine = new Map<string, number>();
    for (const d of DISHES) {
      const line = d.subOrigin.startsWith("Scottish") ? "Scottish" : d.subOrigin;
      byLine.set(line, (byLine.get(line) ?? 0) + 1);
    }
    const scottish = byLine.get("Scottish") ?? 0;
    const others = [...byLine.entries()].filter(([k]) => k !== "Scottish");

    for (const [line, n] of others) {
      expect(scottish).toBeGreaterThan(n);
      // Peruvian may be a strong second; nothing else may come close.
      if (line !== "Peruvian") expect(scottish).toBeGreaterThanOrEqual(n * 2);
    }
    expect(scottish / DISHES.length).toBeGreaterThan(0.4);
  });

  it("gives the Peruvian base enough of the menu to be a real half of the fusion", () => {
    const peruvian = DISHES.filter((d) => d.subOrigin === "Peruvian").length;
    expect(peruvian / DISHES.length).toBeGreaterThan(0.18);
  });

  it("leaves most of the matrix sellable without a liquor licence", () => {
    const free = DISHES.filter((d) => !d.needsLicence).length;
    expect(free).toBeGreaterThan(100);
  });

  it("names a Lima source for every dish", () => {
    const missing = DISHES.filter((d) => !d.source.trim()).map((d) => d.id);
    expect(missing).toEqual([]);
  });
});

describe("flavour map", () => {
  it("covers every dish, with known axes only", () => {
    for (const d of DISHES) {
      const f = FLAVOURS[d.id];
      expect(f).toBeDefined();
      expect(f.length).toBeGreaterThan(0);
      expect(f.length).toBeLessThanOrEqual(3);
      for (const axis of f) expect(FLAVOUR_AXES).toContain(axis);
      expect(new Set(f).size).toBe(f.length);
    }
  });

  it("has no orphan entries", () => {
    const ids = new Set(DISHES.map((d) => d.id));
    expect(Object.keys(FLAVOURS).filter((k) => !ids.has(Number(k)))).toEqual([]);
  });

  it("calls every bakery and dessert sweet", () => {
    const wrong = DISHES.filter(
      (d) => (d.category === "bakery" || d.category === "dessert") && !FLAVOURS[d.id].includes("sweet")
    ).map((d) => d.id);
    expect(wrong).toEqual([]);
  });

  it("uses every axis, or the compass has a dead button", () => {
    const unused = FLAVOUR_AXES.filter(
      (a) => !Object.values(FLAVOURS).some((list) => list.includes(a))
    );
    expect(unused).toEqual([]);
  });
});

describe("sourcing", () => {
  it("lists the supply lines with something to verify at each", () => {
    expect(SOURCING.length).toBeGreaterThanOrEqual(8);
    for (const s of SOURCING) {
      expect(s.name.trim()).not.toBe("");
      expect(s.verify.trim()).not.toBe("");
    }
  });
});

describe("margin flags", () => {
  it("reports headroom as under, not as an error", () => {
    expect(marginFlag({ cost: 2, price: 12 })).toBe("under");
    expect(marginFlag({ cost: 5, price: 12 })).toBe("over");
  });
});
