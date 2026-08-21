/**
 * Emit a single self-contained HTML build of the app.
 *
 * The dish data is pulled from data/dishes.ts itself (types stripped, then
 * required) so the standalone page can never drift from the real source.
 * The quote maths is a hand-port of lib/pricing.ts; scripts/verify-standalone
 * checks the port against the same figures the jest suite asserts.
 */
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const require = createRequire(import.meta.url);

// --- pull the real data out of the TypeScript sources ----------------------
/** Strip the type annotations off a data module and require it for its value. */
function loadData(file, exportName) {
  const src = fs.readFileSync(path.join(ROOT, "data", file), "utf8");
  const js = src
    .replace(/^import type .*$/gm, "")
    .replace(
      new RegExp(`export const ${exportName}\\s*:[^=]+=`),
      `module.exports.${exportName} =`
    );
  const tmp = path.join(ROOT, `.${exportName}.tmp.cjs`);
  fs.writeFileSync(tmp, js);
  try {
    const mod = require(tmp);
    if (mod[exportName] === undefined) {
      throw new Error(`${file} did not export ${exportName} after type stripping`);
    }
    return mod[exportName];
  } finally {
    fs.unlinkSync(tmp);
  }
}

const DISHES = loadData("dishes.ts", "DISHES");
const FLAVOURS = loadData("flavours.ts", "FLAVOURS");
const EVENTS = loadData("events.ts", "EVENTS");
const INGREDIENTS = loadData("ingredients.ts", "INGREDIENTS");

if (DISHES.length !== 100) {
  throw new Error(`Expected 100 dishes, extracted ${DISHES.length}`);
}
const unflavoured = DISHES.filter((d) => !FLAVOURS[d.id]).map((d) => d.id);
if (unflavoured.length) {
  throw new Error(`Dishes missing a flavour entry: ${unflavoured.join(", ")}`);
}
const dishIds = new Set(DISHES.map((d) => d.id));
for (const ing of INGREDIENTS) {
  const ghosts = ing.dishes.filter((id) => !dishIds.has(id));
  if (ghosts.length) throw new Error(`${ing.id} references missing dishes: ${ghosts.join(", ")}`);
}

// --- tier rules, mirrored from lib/pricing.ts ------------------------------
const TIERS = {
  scran: {
    id: "scran", name: "Scran Boxes", minGuests: 8, menajePerGuest: 0,
    packagingPerGuest: 7, guestsPerWaiter: 0, chefs: 0, transport: 60, bitesPerGuest: 8
  },
  buffet: {
    id: "buffet", name: "Two Shores Buffet", minGuests: 20, menajePerGuest: 18,
    packagingPerGuest: 2, guestsPerWaiter: 25, chefs: 1, transport: 220, bitesPerGuest: 6
  },
  plated: {
    id: "plated", name: "The Aye Si Plated Experience", minGuests: 20, menajePerGuest: 27.5,
    packagingPerGuest: 0, guestsPerWaiter: 12, chefs: 1, transport: 300, bitesPerGuest: 6
  }
};

const CONST = { IGV: 0.18, STAFF: 100, CHEF: 180, FC_MIN: 0.25, FC_MAX: 0.3 };

const CATEGORY_LABEL = {
  canape: "Canapés &amp; bites",
  main: "Mains",
  side: "Sides, salads &amp; breads",
  sweet: "Bakery &amp; desserts",
  drink: "Signature drinks"
};

const FLAVOUR_AXES = ["sweet","savoury","rich","tart","smoky","spiced","fresh"];

const payload = JSON.stringify({ dishes: DISHES, tiers: TIERS, k: CONST, labels: CATEGORY_LABEL,
  flavours: FLAVOURS, events: EVENTS, axes: FLAVOUR_AXES,
  ingredients: INGREDIENTS,
  months: ["January","February","March","April","May","June","July","August","September","October","November","December"] });

const html = `<title>Aye Si Cena</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600&family=Karla:wght@400;500;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap">
<style>
:root{
  --bg:#E8E9E6;--surface:#F5F5F2;--raised:#DEE0DB;
  --ink:#1E2326;--ink-2:#565E62;--ink-3:#7C8589;--line:#CBCFC9;
  --aji:#A96A0F;--thistle:#63488A;--good:#2C6349;--warn:#8A5A11;--bad:#96382B;
}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){
  --bg:#14181A;--surface:#1C2124;--raised:#252B2F;
  --ink:#E4E3DC;--ink-2:#9AA2A5;--ink-3:#6F787C;--line:#2C3337;
  --aji:#E5A63C;--thistle:#AB93D1;--good:#6FBF95;--warn:#E0A458;--bad:#E0776A;
}}
:root[data-theme="dark"]{
  --bg:#14181A;--surface:#1C2124;--raised:#252B2F;
  --ink:#E4E3DC;--ink-2:#9AA2A5;--ink-3:#6F787C;--line:#2C3337;
  --aji:#E5A63C;--thistle:#AB93D1;--good:#6FBF95;--warn:#E0A458;--bad:#E0776A;
}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);
  font-family:Karla,"Helvetica Neue",Arial,sans-serif;font-size:16px;line-height:1.55;
  -webkit-font-smoothing:antialiased}
.wrap{max-width:1120px;margin:0 auto;padding:0 20px}
.tnum{font-variant-numeric:tabular-nums}
.mono{font-family:"IBM Plex Mono",ui-monospace,monospace}
.flavtag{border:1px solid var(--line);border-radius:4px;padding:1px 6px;
  font-size:10px;color:var(--ink-3);text-transform:capitalize}
.linkbtn{background:none;border:0;color:var(--ink-3);cursor:pointer;
  font-size:11px;text-decoration:underline;padding:0}
.grouphead{letter-spacing:.12em;text-transform:uppercase;margin:0 0 10px;
  font-size:11px;color:var(--ink-3);font-weight:500}
.cap{text-transform:capitalize}
:focus-visible{outline:2px solid var(--aji);outline-offset:2px}

header.bar{border-bottom:1px solid var(--line);position:sticky;top:0;background:var(--bg);z-index:30}
.bar-in{display:flex;flex-wrap:wrap;gap:14px;align-items:center;justify-content:space-between;
  max-width:1120px;margin:0 auto;padding:14px 20px}
.brand{font-family:Fraunces,Georgia,serif;font-size:1.5rem;font-weight:600;letter-spacing:-.01em}
.brand em{font-style:normal;color:var(--aji)}
nav{display:flex;gap:6px;flex-wrap:wrap}
.tab{font:inherit;font-size:.875rem;background:none;border:1px solid transparent;
  color:var(--ink-2);padding:6px 12px;border-radius:99px;cursor:pointer}
.tab:hover{color:var(--ink)}
.tab[aria-selected="true"]{background:var(--ink);color:var(--bg);border-color:var(--ink);font-weight:700}

h1{font-family:Fraunces,Georgia,serif;font-weight:600;letter-spacing:-.02em;line-height:1.02;
  font-size:clamp(2.4rem,6vw,4rem);margin:0 0 18px;text-wrap:balance}
h2{font-family:Fraunces,Georgia,serif;font-weight:600;letter-spacing:-.01em;
  font-size:clamp(1.4rem,3.2vw,2rem);margin:0;text-wrap:balance}
h3{font-family:Fraunces,Georgia,serif;font-weight:600;font-size:1.2rem;margin:0}
.eyebrow{font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:11px;
  letter-spacing:.17em;text-transform:uppercase;color:var(--ink-3);margin:0 0 16px}
.lede{max-width:60ch;color:var(--ink-2);font-size:1.06rem;margin:0}
.muted{color:var(--ink-2)}
section.pane{padding:44px 0}
section.pane[hidden]{display:none}
.divider{border:0;border-top:1px solid var(--line);margin:40px 0}

.grid{display:grid;gap:16px}
.g3{grid-template-columns:repeat(auto-fit,minmax(260px,1fr))}
.card{background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:20px}
.kv{display:flex;justify-content:space-between;gap:12px;
  font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:12.5px;padding:3px 0}
.kv dt{color:var(--ink-2)}.kv dd{margin:0;font-weight:600}

.stats{display:flex;flex-wrap:wrap;gap:10px 28px;
  font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:12px;color:var(--ink-3);margin-top:26px}
.stats b{color:var(--ink);font-weight:600}

.btn{font:inherit;font-size:.9rem;font-weight:700;padding:12px 20px;border-radius:9px;cursor:pointer;
  background:var(--ink);color:var(--bg);border:1px solid var(--ink)}
.btn.ghost{background:transparent;color:var(--ink);border-color:var(--line)}
.btn.ghost:hover{border-color:var(--ink-3)}
.btns{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}

.tscroll{overflow-x:auto;border:1px solid var(--line);border-radius:12px;background:var(--surface)}
table{border-collapse:collapse;width:100%;min-width:730px}
thead th{background:var(--raised);text-align:left;padding:11px 13px;
  font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:10px;letter-spacing:.11em;
  text-transform:uppercase;color:var(--ink-3);font-weight:500;white-space:nowrap}
tbody td{padding:12px 13px;border-top:1px solid var(--line);vertical-align:top;font-size:14px}
tbody tr:hover{background:var(--raised)}
.dish-n{font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:11.5px;color:var(--ink-3)}
.dish-t{font-weight:700;display:block;line-height:1.3}
.dish-b{display:block;color:var(--ink-2);font-size:13px;margin-top:2px}
.dna{display:block;font-size:12px;margin-top:5px}
.dna .u{color:var(--thistle);font-weight:700}
.dna .p{color:var(--aji);font-weight:700}
.money{font-family:"IBM Plex Mono",ui-monospace,monospace;text-align:right;white-space:nowrap;font-size:13px}
.src{font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:10.5px;color:var(--ink-3);white-space:nowrap}
.fc{font-family:"IBM Plex Mono",ui-monospace,monospace;text-align:right;font-size:11.5px;white-space:nowrap}
.fc.ok{color:var(--good)}.fc.under{color:var(--warn)}.fc.over{color:var(--bad)}

.sec-head{display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;margin:34px 0 12px}
.pill-count{border:1px solid var(--line);border-radius:99px;padding:1px 9px;
  font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:11px;color:var(--ink-3)}

/* builder */
.build{display:grid;gap:26px;grid-template-columns:1fr}
@media(min-width:1000px){.build{grid-template-columns:1fr 330px}}
fieldset{border:0;padding:0;margin:0 0 22px}
legend{font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:11px;
  letter-spacing:.12em;text-transform:uppercase;color:var(--ink-3);margin-bottom:9px;padding:0}
.chips{display:flex;gap:8px;flex-wrap:wrap}
.chip{font:inherit;font-size:.875rem;padding:9px 16px;border-radius:99px;cursor:pointer;
  background:transparent;color:var(--ink-2);border:1px solid var(--line)}
.chip:hover{border-color:var(--ink-3);color:var(--ink)}
.chip[aria-pressed="true"]{background:var(--ink);color:var(--bg);border-color:var(--ink);font-weight:700}
input[type=number]{font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:15px;width:120px;
  padding:9px 12px;border-radius:9px;border:1px solid var(--line);background:var(--surface);color:var(--ink)}
.picks{display:grid;gap:9px;grid-template-columns:1fr}
@media(min-width:640px){.picks{grid-template-columns:1fr 1fr}}
.pick{text-align:left;font:inherit;background:transparent;cursor:pointer;
  border:1px solid var(--line);border-radius:10px;padding:11px 13px;color:var(--ink)}
.pick:hover{border-color:var(--ink-3)}
.pick[aria-pressed="true"]{border-color:var(--aji);background:var(--surface)}
.pick-top{display:flex;justify-content:space-between;gap:9px;align-items:baseline}
.pick-name{font-weight:700;font-size:.9rem;line-height:1.25}
.pick-price{font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:12px;color:var(--ink-2);white-space:nowrap}

.quote{background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:20px;
  position:sticky;top:86px}
.qrow{display:flex;justify-content:space-between;gap:12px;
  font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:12px;padding:3px 0;color:var(--ink-2)}
.qrow.dim{color:var(--ink-3)}
.qrow.tot{border-top:1px solid var(--line);margin-top:5px;padding-top:7px;color:var(--ink);font-weight:600}
.keep{background:var(--raised);border-radius:9px;padding:13px;margin-top:16px}
.keep .lbl{font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:10px;
  letter-spacing:.12em;text-transform:uppercase;color:var(--ink-3)}
.keep .big{font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:1.35rem;
  font-weight:600;color:var(--good);margin-top:3px}
.warn{border:1px solid var(--line);background:var(--raised);border-radius:8px;
  padding:9px 11px;font-size:12.5px;color:var(--warn);margin-top:11px}
.note{font-size:11.5px;color:var(--ink-3);margin-top:14px;line-height:1.5}

footer{border-top:1px solid var(--line);margin-top:56px;padding:24px 0 48px;
  font-size:13px;color:var(--ink-3)}
footer p{margin:0 0 7px;max-width:70ch}
@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
</style>

<header class="bar">
  <div class="bar-in">
    <span class="brand">Aye <em>Si</em> Cena</span>
    <nav role="tablist" aria-label="Sections">
      <button class="tab" role="tab" data-pane="home" aria-selected="true">Home</button>
      <button class="tab" role="tab" data-pane="find" aria-selected="false">Find dishes</button>
      <button class="tab" role="tab" data-pane="menu" aria-selected="false">The hundred</button>
      <button class="tab" role="tab" data-pane="seasonal" aria-selected="false">Season</button>
      <button class="tab" role="tab" data-pane="packages" aria-selected="false">Packages</button>
      <button class="tab" role="tab" data-pane="builder" aria-selected="false">Build a menu</button>
    </nav>
  </div>
</header>

<div class="wrap">

  <section class="pane" id="pane-home">
    <p class="eyebrow">Scottish-Peruvian catering · Lima</p>
    <h1>Aye, Si, Cena.</h1>
    <p class="lede"><span style="color:var(--ink)">Aye</span> is Scottish for yes.
      <span style="color:var(--ink)">Sí</span> is Spanish for yes. Say it aloud and it means
      something else again. A hundred dishes that take Glasgow technique and run it through the
      Lima pantry.</p>
    <div class="btns">
      <button class="btn" data-goto="builder">Build a menu &amp; see the price</button>
      <button class="btn ghost" data-goto="menu">Browse all 100 dishes</button>
    </div>
    <div class="stats" id="homeStats"></div>

    <hr class="divider">
    <h2>Three ways to book</h2>
    <p class="lede" style="margin-top:8px">Same kitchen, three levels of service. The box tier needs
      no staff, no hired china and no liquor licence — which is why it is the fastest to sell.</p>
    <div class="grid g3" id="homeTiers" style="margin-top:24px"></div>

    <hr class="divider">
    <h2>The signatures</h2>
    <p class="lede" style="margin-top:8px">The dishes that explain the whole idea in one bite.</p>
    <div class="grid g3" id="homeSigs" style="margin-top:24px"></div>
  </section>

  <section class="pane" id="pane-find" hidden>
    <h1>Find dishes</h1>
    <p class="lede">Start from the event or start from the palate. Pick what you are planning and
      the matrix narrows to what actually works for it — then filter by flavour to land on a
      shortlist.</p>
    <fieldset style="margin-top:30px">
      <legend>What are you planning?</legend>
      <div class="grid g3" id="evtGrid"></div>
    </fieldset>
    <fieldset>
      <legend>Flavour compass</legend>
      <div class="chips" id="flavChips"></div>
    </fieldset>
    <div id="findCount" style="border-top:1px solid var(--line);padding-top:18px;margin-bottom:20px"></div>
    <div id="findResults"></div>
  </section>

  <section class="pane" id="pane-menu" hidden>
    <h1>The hundred</h1>
    <p class="lede">Every dish with its lineage, its food cost and its menu value. The
      <span class="dna"><span class="u">purple</span></span> half is the British original; the
      <span class="dna"><span class="p">gold</span></span> half is what Peru does to it.</p>
    <p class="lede" style="font-size:.92rem;color:var(--ink-3);margin-top:10px">FC% is food cost as a
      share of menu value. Above 30% is flagged — it is eating margin.</p>
    <div id="menuBody"></div>
  </section>

  <section class="pane" id="pane-seasonal" hidden>
    <h1>What the market has</h1>
    <p class="lede">You buy all year, so the menu moves with the market. Pick a month to see what is
      worth buying, what is out of window, and which dishes you cannot properly build until it
      comes back.</p>
    <div id="seasonWarn"></div>
    <fieldset style="margin-top:28px">
      <legend>Month</legend>
      <div class="chips" id="monthChips"></div>
      <p id="monthName" class="brand" style="margin:14px 0 0"></p>
    </fieldset>
    <div id="seasonPanels" class="grid" style="grid-template-columns:repeat(auto-fit,minmax(280px,1fr))"></div>
    <div id="seasonOff" style="margin-top:34px"></div>
    <div id="seasonPantry" style="margin-top:38px;border-top:1px solid var(--line);padding-top:24px"></div>
  </section>

  <section class="pane" id="pane-packages" hidden>
    <h1>Packages</h1>
    <p class="lede">Three tiers, and exactly what each carries in per-event cost. These figures drive
      the builder.</p>
    <div class="grid g3" id="pkgCards" style="margin-top:28px"></div>
    <hr class="divider">
    <h2>Rates behind the maths</h2>
    <div class="grid g3" id="pkgRates" style="margin-top:20px"></div>
    <p class="lede" style="margin-top:22px">Every quote is stated net, with IGV added on top.
      Quoting a gross figure while budgeting as if it were net loses about
      <strong>S/ 61.02</strong> per guest at a S/ 400 head price.</p>
  </section>

  <section class="pane" id="pane-builder" hidden>
    <h1>Build a menu</h1>
    <p class="lede">Choose a tier, set the head count, pick dishes. The price updates as you go —
      including menaje, staff, transport and IGV, so the number at the bottom is what the client
      actually pays.</p>
    <div class="build" style="margin-top:30px">
      <div>
        <fieldset>
          <legend>Service tier</legend>
          <div class="chips" id="tierChips"></div>
        </fieldset>
        <fieldset>
          <legend>Guests</legend>
          <input type="number" id="guests" min="1" max="500" value="20" aria-label="Number of guests">
          <span class="muted" style="margin-left:10px;font-size:.9rem" id="minNote"></span>
        </fieldset>
        <div id="dropNote"></div>
        <div id="pickBody"></div>
      </div>
      <aside><div class="quote" id="quote"></div></aside>
    </div>
  </section>

  <footer>
    <p>All prices in soles, exclusive of IGV. Costs are planning estimates modelled to a 25–30% food
      cost, not verified supplier quotes.</p>
    <p>Aye Si Cena · Lima · Scottish-Peruvian catering</p>
  </footer>
</div>

<script id="data" type="application/json">${payload}</script>
<script>
(function(){
"use strict";
var D = JSON.parse(document.getElementById("data").textContent);
var DISHES = D.dishes, TIERS = D.tiers, K = D.k, LABELS = D.labels;
var FLAV = D.flavours, EVENTS = D.events, AXES = D.axes;
var INGS = D.ingredients, MONTHS = D.months;
var ORDER = ["canape","main","side","sweet","drink"];

function soles(n){ return "S/ " + n.toFixed(2); }
function esc(s){ return String(s).replace(/[&<>"]/g, function(c){
  return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
function ratio(d){ return d.cost / d.price; }
function flag(d){ var r = ratio(d); return r > K.FC_MAX ? "over" : (r < K.FC_MIN ? "under" : "ok"); }

// --- quote maths, mirroring lib/pricing.ts -------------------------------
function buildQuote(dishes, guests, tierId){
  var t = TIERS[tierId], warnings = [];
  if (!dishes.length || !(guests > 0)) return null;
  if (guests < t.minGuests)
    warnings.push(t.name + " has a " + t.minGuests + "-guest minimum; this quote is for " + guests + ".");

  var canapes = dishes.filter(function(d){ return d.category === "canape"; });
  var plates  = dishes.filter(function(d){ return d.category !== "canape"; });
  var value = 0, cost = 0;
  if (canapes.length){
    var av = canapes.reduce(function(s,d){ return s + d.price; }, 0) / canapes.length;
    var ac = canapes.reduce(function(s,d){ return s + d.cost;  }, 0) / canapes.length;
    value += av * t.bitesPerGuest; cost += ac * t.bitesPerGuest;
  }
  plates.forEach(function(d){ value += d.price; cost += d.cost; });

  var waiters = t.guestsPerWaiter > 0 ? Math.ceil(guests / t.guestsPerWaiter) : 0;
  var staffTotal = waiters * K.STAFF + t.chefs * K.CHEF;
  var lines = [
    { label:"Menaje hire", perGuest:t.menajePerGuest, total:t.menajePerGuest*guests },
    { label:"Packaging",   perGuest:t.packagingPerGuest, total:t.packagingPerGuest*guests },
    { label: waiters > 0
        ? "Staff — " + waiters + " waiter" + (waiters===1?"":"s") + ", " + t.chefs + " chef"
        : "Staff — " + t.chefs + " chef",
      perGuest: staffTotal/guests, total: staffTotal },
    { label:"Transport & load-in", perGuest:t.transport/guests, total:t.transport }
  ].filter(function(l){ return l.total > 0; });

  var svc = lines.reduce(function(s,l){ return s + l.perGuest; }, 0);
  var net = value + svc, netTotal = net * guests;
  var igv = netTotal * K.IGV;
  var contrib = net - cost - svc;

  var over = dishes.filter(function(d){ return flag(d) === "over"; });
  if (over.length) warnings.push(over.length + " dish" + (over.length===1?"":"es") +
    " above the 30% food-cost ceiling: " + over.map(function(d){ return d.name; }).join(", "));

  return { tier:t, guests:guests, menuValuePerGuest:value, foodCostPerGuest:cost,
    serviceLines:lines, serviceCostPerGuest:svc, netPerGuest:net, netTotal:netTotal,
    igvTotal:igv, grossTotal:netTotal+igv, contributionPerGuest:contrib,
    contributionTotal:contrib*guests, contributionRatio: net>0 ? contrib/net : 0,
    warnings:warnings };
}

// --- tabs ----------------------------------------------------------------
var tabs = [].slice.call(document.querySelectorAll(".tab"));
function show(name){
  tabs.forEach(function(t){ t.setAttribute("aria-selected", String(t.dataset.pane === name)); });
  ["home","find","menu","seasonal","packages","builder"].forEach(function(p){
    document.getElementById("pane-" + p).hidden = (p !== name);
  });
  window.scrollTo(0,0);
}
tabs.forEach(function(t){ t.addEventListener("click", function(){ show(t.dataset.pane); }); });
[].forEach.call(document.querySelectorAll("[data-goto]"), function(b){
  b.addEventListener("click", function(){ show(b.dataset.goto); });
});

// --- home ----------------------------------------------------------------
document.getElementById("homeStats").innerHTML = ORDER.map(function(c){
  var n = DISHES.filter(function(d){ return d.category === c; }).length;
  return "<span>" + LABELS[c] + " <b class='tnum'>" + n + "</b></span>";
}).join("");

document.getElementById("homeTiers").innerHTML = Object.keys(TIERS).map(function(k){
  var t = TIERS[k];
  return "<div class='card'><h3>" + esc(t.name) + "</h3>" +
    "<p class='src' style='margin:5px 0 12px'>Minimum " + t.minGuests + " guests · " +
      t.bitesPerGuest + " bites per guest</p>" +
    "<dl style='margin:0'>" +
      "<div class='kv'><dt>Menaje</dt><dd class='tnum'>" +
        (t.menajePerGuest>0 ? soles(t.menajePerGuest)+"/guest" : "not required") + "</dd></div>" +
      "<div class='kv'><dt>Floor staff</dt><dd class='tnum'>" +
        (t.guestsPerWaiter>0 ? "1 per "+t.guestsPerWaiter : "none") + "</dd></div>" +
      "<div class='kv'><dt>Transport</dt><dd class='tnum'>" + soles(t.transport) + "</dd></div>" +
    "</dl></div>";
}).join("");

document.getElementById("homeSigs").innerHTML = DISHES
  .filter(function(d){ return d.tags.indexOf("signature") > -1; }).slice(0,6)
  .map(function(d){
    return "<div class='card'><p class='dish-n'>" + String(d.id).padStart(3,"0") + "</p>" +
      "<h3 style='margin:3px 0 8px'>" + esc(d.name) + "</h3>" +
      "<p class='muted' style='font-size:.9rem;margin:0 0 10px'>" + esc(d.blurb) + "</p>" +
      "<p class='dna' style='margin:0'><span class='u'>" + esc(d.uk) +
      "</span> <span style='color:var(--ink-3)'>→</span> <span class='p'>" + esc(d.pe) +
      "</span></p></div>";
  }).join("");

// --- the hundred ---------------------------------------------------------
document.getElementById("menuBody").innerHTML = ORDER.map(function(cat){
  var rows = DISHES.filter(function(d){ return d.category === cat; });
  return "<div class='sec-head'><h2>" + LABELS[cat] + "</h2>" +
    "<span class='pill-count tnum'>" + rows.length + "</span></div>" +
    "<div class='tscroll'><table><thead><tr>" +
      "<th>#</th><th>Dish</th><th style='text-align:right'>Cost</th>" +
      "<th style='text-align:right'>Menu value</th><th style='text-align:right'>FC%</th><th>Source</th>" +
    "</tr></thead><tbody>" + rows.map(function(d){
      return "<tr><td class='dish-n tnum'>" + d.id + "</td><td>" +
        "<span class='dish-t'>" + esc(d.name) + "</span>" +
        "<span class='dish-b'>" + esc(d.blurb) + "</span>" +
        "<span class='dna'><span class='u'>" + esc(d.uk) +
          "</span> <span style='color:var(--ink-3)'>→</span> <span class='p'>" + esc(d.pe) + "</span></span>" +
        "</td>" +
        "<td class='money tnum muted'>" + soles(d.cost) + "</td>" +
        "<td class='money tnum' style='font-weight:600'>" + soles(d.price) + "</td>" +
        "<td class='fc tnum " + flag(d) + "'>" + Math.round(ratio(d)*100) + "%</td>" +
        "<td class='src'>" + esc(d.source) + "</td></tr>";
    }).join("") + "</tbody></table></div>";
}).join("");

// --- packages ------------------------------------------------------------
document.getElementById("pkgCards").innerHTML = Object.keys(TIERS).map(function(k){
  var t = TIERS[k];
  var n = DISHES.filter(function(d){ return d.tiers.indexOf(t.id) > -1; }).length;
  function row(l,v){ return "<div class='kv'><dt>" + l + "</dt><dd class='tnum'>" + v + "</dd></div>"; }
  return "<div class='card'><h3>" + esc(t.name) + "</h3>" +
    "<p class='src' style='margin:5px 0 14px'>" + n + " dishes available at this tier</p><dl style='margin:0'>" +
    row("Minimum guests", t.minGuests) + row("Bites per guest", t.bitesPerGuest) +
    row("Menaje per guest", t.menajePerGuest>0?soles(t.menajePerGuest):"—") +
    row("Packaging per guest", t.packagingPerGuest>0?soles(t.packagingPerGuest):"—") +
    row("Waiters", t.guestsPerWaiter>0?("1 per "+t.guestsPerWaiter):"none") +
    row("On-site chefs", t.chefs) + row("Transport", soles(t.transport)) + "</dl></div>";
}).join("");

document.getElementById("pkgRates").innerHTML =
  [["Waiter / prep shift", soles(K.STAFF)],
   ["On-site chef shift", soles(K.CHEF)],
   ["IGV", Math.round(K.IGV*100) + "%"]].map(function(r){
    return "<div class='card'><p class='src' style='margin:0'>" + r[0] + "</p>" +
      "<p class='tnum' style=\\"font-family:'IBM Plex Mono',monospace;font-size:1.3rem;" +
      "font-weight:600;margin:5px 0 0\\">" + r[1] + "</p></div>";
  }).join("");

// --- find dishes ---------------------------------------------------------
// Mirrors matchesEvent() in lib/dishes.ts: every clause present must hold.
function matchesEvent(d, f){
  if (f.tier && d.tiers.indexOf(f.tier) === -1) return false;
  if (f.categories && f.categories.indexOf(d.category) === -1) return false;
  if (f.anyTags && !f.anyTags.some(function(t){ return d.tags.indexOf(t) > -1; })) return false;
  if (f.excludeTags && f.excludeTags.some(function(t){ return d.tags.indexOf(t) > -1; })) return false;
  return true;
}

var evtId = null, flav = [], flavMode = "any";

document.getElementById("evtGrid").innerHTML = EVENTS.map(function(e){
  return "<button class='pick' data-evt='" + e.id + "' aria-pressed='false'>" +
    "<span class='pick-name'>" + esc(e.name) + "</span>" +
    "<span class='dish-b'>" + esc(e.blurb) + "</span></button>";
}).join("");

document.getElementById("evtGrid").addEventListener("click", function(e){
  var b = e.target.closest("[data-evt]"); if (!b) return;
  evtId = (evtId === b.dataset.evt) ? null : b.dataset.evt;
  renderFind();
});

document.getElementById("flavChips").addEventListener("click", function(e){
  var b = e.target.closest("[data-flav]"); if (!b) return;
  if (b.dataset.flav === "__mode"){
    flavMode = (flavMode === "any") ? "all" : "any";
  } else {
    var i = flav.indexOf(b.dataset.flav);
    if (i > -1) flav.splice(i,1); else flav.push(b.dataset.flav);
  }
  renderFind();
});

document.addEventListener("click", function(e){
  if (e.target && e.target.id === "clearFind"){ evtId = null; flav = []; renderFind(); }
});

function renderFind(){
  var ev = null;
  for (var i = 0; i < EVENTS.length; i++) if (EVENTS[i].id === evtId) ev = EVENTS[i];

  var base = ev ? DISHES.filter(function(d){ return matchesEvent(d, ev.filter); }) : DISHES;
  var out = base;
  if (flav.length){
    out = out.filter(function(d){
      var f = FLAV[d.id] || [];
      return flavMode === "all"
        ? flav.every(function(x){ return f.indexOf(x) > -1; })
        : flav.some(function(x){ return f.indexOf(x) > -1; });
    });
  }

  [].forEach.call(document.querySelectorAll("[data-evt]"), function(b){
    b.setAttribute("aria-pressed", String(b.dataset.evt === evtId));
  });

  document.getElementById("flavChips").innerHTML = AXES.map(function(a){
    var n = base.filter(function(d){ return (FLAV[d.id] || []).indexOf(a) > -1; }).length;
    var on = flav.indexOf(a) > -1;
    var dis = (n === 0 && !on) ? " disabled" : "";
    return "<button class='chip' data-flav='" + a + "' aria-pressed='" + on + "'" + dis + ">" +
      "<span class='cap'>" + a + "</span> " +
      "<span class='mono tnum' style='font-size:11px;opacity:.65'>" + n + "</span></button>";
  }).join("") + (flav.length > 1
    ? "<button class='chip mono' data-flav='__mode' style='font-size:11px'>match: " + flavMode + "</button>"
    : "");

  document.getElementById("findCount").innerHTML =
    "<span class='mono' style='font-size:14px'><b class='tnum'>" + out.length +
    "</b> <span class='muted'>of " + DISHES.length + " dishes</span></span>" +
    ((ev || flav.length)
      ? " <button id='clearFind' class='linkbtn mono'>clear filters</button>"
      : "");

  if (!out.length){
    document.getElementById("findResults").innerHTML =
      "<p class='card'>Nothing matches that combination. Switch the match mode to " +
      "<strong>any</strong>, or drop a flavour.</p>";
    return;
  }

  document.getElementById("findResults").innerHTML = ORDER.map(function(cat){
    var rows = out.filter(function(d){ return d.category === cat; });
    if (!rows.length) return "";
    return "<section style='margin-bottom:26px'>" +
      "<h3 class='mono grouphead'>" + LABELS[cat] + " &middot; " + rows.length + "</h3>" +
      "<div class='grid g3'>" + rows.map(function(d){
        return "<div class='card' style='padding:15px'>" +
          "<div class='pick-top'><span class='pick-name'>" + esc(d.name) + "</span>" +
          "<span class='pick-price tnum'>" + soles(d.price) + "</span></div>" +
          "<span class='dna'><span class='u'>" + esc(d.uk) +
          "</span> <span style='color:var(--ink-3)'>&rarr;</span> <span class='p'>" + esc(d.pe) +
          "</span></span>" +
          "<div style='margin-top:9px;display:flex;flex-wrap:wrap;gap:4px'>" +
          (FLAV[d.id] || []).map(function(f){
            return "<span class='mono flavtag'>" + f + "</span>";
          }).join("") + "</div></div>";
      }).join("") + "</div></section>";
  }).join("");
}

renderFind();

// --- season --------------------------------------------------------------
// Mirrors inSeason() / dishesOutOfSeason() in lib/dishes.ts.
function inSeason(ing, m){ return ing.yearRound || ing.months.indexOf(m) > -1; }

var SHORT = ["J","F","M","A","M","J","J","A","S","O","N","D"];
var month = new Date().getMonth() + 1;

var unverified = INGS.filter(function(i){ return !i.verified; }).length;
document.getElementById("seasonWarn").innerHTML = unverified
  ? "<p class='card' style='border-color:var(--bad);margin-top:22px'>" +
    "<strong style='color:var(--bad)'>" + unverified + " of " + INGS.length +
    " seasons are unconfirmed.</strong> <span class='muted'>The dish links are reliable — they " +
    "come from the matrix. The month windows are estimates and nobody has checked them at a " +
    "market yet. Confirm before promising a client anything.</span></p>"
  : "";

document.getElementById("monthChips").addEventListener("click", function(e){
  var b = e.target.closest("[data-month]"); if (!b) return;
  month = Number(b.dataset.month);
  renderSeason();
});

function renderSeason(){
  document.getElementById("monthChips").innerHTML = MONTHS.map(function(m, i){
    var n = i + 1;
    return "<button class='chip mono' data-month='" + n + "' aria-pressed='" + (n === month) +
      "' aria-label='" + m + "' style='width:44px;padding:9px 0;text-align:center'>" +
      SHORT[i] + "</button>";
  }).join("");
  document.getElementById("monthName").textContent = MONTHS[month - 1];

  var seasonal = INGS.filter(function(i){ return !i.yearRound; });
  var pantry   = INGS.filter(function(i){ return i.yearRound; });
  var inNow    = seasonal.filter(function(i){ return inSeason(i, month); });
  var outNow   = seasonal.filter(function(i){ return !inSeason(i, month); });

  document.getElementById("seasonPanels").innerHTML =
    "<div class='card'><h3 class='mono grouphead' style='color:var(--good)'>Buying now &middot; " +
      inNow.length + "</h3>" +
      (inNow.length ? inNow.map(function(i){
        return "<div style='margin-bottom:14px'><span style='font-weight:700;font-size:.9rem'>" +
          esc(i.name) + "</span>" +
          (i.verified ? "" : " <span class='mono flavtag'>unconfirmed</span>") +
          "<span class='dish-b'>" + esc(i.note) + "</span>" +
          "<span class='mono' style='display:block;font-size:11px;color:var(--ink-3);margin-top:3px'>" +
          i.dishes.length + " dish" + (i.dishes.length === 1 ? "" : "es") + "</span></div>";
      }).join("") : "<p class='muted' style='font-size:.9rem'>Nothing seasonal peaks this month.</p>") +
    "</div>" +
    "<div class='card'><h3 class='mono grouphead' style='color:var(--warn)'>Out of window &middot; " +
      outNow.length + "</h3>" +
      (outNow.length ? outNow.map(function(i){
        return "<div style='margin-bottom:11px'><span class='muted' style='font-weight:700;font-size:.9rem'>" +
          esc(i.name) + "</span>" +
          "<span class='mono' style='display:block;font-size:11px;color:var(--ink-3)'>back in " +
          (i.months.length ? i.months.map(function(m){ return MONTHS[m-1].slice(0,3); }).join(", ") : "—") +
          "</span></div>";
      }).join("") : "<p class='muted' style='font-size:.9rem'>Everything seasonal is available.</p>") +
    "</div>";

  var off = {};
  seasonal.forEach(function(i){
    if (!inSeason(i, month)) i.dishes.forEach(function(id){ (off[id] = off[id] || []).push(i.name); });
  });
  var offIds = Object.keys(off).map(Number).sort(function(a,b){ return a-b; });

  document.getElementById("seasonOff").innerHTML =
    "<h2>Off the menu in " + MONTHS[month - 1] + "</h2>" +
    "<p class='lede' style='margin-top:8px'>" +
      (offIds.length
        ? "<b id='offCount' class='tnum'>" + offIds.length + "</b> of " + DISHES.length +
          " dishes depend on something out of window. Quote around them, or swap the ingredient."
        : "<b id='offCount' class='tnum'>0</b> — every dish in the matrix is buildable this month.") +
    "</p>" +
    (offIds.length ? "<div class='grid g3' style='margin-top:18px'>" + offIds.map(function(id){
      var d = null;
      for (var j = 0; j < DISHES.length; j++) if (DISHES[j].id === id) d = DISHES[j];
      if (!d) return "";
      return "<div class='card' style='padding:13px'>" +
        "<span style='font-weight:700;font-size:.875rem;line-height:1.25'>" + esc(d.name) + "</span>" +
        "<span class='mono' style='display:block;font-size:11px;color:var(--warn);margin-top:4px'>" +
        off[id].map(esc).join(", ") + "</span></div>";
    }).join("") + "</div>" : "");

  document.getElementById("seasonPantry").innerHTML =
    "<h3 class='mono grouphead'>Available all year &middot; " + pantry.length + "</h3>" +
    "<div style='display:flex;flex-wrap:wrap;gap:8px'>" + pantry.map(function(i){
      return "<span class='chip' style='cursor:default' title='" + esc(i.note) + "'>" +
        esc(i.name) + "</span>";
    }).join("") + "</div>";
}

renderSeason();

// --- builder -------------------------------------------------------------
var tier = "plated", picked = [51, 6, 71, 16];
var guestsEl = document.getElementById("guests");

document.getElementById("tierChips").innerHTML = Object.keys(TIERS).map(function(k){
  return "<button class='chip' data-tier='" + k + "' aria-pressed='" + (k===tier) + "'>" +
    esc(TIERS[k].name) + "</button>";
}).join("");

document.getElementById("tierChips").addEventListener("click", function(e){
  var b = e.target.closest("[data-tier]"); if (!b) return;
  tier = b.dataset.tier;
  [].forEach.call(this.querySelectorAll(".chip"), function(c){
    c.setAttribute("aria-pressed", String(c.dataset.tier === tier));
  });
  render();
});

guestsEl.addEventListener("input", function(){
  var v = parseInt(guestsEl.value, 10);
  if (!isFinite(v) || v < 1) v = 1;
  guestsEl.value = String(v);
  render();
});

document.getElementById("pickBody").addEventListener("click", function(e){
  var b = e.target.closest("[data-id]"); if (!b) return;
  var id = Number(b.dataset.id), i = picked.indexOf(id);
  if (i > -1) picked.splice(i,1); else picked.push(id);
  render();
});

function render(){
  var t = TIERS[tier];
  var guests = Math.max(1, parseInt(guestsEl.value,10) || 1);
  var available = DISHES.filter(function(d){ return d.tiers.indexOf(tier) > -1; });
  var selected  = available.filter(function(d){ return picked.indexOf(d.id) > -1; });

  document.getElementById("minNote").textContent = "minimum " + t.minGuests + " for this tier";

  var dropped = picked.length - selected.length;
  document.getElementById("dropNote").innerHTML = dropped > 0
    ? "<p class='card' style='padding:11px 14px;font-size:.9rem;margin:0 0 20px'>" + dropped +
      " selected dish" + (dropped===1?"":"es") +
      " not offered at this tier — still saved if you switch back.</p>" : "";

  document.getElementById("pickBody").innerHTML = ORDER.map(function(cat){
    var rows = available.filter(function(d){ return d.category === cat; });
    if (!rows.length) return "";
    return "<section style='margin-bottom:26px'><h3 class='src' style=\\"font-family:'IBM Plex Mono',monospace;" +
      "letter-spacing:.12em;text-transform:uppercase;margin:0 0 10px\\">" + LABELS[cat] + "</h3>" +
      "<div class='picks'>" + rows.map(function(d){
        return "<button class='pick' data-id='" + d.id + "' aria-pressed='" +
          (picked.indexOf(d.id) > -1) + "'>" +
          "<span class='pick-top'><span class='pick-name'>" + esc(d.name) + "</span>" +
          "<span class='pick-price tnum'>" + soles(d.price) + "</span></span>" +
          "<span class='dna'><span class='u'>" + esc(d.uk) +
          "</span> <span style='color:var(--ink-3)'>→</span> <span class='p'>" + esc(d.pe) +
          "</span></span></button>";
      }).join("") + "</div></section>";
  }).join("");

  var q = buildQuote(selected, guests, tier);
  var box = document.getElementById("quote");
  if (!q){
    box.innerHTML = "<h3>Your quote</h3><p class='muted' style='font-size:.9rem;margin-top:8px'>" +
      "Pick at least one dish to see the price.</p>";
    return;
  }
  function row(l,v,cls){ return "<div class='qrow " + (cls||"") + "'><span>" + l +
    "</span><span class='tnum'>" + v + "</span></div>"; }
  box.innerHTML = "<h3>Your quote</h3>" +
    "<p class='src' style='margin:4px 0 12px'>" + esc(q.tier.name) + " · " + q.guests +
      " guests · " + selected.length + " dishes</p>" +
    q.warnings.map(function(w){ return "<p class='warn'>" + esc(w) + "</p>"; }).join("") +
    "<div style='margin-top:14px'>" +
      row("Menu, per guest", soles(q.menuValuePerGuest)) +
      q.serviceLines.map(function(l){ return row(esc(l.label), soles(l.perGuest), "dim"); }).join("") +
      row("Net, per guest", soles(q.netPerGuest), "tot") +
    "</div><div style='margin-top:16px;border-top:1px solid var(--line);padding-top:14px'>" +
      row("Net · " + q.guests + " guests", soles(q.netTotal)) +
      row("IGV at 18%", soles(q.igvTotal), "dim") +
      row("Client pays", soles(q.grossTotal), "tot") +
    "</div>" +
    "<div class='keep'><p class='lbl'>What you keep</p>" +
      "<p class='big tnum'>" + soles(q.contributionTotal) + "</p>" +
      "<p class='muted' style='font-size:.8rem;margin:4px 0 0'>" + soles(q.contributionPerGuest) +
      " per guest · " + Math.round(q.contributionRatio*100) +
      "% of net. Food and service costs are already out.</p></div>" +
    "<p class='note'>Kitchen rent, insurance and your own wage come out of this figure. " +
      "Estimates only — not a binding quote.</p>";
}

render();
})();
</script>
`;

const out = process.argv[2] || path.join(ROOT, "standalone.html");
fs.writeFileSync(out, html);
console.log(`wrote ${out} (${(html.length / 1024).toFixed(0)} KB, ${DISHES.length} dishes)`);
