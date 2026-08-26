/**
 * Create or update a login. There is no sign-up page, so this is how accounts
 * come into being - including the first one.
 *
 *   node --experimental-strip-types --import ./scripts/ts-alias.mjs \
 *     scripts/create-user.mjs owner you@example.com "Your Name"
 *
 * The password is read from stdin rather than argv, because an argument ends
 * up in your shell history and in the process list.
 */
import { createInterface } from "node:readline/promises";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";

const [role, email, ...nameParts] = process.argv.slice(2);
const name = nameParts.join(" ") || null;

if (!role || !email) {
  console.error("usage: create-user.mjs <owner|chef|client> <email> [name]");
  process.exit(1);
}
if (!["owner", "chef", "client"].includes(role)) {
  console.error(`unknown role "${role}" — must be owner, chef or client`);
  process.exit(1);
}
if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is not set. See .env.example.");
  process.exit(1);
}

const { db, users } = await import("../db/index.ts");

const rl = createInterface({ input: process.stdin, output: process.stdout });
const password = await rl.question(`Password for ${email}: `);
rl.close();

if (password.length < 12) {
  console.error("\nToo short. Twelve characters minimum — this account can see your cost base.");
  process.exit(1);
}

const passwordHash = await bcrypt.hash(password, 12);
const lower = email.trim().toLowerCase();
const [existing] = await db.select().from(users).where(eq(users.email, lower)).limit(1);

if (existing) {
  await db.update(users).set({ passwordHash, role, name: name ?? existing.name, active: true })
    .where(eq(users.id, existing.id));
  console.log(`\nupdated ${lower} — role ${role}`);
} else {
  await db.insert(users).values({ email: lower, name, role, passwordHash });
  console.log(`\ncreated ${lower} — role ${role}`);
}

if (role === "client") {
  console.log("Note: a client login shows nothing until it is attached to a client record.");
}
