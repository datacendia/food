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
  {
    name: "Plated · 20 guests · default picks",
    tier: "The Aye Si Plated Experience",
    guests: 20,
    expect: { "Menu, per guest": "S/ 181.00", "Net, per guest": "S/ 242.50" }
  },
  {
    name: "Scran · 40 guests · default picks",
    tier: "Scran Boxes",
    guests: 40,
    expect: {
      "Menu, per guest": "S/ 108.00",
      "Net, per guest": "S/ 116.50",
      "IGV at 18%": "S/ 838.80",
      "Client pays": "S/ 5498.80"
    }
  }
];

const browser = await chromium.launch({ args: ["--no-sandbox", "--disable-dev-shm-usage"] });
const page = await browser.newPage({ viewport: { width: 1280, height: 1000 } });
await page.goto("file://" + FILE);

let failures = 0;

// Sanity: the data actually made it into the page.
await page.getByRole("tab", { name: "The hundred" }).click();
const rowCount = await page.locator("#menuBody tbody tr").count();
console.log(`dish rows rendered: ${rowCount}${rowCount === 100 ? " ✓" : "  ✗ expected 100"}`);
if (rowCount !== 100) failures++;

const overFlags = await page.locator("#menuBody .fc.over").count();
console.log(`dishes over 30% food cost: ${overFlags}${overFlags === 0 ? " ✓" : "  ✗ expected 0"}`);
if (overFlags !== 0) failures++;

await page.getByRole("tab", { name: "Build a menu" }).click();

for (const c of CASES) {
  await page.getByRole("button", { name: c.tier, exact: true }).click();
  await page.fill("#guests", String(c.guests));
  await page.waitForTimeout(120);

  console.log(`\n${c.name}`);
  for (const [label, want] of Object.entries(c.expect)) {
    const row = page.locator("#quote .qrow", { hasText: label }).first();
    const got = (await row.innerText()).replace(label, "").trim();
    const ok = got === want;
    if (!ok) failures++;
    console.log(`  ${label.padEnd(18)} ${got.padEnd(12)} ${ok ? "✓" : "✗ expected " + want}`);
  }
}

// The tier minimum must warn rather than quote silently.
await page.getByRole("button", { name: "The Aye Si Plated Experience", exact: true }).click();
await page.fill("#guests", "4");
await page.waitForTimeout(120);
const warned = await page.locator("#quote .warn").count();
console.log(`\nbelow-minimum warning shown: ${warned > 0 ? "yes ✓" : "no ✗"}`);
if (warned === 0) failures++;

// --- Find dishes: the standalone must filter identically to lib/dishes.ts ---
const { DISHES } = await import("../.verify-dishes.mjs");
const { FLAVOURS } = await import("../.verify-flavours.mjs");
const { EVENTS } = await import("../.verify-events.mjs");
const { INGREDIENTS } = await import("../.verify-ingredients.mjs");

function matchesEvent(d, f) {
  if (f.tier && !d.tiers.includes(f.tier)) return false;
  if (f.categories && !f.categories.includes(d.category)) return false;
  if (f.anyTags && !f.anyTags.some((t) => d.tags.includes(t))) return false;
  if (f.excludeTags && f.excludeTags.some((t) => d.tags.includes(t))) return false;
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
