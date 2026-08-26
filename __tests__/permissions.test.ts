import { DISHES } from "@/data/dishes";
import {
  visibleDish, visibleDishes, quoteScope, assertCan, CAN
} from "@/lib/permissions";
import { ROLES, type Role } from "@/db/schema";

/**
 * The whole point of putting a server in front of this menu.
 *
 * The standalone file carries all 223 costs, prices, suppliers and food-cost
 * percentages, so anyone holding it holds the commercial position. A login is
 * only worth having if the figures never reach the browser. Hiding a column in
 * CSS leaves the number in the payload; these tests read the payload.
 */
describe("no cost figure reaches anyone who may not see it", () => {
  it("strips cost, supplier and verification from every dish for a chef", () => {
    for (const d of DISHES) {
      const v = visibleDish(d, "chef") as Record<string, unknown>;
      expect(v).not.toHaveProperty("cost");
      expect(v).not.toHaveProperty("source");
      expect(v).not.toHaveProperty("costVerified");
      expect(v).not.toHaveProperty("price");
    }
  });

  it("strips cost, supplier and verification from every dish for a client", () => {
    for (const d of DISHES) {
      const v = visibleDish(d, "client") as Record<string, unknown>;
      expect(v).not.toHaveProperty("cost");
      expect(v).not.toHaveProperty("source");
      expect(v).not.toHaveProperty("costVerified");
      // A client is quoted a price, so this one stays.
      expect(v).toHaveProperty("price");
    }
  });

  /**
   * The one that actually matters. A missing property is not enough: the value
   * must not survive anywhere in the serialised payload, under any key. This
   * catches a future field that quietly carries a cost - a computed margin, a
   * "was" price, a supplier note glued into a description.
   */
  it("leaves no cost value anywhere in a chef or client payload", () => {
    for (const role of ["chef", "client"] as Role[]) {
      const payload = JSON.stringify(visibleDishes(DISHES, role));
      const leaks: string[] = [];
      for (const d of DISHES) {
        // Costs are small numbers that also occur innocently (a dish id, a
        // guest count), so check for the cost as a JSON value, not a substring
        // of the whole document.
        const asValue = new RegExp(`"(cost|source|costVerified)"\\s*:`, "g");
        if (asValue.test(payload)) leaks.push(`${d.id} ${d.name}`);
      }
      expect({ role, leaks: leaks.slice(0, 5) }).toEqual({ role, leaks: [] });

      for (const key of ["cost", "source", "costVerified"]) {
        expect(payload).not.toContain(`"${key}"`);
      }
      if (role === "chef") expect(payload).not.toContain(`"price"`);
    }
  });

  it("gives an owner the dish untouched", () => {
    for (const d of DISHES) expect(visibleDish(d, "owner")).toBe(d);
  });

  it("keeps everything a chef needs in order to cook", () => {
    for (const d of DISHES) {
      const v = visibleDish(d, "chef") as Record<string, unknown>;
      for (const kept of ["id", "name", "category", "format", "veg",
                          "allergens", "equipment", "keyIngredients", "tiers"]) {
        expect(v).toHaveProperty(kept);
      }
    }
  });
});

describe("a client sees their own work and nobody else's", () => {
  it("narrows a client to their own id", () => {
    expect(quoteScope("client", "abc")).toEqual({ clientId: "abc" });
  });

  it("refuses a client with no client record rather than showing everything", () => {
    // The dangerous default. A client login not yet attached to a client must
    // resolve to nothing, never to `all`.
    expect(quoteScope("client", null)).toEqual({ none: true });
  });

  it("lets an owner and a chef see the lot", () => {
    expect(quoteScope("owner", null)).toEqual({ all: true });
    expect(quoteScope("chef", null)).toEqual({ all: true });
  });
});

describe("the permission table says what it means", () => {
  it("lets only the owner see money", () => {
    expect(ROLES.filter((r) => CAN.seeMoney(r))).toEqual(["owner"]);
  });

  it("lets only the owner write a quote or a booking", () => {
    expect(ROLES.filter((r) => CAN.writeQuotes(r))).toEqual(["owner"]);
    expect(ROLES.filter((r) => CAN.writeBookings(r))).toEqual(["owner"]);
  });

  it("lets a chef record a market price, because a chef does the buying", () => {
    expect(ROLES.filter((r) => CAN.writePrices(r))).toEqual(["owner", "chef"]);
  });

  it("keeps a client out of the kitchen", () => {
    expect(CAN.seeKitchen("client")).toBe(false);
  });

  it("throws rather than half-rendering a page nobody may see", () => {
    expect(() => assertCan(CAN.seeMoney, "chef", "see the food cost"))
      .toThrow(/a chef cannot see the food cost/);
    expect(() => assertCan(CAN.seeMoney, "owner", "see the food cost")).not.toThrow();
  });
});
