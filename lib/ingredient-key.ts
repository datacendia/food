/**
 * Folding the many ways a recipe names an ingredient down to one key.
 *
 * "Butter, softened", "butter (room temperature)" and "Butter" are one line on
 * a supplier's invoice, so they have to be one key here. The rules are
 * deliberately shallow and readable: anything clever would fold two genuinely
 * different ingredients together and quietly mis-cost a dish.
 */

/** Words that describe the prep, not the thing being bought. */
const PREP = new Set([
  "chopped", "finely", "coarsely", "sliced", "diced", "grated", "softened",
  "melted", "cubed", "minced", "crushed", "shredded", "peeled", "trimmed",
  "beaten", "whisked", "sifted", "soaked", "rinsed", "drained", "warmed",
  "cooled", "room", "temperature", "roughly", "thinly", "thickly", "picked",
  "stripped", "halved", "quartered", "scored", "cleaned", "boned", "skinned",
  "jointed", "filleted", "deseeded", "hulled", "zested", "juiced"
]);

/** Plurals that the trailing-s rule gets wrong. */
const IRREGULAR: Record<string, string> = {
  leaves: "leaf", loaves: "loaf", knives: "knife", haggis: "haggis",
  asparagus: "asparagus", couscous: "couscous", tomatoes: "tomato",
  potatoes: "potato", berries: "berry", cherries: "cherry", anchovies: "anchovy",
  chives: "chive", peas: "pea", oats: "oat", greens: "green", molasses: "molasses"
};

function stripAccents(s: string): string {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "");
}

function singular(word: string): string {
  if (word in IRREGULAR) return IRREGULAR[word];
  if (word.length > 3 && word.endsWith("s") && !word.endsWith("ss")) {
    return word.slice(0, -1);
  }
  return word;
}

/**
 * Phrases where taking the words before "or" loses the noun.
 *
 * "lamb or beef stock" is lamb STOCK, and reading it as "lamb" once put two
 * litres of lamb on a shopping list. A general rule for this overreaches -
 * it turned "lard or beef dripping" into "lard dripping" - so the handful of
 * real cases are listed instead, where they can be read and checked.
 */
const OR_OVERRIDE: Record<string, string> = {
  "lamb or beef stock": "lamb stock",
  "fish or light chicken stock": "fish stock"
};

/**
 * The key an ingredient line prices against.
 *
 * Everything after the first comma is prep, not product. An "X or Y" line
 * costs as X - the first option is the one the recipe intends, and pricing
 * the alternative would understate a substitution the cook chose not to make.
 */
export function canonicalIngredient(item: string): string {
  let s = stripAccents(String(item ?? "")).toLowerCase();
  s = s.split(",")[0];
  const override = OR_OVERRIDE[s.trim().replace(/\s+/g, " ")];
  if (override) return override;
  s = s.replace(/\([^)]*\)/g, " ");
  s = s.split(/\bor\b/)[0];
  s = s.replace(/[^a-z0-9%\s-]/g, " ");
  const words = s
    .split(/\s+/)
    .filter(Boolean)
    .filter((w) => !PREP.has(w))
    .map(singular);
  return words.join(" ").trim();
}
