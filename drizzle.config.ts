import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schema.ts",
  out: "./db/migrations",
  dialect: "postgresql",
  dbCredentials: { url: process.env.DATABASE_URL! },
  // Every migration is reviewed before it runs. This app holds quotes you have
  // already sent to clients; a generated DROP that nobody read is how those go.
  strict: true,
  verbose: true
} satisfies Config;
