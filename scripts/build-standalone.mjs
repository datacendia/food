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
  // A data module may export more than one value (venues.ts exports two), and
  // any `export` left behind breaks the CJS require below - so convert them all.
  const js = src
    .replace(/^import type .*$/gm, "")
    .replace(/export const (\w+)\s*:[^=]+=/g, "module.exports.$1 =");
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
const MOMENTS = loadData("moments.ts", "MOMENTS");
const RECIPES = loadData("recipes.ts", "RECIPES");
const DISTRICTS = loadData("venues.ts", "DISTRICTS");
const VENUE_TYPES = loadData("venues.ts", "VENUE_TYPES");

if (DISHES.length < 100) {
  throw new Error(`Expected the full matrix, extracted only ${DISHES.length}`);
}
const unflavoured = DISHES.filter((d) => !FLAVOURS[d.id]).map((d) => d.id);
if (unflavoured.length) {
  throw new Error(`Dishes missing a flavour entry: ${unflavoured.join(", ")}`);
}
const dishIds = new Set(DISHES.map((d) => d.id));
const ghostRecipes = RECIPES.filter((r) => !dishIds.has(r.dishId)).map((r) => r.dishId);
if (ghostRecipes.length) {
  throw new Error(`Recipes for dishes not in the matrix: ${ghostRecipes.join(", ")}`);
}
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
  bowl: "Bowls",
  side: "Sides &amp; breads",
  breakfast: "Breakfast",
  bakery: "Bakery",
  dessert: "Desserts"
};
const CATEGORY_ORDER = ["canape","main","bowl","side","breakfast","bakery","dessert"];

const FLAVOUR_AXES = ["sweet","savoury","rich","tart","smoky","spiced","fresh"];

const payload = JSON.stringify({ dishes: DISHES, tiers: TIERS, k: CONST, labels: CATEGORY_LABEL,
  flavours: FLAVOURS, events: EVENTS, axes: FLAVOUR_AXES,
  ingredients: INGREDIENTS, order: CATEGORY_ORDER, moments: MOMENTS, recipes: RECIPES,
  districts: DISTRICTS, venues: VENUE_TYPES,
  trip: { vanHourly: 45, perKm: 1.8, crewHourly: 18, generator: 280,
          vanTrips: { scran:1, buffet:2, plated:2 }, loadCrew: { scran:1, buffet:2, plated:3 } },
  formats: { "drop-off": "Drop-off", buffet: "Buffet", plated: "Plated", "live-station": "Live station" },
  cap: { fryer: 2, oven: 4, liveStation: 2, griddle: 3 },
  lead: { cold: 1440, oven: 240, hob: 180, griddle: 30, fryer: 15 },
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
      <button class="tab" role="tab" data-pane="moments" aria-selected="false">The evening</button>
      <button class="tab" role="tab" data-pane="find" aria-selected="false">Find dishes</button>
      <button class="tab" role="tab" data-pane="menu" aria-selected="false">The matrix</button>
      <button class="tab" role="tab" data-pane="seasonal" aria-selected="false">Season</button>
      <button class="tab" role="tab" data-pane="compare" aria-selected="false">Compare</button>
      <button class="tab" role="tab" data-pane="graph" aria-selected="false">Ingredients</button>
      <button class="tab" role="tab" data-pane="recipes" aria-selected="false">Recipes</button>
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
      something else again. The full matrix, taking Glasgow technique through the Lima pantry.</p>
    <div class="btns">
      <button class="btn" data-goto="builder">Build a menu &amp; see the price</button>
      <button class="btn ghost" data-goto="menu">Browse the whole matrix</button>
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

  <section class="pane" id="pane-moments" hidden>
    <h1>The evening</h1>
    <p class="lede">Point at the part of the night you are trying to fill. The bar under each
      moment shows how much of the matrix serves it — which is also where the gaps are.</p>
    <ol id="momentArc" class="grid" style="grid-template-columns:repeat(auto-fit,minmax(150px,1fr));margin:30px 0 0;padding:0;list-style:none"></ol>
    <div id="momentBody" style="margin-top:34px;border-top:1px solid var(--line);padding-top:22px"></div>
  </section>

  <section class="pane" id="pane-compare" hidden>
    <h1>What the money buys</h1>
    <p class="lede">The same event at all three tiers, side by side. Set the head count and the
      difference between a boxed lunch and a plated dinner becomes a number.</p>
    <fieldset style="margin-top:26px">
      <legend>Guests</legend>
      <input type="number" id="cmpGuests" min="1" max="500" value="30" aria-label="Guests">
    </fieldset>
    <div id="cmpBody" class="grid" style="grid-template-columns:repeat(auto-fit,minmax(280px,1fr))"></div>
  </section>

  <section class="pane" id="pane-graph" hidden>
    <h1>What unlocks what</h1>
    <p class="lede">Every ingredient sized by how much menu it opens up. What belongs on a standing
      order, and which dishes carry an ingredient nothing else uses.</p>
    <div class="grid" style="grid-template-columns:1fr;margin-top:28px">
      <div id="graphSvg" style="overflow-x:auto"></div>
      <div id="graphList"></div>
    </div>
    <div id="graphOrphans" style="margin-top:34px;border-top:1px solid var(--line);padding-top:22px"></div>
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
    <fieldset>
      <legend>Service format</legend>
      <div class="chips" id="fmtChips"></div>
    </fieldset>
    <div id="findCount" style="border-top:1px solid var(--line);padding-top:18px;margin-bottom:20px"></div>
    <div id="findResults"></div>
  </section>

  <section class="pane" id="pane-menu" hidden>
    <h1>The matrix</h1>
    <p class="lede">Every dish with its lineage, its food cost and its menu value. The
      <span class="dna"><span class="u">purple</span></span> half is the British original; the
      <span class="dna"><span class="p">gold</span></span> half is what Peru does to it.</p>
    <p class="lede" style="font-size:.92rem;color:var(--ink-3);margin-top:10px">FC% is food cost as a
      share of menu value. Above 30% is flagged — it is eating margin.</p>
    <div id="menuBody"></div>
  </section>

  <section class="pane" id="pane-recipes" hidden>
    <h1>Recipes</h1>
    <p class="lede">How each dish is actually made, at catering scale. Every one carries a
      make-ahead plan and an honest hold time — what a dish will and will not survive is a
      scheduling fact, not a detail.</p>
    <p class="lede" style="font-size:.92rem;color:var(--ink-3);margin-top:10px">Quantities are
      batch quantities, not domestic ones. Cross-check them against the run sheet in Build a menu
      before a real service.</p>
    <fieldset style="margin-top:28px">
      <legend>Course</legend>
      <div class="chips" id="recCats"></div>
    </fieldset>
    <fieldset>
      <legend>Search</legend>
      <input id="recSearch" type="search" placeholder="dish, ingredient or technique"
        aria-label="Search recipes"
        style="width:100%;max-width:420px;padding:10px 12px;border:1px solid var(--line);
               border-radius:8px;background:var(--surface);color:var(--ink);font:inherit">
    </fieldset>
    <div id="recCount" style="border-top:1px solid var(--line);padding-top:18px;margin-bottom:20px"></div>
    <div id="recBody"></div>
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
        <fieldset>
          <legend>Where is it?</legend>
          <div style="display:flex;flex-wrap:wrap;gap:14px;align-items:flex-end">
            <label style="display:block;font-size:.86rem;color:var(--ink-2)">District
              <select id="distSel" aria-label="District"
                style="display:block;margin-top:5px;padding:9px 11px;border:1px solid var(--line);
                       border-radius:8px;background:var(--surface);color:var(--ink);font:inherit"></select>
            </label>
            <label style="display:block;font-size:.86rem;color:var(--ink-2)">Venue
              <select id="venueSel" aria-label="Venue type"
                style="display:block;margin-top:5px;padding:9px 11px;border:1px solid var(--line);
                       border-radius:8px;background:var(--surface);color:var(--ink);font:inherit"></select>
            </label>
            <label style="display:flex;align-items:center;gap:7px;font-size:.86rem;color:var(--ink-2);padding-bottom:9px">
              <input type="checkbox" id="peakChk" checked> Loading in at rush hour
            </label>
          </div>
          <p id="venueNote" class="muted" style="font-size:.88rem;margin:12px 0 0"></p>
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
var MOMENTS = D.moments, FORMATS = D.formats, CAP = D.cap, LEAD = D.lead;
var ORDER = D.order;
var RECIPES = D.recipes;
var DISTRICTS = D.districts, VENUES = D.venues, TRIP = D.trip;

function soles(n){ return "S/ " + n.toFixed(2); }
function esc(s){ return String(s).replace(/[&<>"]/g, function(c){
  return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
function ratio(d){ return d.cost / d.price; }
function flag(d){ var r = ratio(d); return r > K.FC_MAX ? "over" : (r < K.FC_MIN ? "under" : "ok"); }

// --- transport, mirroring lib/venues.ts ----------------------------------
function transportCost(tierId, district, venue, peak, liveStation){
  var oneWay = district.driveMinutes + (peak ? district.peakExtra : 0);
  var trips = TRIP.vanTrips[tierId];
  var driveMinutes = oneWay * 2 * trips;
  var vanCost = (driveMinutes / 60) * TRIP.vanHourly;
  var fuelCost = district.km * 2 * trips * TRIP.perKm;
  var crew = TRIP.loadCrew[tierId];
  var crewMinutes = venue.crewMinutes * 2 * trips * crew;
  var crewCost = (crewMinutes / 60) * TRIP.crewHourly;

  var lines = [
    { label:"Van \u2014 " + trips + " run" + (trips===1?"":"s") + ", " + Math.round(driveMinutes) + " min driving", total:vanCost },
    { label:"Fuel \u2014 " + (district.km*2*trips) + " km", total:fuelCost }
  ];
  var warnings = [];
  if (crewCost > 0) lines.push({ label:"Load-in crew \u2014 " + crew + " \u00d7 " + Math.round(crewMinutes/crew) + " min", total:crewCost });
  if (liveStation && !venue.hasPower){
    lines.push({ label:"Generator hire \u2014 no mains power on site", total:TRIP.generator });
    warnings.push(venue.name + " has no mains power. A live station needs a generator, priced in above.");
  }
  if (!venue.hasKitchen && tierId === "plated"){
    warnings.push(venue.name + " has no kitchen. Plated service here means everything finishes off a hot box \u2014 check the menu holds.");
  }
  if (oneWay >= 60){
    warnings.push(district.name + " is " + oneWay + " minutes each way" + (peak?" in traffic":"") + ". Cold-chain and crew hours both need checking before quoting.");
  }
  var total = lines.reduce(function(a,l){ return a + l.total; }, 0);
  return { total:Math.round(total*100)/100, lines:lines, driveMinutes:driveMinutes, warnings:warnings };
}

// --- quote maths, mirroring lib/pricing.ts -------------------------------
function buildQuote(dishes, guests, tierId, ctx){
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
  // Transport is costed against the real venue when one is set.
  var tLine;
  if (ctx && ctx.district && ctx.venue){
    var live = dishes.some(function(d){ return d.format === "live-station"; });
    var tc = transportCost(tierId, ctx.district, ctx.venue, ctx.peak, live);
    tLine = { label:"Transport & load-in \u2014 " + ctx.district.name + ", " + ctx.venue.name,
              perGuest: tc.total/guests, total: tc.total };
    warnings = warnings.concat(tc.warnings);
  } else {
    tLine = { label:"Transport & load-in (flat estimate \u2014 no venue set)",
              perGuest: t.transport/guests, total: t.transport };
  }
  var lines = [
    { label:"Menaje hire", perGuest:t.menajePerGuest, total:t.menajePerGuest*guests },
    { label:"Packaging",   perGuest:t.packagingPerGuest, total:t.packagingPerGuest*guests },
    { label: waiters > 0
        ? "Staff — " + waiters + " waiter" + (waiters===1?"":"s") + ", " + t.chefs + " chef"
        : "Staff — " + t.chefs + " chef",
      perGuest: staffTotal/guests, total: staffTotal },
    tLine
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
  ["home","moments","find","menu","recipes","seasonal","compare","graph","packages","builder"].forEach(function(p){
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

document.getElementById("homeSigs").innerHTML = DISHES.slice()
  .filter(function(d){ return d.tiers.length === 3; })
  .sort(function(a,b){ return a.cost/a.price - b.cost/b.price; })
  .slice(0,6)
  .map(function(d){
    return "<div class='card'><p class='dish-n'>" + String(d.id).padStart(3,"0") + "</p>" +
      "<h3 style='margin:3px 0 8px'>" + esc(d.name) + "</h3>" +
      "<p class='muted' style='font-size:.9rem;margin:0 0 10px'>" + esc(d.fusion) + "</p>" +
      "<p class='dna' style='margin:0'><span class='u'>" + esc(d.origin) +
      "</span> <span style='color:var(--ink-3)'>→</span> <span class='p'>" + esc(d.subOrigin) +
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
        "<span class='dish-b'>" + esc(d.fusion) + "</span>" +
        "<span class='dna'><span class='u'>" + esc(d.origin) +
          "</span> <span style='color:var(--ink-3)'>→</span> <span class='p'>" + esc(d.subOrigin) + "</span></span>" +
        "</td>" +
        "<td class='money tnum muted'>" + soles(d.cost) + "</td>" +
        "<td class='money tnum' style='font-weight:600'>" + soles(d.price) + "</td>" +
        "<td class='fc tnum " + flag(d) + "'>" + Math.round(ratio(d)*100) + "%</td>" +
        "<td class='src'>" + esc(d.source) + "</td></tr>";
    }).join("") + "</tbody></table></div>";
}).join("");

// --- recipes -------------------------------------------------------------
// One card per dish, filtered by course and by a free-text search that reaches
// into the ingredients and the method - so "fryer" or "lucuma" both find work.
var RECIPE_BY_DISH = {};
RECIPES.forEach(function(r){ RECIPE_BY_DISH[r.dishId] = r; });
var DISH_BY_ID = {};
DISHES.forEach(function(d){ DISH_BY_ID[d.id] = d; });

var recCat = "";      // "" means every course
var recQuery = "";

function recipeHaystack(r, d){
  return (d.name + " " + d.fusion + " " + d.keyIngredients + " " +
    r.ingredients.map(function(i){ return i.qty + " " + i.item; }).join(" ") + " " +
    r.method.join(" ") + " " + r.makeAhead + " " + r.holds).toLowerCase();
}

function recipeMatches(r){
  var d = DISH_BY_ID[r.dishId];
  if (!d) return false;
  if (recCat && d.category !== recCat) return false;
  if (recQuery && recipeHaystack(r, d).indexOf(recQuery) === -1) return false;
  return true;
}

function renderRecCats(){
  var html = "<button class='chip" + (recCat === "" ? " on" : "") + "' data-rcat=''>All" +
    "<span class='tnum'> " + RECIPES.length + "</span></button>";
  html += ORDER.map(function(c){
    var n = RECIPES.filter(function(r){
      var d = DISH_BY_ID[r.dishId]; return d && d.category === c;
    }).length;
    if (!n) return "";
    return "<button class='chip" + (recCat === c ? " on" : "") + "' data-rcat='" + c + "'>" +
      LABELS[c] + "<span class='tnum'> " + n + "</span></button>";
  }).join("");
  document.getElementById("recCats").innerHTML = html;
  [].forEach.call(document.querySelectorAll("[data-rcat]"), function(b){
    b.addEventListener("click", function(){
      recCat = (recCat === b.dataset.rcat) ? "" : b.dataset.rcat;
      renderRecCats(); renderRecipes();
    });
  });
}

function renderRecipes(){
  var hits = RECIPES.filter(recipeMatches);
  document.getElementById("recCount").innerHTML =
    "<b class='tnum'>" + hits.length + "</b> of " + RECIPES.length + " recipes" +
    (recQuery ? " matching &ldquo;" + esc(recQuery) + "&rdquo;" : "");

  if (!hits.length){
    document.getElementById("recBody").innerHTML =
      "<p class='muted'>Nothing matches that. Try an ingredient rather than a dish name.</p>";
    return;
  }

  document.getElementById("recBody").innerHTML = hits.map(function(r){
    var d = DISH_BY_ID[r.dishId];
    var total = r.prepMin + r.cookMin;
    return "<div class='card' style='margin-bottom:18px'>" +
      "<p class='dish-n'>" + String(d.id).padStart(3,"0") + " &middot; " + LABELS[d.category] + "</p>" +
      "<h3 style='margin:3px 0 6px'>" + esc(d.name) + "</h3>" +
      "<p class='dna' style='margin:0 0 10px'><span class='u'>" + esc(d.origin) +
        "</span> <span style='color:var(--ink-3)'>&rarr;</span> <span class='p'>" +
        esc(d.subOrigin) + "</span></p>" +
      "<p class='src' style='margin:0 0 16px'>" + esc(r.yields) +
        " &middot; prep " + r.prepMin + " min &middot; cook " + r.cookMin + " min" +
        " &middot; <span class='tnum'>" + total + " min</span> total" +
        " &middot; " + esc(FORMATS[d.format]) + "</p>" +

      "<div class='grid' style='grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:22px'>" +
        "<div><h4 style='margin:0 0 8px;font-size:.78rem;letter-spacing:.08em;" +
          "text-transform:uppercase;color:var(--ink-3)'>Ingredients</h4><dl style='margin:0'>" +
          r.ingredients.map(function(i){
            return "<div class='kv'><dt>" + esc(i.item) + "</dt>" +
              "<dd class='tnum'>" + esc(i.qty) + "</dd></div>";
          }).join("") + "</dl></div>" +
        "<div><h4 style='margin:0 0 8px;font-size:.78rem;letter-spacing:.08em;" +
          "text-transform:uppercase;color:var(--ink-3)'>Method</h4><ol style='margin:0;padding-left:18px'>" +
          r.method.map(function(m){
            return "<li style='margin-bottom:7px;line-height:1.5'>" + esc(m) + "</li>";
          }).join("") + "</ol></div>" +
      "</div>" +

      "<div style='margin-top:16px;border-top:1px solid var(--line);padding-top:14px'>" +
        "<div class='kv'><dt>Make ahead</dt><dd>" + esc(r.makeAhead) + "</dd></div>" +
        "<div class='kv'><dt>Holds</dt><dd>" + esc(r.holds) + "</dd></div>" +
        (r.scaling ? "<div class='kv'><dt>At scale</dt><dd>" + esc(r.scaling) + "</dd></div>" : "") +
      "</div></div>";
  }).join("");
}

document.getElementById("recSearch").addEventListener("input", function(e){
  recQuery = e.target.value.trim().toLowerCase();
  renderRecipes();
});
renderRecCats();
renderRecipes();

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
  if (f.formats && f.formats.indexOf(d.format) === -1) return false;
  if (f.needsLicence !== undefined && d.needsLicence !== f.needsLicence) return false;
  if (f.veg !== undefined && d.veg !== f.veg) return false;
  if (f.subOrigins && !f.subOrigins.some(function(o){ return d.subOrigin.indexOf(o) === 0; })) return false;
  return true;
}

var evtId = null, flav = [], flavMode = "any", fmts = [];

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

document.getElementById("fmtChips").addEventListener("click", function(e){
  var b = e.target.closest("[data-fmt]"); if (!b) return;
  var i = fmts.indexOf(b.dataset.fmt);
  if (i > -1) fmts.splice(i,1); else fmts.push(b.dataset.fmt);
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

document.addEventListener("input", function(e){
  if (e.target && e.target.id === "svcTime"){ serviceTime = e.target.value || "19:30"; render(); }
});

document.addEventListener("click", function(e){
  if (e.target && e.target.id === "clearFind"){ evtId = null; flav = []; fmts = []; renderFind(); }
});

function renderFind(){
  var ev = null;
  for (var i = 0; i < EVENTS.length; i++) if (EVENTS[i].id === evtId) ev = EVENTS[i];

  var eventBase = ev ? DISHES.filter(function(d){ return matchesEvent(d, ev.filter); }) : DISHES;
  // Flavour counts must respect the format axis, or the compass lies.
  var base = fmts.length ? eventBase.filter(function(d){ return fmts.indexOf(d.format) > -1; }) : eventBase;
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

  document.getElementById("fmtChips").innerHTML = Object.keys(FORMATS).map(function(f){
    var n = eventBase.filter(function(d){ return d.format === f; }).length;
    var on = fmts.indexOf(f) > -1;
    return "<button class='chip' data-fmt='" + f + "' aria-pressed='" + on + "'" +
      (n === 0 && !on ? " disabled" : "") + ">" + esc(FORMATS[f]) +
      " <span class='mono tnum' style='font-size:11px;opacity:.65'>" + n + "</span></button>";
  }).join("");

  document.getElementById("findCount").innerHTML =
    "<span class='mono' style='font-size:14px'><b class='tnum'>" + out.length +
    "</b> <span class='muted'>of " + DISHES.length + " dishes</span></span>" +
    ((ev || flav.length || fmts.length)
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
          "<span class='dna'><span class='u'>" + esc(d.origin) +
          "</span> <span style='color:var(--ink-3)'>&rarr;</span> <span class='p'>" + esc(d.subOrigin) +
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

// --- moments -------------------------------------------------------------
var momentId = MOMENTS[0].id;

document.getElementById("momentArc").addEventListener("click", function(e){
  var b = e.target.closest("[data-moment]"); if (!b) return;
  momentId = b.dataset.moment; renderMoments();
});

function renderMoments(){
  var counts = {}, maxN = 1;
  MOMENTS.forEach(function(m){
    counts[m.id] = DISHES.filter(function(d){ return matchesEvent(d, m.filter); }).length;
    if (counts[m.id] > maxN) maxN = counts[m.id];
  });

  document.getElementById("momentArc").innerHTML = MOMENTS.map(function(m, i){
    var on = m.id === momentId, n = counts[m.id];
    var w = Math.max(8, Math.round((n / maxN) * 100));
    return "<li><button class='pick' data-moment='" + m.id + "' aria-pressed='" + on + "'" +
      (on ? " style='border-color:var(--aji);background:var(--surface)'" : "") + ">" +
      "<span class='mono' style='font-size:10px;color:var(--ink-3)'>" +
      (i < 9 ? "0" : "") + (i + 1) + "</span>" +
      "<span class='pick-name' style='display:block;margin-top:3px'>" + esc(m.name) + "</span>" +
      "<span style='display:block;height:3px;border-radius:2px;background:var(--aji);margin-top:11px;width:" + w + "%'></span>" +
      "<span class='mono tnum' style='display:block;font-size:11px;color:var(--ink-2);margin-top:5px'>" +
      n + " dishes</span></button></li>";
  }).join("");

  var m = null;
  for (var i = 0; i < MOMENTS.length; i++) if (MOMENTS[i].id === momentId) m = MOMENTS[i];
  var rows = DISHES.filter(function(d){ return matchesEvent(d, m.filter); });

  document.getElementById("momentBody").innerHTML =
    "<h2>" + esc(m.name) + "</h2><p class='lede' style='margin-top:7px'>" + esc(m.blurb) + "</p>" +
    "<div class='grid g3' style='margin-top:20px'>" + rows.map(function(d){
      return "<div class='card' style='padding:15px'>" +
        "<div class='pick-top'><span class='pick-name'>" + esc(d.name) + "</span>" +
        "<span class='pick-price tnum'>" + soles(d.price) + "</span></div>" +
        "<span class='dna'><span class='u'>" + esc(d.origin) +
        "</span> <span style='color:var(--ink-3)'>&rarr;</span> <span class='p'>" + esc(d.subOrigin) + "</span></span>" +
        "<div style='margin-top:9px;display:flex;flex-wrap:wrap;gap:4px'>" +
        "<span class='mono flavtag' style='text-transform:none'>" + esc(FORMATS[d.format]) + "</span>" +
        (d.needsLicence ? "<span class='mono flavtag' style='color:var(--warn);text-transform:none'>licence</span>" : "") +
        (d.veg ? "<span class='mono flavtag' style='color:var(--good);text-transform:none'>veg</span>" : "") +
        "</div></div>";
    }).join("") + "</div>";
}
renderMoments();

// --- conflicts (mirrors lib/conflicts.ts) ---------------------------------
function blendedFoodCost(sel, tierId){
  if (!sel.length) return 0;
  var t = TIERS[tierId];
  var canapes = sel.filter(function(d){ return d.category === "canape"; });
  var plates  = sel.filter(function(d){ return d.category !== "canape"; });
  var cost = 0, value = 0;
  if (canapes.length){
    var ac = canapes.reduce(function(s,d){ return s + d.cost; }, 0) / canapes.length;
    var av = canapes.reduce(function(s,d){ return s + d.price; }, 0) / canapes.length;
    cost += ac * t.bitesPerGuest; value += av * t.bitesPerGuest;
  }
  plates.forEach(function(d){ cost += d.cost; value += d.price; });
  return value > 0 ? cost / value : 0;
}

function findConflicts(sel, tierId){
  var out = [];

  // allergen: a course where every dish shares one
  var byCat = {};
  sel.forEach(function(d){ (byCat[d.category] = byCat[d.category] || []).push(d); });
  Object.keys(byCat).forEach(function(cat){
    var list = byCat[cat];
    if (list.length < 2) return;
    ["gluten","dairy","egg","fish","shellfish","nuts","pork","alcohol"].forEach(function(a){
      if (list.every(function(d){ return d.allergens.indexOf(a) > -1; })){
        out.push({ severity:"blocker", kind:"allergen",
          title: "No " + a + "-free option in " + LABELS[cat],
          detail: "All " + list.length + " dishes in this course contain " + a +
            ". A guest avoiding it has nothing to eat at this course." });
      }
    });
  });

  // kitchen contention
  function using(k){ return sel.filter(function(d){ return d.equipment.indexOf(k) > -1; }); }
  var fry = using("fryer");
  if (fry.length > CAP.fryer) out.push({ severity:"warning", kind:"kitchen",
    title: fry.length + " fried dishes, one fryer",
    detail: "Frying is sequential and oil temperature drops between batches. Above " +
      CAP.fryer + " the last one reaches the guest cold." });
  var ov = using("oven");
  if (ov.length > CAP.oven) out.push({ severity:"warning", kind:"kitchen",
    title: ov.length + " oven dishes in one service",
    detail: "Pastry, sponge and roasting all want different temperatures. Above " +
      CAP.oven + " you are either staging or compromising one of them." });
  var live = sel.filter(function(d){ return d.format === "live-station"; });
  if (live.length > CAP.liveStation) out.push({ severity:"blocker", kind:"kitchen",
    title: live.length + " live stations",
    detail: "Each live station needs someone standing at it for the whole service. Above " +
      CAP.liveStation + " this is a staffing cost the quote does not carry." });
  var gr = using("griddle");
  if (gr.length > CAP.griddle) out.push({ severity:"warning", kind:"kitchen",
    title: gr.length + " griddle items",
    detail: "One plancha, cooked to order. Above " + CAP.griddle + " the queue is the problem." });

  // margin
  if (sel.length){
    var blended = blendedFoodCost(sel, tierId);
    if (blended > K.FC_MAX){
      var worst = sel.slice().sort(function(a,b){ return b.cost/b.price - a.cost/a.price; }).slice(0,3);
      out.push({ severity:"warning", kind:"margin",
        title: "Blended food cost " + (blended*100).toFixed(1) + "%",
        detail: "Above the " + Math.round(K.FC_MAX*100) + "% ceiling. The heaviest items are " +
          worst.map(function(d){ return d.name; }).join(", ") + ". Swap one out or lift the price." });
    }
  }

  return out.sort(function(a,b){
    return a.severity === b.severity ? 0 : (a.severity === "blocker" ? -1 : 1);
  });
}

// --- run sheet (mirrors lib/runsheet.ts) ----------------------------------
var STATION = { cold:"Cold section", oven:"Oven", hob:"Stove", griddle:"Plancha", fryer:"Fryer" };

function leadStation(d){
  var best = "cold", bestLead = -1;
  d.equipment.forEach(function(e){
    if (LEAD[e] !== undefined && LEAD[e] > bestLead){ bestLead = LEAD[e]; best = e; }
  });
  return best;
}

function addMinutes(hhmm, mins){
  var parts = hhmm.split(":"), h = Number(parts[0]), m = Number(parts[1]);
  if (!isFinite(h) || !isFinite(m)) return hhmm;
  var total = (((h*60 + m + mins) % 1440) + 1440) % 1440;
  return ("0" + Math.floor(total/60)).slice(-2) + ":" + ("0" + (total%60)).slice(-2);
}

function buildRunSheet(sel, serviceTime){
  if (!sel.length) return [];
  var groups = {};
  sel.forEach(function(d){ var st = leadStation(d); (groups[st] = groups[st] || []).push(d); });
  var steps = Object.keys(groups).map(function(st){
    var offset = LEAD[st] || 60;
    return { offset: offset, station: STATION[st] || st,
      label: st === "cold" ? "Prep and set — done the day before"
           : st === "fryer" ? "Fry to order, into service"
           : "Start " + (STATION[st] || st).toLowerCase() + " work",
      dishes: groups[st].map(function(d){ return d.name; }),
      clock: addMinutes(serviceTime, -offset) };
  });
  steps.push({ offset:0, station:"Pass", label:"Service", dishes:[], clock:serviceTime });
  return steps.sort(function(a,b){ return b.offset - a.offset; });
}

// --- compare ---------------------------------------------------------------
var cmpGuestsEl = document.getElementById("cmpGuests");
cmpGuestsEl.addEventListener("input", renderCompare);

function renderCompare(){
  var guests = Math.max(1, parseInt(cmpGuestsEl.value, 10) || 1);
  document.getElementById("cmpBody").innerHTML = ["scran","buffet","plated"].map(function(tid){
    var t = TIERS[tid];
    var pool = DISHES.filter(function(d){ return d.tiers.indexOf(tid) > -1; });
    var menu = [];
    ["canape","main","side","dessert"].forEach(function(cat){
      var best = pool.filter(function(d){ return d.category === cat; })
        .sort(function(a,b){ return a.cost/a.price - b.cost/b.price; })[0];
      if (best) menu.push(best);
    });
    var q = buildQuote(menu, guests, tid);
    if (!q) return "<div class='card'><h3>" + esc(t.name) + "</h3></div>";
    function row(l,v,strong){
      return "<div class='qrow " + (strong ? "tot" : "") + "'><span>" + l +
        "</span><span class='tnum'>" + v + "</span></div>";
    }
    return "<div class='card'><h3>" + esc(t.name) + "</h3>" +
      "<p class='mono' style='font-size:11px;color:var(--ink-3);margin:4px 0 0'>min " + t.minGuests + " guests</p>" +
      "<p class='mono tnum' style='font-size:1.9rem;font-weight:600;margin:14px 0 0'>" +
        soles(q.netPerGuest) + "</p>" +
      "<p class='mono' style='font-size:11px;color:var(--ink-3);margin:0'>per guest, net of IGV</p>" +
      (q.warnings.length ? "<p class='warn'>" + esc(q.warnings[0]) + "</p>" : "") +
      "<div style='margin-top:14px'>" +
        row("Food", soles(q.foodCostPerGuest)) +
        row("Service", soles(q.serviceCostPerGuest)) +
        row("Total &middot; " + guests, soles(q.netTotal), true) +
        row("Client pays inc. IGV", soles(q.grossTotal), true) +
      "</div>" +
      "<div style='margin-top:16px;border-top:1px solid var(--line);padding-top:13px'>" +
        "<p class='mono grouphead'>What lands on the table</p>" +
        "<ul style='margin:0;padding-left:1.1em;font-size:12.5px;color:var(--ink-2)'>" +
        menu.map(function(d){ return "<li>" + esc(d.name) + "</li>"; }).join("") + "</ul>" +
        "<p class='muted' style='font-size:12.5px;margin:11px 0 0'>" +
        (t.menajePerGuest > 0 ? "Hired china and glassware. " : "Boxed, no china. ") +
        (t.guestsPerWaiter > 0 ? "Waiting staff, 1 per " + t.guestsPerWaiter + "." : "No staff on site.") +
        "</p></div>" +
      "<p class='mono tnum' style='color:var(--good);font-size:12.5px;margin:16px 0 0'>You keep " +
        soles(q.contributionTotal) + " (" + Math.round(q.contributionRatio*100) + "%)</p>" +
      "</div>";
  }).join("");
}
renderCompare();

// --- ingredient graph -----------------------------------------------------
function splitIngredients(raw){
  return raw.split(/[,;]/).map(function(x){
    return x.trim().toLowerCase().replace(/\\s*\\([^)]*\\)/g, "").trim();
  }).filter(function(x){ return x.length > 2; });
}

function buildGraph(){
  var map = {};
  DISHES.forEach(function(d){
    var seen = {};
    splitIngredients(d.keyIngredients).forEach(function(n){
      if (seen[n]) return; seen[n] = 1;
      var node = map[n] || { name:n, dishes:[], value:0 };
      node.dishes.push(d.id); node.value += d.price; map[n] = node;
    });
  });
  return Object.keys(map).map(function(k){ return map[k]; })
    .sort(function(a,b){ return b.dishes.length - a.dishes.length || b.value - a.value; });
}

function renderGraph(){
  var graph = buildGraph();
  var top = graph.slice(0, 24);
  var size = 620, cx = size/2, cy = size/2, radius = 205;
  var maxReach = Math.max.apply(null, top.map(function(n){ return n.dishes.length; }).concat([1]));

  var svg = "<svg viewBox='0 0 " + size + " " + size + "' width='" + size + "' height='" + size +
    "' role='img' aria-label='Ingredients sized by how many dishes each unlocks' style='max-width:100%'>";
  var nodes = top.map(function(n, i){
    var a = (i / top.length) * Math.PI * 2 - Math.PI/2;
    return { n:n, x: cx + Math.cos(a)*radius, y: cy + Math.sin(a)*radius,
      r: 6 + Math.sqrt(n.dishes.length/maxReach)*16,
      lx: cx + Math.cos(a)*(radius+34), ly: cy + Math.sin(a)*(radius+34),
      anchor: Math.cos(a) > 0.25 ? "start" : (Math.cos(a) < -0.25 ? "end" : "middle") };
  });
  nodes.forEach(function(p){
    svg += "<line x1='" + cx + "' y1='" + cy + "' x2='" + p.x.toFixed(1) + "' y2='" + p.y.toFixed(1) +
      "' stroke='var(--line)' stroke-width='0.6'/>";
  });
  svg += "<circle cx='" + cx + "' cy='" + cy + "' r='26' fill='var(--raised)' stroke='var(--line)'/>";
  svg += "<text x='" + cx + "' y='" + (cy+4) + "' text-anchor='middle' font-size='10' fill='var(--ink-3)'>" +
    DISHES.length + "</text>";
  nodes.forEach(function(p){
    svg += "<circle cx='" + p.x.toFixed(1) + "' cy='" + p.y.toFixed(1) + "' r='" + p.r.toFixed(1) +
      "' fill='var(--surface)' stroke='var(--ink-3)' stroke-width='1.2'/>" +
      "<text x='" + p.lx.toFixed(1) + "' y='" + (p.ly+3).toFixed(1) + "' text-anchor='" + p.anchor +
      "' font-size='9.5' fill='var(--ink-2)'>" +
      esc(p.n.name.length > 16 ? p.n.name.slice(0,15) + "…" : p.n.name) + "</text>";
  });
  svg += "</svg>";
  document.getElementById("graphSvg").innerHTML = svg;

  document.getElementById("graphList").innerHTML =
    "<h2>Buy these first</h2>" +
    "<p class='lede' style='margin-top:7px'>Ranked by how much of the menu each one unlocks. " +
      "The top is your standing order; the bottom is what you buy for a specific booking.</p>" +
    "<div class='tscroll' style='margin-top:16px'><table><thead><tr>" +
      "<th>Ingredient</th><th style='text-align:right'>Dishes</th><th style='text-align:right'>Menu unlocked</th>" +
    "</tr></thead><tbody>" + top.map(function(n){
      return "<tr><td class='cap'>" + esc(n.name) + "</td>" +
        "<td class='money tnum'>" + n.dishes.length + "</td>" +
        "<td class='money tnum muted'>" + soles(n.value) + "</td></tr>";
    }).join("") + "</tbody></table></div>";

  var sole = {};
  graph.forEach(function(n){
    if (n.dishes.length !== 1) return;
    var id = n.dishes[0]; (sole[id] = sole[id] || []).push(n.name);
  });
  var orphanIds = Object.keys(sole).map(Number);
  document.getElementById("graphOrphans").innerHTML =
    "<h2>Wastage liabilities &middot; " + orphanIds.length + "</h2>" +
    "<p class='lede' style='margin-top:7px'>Each is the only dish using at least one ingredient. " +
      "Cook it and you buy something nothing else will use up. Fine for a signature; a poor reason " +
      "to keep a dish nobody orders.</p>" +
    "<div class='grid g3' style='margin-top:18px'>" + orphanIds.slice(0,18).map(function(id){
      var d = null;
      for (var i = 0; i < DISHES.length; i++) if (DISHES[i].id === id) d = DISHES[i];
      if (!d) return "";
      return "<div class='card' style='padding:13px'>" +
        "<span style='font-weight:700;font-size:.875rem'>" + esc(d.name) + "</span>" +
        "<span class='mono' style='display:block;font-size:11px;color:var(--warn);margin-top:4px'>sole use of " +
        sole[id].map(esc).join(", ") + "</span></div>";
    }).join("") + "</div>";
}
renderGraph();

// --- builder -------------------------------------------------------------
var tier = "plated", picked = [1, 2, 26, 77], serviceTime = "19:30";
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

// Venue state. Defaults to a San Isidro hotel at peak - the commonest job,
// and the one the old flat figure happened to over-charge for.
var distIdx = Math.max(0, DISTRICTS.findIndex(function(d){ return d.id === "san-isidro"; }));
var venueIdx = Math.max(0, VENUES.findIndex(function(v){ return v.id === "hotel"; }));
var atPeak = true;

document.getElementById("distSel").innerHTML = DISTRICTS.map(function(d,i){
  return "<option value='" + i + "'" + (i===distIdx?" selected":"") + ">" + esc(d.name) +
    " \u00b7 " + d.driveMinutes + " min</option>";
}).join("");
document.getElementById("venueSel").innerHTML = VENUES.map(function(v,i){
  return "<option value='" + i + "'" + (i===venueIdx?" selected":"") + ">" + esc(v.name) + "</option>";
}).join("");

document.getElementById("distSel").addEventListener("change", function(e){
  distIdx = Number(e.target.value); render();
});
document.getElementById("venueSel").addEventListener("change", function(e){
  venueIdx = Number(e.target.value); render();
});
document.getElementById("peakChk").addEventListener("change", function(e){
  atPeak = e.target.checked; render();
});

function venueCtx(){
  return { district: DISTRICTS[distIdx], venue: VENUES[venueIdx], peak: atPeak };
}

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
          "<span class='dna'><span class='u'>" + esc(d.origin) +
          "</span> <span style='color:var(--ink-3)'>→</span> <span class='p'>" + esc(d.subOrigin) +
          "</span></span></button>";
      }).join("") + "</div></section>";
  }).join("");

  document.getElementById("venueNote").textContent = VENUES[venueIdx].note;
  var q = buildQuote(selected, guests, tier, venueCtx());
  var box = document.getElementById("quote");
  if (!q){
    box.innerHTML = "<h3>Your quote</h3><p class='muted' style='font-size:.9rem;margin-top:8px'>" +
      "Pick at least one dish to see the price.</p>";
    return;
  }
  function row(l,v,cls){ return "<div class='qrow " + (cls||"") + "'><span>" + l +
    "</span><span class='tnum'>" + v + "</span></div>"; }
  var conflicts = findConflicts(selected, tier);
  var blocked = {};
  conflicts.forEach(function(c){ if (c.severity === "blocker") blocked[c.title] = 1; });
  var sheet = buildRunSheet(selected, serviceTime);

  box.innerHTML = "<h3>Your quote</h3>" +
    "<p class='src' style='margin:4px 0 12px'>" + esc(q.tier.name) + " · " + q.guests +
      " guests · " + selected.length + " dishes</p>" +
    conflicts.map(function(c){
      var col = c.severity === "blocker" ? "var(--bad)" : "var(--warn)";
      return "<div style='border-left:2px solid " + col + ";background:var(--raised);" +
        "border-radius:0 6px 6px 0;padding:9px 11px;margin-top:10px'>" +
        "<p class='mono grouphead' style='margin:0;color:" + col + "'>" +
        (c.severity === "blocker" ? "Blocker" : "Warning") + " &middot; " + c.kind + "</p>" +
        "<p style='margin:2px 0 0;font-size:12px;font-weight:700'>" + esc(c.title) + "</p>" +
        "<p style='margin:2px 0 0;font-size:11px;line-height:1.5;color:var(--ink-2)'>" +
        esc(c.detail) + "</p></div>";
    }).join("") +
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
      "Estimates only — not a binding quote.</p>" +
    "<div style='margin-top:17px;border-top:1px solid var(--line);padding-top:13px'>" +
      "<div style='display:flex;justify-content:space-between;align-items:baseline;gap:8px'>" +
        "<span class='mono grouphead' style='margin:0'>Run sheet</span>" +
        "<label class='mono' style='font-size:10px;color:var(--ink-3);display:flex;gap:5px;align-items:center'>service" +
        "<input type='time' id='svcTime' value='" + serviceTime + "' aria-label='Service time' " +
        "class='mono tnum' style='background:var(--bg);color:var(--ink);border:1px solid var(--line);" +
        "border-radius:4px;padding:2px 5px;font-size:11px'></label></div>" +
      "<ol style='margin:10px 0 0;padding:0;list-style:none'>" + sheet.map(function(st){
        return "<li style='display:flex;gap:9px;margin-bottom:8px'>" +
          "<span class='mono tnum' style='font-size:11px;font-weight:600;color:var(--aji);flex-shrink:0'>" +
          st.clock + "</span><span style='min-width:0'>" +
          "<span class='mono grouphead' style='display:block;margin:0'>" + esc(st.station) +
          (st.offset >= 1440 ? " &middot; day before" : "") + "</span>" +
          "<span style='display:block;font-size:11px;color:var(--ink-2)'>" + esc(st.label) + "</span>" +
          (st.dishes.length ? "<span style='display:block;font-size:11px;color:var(--ink-3)'>" +
            st.dishes.map(esc).join(", ") + "</span>" : "") +
          "</span></li>";
      }).join("") + "</ol></div>";
}

render();
})();
</script>
`;

const out = process.argv[2] || path.join(ROOT, "standalone.html");
fs.writeFileSync(out, html);
console.log(`wrote ${out} (${(html.length / 1024).toFixed(0)} KB, ${DISHES.length} dishes)`);
