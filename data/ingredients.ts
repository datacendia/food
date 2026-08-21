import type { Ingredient } from "@/lib/dishes";

/**
 * Seasonal ingredients and the dishes that depend on them.
 *
 * TWO DIFFERENT KINDS OF DATA LIVE HERE, and they have very different
 * reliability:
 *
 *   dishes[]  - which dishes use this ingredient. Derived from the matrix
 *               itself and checked by __tests__/seasonal.test.ts. Trustworthy.
 *
 *   months[]  - when it peaks in Lima. EVERY ONE OF THESE IS A GUESS.
 *               `verified: false` means nobody has confirmed it at a market.
 *               Fix them as you buy through the year, and flip verified to
 *               true once you have actually seen it in Surquillo in that month.
 *
 * Months are 1-12, January to December. Peru is southern hemisphere: summer is
 * December-March, winter is June-September.
 *
 * A `veda` note means Peru enforces a legal closed season on that species. The
 * dates move year to year and are published by PRODUCE - check before selling
 * anything that depends on it.
 */
export const INGREDIENTS: Ingredient[] = [
  {
    id: "lucuma",
    name: "Lúcuma",
    note: "The caramel note in the Millionaire's, the Bakewell and the marmalade.",
    months: [3, 4, 5, 6],
    yearRound: false,
    verified: false,
    dishes: [17, 37, 90]
  },
  {
    id: "chirimoya",
    name: "Chirimoya",
    note: "Short window, and no substitute worth serving. Plan the Cranachan around it.",
    months: [4, 5, 6, 7, 8, 9],
    yearRound: false,
    verified: false,
    dishes: [18, 50]
  },
  {
    id: "aguaymanto",
    name: "Aguaymanto",
    note: "Your tart note across five dishes — the jam, the curd, the chutney, the cranachan.",
    months: [3, 4, 5, 6, 7, 8],
    yearRound: false,
    verified: false,
    dishes: [34, 69, 82, 86, 93]
  },
  {
    id: "maracuya",
    name: "Maracuyá",
    note: "Summer fruit. The Battenberg is a summer cake whether you meant it to be or not.",
    months: [1, 2, 3, 11, 12],
    yearRound: false,
    verified: false,
    dishes: [22, 81]
  },
  {
    id: "fresa",
    name: "Fresa",
    note: "The signature teacake lives or dies on this. Freeze-dried powder covers the gap.",
    months: [8, 9, 10, 11],
    yearRound: false,
    verified: false,
    dishes: [16]
  },
  {
    id: "asparagus",
    name: "Asparagus (Ica)",
    note: "Two harvests a year rather than one continuous season.",
    months: [2, 3, 4, 8, 9, 10, 11],
    yearRound: false,
    verified: false,
    dishes: [14]
  },
  {
    id: "papa-nativa",
    name: "Papas nativas",
    note: "Highland harvest follows the rains. Storage varieties bridge the rest of the year.",
    months: [4, 5, 6, 7],
    yearRound: false,
    verified: false,
    dishes: [9, 11, 12, 30, 31, 68, 71]
  },
  {
    id: "choclo",
    name: "Choclo",
    note: "Giant corn. Frozen kernels work for the champ but not for the scones.",
    months: [1, 2, 3, 4, 5],
    yearRound: false,
    verified: false,
    dishes: [36, 67, 79]
  },
  {
    id: "rocoto",
    name: "Rocoto",
    note: "Fresh heat. Freezes well — buy at peak and hold.",
    months: [1, 2, 3, 4, 11, 12],
    yearRound: false,
    verified: false,
    dishes: [1, 55, 73]
  },
  {
    id: "muna",
    name: "Muña",
    note: "Highland herb, driest months. Dries well; the bread sauce takes dried happily.",
    months: [5, 6, 7, 8],
    yearRound: false,
    verified: false,
    dishes: [80, 98]
  },
  {
    id: "berros",
    name: "Berros",
    note: "Watercress wants cool water. Bitter and tough in high summer.",
    months: [5, 6, 7, 8, 9],
    yearRound: false,
    verified: false,
    dishes: [31, 74]
  },
  {
    id: "langostinos",
    name: "Langostinos",
    note: "Farmed stock runs year-round; wild river shrimp has a veda. Confirm which you are buying.",
    months: [],
    yearRound: true,
    verified: false,
    dishes: [43, 58]
  },
  {
    id: "trucha-paiche",
    name: "Trout & paiche",
    note: "Both farmed, so supply is steady. Price moves more than availability.",
    months: [],
    yearRound: true,
    verified: false,
    dishes: [2, 8, 9, 31, 53, 60, 62]
  },
  {
    id: "aji-amarillo",
    name: "Ají amarillo",
    note: "Fresh peaks in summer; paste and frozen are available all year and are what you will mostly use.",
    months: [],
    yearRound: true,
    verified: false,
    dishes: [3, 6, 51, 62, 76, 85]
  },
  {
    id: "huacatay",
    name: "Huacatay",
    note: "Grows continuously on the coast. Buy small and often — it wilts fast.",
    months: [],
    yearRound: true,
    verified: false,
    dishes: [60, 70, 72]
  },
  {
    id: "camote",
    name: "Camote",
    note: "Stores for months. Never a reason to pull a dish.",
    months: [],
    yearRound: true,
    verified: false,
    dishes: [12, 40, 42, 92]
  },
  {
    id: "cacao",
    name: "Cacao (Piura)",
    note: "Bought as chocolate and nibs, not fruit — supply is a purchasing question, not a seasonal one.",
    months: [],
    yearRound: true,
    verified: false,
    dishes: [16, 48, 84, 91, 99]
  },
  {
    id: "chancaca",
    name: "Chancaca",
    note: "Unrefined sugar block. Keeps indefinitely.",
    months: [],
    yearRound: true,
    verified: false,
    dishes: [19, 88, 95, 99]
  },
  {
    id: "quinoa-kiwicha",
    name: "Quinoa & kiwicha",
    note: "Dry goods. Harvest affects price, not whether you can cook the dish.",
    months: [],
    yearRound: true,
    verified: false,
    dishes: [13, 27, 33, 38, 81]
  },
  {
    id: "cochayuyo",
    name: "Cochayuyo",
    note: "Dried Andean seaweed. Shelf-stable, buy once a year.",
    months: [],
    yearRound: true,
    verified: false,
    dishes: [57]
  }
];
