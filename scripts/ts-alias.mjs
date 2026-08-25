/**
 * Teach plain Node the "@/" alias the app's TypeScript uses.
 *
 * Node strips types natively but does not read tsconfig paths, so a script
 * that wants lib/costing.ts cannot import it. Without this the alternative is
 * reimplementing the costing outside lib/ — which was tried once, came out
 * stricter than the real thing, and reported honest recipe lines as broken.
 *
 *   node --experimental-strip-types --import ./scripts/ts-alias.mjs script.mjs
 */
import { register } from "node:module";
import { pathToFileURL } from "node:url";

register("./ts-alias-hooks.mjs", pathToFileURL("./scripts/"));
