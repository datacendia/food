/**
 * Rewrite the allergen list on every row of data/dishes.ts from the recipes.
 *
 * The spreadsheet used to carry a hand-typed allergen column, and it was the
 * one the client-facing filters read. It disagreed with the recipes on 165 of
 * 223 dishes: 242 allergens present in an ingredient line and absent from the
 * menu row. Of the 103 dishes the menu offered as gluten-free, 50 contained
 * gluten. Its vocabulary had eight words, so celery, mustard, sesame, soya,
 * sulphites and lupin could not be declared at all - six of the fourteen the
 * EU requires.
 *
 * lib/dietary.ts already read the answer correctly off the ingredient lines.
 * This makes that the only answer. import-matrix.py now writes `allergens: []`
 * on every row and this fills them in:
 *
 *   python3 scripts/import-matrix.py data/ayesicena-matrix.xlsx
 *   node --experimental-strip-types --import ./scripts/ts-alias.mjs \
 *        scripts/derive-allergens.mjs
 *
 * __tests__/dietary.test.ts fails if the file is ever left stale, so the two
 * cannot drift apart again.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const FILE = join(ROOT, "data", "dishes.ts");

const { RECIPES } = await import(join(ROOT, "data", "recipes.ts"));
const { dishDietary } = await import(join(ROOT, "lib", "dietary.ts"));

const derived = new Map();
for (const r of RECIPES) derived.set(r.dishId, dishDietary(r).allergens);

let src = readFileSync(FILE, "utf8");
let touched = 0, missing = [], changed = [];

src = src.replace(
  /\{ id: (\d+),([\s\S]*?)allergens: \[([^\]]*)\]/g,
  (whole, id, mid, current) => {
    const list = derived.get(Number(id));
    if (!list) { missing.push(Number(id)); return whole; }
    const next = list.map((a) => `"${a}"`).join(", ");
    if (next !== current.trim()) changed.push(Number(id));
    touched++;
    return `{ id: ${id},${mid}allergens: [${next}]`;
  }
);

if (missing.length) {
  throw new Error(
    `no recipe for dish ${missing.join(", ")} - every dish must have one, or ` +
    `its allergen list would silently stay empty and read as "safe"`
  );
}

writeFileSync(FILE, src);
console.log(`derived allergens for ${touched} dishes; ${changed.length} rows changed`);
if (changed.length) console.log(`  changed: ${changed.slice(0, 20).join(", ")}${changed.length > 20 ? ` … +${changed.length - 20}` : ""}`);
