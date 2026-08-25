/**
 * The market run sheet.
 *
 * 152 of 223 dishes are more than 40% away from their claimed cost, and
 * nothing in this app is quotable until that is fixed. Checking 380
 * ingredients alphabetically is a waste of a morning: a third of them are a
 * spoon of spice and move the answer by pennies.
 *
 * So this ranks them by exposure — what the matrix would spend on that
 * ingredient if you cooked one batch of every dish that uses it — and prints
 * the top of that list with the current estimate and a blank to write the
 * real price in. Verify the first thirty and the portfolio figure stops being
 * a guess.
 *
 *   node scripts/build-market-run.mjs [--lang es]
 */
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const es = process.argv.includes("--lang") &&
  process.argv[process.argv.indexOf("--lang") + 1] === "es";

const { PRICES } = await import(join(ROOT, "data/prices.ts"));
const { ES_INGREDIENTS: ES_ING } = await import(join(ROOT, "data/i18n-ingredients.ts"));
const { RECIPES } = await import(join(ROOT, "data/recipes.ts"));
const { DISHES } = await import(join(ROOT, "data/dishes.ts"));
const { canonicalIngredient: key } = await import(join(ROOT, "lib/ingredient-key.ts"));
const { costLine } = await import(join(ROOT, "lib/costing.ts"));

// --- exposure -------------------------------------------------------------
// What the matrix would spend on an ingredient if it cooked one batch of every
// dish that uses it. Soles is the only unit that compares a spice with a side
// of salmon.
//
// The costing comes from lib/costing.ts rather than a second copy of the unit
// rules. The first draft had its own, it was stricter than the real thing, and
// it reported nineteen honest recipe lines as broken while ranking watercress
// first on a 600 g line read against a per-bunch price.
const exposure = new Map();
const uncosted = [];
const DISH_BY_ID = new Map(DISHES.map((d) => [d.id, d]));
for (const r of RECIPES) {
  for (const i of r.ingredients) {
    const k = key(i.item);
    const line = costLine(i.qty, i.item);
    if (line.status !== "costed") {
      if (PRICES[k]) {
        uncosted.push({ dish: DISH_BY_ID.get(r.dishId), qty: i.qty, item: i.item,
          why: line.status });
      }
      continue;
    }
    if (!PRICES[k]) continue;   // sub-preparations are costed through their own recipe
    const row = exposure.get(k) || { key: k, soles: 0, dishes: new Set() };
    row.soles += line.soles;
    row.dishes.add(r.dishId);
    exposure.set(k, row);
  }
}

const ranked = [...exposure.values()].sort((a, b) => b.soles - a.soles);
const total = ranked.reduce((n, r) => n + r.soles, 0);

let running = 0;
const rows = ranked.map((r) => {
  running += r.soles;
  return { ...r, share: r.soles / total, cum: running / total, price: PRICES[r.key] };
});
const top = rows.filter((r, i) => i < 40 || r.cum <= 0.8);

// --- the sheet ------------------------------------------------------------
const T = es
  ? { title: "Compra de mercado", sub: "Los insumos que mueven el dinero, en orden",
      lead: "Verificados los primeros treinta, la cifra de la cartera deja de ser una adivinanza. Están ordenados por exposición: lo que la matriz gastaría en ese insumo si cocinara una tanda de cada plato que lo usa.",
      n: "#", ing: "Insumo", ask: "Cómo pedirlo", est: "Estimado", unit: "Unidad",
      real: "Precio real", where: "Dónde", dishes: "Platos", share: "% del gasto",
      note: "Todos los precios de esta hoja son estimados sin verificar. Escriba el precio real, actualice data/prices.ts y vuelva a correr las pruebas.",
      foot: "Aye, Si, Cena · hoja de compra", cum: "acumulado",
      mm: "Líneas que no se pueden costear", plato: "plato", platos: "platos",
      mmLead: "lib/costing.ts no pudo costear estas líneas. No se adivina un número: se arreglan en data/prices.ts o en la receta.",
      mmDish: "Plato", mmQty: "Cantidad", mmItem: "Insumo", mmPer: "Por qué" }
  : { title: "Market run", sub: "The ingredients that move the money, in order",
      lead: "Verify the first thirty and the portfolio figure stops being a guess. Ranked by exposure: what the matrix would spend on that ingredient if it cooked one batch of every dish using it.",
      n: "#", ing: "Ingredient", ask: "Ask for it as", est: "Estimate", unit: "Unit",
      real: "Real price", where: "Where", dishes: "Dishes", share: "% of spend",
      note: "Every price on this sheet is an unverified estimate. Write the real one in, update data/prices.ts, and re-run the tests.",
      foot: "Aye, Si, Cena · market run", cum: "cumulative",
      mm: "Lines that cannot be costed", plato: "dish", platos: "dishes",
      mmLead: "lib/costing.ts could not cost these lines. No number is guessed: fix them in data/prices.ts or in the recipe.",
      mmDish: "Dish", mmQty: "Quantity", mmItem: "Ingredient", mmPer: "Why" };

const esc = (v) => String(v == null ? "" : v)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const html = `<!doctype html>
<html lang="${es ? "es" : "en"}"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${T.title} — Aye, Si, Cena</title>
<style>
:root{--ink:#16171A;--ink2:#4A4D55;--ink3:#83868F;--line:#D8DAD5;--bg:#fff;--aji:#B47B18}
*{box-sizing:border-box}
body{margin:0;padding:26px 20px 60px;background:var(--bg);color:var(--ink);
  font:15px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;
  max-width:1000px;margin-inline:auto}
h1{font-size:26px;margin:0 0 3px;letter-spacing:-.01em}
.sub{color:var(--ink3);margin:0 0 16px;font-size:13.5px}
.lead{font-size:13.5px;color:var(--ink2);max-width:62ch;margin:0 0 20px}
.warn{border-left:3px solid var(--aji);background:#FBF6EC;padding:10px 13px;font-size:12.5px;
  color:var(--ink2);margin:0 0 22px}
table{border-collapse:collapse;width:100%;font-size:12.5px}
th{text-align:left;font-size:10px;letter-spacing:.09em;text-transform:uppercase;
  color:var(--ink3);font-weight:600;border-bottom:1px solid var(--line);padding:0 8px 7px}
td{border-bottom:1px solid var(--line);padding:8px;vertical-align:top}
tr:nth-child(30) td{border-bottom:2px solid var(--aji)}
.num{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}
.write{width:88px;border-bottom:1px solid var(--ink3)}
.ask{color:var(--aji);font-weight:600}
.small{color:var(--ink3);font-size:11px}
tfoot td{border:0;padding-top:16px;color:var(--ink3);font-size:11.5px}
@media print{body{padding:0;font-size:11px} .warn{break-inside:avoid} tr{break-inside:avoid}}
</style></head><body>
<h1>${esc(T.title)}</h1>
<p class="sub">${esc(T.sub)}</p>
<p class="lead">${esc(T.lead)}</p>
<div class="warn">${esc(T.note)}</div>
<table><thead><tr>
  <th class="num">${esc(T.n)}</th><th>${esc(T.ing)}</th><th>${esc(T.ask)}</th>
  <th class="num">${esc(T.est)}</th><th>${esc(T.unit)}</th>
  <th class="num">${esc(T.real)}</th><th class="num">${esc(T.dishes)}</th>
  <th class="num">${esc(T.share)}</th>
</tr></thead><tbody>
${top.map((r, i) => `<tr>
  <td class="num small">${i + 1}</td>
  <td><strong>${esc(r.key)}</strong>${r.price.note ? `<br><span class="small">${esc(r.price.note)}</span>` : ""}</td>
  <td class="ask">${esc(ES_ING[r.key] || r.key)}</td>
  <td class="num">S/ ${r.price.soles.toFixed(2)}</td>
  <td class="small">${esc(r.price.per)}</td>
  <td class="num"><span class="write">&nbsp;</span></td>
  <td class="num small">${r.dishes.size} ${esc(r.dishes.size === 1 ? T.plato : T.platos)}</td>
  <td class="num small">${(r.share * 100).toFixed(1)}%<br><span class="small">${(r.cum * 100).toFixed(0)}% ${esc(T.cum)}</span></td>
</tr>`).join("")}
</tbody><tfoot><tr><td colspan="8">${esc(T.foot)} · ${top.length} ${es ? "de" : "of"} ${rows.length} ·
  ${new Date().toISOString().slice(0, 10)}</td></tr></tfoot></table>
${uncosted.length ? `<h2 style="font-size:17px;margin:34px 0 3px">${esc(T.mm)} <span class="small">(${uncosted.length})</span></h2>
<p class="lead">${esc(T.mmLead)}</p>
<table><thead><tr><th>${esc(T.mmDish)}</th><th>${esc(T.mmQty)}</th><th>${esc(T.mmItem)}</th>
  <th>${esc(T.mmPer)}</th></tr></thead><tbody>
${uncosted.map((m) => `<tr><td class="small">${m.dish ? esc(m.dish.id + " " + m.dish.name) : "?"}</td>
  <td class="num">${esc(m.qty)}</td><td>${esc(m.item)}</td>
  <td class="small">${esc(m.why)}</td></tr>`).join("")}
</tbody></table>` : ""}
</body></html>`;

const out = join(ROOT, es ? "market-run-es.html" : "market-run.html");
writeFileSync(out, html);
console.log(`wrote ${out} (${top.length} of ${rows.length} ingredients, ` +
  `top ${(top[top.length - 1].cum * 100).toFixed(0)}% of spend` +
  (uncosted.length ? `, ${uncosted.length} lines it could not cost` : "") + ")");
