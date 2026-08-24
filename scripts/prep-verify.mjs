/** Emit type-stripped ESM copies of the data modules for verify-standalone to import. */
import fs from "node:fs";

for (const [file, name] of [["dishes", "DISHES"], ["flavours", "FLAVOURS"], ["events", "EVENTS"], ["ingredients", "INGREDIENTS"], ["moments", "MOMENTS"], ["recipes", "RECIPES"], ["venues", "DISTRICTS"]]) {
  const src = fs.readFileSync(`data/${file}.ts`, "utf8")
    .replace(/^import type .*$/gm, "")
    .replace(/export const (\w+)\s*:[^=]+=/g, "export const $1 =");
  fs.writeFileSync(`.verify-${file}.mjs`, src);
}
console.log("verify shims written");
