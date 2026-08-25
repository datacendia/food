/**
 * Refetch the three typefaces, subset to the characters the page actually uses.
 *
 * The standalone file is opened from a phone at a market, on a connection that
 * may not exist. It used to link Google Fonts from its head, which is a
 * render-blocking request: measured cold, first paint took 13.2 seconds and the
 * page finally drew in Georgia. The same file with the link removed painted in
 * 112 ms. So the faces are embedded, and this is what puts them there.
 *
 *   node scripts/fetch-fonts.mjs
 *
 * It reads every character out of the built standalone.html, adds printable
 * ASCII as a floor (the renderer composes digits and punctuation at runtime, so
 * they must be present whether or not today's build happens to show them) and
 * asks Google for a subset of exactly that. 141 characters comes to 128 KB
 * across five files, against 249 KB for the stock latin + latin-ext cut.
 *
 * Run it after adding a language, an accent, or a symbol the page did not use
 * before - not on every build. The .woff2 files are committed, so an ordinary
 * build needs no network at all.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "assets", "fonts");

/** A desktop Chrome UA, or Google serves the .ttf fallback instead of woff2. */
const UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 " +
           "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const FAMILIES = [
  "Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700",
  "Karla:wght@400;500;700",
  "IBM+Plex+Mono:wght@400;500;600"
];

/** Combining marks come from the NFD regex in the source, not from rendered text. */
const COMBINING = /[̀-ͯ]/;

function charset() {
  const page = readFileSync(join(ROOT, "standalone.html"), "utf8");
  const set = new Set(page);
  for (let c = 0x20; c < 0x7f; c++) set.add(String.fromCharCode(c));
  for (const c of "áéíóúüñÁÉÍÓÚÜÑ¿¡·—–…“”‘’×÷°ºª") set.add(c);
  return [...set].filter((c) => !COMBINING.test(c) && c.codePointAt(0) > 0x1f).sort().join("");
}

async function get(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  return res;
}

const text = charset();
console.log(`subsetting to ${text.length} characters`);

const css = await (await get(
  "https://fonts.googleapis.com/css2?family=" + FAMILIES.join("&family=") +
  "&display=swap&text=" + encodeURIComponent(text)
)).text();

// One variable font serves several weights, so the same URL repeats. Dedupe by
// URL and name the file after the weights that share it.
const faces = [...css.matchAll(/@font-face \{([\s\S]*?)\}/g)].map(([, b]) => ({
  family: /font-family: '([^']+)'/.exec(b)[1],
  weight: Number(/font-weight: (\d+)/.exec(b)[1]),
  url: /url\((https:\/\/[^)]+)\)/.exec(b)[1]
}));

const byUrl = new Map();
for (const f of faces) {
  if (!byUrl.has(f.url)) byUrl.set(f.url, { family: f.family, weights: [] });
  byUrl.get(f.url).weights.push(f.weight);
}

mkdirSync(OUT, { recursive: true });
const manifest = [];
let total = 0;
for (const [url, { family, weights }] of byUrl) {
  const slug = family.toLowerCase().replace(/\s+/g, "-").replace("ibm-plex-mono", "plex-mono");
  const file = `${slug}-${weights.join("-")}.woff2`;
  const body = Buffer.from(await (await get(url)).arrayBuffer());
  writeFileSync(join(OUT, file), body);
  manifest.push({ file, family, weights });
  total += body.length;
  console.log(`  ${String(body.length).padStart(6)}  ${file}`);
}
writeFileSync(join(OUT, "manifest.json"), JSON.stringify(manifest, null, 1) + "\n");
console.log(`${byUrl.size} files, ${total} bytes raw, ~${Math.round((total * 4) / 3 / 1024)} KB once base64'd`);
