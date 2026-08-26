/**
 * The connection, chosen by the URL.
 *
 * In production the URL points at Neon, and Neon's serverless driver talks HTTP
 * rather than holding a TCP socket - which is what makes it work inside a
 * Netlify function that lives for 200ms and then disappears. A normal pool
 * would open a connection per invocation and exhaust the free tier under any
 * real traffic.
 *
 * Locally the URL points at a Postgres on your own machine, which the HTTP
 * driver cannot speak to at all. Rather than make a cloud account a
 * prerequisite for running the app, the driver follows the host: Neon for a
 * Neon URL, node-postgres for anything else. Same schema, same queries, same
 * Drizzle API either way.
 *
 * Neon's free tier suspends a database idle for a few minutes, so the first
 * query after a quiet spell pays a second or two of cold start. That is the
 * price of S/0 a month and it is worth it at this size.
 *
 * On the placeholder: `next build` imports every module to work out what it can
 * prerender, and Auth.js's Drizzle adapter inspects this object's prototype the
 * moment it is imported. So it has to be a real Drizzle instance at import
 * time, whether or not a database exists yet. Two tidier-looking approaches
 * both failed - throwing here broke the build, and a lazy Proxy hid the
 * prototype the adapter reads and broke it differently. Nothing connects until
 * a query runs, so a build with no DATABASE_URL still succeeds and the first
 * real query fails loudly instead.
 */
import { drizzle as drizzleNeon } from "drizzle-orm/neon-http";
import { drizzle as drizzlePg } from "drizzle-orm/node-postgres";
import { neon } from "@neondatabase/serverless";
import { Pool } from "pg";
import * as schema from "./schema";

const PLACEHOLDER = "postgresql://unset:unset@unset.invalid/unset";
const url = process.env.DATABASE_URL ?? PLACEHOLDER;

/** False when DATABASE_URL is missing. Checked before anything tries to query. */
export const databaseConfigured = Boolean(process.env.DATABASE_URL);

/** Neon's HTTP driver only speaks to Neon. Anything else gets a real socket. */
const isNeon = /\.neon\.tech(:|\/|$)/.test(url) || url === PLACEHOLDER;

export const db = isNeon
  ? drizzleNeon(neon(url), { schema })
  : drizzlePg(new Pool({ connectionString: url }), { schema });

/**
 * Say what is wrong in one sentence, rather than letting a fetch to
 * `unset.invalid` be the first clue.
 */
export function assertDatabase(): void {
  if (databaseConfigured) return;
  throw new Error(
    "DATABASE_URL is not set, so there is nowhere to read or write. " +
    "Locally: copy .env.example to .env.local and put your Neon connection " +
    "string in it — or a local postgres:// URL, which works too. " +
    "On Netlify: Site configuration → Environment variables. " +
    "See the Hosting section of the README."
  );
}

export * from "./schema";
