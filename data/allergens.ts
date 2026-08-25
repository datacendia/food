/**
 * The allergen vocabulary. One list, in one file.
 *
 * There used to be four copies of this: a hand-typed eight-word list in the
 * spreadsheet, a second in lib/conflicts.ts, a third hardcoded into the
 * standalone's conflict checker, and the real one in lib/dietary.ts. The three
 * short copies could not name celery, mustard, sesame, soya, sulphites or
 * lupin - six of the fourteen the EU requires - so nothing that read them could
 * warn about those, and the menu row disagreed with its own recipe on 165 of
 * 223 dishes.
 *
 * It lives under data/ rather than lib/ because the standalone build reads
 * data modules directly, and the page must check the same list the app does.
 */

/** The 14 declarable allergens, plus two restrictions that behave like them. */
export const ALLERGENS = [
  "gluten", "crustaceans", "eggs", "fish", "peanuts", "soya", "milk", "nuts",
  "celery", "mustard", "sesame", "sulphites", "lupin", "molluscs",
  "pork", "alcohol"
] as const;

export type Allergen = (typeof ALLERGENS)[number];

export const ALLERGEN_LABEL: Record<Allergen, string> = {
  gluten: "Gluten", crustaceans: "Crustaceans", eggs: "Eggs", fish: "Fish",
  peanuts: "Peanuts", soya: "Soya", milk: "Milk", nuts: "Tree nuts",
  celery: "Celery", mustard: "Mustard", sesame: "Sesame", sulphites: "Sulphites",
  lupin: "Lupin", molluscs: "Molluscs", pork: "Pork", alcohol: "Alcohol"
};
