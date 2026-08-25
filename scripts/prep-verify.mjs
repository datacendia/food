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
console.log("verify shims written");
