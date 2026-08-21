import type { EventType } from "@/lib/dishes";

/**
 * The Event Finder: what someone is planning, expressed as a filter over the
 * matrix. Declarative rather than code so the standalone build can serialise
 * it and apply the identical rules in the browser.
 *
 * A dish matches when it satisfies every clause that is present:
 *   tier         - offered at this service tier
 *   categories   - in one of these categories
 *   anyTags      - carries at least one of these tags
 *   excludeTags  - carries none of these tags
 */
export const EVENTS: EventType[] = [
  {
    id: "corporate",
    name: "Corporate lunch",
    blurb:
      "Drop-off boxes for an office. No staff, no hired china, no licence — the fastest thing you can sell.",
    filter: { tier: "scran", categories: ["main", "sweet", "side"] }
  },
  {
    id: "cocktail",
    name: "Cocktail hour",
    blurb:
      "Passed bites and a signature drink. Priced per guest at 6–8 bites, never per piece.",
    filter: { categories: ["canape", "drink"] }
  },
  {
    id: "wedding",
    name: "Wedding or VIP dinner",
    blurb:
      "Full plated service with an on-site chef. The tier that carries menaje and floor staff.",
    filter: { tier: "plated" }
  },
  {
    id: "afternoon-tea",
    name: "Afternoon tea",
    blurb:
      "The Scottish bakery window, rebuilt on Peruvian fruit. Scones, teacakes, shortbread, curd.",
    filter: { categories: ["sweet"], excludeTags: ["alcohol"] }
  },
  {
    id: "breakfast",
    name: "Breakfast & morning",
    blurb: "Early starts for conferences and shoots. Everything here travels in a box.",
    filter: { anyTags: ["breakfast"] }
  },
  {
    id: "tasting-box",
    name: "Tasting box",
    blurb:
      "The lead-generation product. Everything make-ahead, everything survives a drive across Lima.",
    filter: { categories: ["sweet"], anyTags: ["make-ahead"] }
  },
  {
    id: "no-licence",
    name: "No liquor licence yet",
    blurb:
      "Everything you can legally sell before the giro especial clears. Cooking with alcohol is fine; selling drinks is not.",
    filter: { excludeTags: ["alcohol"] }
  },
  {
    id: "vegetarian",
    name: "Vegetarian menu",
    blurb: "A full three courses without meat or fish, not an afterthought side.",
    filter: { anyTags: ["vegetarian", "vegan"] }
  }
];
