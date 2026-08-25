import type { Veda } from "@/lib/vedas";

/**
 * Peru's legal closed seasons.
 *
 * A veda is not a preference or a seasonality note. Selling a species inside
 * its closed season is an offence under Peruvian fisheries law, enforced by
 * PRODUCE and SANIPES, and "the supplier said it was fine" is not a defence.
 * The consequence for a caterer is a fine and a closed kitchen.
 *
 * ═══ THE DATES BELOW ARE ESTIMATES AND THEY MOVE EVERY YEAR. ═══
 *
 * PRODUCE publishes each veda by resolución ministerial, usually weeks before
 * it starts, and extends or lifts them on stock assessments. Two vedas can run
 * in the same year for the same species. What is encoded here is the usual
 * shape of the year, so the app can stop you quoting something obviously
 * illegal - it is a prompt to check, never a substitute for checking.
 *
 * Before any event that sells one of these, confirm against the current RM at
 * gob.pe/produce. `verified: false` on every row below means nobody has.
 */
export const VEDAS: Veda[] = [
  {
    id: "langostino-wild",
    species: "Wild river shrimp (camarón de río)",
    /** Months the sale is closed, 1-12. */
    closed: [1, 2, 3],
    ingredientKeys: ["langostino"],
    note:
      "Farmed langostino runs year-round and is legal throughout. Wild camarón de río is closed roughly December to March. If you cannot prove which you bought, you are holding the wild one.",
    verified: false
  },
  {
    id: "anchoveta",
    species: "Anchoveta",
    closed: [8, 9],
    ingredientKeys: ["good anchovy fillet in oil"],
    note:
      "The industrial veda drives the whole coast's supply. Tinned Spanish anchovy is unaffected; local salted anchovy is not.",
    verified: false
  },
  {
    id: "bonito",
    species: "Bonito",
    closed: [10, 11],
    ingredientKeys: ["bonito loin"],
    note: "A reproductive veda that moves with water temperature. Check the RM before the event.",
    verified: false
  },
  {
    id: "corvina",
    species: "Corvina",
    closed: [9, 10],
    ingredientKeys: ["corvina", "corvina fillet", "smoked corvina"],
    note:
      "Corvina carries a size limit as well as a closed season - under 55 cm is illegal to land regardless of month.",
    verified: false
  },
  {
    id: "chita",
    species: "Chita",
    closed: [9, 10, 11],
    ingredientKeys: ["chita"],
    note: "Size limit 24 cm alongside the closed season.",
    verified: false
  },
  {
    id: "cangrejo",
    species: "Cangrejo (crab)",
    closed: [9, 10, 11],
    ingredientKeys: ["crab meat", "crab shell"],
    note:
      "The partan bree and the chupe de cangrejo both live or die on this one. Peru closes crab on a reproductive veda that also carries a minimum carapace width, and a female carrying eggs is illegal in any month. Buy picked meat and you cannot see either, so buy from someone who can show you the landing paperwork.",
    verified: false
  },
  {
    id: "concha-de-abanico",
    species: "Concha de abanico (scallop)",
    closed: [7, 8, 9],
    ingredientKeys: ["concha de abanico"],
    note:
      "Scallop vedas are set by bank rather than nationally - Sechura, Paracas and Bahía Independencia all close on their own resoluciones - so a month that is closed for one bank is open for another. The months here are the usual overlap and nothing more.",
    verified: false
  },
  {
    id: "pulpo",
    species: "Pulpo (octopus)",
    closed: [7, 8],
    ingredientKeys: ["baby squid"],
    note:
      "The octopus veda is the well-known one; squid is separate and generally open. Listed because the two are bought from the same stall and confused constantly.",
    verified: false
  }
];
