/** Emit type-stripped ESM copies of the data modules for verify-standalone to import. */
import fs from "node:fs";

for (const [file, name] of [["dishes", "DISHES"], ["flavours", "FLAVOURS"], ["events", "EVENTS"], ["ingredients", "INGREDIENTS"], ["moments", "MOMENTS"], ["recipes", "RECIPES"], ["venues", "DISTRICTS"]]) {
  const src = fs.readFileSync(`data/${file}.ts`, "utf8")
    .replace(/^import type .*$/gm, "")
    .replace(/export const (\w+)\s*:[^=]+=/g, "export const $1 =");
  fs.writeFileSync(`.verify-${file}.mjs`, src);
}
// lib/ingredient-key.ts is TypeScript; emit an ESM copy for the parity check.
const key = fs.readFileSync("lib/ingredient-key.ts", "utf8")
  .replace(/^import type .*$/gm, "")
  .replace(/: (string|number|boolean)\b/g, "")
  .replace(/: Record<[^>]+>/g, "")
  .replace(/\bconst (\w+): [A-Za-z<>\[\]|, ]+ =/g, "const $1 =");
fs.writeFileSync(".verify-canon.mjs", key);

// The costing too, so nothing outside lib/ has to reimplement how a quantity
// turns into soles. It was reimplemented once, in the market-run sheet, and it
// came out stricter than the real thing and reported honest lines as broken.
function strip(path) {
  return fs.readFileSync(path, "utf8")
    .replace(/^import type .*$/gm, "")
    .replace(/^import \{([^}]+)\} from "@\/lib\/([\w-]+)";$/gm,
      (_m, names, mod) => `import {${names}} from "./.verify-${mod}.mjs";`)
    .replace(/^import \{([^}]+)\} from "@\/data\/([\w-]+)";$/gm,
      (_m, names, mod) => `import {${names}} from "./.verify-${mod}.mjs";`)
    .replace(/^export (interface|type) [\s\S]*?^\}$/gm, "")
    .replace(/^export type .*$/gm, "")
    .replace(/export const (\w+)\s*:[^=]+=/g, "export const $1 =")
    .replace(/\bconst (\w+): [A-Za-z<>\[\]|,{} ]+ =/g, "const $1 =")
    .replace(/\): [A-Za-z<>\[\]|{}, ]+ \{/g, ") {")
    .replace(/(\w+)(\??): (string|number|boolean)\b(\[\])?/g, "$1")
    .replace(/ as const/g, "")
    .replace(/<[A-Za-z, ]+>\(/g, "(");
  }
for (const [file, mod] of [["data/prices.ts", "prices"], ["lib/units.ts", "units"],
                           ["lib/ingredient-key.ts", "ingredient-key"]]) {
  fs.writeFileSync(`.verify-${mod}.mjs`, strip(file));
}
console.log("verify shims written");
