/**
 * The people you cook for.
 *
 * The reason this table exists is the diets column. An allergy is a fact about
 * the people eating, not about one event, and it has to survive into the next
 * booking - "didn't we do a coeliac last time?" is not a food safety process.
 * Recorded once here, it is checked against every menu quoted for them.
 */
import { desc, eq, sql } from "drizzle-orm";
import { db, clients, quotes, users } from "@/db";
import { CAN, assertCan } from "@/lib/permissions";
import type { Viewer } from "@/lib/session";
import { DIETS, dietaryIndex, dishesFor, DIET_LABEL, type Diet } from "@/lib/dietary";
import { RECIPES } from "@/data/recipes";
import type { Dish } from "@/lib/dishes";

export interface ClientRow {
  id: string;
  name: string;
  contact: string | null;
  phone: string | null;
  district: string | null;
  diets: string[];
  notes: string | null;
  createdAt: Date;
  quoteCount: number;
  /** Whether somebody can log in as this client. */
  hasLogin: boolean;
}

export async function listClients(me: Viewer): Promise<ClientRow[]> {
  assertCan(CAN.seeAllClients, me.role, "see the client list");

  const rows = await db
    .select({
      c: clients,
      quoteCount: sql<number>`count(distinct ${quotes.id})::int`,
      logins: sql<number>`count(distinct ${users.id})::int`
    })
    .from(clients)
    .leftJoin(quotes, eq(quotes.clientId, clients.id))
    .leftJoin(users, eq(users.clientId, clients.id))
    .groupBy(clients.id)
    .orderBy(desc(clients.createdAt));

  return rows.map((r) => ({
    ...r.c,
    quoteCount: r.quoteCount,
    hasLogin: r.logins > 0
  }));
}

export async function getClient(me: Viewer, id: string): Promise<ClientRow | null> {
  // A client may read their own record; anyone else needs the list permission.
  if (me.role === "client" && me.clientId !== id) return null;
  if (me.role !== "client") assertCan(CAN.seeAllClients, me.role, "open a client record");

  const [row] = await db.select().from(clients).where(eq(clients.id, id)).limit(1);
  if (!row) return null;

  const [counts] = await db
    .select({
      quoteCount: sql<number>`count(distinct ${quotes.id})::int`,
      logins: sql<number>`count(distinct ${users.id})::int`
    })
    .from(clients)
    .leftJoin(quotes, eq(quotes.clientId, clients.id))
    .leftJoin(users, eq(users.clientId, clients.id))
    .where(eq(clients.id, id));

  return { ...row, quoteCount: counts?.quoteCount ?? 0, hasLogin: (counts?.logins ?? 0) > 0 };
}

export interface ClientInput {
  name: string;
  contact?: string | null;
  phone?: string | null;
  district?: string | null;
  diets?: string[];
  notes?: string | null;
}

function clean(input: ClientInput) {
  // Only diets lib/dietary.ts can actually answer for. A free-text allergy
  // stored here would look like a check and be nothing of the kind.
  const diets = (input.diets ?? []).filter((d): d is Diet =>
    (DIETS as readonly string[]).includes(d));
  return {
    name: input.name.trim(),
    contact: input.contact?.trim() || null,
    phone: input.phone?.trim() || null,
    district: input.district || null,
    diets,
    notes: input.notes?.trim() || null
  };
}

export async function createClient(me: Viewer, input: ClientInput): Promise<string> {
  assertCan(CAN.manageClients, me.role, "add a client");
  if (!input.name.trim()) throw new Error("A client needs a name.");
  const [row] = await db.insert(clients).values(clean(input)).returning({ id: clients.id });
  return row.id;
}

export async function updateClient(me: Viewer, id: string, input: ClientInput): Promise<void> {
  assertCan(CAN.manageClients, me.role, "edit a client");
  await db.update(clients).set(clean(input)).where(eq(clients.id, id));
}

/**
 * Which dishes on a menu this client cannot eat, and why.
 *
 * This is the payoff for recording a diet once. It asks lib/dietary.ts - the
 * same engine behind the 15 filters and the allergen declarations - so the
 * answer here and the answer on the recipe page cannot disagree.
 */
export interface DietClash {
  diet: Diet;
  dietLabel: string;
  dishes: { id: number; name: string; because: string[] }[];
}

export function dietClashes(client: { diets: string[] }, chosen: Dish[]): DietClash[] {
  const index = dietaryIndex(RECIPES);
  const out: DietClash[] = [];

  for (const diet of client.diets) {
    if (!(DIETS as readonly string[]).includes(diet)) continue;
    const d = diet as Diet;
    const safe = new Set(dishesFor(chosen, index, [d]).map((x) => x.id));
    const unsafe = chosen.filter((x) => !safe.has(x.id));
    if (unsafe.length === 0) continue;

    out.push({
      diet: d,
      dietLabel: DIET_LABEL[d],
      dishes: unsafe.map((x) => ({
        id: x.id,
        name: x.name,
        because: index.get(x.id)?.because?.[d] ?? []
      }))
    });
  }
  return out;
}
