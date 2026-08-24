/** Emit type-stripped ESM copies of the data modules for verify-standalone to import. */
import fs from "node:fs";

for (const [file, name] of [["dishes", "DISHES"], ["flavours", "FLAVOURS"], ["events", "EVENTS"], ["ingredients", "INGREDIENTS"], ["moments", "MOMENTS"], ["recipes", "RECIPES"]]) {
  const src = fs.readFileSync(`data/${file}.ts`, "utf8")
    .replace(/^import type .*$/gm, "")
    .replace(new RegExp(`export const ${name}\\s*:[^=]+=`), `export const ${name} =`);
  fs.writeFileSync(`.verify-${file}.mjs`, src);
}
console.log("verify shims written");
