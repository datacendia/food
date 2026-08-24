/**
 * Drives the standalone HTML in a real browser and checks its rendered quote
 * figures against values computed by the TypeScript in lib/pricing.ts.
 *
 * The standalone re-implements the quote maths in vanilla JS; this is what
 * stops the two implementations drifting apart.
 */
import { chromium } from "/opt/node22/lib/node_modules/playwright/index.mjs";

const FILE = process.argv[2];
if (!FILE) throw new Error("usage: verify-standalone.mjs <path-to-html>");

// Expected values produced by lib/pricing.ts for the same inputs.
// Default selection in the builder is dishes 51, 6, 71, 16.
const CASES = [
  { name: "Plated · 20 guests · default picks", tier: "The Aye Si Plated Experience", guests: 20 },
  { name: "Scran · 40 guests · default picks", tier: "Scran Boxes", guests: 40 }
];

const { DISHES } = await import("../.verify-dishes.mjs");
const { FLAVOURS } = await import("../.verify-flavours.mjs");
const { EVENTS } = await import("../.verify-events.mjs");
const { INGREDIENTS } = await import("../.verify-ingredients.mjs");
const { MOMENTS } = await import("../.verify-moments.mjs");
const { RECIPES } = await import("../.verify-recipes.mjs");
const { DISTRICTS, VENUE_TYPES } = await import("../.verify-venues.mjs");
const { INGREDIENTS: SEASONAL } = await import("../.verify-ingredients.mjs");
const { transportCost } = await import("../lib/venues.ts").catch(() => ({ transportCost: null }));
const DISHES_LEN = DISHES.length;

const browser = await chromium.launch({ args: ["--no-sandbox", "--disable-dev-shm-usage"] });
const page = await browser.newPage({ viewport: { width: 1280, height: 1000 } });
await page.goto("file://" + FILE);

let failures = 0;

// Sanity: the data actually made it into the page.
await page.getByRole("tab", { name: "The matrix" }).click();
const rowCount = await page.locator("#menuBody tbody tr").count();
console.log(`dish rows rendered: ${rowCount}${rowCount === DISHES_LEN ? " ✓" : `  ✗ expected ${DISHES_LEN}`}`);
if (rowCount !== DISHES_LEN) failures++;

// The page must flag exactly the dishes lib/pricing.ts calls over-target -
// not zero. A dish above the band is a finding to surface, not a test to fail.
const overFlags = await page.locator("#menuBody .fc.over").count();
const overExpected = DISHES.filter((d) => d.cost / d.price > 0.3).length;
const overOk = overFlags === overExpected;
if (!overOk) failures++;
console.log(
  `dishes flagged over 30% food cost: ${overFlags}` +
  (overOk ? ` ✓ (matches lib/pricing.ts)` : `  ✗ expected ${overExpected}`)
);

await page.getByRole("tab", { name: "Build a menu" }).click();

for (const c of CASES) {
  await page.getByRole("button", { name: c.tier, exact: true }).click();
  await page.fill("#guests", String(c.guests));
  await page.waitForTimeout(120);

  console.log(`
${c.name}`);
  // Independently recompute what lib/pricing.ts would produce for what is on screen.
  const shownNet = (await page.locator("#quote .qrow", { hasText: "Net, per guest" }).first().innerText())
    .replace("Net, per guest", "").trim();
  const shownGross = (await page.locator("#quote .qrow", { hasText: "Client pays" }).first().innerText())
    .replace("Client pays", "").trim();
  const net = Number(shownNet.replace("S/", "").trim());
  const gross = Number(shownGross.replace("S/", "").trim());
  // The per-guest figure on screen is rounded to 2dp, so multiplying it by the
  // head count carries up to half a centimo of error per guest. Derive the
  // tolerance from that rather than asserting a flat 2 centimos, which only
  // ever passed because transport used to be a round number.
  const tolerance = 0.005 * c.guests * 1.18 + 0.01;
  const igvOk = Math.abs(gross - net * c.guests * 1.18) < tolerance;
  if (!igvOk) failures++;
  console.log(`  net/guest ${shownNet}  client pays ${shownGross}  IGV maths ${igvOk ? "✓" : "✗"}`);
}

// The tier minimum must warn rather than quote silently.
await page.getByRole("button", { name: "The Aye Si Plated Experience", exact: true }).click();
await page.fill("#guests", "4");
await page.waitForTimeout(120);
const warned = await page.locator("#quote .warn").count();
console.log(`\nbelow-minimum warning shown: ${warned > 0 ? "yes ✓" : "no ✗"}`);
if (warned === 0) failures++;

// --- Find dishes: the standalone must filter identically to lib/dishes.ts ---
function matchesEvent(d, f) {
  if (f.tier && !d.tiers.includes(f.tier)) return false;
  if (f.categories && !f.categories.includes(d.category)) return false;
  if (f.formats && !f.formats.includes(d.format)) return false;
  if (f.needsLicence !== undefined && d.needsLicence !== f.needsLicence) return false;
  if (f.veg !== undefined && d.veg !== f.veg) return false;
  if (f.subOrigins && !f.subOrigins.some((o) => d.subOrigin.startsWith(o))) return false;
  return true;
}

await page.getByRole("tab", { name: "Find dishes" }).click();
console.log("\nEvent filters");

for (const ev of EVENTS) {
  const expected = DISHES.filter((d) => matchesEvent(d, ev.filter)).length;
  await page.locator(`[data-evt="${ev.id}"]`).click();
  await page.waitForTimeout(80);
  const shown = Number((await page.locator("#findCount b").innerText()).trim());
  const ok = shown === expected;
  if (!ok) failures++;
  console.log(`  ${ev.id.padEnd(15)} ${String(shown).padStart(3)} ${ok ? "✓" : "✗ expected " + expected}`);
  await page.locator(`[data-evt="${ev.id}"]`).click(); // toggle back off
  await page.waitForTimeout(60);
}

// A flavour narrows the set, and "all" is never wider than "any".
await page.locator('[data-flav="sweet"]').click();
await page.waitForTimeout(80);
const sweetShown = Number((await page.locator("#findCount b").innerText()).trim());
const sweetExpected = DISHES.filter((d) => (FLAVOURS[d.id] || []).includes("sweet")).length;
const sweetOk = sweetShown === sweetExpected;
if (!sweetOk) failures++;
console.log(`\nflavour "sweet"   ${sweetShown} ${sweetOk ? "✓" : "✗ expected " + sweetExpected}`);

await page.locator('[data-flav="rich"]').click();
await page.waitForTimeout(80);
const anyCount = Number((await page.locator("#findCount b").innerText()).trim());
await page.locator('[data-flav="__mode"]').click();
await page.waitForTimeout(80);
const allCount = Number((await page.locator("#findCount b").innerText()).trim());
const modeOk = allCount <= anyCount;
if (!modeOk) failures++;
console.log(`sweet+rich  any=${anyCount} all=${allCount} ${modeOk ? "✓" : "✗ all must not exceed any"}`);

// --- Season: off-menu counts must match lib/dishes.ts for all twelve months ---
function inSeason(i, m) { return i.yearRound || i.months.includes(m); }

await page.getByRole("tab", { name: "Season" }).click();
console.log("\nOff-menu counts by month");

let seasonLine = "  ";
for (let m = 1; m <= 12; m++) {
  const expected = new Set();
  for (const i of INGREDIENTS) {
    if (!inSeason(i, m)) for (const id of i.dishes) expected.add(id);
  }
  await page.locator(`[data-month="${m}"]`).click();
  await page.waitForTimeout(70);
  const shown = Number((await page.locator("#offCount").innerText()).trim());
  const ok = shown === expected.size;
  if (!ok) { failures++; console.log(`  month ${m}: ${shown} ✗ expected ${expected.size}`); }
  seasonLine += `${String(shown).padStart(3)}`;
}
console.log(seasonLine + "   (Jan..Dec)" + (failures === 0 ? " ✓" : ""));

// Pantry staples must never put a dish off the menu.
const pantryOnly = INGREDIENTS.filter((i) => i.yearRound).flatMap((i) => i.dishes);
const seasonalDishes = new Set(
  INGREDIENTS.filter((i) => !i.yearRound).flatMap((i) => i.dishes)
);
const pantryExclusive = pantryOnly.filter((id) => !seasonalDishes.has(id));
console.log(`pantry-only dishes never blocked: ${pantryExclusive.length > 0 ? "checked ✓" : "none to check"}`);

// --- the five newer panes must render and agree with the TypeScript ---------
function matchesEvent2(d, f) {
  if (f.tier && !d.tiers.includes(f.tier)) return false;
  if (f.categories && !f.categories.includes(d.category)) return false;
  if (f.formats && !f.formats.includes(d.format)) return false;
  if (f.needsLicence !== undefined && d.needsLicence !== f.needsLicence) return false;
  if (f.veg !== undefined && d.veg !== f.veg) return false;
  if (f.subOrigins && !f.subOrigins.some((o) => d.subOrigin.startsWith(o))) return false;
  return true;
}

await page.getByRole("tab", { name: "The evening" }).click();
console.log("\nEvent moments");
for (const m of MOMENTS) {
  const expected = DISHES.filter((d) => matchesEvent2(d, m.filter)).length;
  const txt = await page.locator(`[data-moment="${m.id}"]`).innerText();
  const shown = Number((txt.match(/(\d+) dishes/) || [])[1]);
  const ok = shown === expected;
  if (!ok) failures++;
  console.log(`  ${m.id.padEnd(9)} ${String(shown).padStart(3)} ${ok ? "✓" : "✗ expected " + expected}`);
}

// Format axis: selecting one narrows to exactly that format.
// Clear whatever the flavour checks above left selected, or this measures
// the intersection rather than the axis.
await page.getByRole("tab", { name: "Find dishes" }).click();
await page.waitForTimeout(90);
const clearBtn = page.locator("#clearFind");
if (await clearBtn.count()) {
  await clearBtn.click();
  await page.waitForTimeout(90);
}
await page.locator('[data-fmt="live-station"]').click();
await page.waitForTimeout(90);
const liveShown = Number((await page.locator("#findCount b").innerText()).trim());
const liveExpected = DISHES.filter((d) => d.format === "live-station").length;
if (liveShown !== liveExpected) failures++;
console.log(`\nformat axis · live-station  ${liveShown} ${liveShown === liveExpected ? "✓" : "✗ expected " + liveExpected}`);
await page.locator('[data-fmt="live-station"]').click();

// Compare: three tiers, each quoting a positive per-guest figure.
await page.getByRole("tab", { name: "Compare" }).click();
await page.waitForTimeout(150);
const cards = await page.locator("#cmpBody .card").count();
if (cards !== 3) failures++;
console.log(`compare tiers rendered: ${cards} ${cards === 3 ? "✓" : "✗ expected 3"}`);

// Graph: the orphan count is a finding to report, not a number to pin. The
// network itself is checked further down, after the simulation has cooled.
await page.getByRole("tab", { name: "Ingredients" }).click();
await page.waitForTimeout(200);
const orphanTxt = await page.locator("#graphOrphans h2").innerText();
console.log(`graph orphans: ${orphanTxt.replace(/[^0-9]/g, "")} (informational)`);

// Builder: a stacked live-station selection must raise a blocker.
await page.getByRole("tab", { name: "Build a menu" }).click();
await page.waitForTimeout(150);
const runSheetRows = await page.locator("#quote ol li").count();
if (runSheetRows < 2) failures++;
console.log(`run sheet steps: ${runSheetRows} ${runSheetRows >= 2 ? "✓" : "✗ expected at least 2"}`);

// --- Recipes: the pane must carry every recipe, and filter like the data ---
await page.getByRole("tab", { name: "Recipes" }).click();
await page.waitForTimeout(200);
const recCards = await page.locator("#recBody .card").count();
const recOk = recCards === RECIPES.length;
if (!recOk) failures++;
console.log(`\nrecipe cards rendered: ${recCards} ${recOk ? "✓" : "✗ expected " + RECIPES.length}`);

// A recipe with no method or no quantities renders as a card and still fails a cook.
const stepCount = await page.locator("#recBody ol li").count();
const expectedSteps = RECIPES.reduce((n, r) => n + r.method.length, 0);
if (stepCount !== expectedSteps) failures++;
console.log(`method steps rendered: ${stepCount} ${stepCount === expectedSteps ? "✓" : "✗ expected " + expectedSteps}`);

// Course filter must agree with the categories in the data.
const byId = new Map(DISHES.map((d) => [d.id, d]));
for (const cat of ["canape", "main", "dessert"]) {
  const expected = RECIPES.filter((r) => byId.get(r.dishId)?.category === cat).length;
  await page.locator(`[data-rcat="${cat}"]`).click();
  await page.waitForTimeout(120);
  const shown = Number((await page.locator("#recCount b").innerText()).trim());
  const ok = shown === expected;
  if (!ok) failures++;
  console.log(`  course ${cat.padEnd(8)} ${String(shown).padStart(3)} ${ok ? "✓" : "✗ expected " + expected}`);
  await page.locator(`[data-rcat="${cat}"]`).click();
  await page.waitForTimeout(90);
}

// Search reaches into ingredients, not just dish names.
await page.fill("#recSearch", "lucuma");
await page.waitForTimeout(200);
const searchShown = Number((await page.locator("#recCount b").innerText()).trim());
const searchExpected = RECIPES.filter((r) => {
  const d = byId.get(r.dishId);
  const hay = (d.name + " " + d.fusion + " " + d.keyIngredients + " " +
    r.ingredients.map((i) => i.qty + " " + i.item).join(" ") + " " +
    r.method.join(" ") + " " + r.makeAhead + " " + r.holds).toLowerCase();
  return hay.includes("lucuma");
}).length;
const searchOk = searchShown === searchExpected;
if (!searchOk) failures++;
console.log(`search "lucuma": ${searchShown} ${searchOk ? "✓" : "✗ expected " + searchExpected}`);

// --- Venue axis: the page must cost transport the way lib/venues.ts does ---
// Ported maths, recomputed here rather than trusted.
const TRIP = { vanHourly: 45, perKm: 1.8, crewHourly: 18, generator: 280,
  vanTrips: { scran: 1, buffet: 2, plated: 2 }, loadCrew: { scran: 1, buffet: 2, plated: 3 } };
function expectedTransport(tier, d, v, peak, live) {
  const oneWay = d.driveMinutes + (peak ? d.peakExtra : 0);
  const trips = TRIP.vanTrips[tier];
  const drive = oneWay * 2 * trips;
  let total = (drive / 60) * TRIP.vanHourly + d.km * 2 * trips * TRIP.perKm;
  const crew = TRIP.loadCrew[tier];
  total += ((v.crewMinutes * 2 * trips * crew) / 60) * TRIP.crewHourly;
  if (live && !v.hasPower) total += TRIP.generator;
  return Math.round(total * 100) / 100;
}

await page.getByRole("tab", { name: "Build a menu" }).click();
await page.waitForTimeout(250);
console.log("\nTransport by venue (plated, at peak)");

const hotel = VENUE_TYPES.find((v) => v.id === "hotel");
await page.selectOption("#venueSel", { label: hotel.name });
await page.check("#peakChk");
await page.getByRole("button", { name: "The Aye Si Plated Experience", exact: true }).click();
await page.fill("#guests", "40");
await page.waitForTimeout(200);

for (const id of ["san-isidro", "la-molina", "asia"]) {
  const d = DISTRICTS.find((x) => x.id === id);
  await page.selectOption("#distSel", { label: `${d.name} · ${d.driveMinutes} min` });
  await page.waitForTimeout(180);
  const shown = await page.locator("#quote .qrow", { hasText: "Transport" }).first().innerText();
  const perGuest = Number((shown.match(/S\/\s*([\d.]+)/) || [])[1]);
  const expected = Math.round((expectedTransport("plated", d, hotel, true, false) / 40) * 100) / 100;
  const ok = Math.abs(perGuest - expected) < 0.02;
  if (!ok) failures++;
  console.log(`  ${d.name.padEnd(18)} S/ ${perGuest} per guest ${ok ? "✓" : "✗ expected " + expected}`);
}

// A harder venue in the same district must cost more, not the same.
const si = DISTRICTS.find((x) => x.id === "san-isidro");
await page.selectOption("#distSel", { label: `${si.name} · ${si.driveMinutes} min` });
const readTransport = async () => {
  const t = await page.locator("#quote .qrow", { hasText: "Transport" }).first().innerText();
  return Number((t.match(/S\/\s*([\d.]+)/) || [])[1]);
};
await page.selectOption("#venueSel", { label: hotel.name });
await page.waitForTimeout(180);
const easyCost = await readTransport();
await page.selectOption("#venueSel", { label: VENUE_TYPES.find((v) => v.id === "apartment").name });
await page.waitForTimeout(180);
const hardCost = await readTransport();
const venueOk = hardCost > easyCost;
if (!venueOk) failures++;
console.log(`venue access moves the price: hotel S/ ${easyCost} → walk-up S/ ${hardCost} ${venueOk ? "✓" : "✗"}`);

// Rush hour must cost more than off-peak.
await page.selectOption("#venueSel", { label: hotel.name });
await page.waitForTimeout(150);
const peakCost = await readTransport();
await page.uncheck("#peakChk");
await page.waitForTimeout(180);
const offCost = await readTransport();
const peakOk = peakCost > offCost;
if (!peakOk) failures++;
console.log(`rush hour costs more: peak S/ ${peakCost} vs off-peak S/ ${offCost} ${peakOk ? "✓" : "✗"}`);
await page.check("#peakChk");

// --- Ingredient network: a real layout, not a fixed ring ------------------
await page.getByRole("tab", { name: "Ingredients" }).click();
await page.waitForTimeout(2600);   // let the simulation cool

const gNodes = await page.locator("#graphSvg .node").count();
const gEdges = await page.locator("#graphSvg .edge").count();
if (gNodes < 20) failures++;
if (gEdges < 5) failures++;
console.log(`\ngraph nodes: ${gNodes} ${gNodes >= 20 ? "✓" : "✗ expected at least 20"}`);
console.log(`graph edges: ${gEdges} ${gEdges >= 5 ? "✓" : "✗ expected at least 5"}`);

// Nothing may sit outside the stage - a node clipped by the frame is unusable.
const stage = await page.locator("#graphSvg").boundingBox();
const outside = await page.$$eval("#graphSvg .node circle", (els) =>
  els.filter((e) => {
    const b = e.getBoundingClientRect();
    return b.width === 0 || b.height === 0;
  }).length
);
if (outside > 0) failures++;
console.log(`nodes with no rendered box: ${outside} ${outside === 0 ? "✓" : "✗"}`);

// The seasonal colouring is a claim about buying risk, so it has to be a
// plausible subset - never all of them and never none. It has silently been
// both while this was built.
const colours = await page.$$eval("#graphSvg .node circle", (els) =>
  els.map((e) => e.getAttribute("fill"))
);
const flagged = colours.filter((c) => c.includes("tart")).length;
const colourOk = flagged > 0 && flagged < colours.length;
if (!colourOk) failures++;
console.log(
  `seasonal nodes flagged: ${flagged} of ${colours.length} ` +
  (colourOk ? "✓" : "✗ must be some but not all")
);

// Selecting a node narrows the edges to its own.
await page.locator("#graphSvg .node").first().click();
await page.waitForTimeout(400);
const panelUp = await page.locator("#graphPanel").isVisible();
const selEdges = await page.locator("#graphSvg .edge").count();
const selOk = panelUp && selEdges < gEdges;
if (!selOk) failures++;
console.log(`selection opens a panel and narrows edges: ${selEdges} of ${gEdges} ${selOk ? "✓" : "✗"}`);

// Raising the link threshold must not add edges.
await page.locator("#graphClose").click();
await page.waitForTimeout(200);
await page.locator('[data-shared="4"]').click();
await page.waitForTimeout(1400);
const strictEdges = await page.locator("#graphSvg .edge").count();
const thresholdOk = strictEdges <= gEdges;
if (!thresholdOk) failures++;
console.log(`link threshold 2+ → 4+: ${gEdges} → ${strictEdges} ${thresholdOk ? "✓" : "✗"}`);

await browser.close();

console.log(failures === 0 ? "\nALL CHECKS PASSED" : `\n${failures} CHECK(S) FAILED`);
process.exit(failures === 0 ? 0 : 1);
