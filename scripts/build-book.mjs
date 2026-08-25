/**
 * The recipe book: all 150 recipes as one printable HTML file.
 *
 * Print to PDF from a browser. Page breaks are set so a recipe never splits
 * across a page, because a cook reading half a method is worse than no book.
 *
 * Generated from the same data the app runs on, so it cannot drift.
 */
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const require = createRequire(import.meta.url);

function loadData(file, exportName) {
  const src = fs.readFileSync(path.join(ROOT, "data", file), "utf8");
  // Same stripping as build-standalone: annotated and bare exports both, plus
  // `as const` and type aliases, none of which are valid CJS.
  const js = src
    .replace(/^import type .*$/gm, "")
    .replace(/^export type .*$/gm, "")
    .replace(/export const (\w+)\s*:[^=]+=/g, "module.exports.$1 =")
    .replace(/export const (\w+)\s*=/g, "module.exports.$1 =")
    .replace(/\bas const\b/g, "");
  const tmp = path.join(ROOT, `.book-${exportName}.tmp.cjs`);
  fs.writeFileSync(tmp, js);
  try {
    const mod = require(tmp);
    if (mod[exportName] === undefined) throw new Error(`${file} lacks ${exportName}`);
    return mod[exportName];
  } finally {
    fs.unlinkSync(tmp);
  }
}

const DISHES = loadData("dishes.ts", "DISHES");
const RECIPES = loadData("recipes.ts", "RECIPES");
const ES = loadData("i18n.ts", "ES");
// The recipe lines live in their own file because there are 1,590 of them and
// they arrive in tranches. Merged here so one lookup serves both.
const ES_RECIPES = loadData("i18n-recipes.ts", "ES_RECIPES");
Object.assign(ES, ES_RECIPES);
const ES_INGREDIENTS = loadData("i18n-ingredients.ts", "ES_INGREDIENTS");
const ES_PREP = loadData("i18n-prep.ts", "ES_PREP");

// `npm run book -- --lang es` prints the kitchen edition. The ingredient
// names are the ones a Lima market uses, which is the half of this a cook
// needs before anything else.
const LANG = process.argv.includes("--lang") ? process.argv[process.argv.indexOf("--lang") + 1] : "en";
const es = LANG === "es";

/** Translate where we can, leave the source visible where we cannot. */
function t(s) {
  if (!es) return s;
  const key = String(s).replace(/\s+/g, " ").trim();
  return ES[key] || s;
}

const PREP_WORDS = ("chopped finely coarsely sliced diced grated softened melted cubed minced " +
  "crushed shredded peeled trimmed beaten whisked sifted soaked rinsed drained warmed cooled " +
  "room temperature roughly thinly thickly picked stripped halved quartered scored cleaned " +
  "boned skinned jointed filleted deseeded hulled zested juiced").split(" ");
const IRREGULAR = { leaves:"leaf", loaves:"loaf", knives:"knife", haggis:"haggis",
  asparagus:"asparagus", couscous:"couscous", tomatoes:"tomato", potatoes:"potato",
  berries:"berry", cherries:"cherry", anchovies:"anchovy", chives:"chive", peas:"pea",
  oats:"oat", greens:"green", molasses:"molasses" };
const OR_OVERRIDE = { "lamb or beef stock": "lamb stock", "fish or light chicken stock": "fish stock" };

function canonIng(item) {
  const raw = String(item ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const head = raw.split(",")[0].trim().replace(/\s+/g, " ");
  if (OR_OVERRIDE[head]) return OR_OVERRIDE[head];
  const body = raw.split(",")[0].replace(/\([^)]*\)/g, " ").split(/\bor\b/)[0]
    .replace(/[^a-z0-9%\s-]/g, " ");
  return body.split(/\s+/).filter(Boolean)
    .filter((w) => !PREP_WORDS.includes(w))
    .map((w) => IRREGULAR[w] || (w.length > 3 && w.endsWith("s") && !w.endsWith("ss") ? w.slice(0, -1) : w))
    .join(" ").trim();
}

/** The market name and the prep note: the name is the shop, the note is the job. */
function ingName(item) {
  if (!es) return item;
  const key = canonIng(item);
  const name = ES_INGREDIENTS[key];
  if (!name) return item;
  const comma = String(item).indexOf(",");
  if (comma === -1) return name;
  const tail = String(item).slice(comma + 1).trim();
  return `${name}, ${ES_PREP[tail] || tail}`;
}

const CATEGORY_LABEL_EN = {
  canape: "Canapés & bites", main: "Mains", bowl: "Bowls", side: "Sides & breads",
  breakfast: "Breakfast", bakery: "Bakery", dessert: "Desserts"
};
const ORDER = ["canape", "main", "bowl", "side", "breakfast", "bakery", "dessert"];
const CATEGORY_LABEL = Object.fromEntries(
  Object.entries(CATEGORY_LABEL_EN).map(([k, v]) => [k, t(v)])
);
const FORMAT = {
  "drop-off": "Drop-off", buffet: "Buffet", plated: "Plated", "live-station": "Live station"
};

const byId = new Map(DISHES.map((d) => [d.id, d]));
const missing = RECIPES.filter((r) => !byId.has(r.dishId));
if (missing.length) throw new Error(`Recipes for absent dishes: ${missing.map((r) => r.dishId)}`);
const norecipe = DISHES.filter((d) => !RECIPES.some((r) => r.dishId === d.id));

const esc = (s) =>
  String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

const grouped = ORDER.map((cat) => ({
  cat,
  label: CATEGORY_LABEL[cat],
  rows: RECIPES
    .filter((r) => byId.get(r.dishId).category === cat)
    .sort((a, b) => a.dishId - b.dishId)
})).filter((g) => g.rows.length);

function recipeHtml(r) {
  const d = byId.get(r.dishId);
  return `
  <article class="recipe">
    <header>
      <p class="num">${String(d.id).padStart(3, "0")} · ${esc(CATEGORY_LABEL[d.category])}</p>
      <h3>${esc(d.name)}</h3>
      <p class="lineage"><span class="uk">${esc(d.origin)}</span> → <span class="pe">${esc(d.subOrigin)}</span></p>
      <p class="meta">${esc(t(r.yields))} · ${es ? "preparación" : "prep"} ${r.prepMin} min · ${
        es ? "cocción" : "cook"} ${r.cookMin} min ·
        ${esc(FORMAT[d.format])}${d.veg ? ` · ${esc(t("vegetarian"))}` : ""}${
        d.needsLicence ? ` · ${esc(t("needs the licence"))}` : ""}</p>
      ${d.allergens.length ? `<p class="allergens">${esc(t("Allergens:"))} ${
        d.allergens.map((a) => esc(t(a))).join(", ")}</p>` : ""}
    </header>
    <div class="cols">
      <section>
        <h4>${esc(t("Ingredients"))}</h4>
        <table class="ing">${r.ingredients.map((i) => `
          <tr><td class="q">${esc(i.qty)}</td><td>${esc(ingName(i.item))}${
            i.note ? `<span class="inote">${esc(t(i.note))}</span>` : ""}</td></tr>`).join("")}
        </table>
      </section>
      <section>
        <h4>${esc(t("Method"))}</h4>
        <ol>${r.method.map((m) => `<li>${esc(t(m))}</li>`).join("")}</ol>
      </section>
    </div>
    <footer>
      <p><b>${esc(t("Make ahead"))}</b> ${esc(t(r.makeAhead))}</p>
      <p><b>${esc(t("Holds"))}</b> ${esc(t(r.holds))}</p>
      ${r.scaling ? `<p><b>${esc(t("At scale"))}</b> ${esc(t(r.scaling))}</p>` : ""}
    </footer>
  </article>`;
}

const html = `<!doctype html>
<html lang="${LANG}"><head><meta charset="utf-8">
<title>${es ? "Aye Si Cena — Libro de cocina" : "Aye Si Cena — Kitchen Book"}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600&family=Karla:wght@400;500;700&family=IBM+Plex+Mono:wght@400;500&display=swap">
<style>
  @page { size: A4; margin: 16mm 14mm; }
  :root{ --ink:#1a1d1f; --ink2:#4a5256; --ink3:#798286; --line:#d4d8d2;
         --aji:#9a5f0d; --thistle:#5a4080; --rule:#e6e8e4; }
  *{box-sizing:border-box}
  body{margin:0;background:#fff;color:var(--ink);
    font:11pt/1.5 Karla,"Helvetica Neue",Arial,sans-serif;
    -webkit-print-color-adjust:exact;print-color-adjust:exact}
  .wrap{max-width:190mm;margin:0 auto;padding:8mm}
  h1{font-family:Fraunces,Georgia,serif;font-size:34pt;margin:0 0 2mm;font-weight:600}
  .sub{color:var(--ink2);font-size:12pt;margin:0 0 6mm}
  .warn{border:1px solid var(--aji);border-left-width:4px;padding:4mm 5mm;margin:0 0 8mm;
    font-size:10pt;color:var(--ink2);background:#fdf8f1}
  .warn b{color:var(--aji)}
  .toc{columns:2;column-gap:10mm;font-size:9.5pt;margin-bottom:6mm}
  .toc h2{font-family:Fraunces,Georgia,serif;font-size:12pt;margin:3mm 0 1.5mm;
    break-after:avoid;color:var(--aji)}
  .toc p{margin:0 0 .6mm;color:var(--ink2);break-inside:avoid}
  .toc .n{font-family:"IBM Plex Mono",monospace;color:var(--ink3);font-size:8.5pt}
  h2.cat{font-family:Fraunces,Georgia,serif;font-size:20pt;margin:0 0 5mm;
    padding-bottom:2mm;border-bottom:2px solid var(--ink);break-before:page}
  .recipe{break-inside:avoid;page-break-inside:avoid;margin:0 0 7mm;padding:0 0 5mm;
    border-bottom:1px solid var(--rule)}
  .recipe .num{font-family:"IBM Plex Mono",monospace;font-size:8pt;letter-spacing:.1em;
    text-transform:uppercase;color:var(--ink3);margin:0}
  .recipe h3{font-family:Fraunces,Georgia,serif;font-size:15pt;margin:.5mm 0 1mm;font-weight:600}
  .lineage{margin:0 0 1mm;font-size:9.5pt}
  .lineage .uk{color:var(--thistle)} .lineage .pe{color:var(--aji)}
  .meta{margin:0;font-size:9pt;color:var(--ink2)}
  .allergens{margin:.8mm 0 0;font-size:9pt;color:var(--aji)}
  .cols{display:grid;grid-template-columns:38% 1fr;gap:6mm;margin-top:3mm}
  h4{font-family:"IBM Plex Mono",monospace;font-size:8pt;letter-spacing:.1em;
    text-transform:uppercase;color:var(--ink3);margin:0 0 1.5mm;font-weight:500}
  table.ing{width:100%;border-collapse:collapse;font-size:9.5pt}
  table.ing td{padding:.5mm 0;vertical-align:top}
  table.ing .q{white-space:nowrap;padding-right:3mm;font-family:"IBM Plex Mono",monospace;
    font-size:9pt;color:var(--ink2)}
  .inote{display:block;font-size:8.5pt;color:var(--ink3);font-style:italic}
  ol{margin:0;padding-left:5mm;font-size:9.5pt}
  ol li{margin-bottom:1.2mm}
  .recipe footer{margin-top:3mm;padding-top:2mm;border-top:1px dotted var(--line);font-size:9pt}
  .recipe footer p{margin:0 0 .8mm;color:var(--ink2)}
  .recipe footer b{color:var(--ink);font-weight:700}
  @media screen{ body{background:#eceee9;padding:6mm 0}
    .wrap{background:#fff;box-shadow:0 2px 18px rgba(0,0,0,.10);padding:14mm} }
</style></head>
<body><div class="wrap">
  <h1>Aye Si Cena</h1>
  <p class="sub">${es ? `El libro de cocina — ${RECIPES.length} recetas, a escala de catering.` : `The kitchen book — ${RECIPES.length} recipes, at catering scale.`}</p>

  <div class="warn">
    <b>Read this first.</b> Quantities here are batch quantities, not domestic ones —
    check the yield line before you scale anything. Every hold time is a real
    constraint: a dish that says it will not hold, will not hold, and no amount of
    scheduling changes that. The costs behind these recipes are unverified estimates
    until a market run replaces them.
  </div>

  <nav class="toc">
    ${grouped.map((g) => `<h2>${esc(g.label)}</h2>` + g.rows.map((r) =>
      `<p><span class="n">${String(r.dishId).padStart(3, "0")}</span> ${esc(byId.get(r.dishId).name)}</p>`
    ).join("")).join("")}
  </nav>

  ${grouped.map((g) => `<h2 class="cat">${esc(g.label)}</h2>${g.rows.map(recipeHtml).join("")}`).join("")}
</div></body></html>`;

const out = path.join(ROOT, es ? "kitchen-book-es.html" : "kitchen-book.html");
fs.writeFileSync(out, html);
const kb = Math.round(Buffer.byteLength(html) / 1024);
console.log(`wrote ${out} (${kb} KB, ${RECIPES.length} recipes across ${grouped.length} courses)`);
if (norecipe.length) console.log(`  NOTE: ${norecipe.length} dishes have no recipe: ${norecipe.map((d) => d.id).join(", ")}`);
