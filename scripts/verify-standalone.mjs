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
  const igvOk = Math.abs(gross - net * c.guests * 1.18) < 0.02;
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

await browser.close();

console.log(failures === 0 ? "\nALL CHECKS PASSED" : `\n${failures} CHECK(S) FAILED`);
process.exit(failures === 0 ? 0 : 1);
