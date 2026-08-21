import type { EventType } from "@/lib/dishes";

/**
 * The arc of an evening, in order.
 *
 * This is the body-map idea from the remedies site: instead of scrolling a
 * list, you point at the part of the night you are trying to fill. Each moment
 * maps onto the course that actually serves it, so the seven categories stop
 * being filing and start being a running order.
 */
export const MOMENTS: EventType[] = [
  {
    id: "arrival",
    name: "Arrival",
    blurb: "First fifteen minutes. One hand holds a drink, so everything here is one-bite and needs no cutlery.",
    filter: { categories: ["canape"], formats: ["drop-off"] }
  },
  {
    id: "passed",
    name: "Passed bites",
    blurb: "The circulating round, hot items included. Budget 6–8 pieces a guest.",
    filter: { categories: ["canape"] }
  },
  {
    id: "table",
    name: "The table",
    blurb: "What lands before the main — breads, sides, the things that make a table look full.",
    filter: { categories: ["side"] }
  },
  {
    id: "main",
    name: "Main",
    blurb: "The centrepiece, plated or from the buffet. Bowls sit here too for daytime events.",
    filter: { categories: ["main", "bowl"] }
  },
  {
    id: "sweet",
    name: "Sweet board",
    blurb: "Desserts proper — plated, spooned, or grazed from a board.",
    filter: { categories: ["dessert"] }
  },
  {
    id: "late",
    name: "Late night",
    blurb: "The hour that soaks up the drink. Rolls, sausage, anything eaten standing up.",
    filter: { categories: ["breakfast"] }
  },
  {
    id: "coffee",
    name: "Coffee",
    blurb: "Petits fours and the biscuit tin. Bakery that sits on a saucer.",
    filter: { categories: ["bakery"] }
  }
];
