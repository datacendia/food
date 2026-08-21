import type { EventType } from "@/lib/dishes";

/**
 * The Event Finder: what someone is planning, expressed as a filter over the
 * matrix. Declarative so the standalone build applies identical rules.
 *
 * A dish matches when it satisfies every clause present. See matchesEvent().
 */
export const EVENTS: EventType[] = [
  {
    id: "corporate",
    name: "Corporate lunch",
    blurb:
      "Drop-off boxes for an office. No staff, no hired china, no licence — the fastest thing you can sell.",
    filter: { tier: "scran", formats: ["drop-off"] }
  },
  {
    id: "cocktail",
    name: "Cocktail hour",
    blurb: "Passed bites, priced per guest at 6–8 pieces, never per piece.",
    filter: { categories: ["canape"] }
  },
  {
    id: "wedding",
    name: "Needs a chef on site",
    blurb:
      "Plated and live-station dishes — the ones that cannot be dropped off. This is what makes an event feel catered rather than delivered.",
    // Filtering by tier would match everything: a drop-off box item is still
    // servable at a plated dinner. Format is the real constraint.
    filter: { formats: ["plated", "live-station"] }
  },
  {
    id: "afternoon-tea",
    name: "Afternoon tea",
    blurb: "The Scottish bakery window, rebuilt on Peruvian fruit. No licence needed.",
    filter: { categories: ["bakery", "dessert"], needsLicence: false }
  },
  {
    id: "breakfast",
    name: "Breakfast & morning",
    blurb: "Early starts for conferences and shoots. Rolls, scones, porridge, butteries.",
    filter: { categories: ["breakfast"] }
  },
  {
    id: "tasting-box",
    name: "Tasting box",
    blurb: "The lead-generation product. Bakery that travels, boxes, and survives a hot van.",
    filter: { categories: ["bakery"], formats: ["drop-off"] }
  },
  {
    id: "live-station",
    name: "Live station",
    blurb:
      "Cooked in front of the guest. The theatre tier — griddles, plancha, fried-to-order. Price the show, not the ingredients.",
    filter: { formats: ["live-station"] }
  },
  {
    id: "no-licence",
    name: "No liquor licence yet",
    blurb:
      "Everything sellable before the giro especial clears. Cooking with alcohol is fine; selling drinks is not.",
    filter: { needsLicence: false }
  },
  {
    id: "vegetarian",
    name: "Vegetarian menu",
    blurb: "A full spread without meat or fish, not an afterthought side.",
    filter: { veg: true }
  },
  {
    id: "heritage-scottish",
    name: "Scottish heritage",
    blurb: "The Glasgow core of the matrix — the dishes the brand thesis rests on.",
    filter: { subOrigins: ["Scottish"] }
  },
  {
    id: "beyond-britain",
    name: "Beyond Britain",
    blurb: "Greek, Nordic and Basque lines. Where the menu widens past the Scottish spine.",
    filter: { subOrigins: ["Greek", "Nordic", "Basque"] }
  }
];
