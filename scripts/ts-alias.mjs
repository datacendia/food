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

// Resolve the hook against THIS file, not the working directory. It used to be
// pathToFileURL("./scripts/"), so anything run from outside the project root -
// a probe in a scratch directory, a script invoked by an editor - died with
// ERR_MODULE_NOT_FOUND pointing at a path that was never going to exist.
register("./ts-alias-hooks.mjs", import.meta.url);
