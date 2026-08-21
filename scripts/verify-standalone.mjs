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

await browser.close();

console.log(failures === 0 ? "\nALL CHECKS PASSED" : `\n${failures} CHECK(S) FAILED`);
process.exit(failures === 0 ? 0 : 1);
