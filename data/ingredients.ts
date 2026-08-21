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
    dishes: [60, 62, 65, 77, 80, 89, 94, 99, 104, 130]
  },
  {
    id: "chirimoya",
    name: "Chirimoya",
    note: "Short window, and no substitute worth serving. Plan the Cranachan around it.",
    months: [4, 5, 6, 7, 8, 9],
    yearRound: false,
    verified: false,
    dishes: [92]
  },
  {
    id: "aguaymanto",
    name: "Aguaymanto",
    note: "Your tart note across five dishes — the jam, the curd, the chutney, the cranachan.",
    months: [3, 4, 5, 6, 7, 8],
    yearRound: false,
    verified: false,
    dishes: [11, 12, 61, 71, 83, 102, 106, 119, 122, 129]
  },
  {
    id: "maracuya",
    name: "Maracuyá",
    note: "Summer fruit. The Battenberg is a summer cake whether you meant it to be or not.",
    months: [1, 2, 3, 11, 12],
    yearRound: false,
    verified: false,
    dishes: [82]
  },
  {
    id: "fresa",
    name: "Fresa",
    note: "The signature teacake lives or dies on this. Freeze-dried powder covers the gap.",
    months: [8, 9, 10, 11],
    yearRound: false,
    verified: false,
    dishes: [96]
  },
  {
    id: "asparagus",
    name: "Asparagus (Ica)",
    note: "Two harvests a year rather than one continuous season.",
    months: [2, 3, 4, 8, 9, 10, 11],
    yearRound: false,
    verified: false,
    dishes: [57]
  },
  {
    id: "papa-nativa",
    name: "Papas nativas",
    note: "Highland harvest follows the rains. Storage varieties bridge the rest of the year.",
    months: [4, 5, 6, 7],
    yearRound: false,
    verified: false,
    dishes: [7, 9, 20, 28, 31, 32, 46, 48, 50, 51, 55, 64, 67, 68, 79, 121, 124, 127]
  },
  {
    id: "choclo",
    name: "Choclo",
    note: "Giant corn. Frozen kernels work for the champ but not for the scones.",
    months: [1, 2, 3, 4, 5],
    yearRound: false,
    verified: false,
    dishes: [15, 35, 54, 97, 113]
  },
  {
    id: "rocoto",
    name: "Rocoto",
    note: "Fresh heat. Freezes well — buy at peak and hold.",
    months: [1, 2, 3, 4, 11, 12],
    yearRound: false,
    verified: false,
    dishes: [2, 23, 73, 109, 117]
  },
  {
    id: "muna",
    name: "Muña",
    note: "Highland herb, driest months. Dries well; the bread sauce takes dried happily.",
    months: [5, 6, 7, 8],
    yearRound: false,
    verified: false,
    dishes: [123]
  },
  {
    id: "berros",
    name: "Berros",
    note: "Watercress wants cool water. Bitter and tough in high summer.",
    months: [5, 6, 7, 8, 9],
    yearRound: false,
    verified: false,
    dishes: [68]
  },
  {
    id: "langostinos",
    name: "Langostinos",
    note: "Farmed stock runs year-round; wild river shrimp has a veda. Confirm which you are buying.",
    months: [],
    yearRound: true,
    verified: false,
    dishes: [18]
  },
  {
    id: "trucha-paiche",
    name: "Trout & paiche",
    note: "Both farmed, so supply is steady. Price moves more than availability.",
    months: [],
    yearRound: true,
    verified: false,
    dishes: [3, 7, 11, 13, 24, 28, 38, 43, 44, 68, 72, 74, 118, 125]
  },
  {
    id: "aji-amarillo",
    name: "Ají amarillo",
    note: "Fresh peaks in summer; paste and frozen are available all year and are what you will mostly use.",
    months: [],
    yearRound: true,
    verified: false,
    dishes: [1, 4, 5, 10, 16, 21, 26, 29, 32, 36, 43, 45, 64, 68, 75, 111, 126, 128]
  },
  {
    id: "huacatay",
    name: "Huacatay",
    note: "Grows continuously on the coast. Buy small and often — it wilts fast.",
    months: [],
    yearRound: true,
    verified: false,
    dishes: [1, 14, 23, 39, 42, 75]
  },
  {
    id: "camote",
    name: "Camote",
    note: "Stores for months. Never a reason to pull a dish.",
    months: [],
    yearRound: true,
    verified: false,
    dishes: [17, 55, 66]
  },
  {
    id: "cacao",
    name: "Cacao (Piura)",
    note: "Bought as chocolate and nibs, not fruit — supply is a purchasing question, not a seasonal one.",
    months: [],
    yearRound: true,
    verified: false,
    dishes: [76, 77, 79, 81, 91, 96, 100, 102, 105, 108]
  },
  {
    id: "chancaca",
    name: "Chancaca",
    note: "Unrefined sugar block. Keeps indefinitely.",
    months: [],
    yearRound: true,
    verified: false,
    dishes: [6, 16, 40, 58, 84, 91, 95, 105]
  },
  {
    id: "quinoa-kiwicha",
    name: "Quinoa & kiwicha",
    note: "Dry goods. Harvest affects price, not whether you can cook the dish.",
    months: [],
    yearRound: true,
    verified: false,
    dishes: [34, 49, 61, 70, 91, 98, 110, 120]
  },
];
