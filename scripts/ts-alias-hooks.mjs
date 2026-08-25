/** Resolve "@/x" against the repository root. */
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

import { existsSync } from "node:fs";

/** Add the .ts the TypeScript source omits, the way the bundler would. */
function withExt(path) {
  if (/\.[cm]?[jt]s$/.test(path)) return path;
  for (const ext of [".ts", ".tsx", "/index.ts"]) {
    if (existsSync(path + ext)) return path + ext;
  }
  return path;
}

export function resolve(specifier, context, next) {
  if (specifier.startsWith("@/")) {
    return next(pathToFileURL(withExt(join(ROOT, specifier.slice(2)))).href, context);
  }
  if (specifier.startsWith("./") || specifier.startsWith("../")) {
    const from = context.parentURL && context.parentURL.startsWith("file:")
      ? dirname(fileURLToPath(context.parentURL)) : ROOT;
    const abs = join(from, specifier);
    const fixed = withExt(abs);
    if (fixed !== abs) return next(pathToFileURL(fixed).href, context);
  }
  return next(specifier, context);
}
