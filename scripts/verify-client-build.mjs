/**
 * The client build must contain nothing it should not.
 *
 * Not "must not display" - must not contain. A file you hand somebody is a file
 * they can open in a text editor, and the whole point of this build is that
 * there is nothing in it to find. So this reads the bytes, not the page.
 *
 *   node scripts/build-standalone.mjs --client
 *   node scripts/verify-client-build.mjs menu-for-clients.html
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const FILE = process.argv[2] || path.join(ROOT, "menu-for-clients.html");
const html = fs.readFileSync(FILE, "utf8");

let failures = 0;
const check = (label, ok, detail = "") => {
  if (!ok) failures++;
  console.log(`${label}: ${ok ? "✓" : "✗ " + detail}`);
};

// The payload is the only place data lives; parse it rather than grep the page.
const m = /<script id="data" type="application\/json">([\s\S]*?)<\/script>/.exec(html);
if (!m) { console.log("no data payload found ✗"); process.exit(1); }
const D = JSON.parse(m[1]);

console.log(`client build: ${(html.length / 1048576).toFixed(2)} MB, ${D.dishes.length} dishes\n`);

check("marked as a client build", D.clientBuild === true);

const leaky = D.dishes.filter((d) => "cost" in d || "source" in d || "costVerified" in d);
check("no dish carries a cost, a supplier or a verification flag",
  leaky.length === 0, `${leaky.length} dishes do`);

for (const [name, table] of [["prices", D.prices], ["sub-preparation prices", D.subPrices],
                             ["sundry prices", D.sundryPrices]]) {
  check(`the ${name} table is empty`, Object.keys(table ?? {}).length === 0,
    `${Object.keys(table ?? {}).length} entries`);
}

const withMethod = (D.recipes ?? []).filter((r) => (r.method ?? []).length > 0);
check("no recipe carries its method", withMethod.length === 0, `${withMethod.length} do`);

const withQty = (D.recipes ?? []).filter((r) => (r.ingredients ?? []).some((i) => i.qty));
check("no recipe carries quantities", withQty.length === 0, `${withQty.length} do`);

// The ingredient names have to survive, or the allergen engine has nothing to
// read and a client is owed the allergens.
const named = (D.recipes ?? []).filter((r) => (r.ingredients ?? []).some((i) => i.item));
check("ingredient names survive, so allergens still work",
  named.length === D.recipes.length, `${named.length} of ${D.recipes.length}`);

check("only the client-facing panes ship",
  JSON.stringify(D.panes) === JSON.stringify(["home", "moments", "find", "menu", "packages"]),
  JSON.stringify(D.panes));

// Supplier names are distinctive enough to grep for in the raw bytes.
const stalls = ["Surquillo", "Terminal Pesquero", "Oregon Foods", "Mercado de Magdalena"];
const found = stalls.filter((s) => html.includes(s));
check("no supplier is named anywhere in the file", found.length === 0, found.join(", "));

console.log(failures === 0 ? "\nNOTHING TO FIND" : `\n${failures} CHECK(S) FAILED`);
process.exit(failures === 0 ? 0 : 1);
