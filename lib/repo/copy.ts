/**
 * Editing the words, and the rule that keeps them honest.
 *
 * A save with an empty Spanish is refused. Not warned about — refused. This
 * app shipped with the standalone at 100% Spanish and itself at 0%, and the
 * reason was never that translating is hard; it was that nothing ever made the
 * second column compulsory. The moment it is optional it is out of date.
 */
import { eq } from "drizzle-orm";
import { db, siteCopy, dishEdits } from "@/db";
import { COPY } from "@/lib/copy";
import { CAN, assertCan } from "@/lib/permissions";
import type { Viewer } from "@/lib/session";

export interface CopyRow {
  key: string;
  section: string;
  en: string;
  es: string;
  /** True when a saved row supersedes the default in the code. */
  edited: boolean;
}

export async function listCopy(me: Viewer): Promise<CopyRow[]> {
  assertCan(CAN.manageClients, me.role, "edit the words on the site");
  const saved = Object.fromEntries(
    (await db.select().from(siteCopy)).map((r) => [r.key, r])
  );
  return Object.entries(COPY)
    .map(([key, def]) => ({
      key,
      section: def.section,
      en: saved[key]?.en ?? def.en,
      es: saved[key]?.es ?? def.es,
      edited: Boolean(saved[key])
    }))
    .sort((a, b) => a.section.localeCompare(b.section) || a.key.localeCompare(b.key));
}

export async function saveCopy(
  me: Viewer, key: string, en: string, es: string
): Promise<void> {
  assertCan(CAN.manageClients, me.role, "edit the words on the site");

  const def = COPY[key];
  if (!def) throw new Error(`No such phrase: ${key}`);
  if (!en.trim()) throw new Error("The English cannot be empty.");
  if (!es.trim()) {
    throw new Error(
      "The Spanish cannot be empty. Every string on this site exists in both " +
      "languages, and a blank here is how that stops being true."
    );
  }

  await db.insert(siteCopy)
    .values({ key, en: en.trim(), es: es.trim(), section: def.section, updatedBy: me.id })
    .onConflictDoUpdate({
      target: siteCopy.key,
      set: { en: en.trim(), es: es.trim(), updatedBy: me.id, updatedAt: new Date() }
    });
}

/** Drop the override and fall back to the English and Spanish in the code. */
export async function revertCopy(me: Viewer, key: string): Promise<void> {
  assertCan(CAN.manageClients, me.role, "edit the words on the site");
  await db.delete(siteCopy).where(eq(siteCopy.key, key));
}

/* ─────────────────────────────── dishes ─────────────────────────────── */

export interface DishEditInput {
  dishId: number;
  name?: string | null;
  nameEs?: string | null;
  fusion?: string | null;
  fusionEs?: string | null;
  price?: number | null;
  category?: string | null;
  needsLicence?: boolean | null;
}

/**
 * Editorial changes to a dish.
 *
 * Renaming a dish or rewriting its description means writing the Spanish too,
 * for the same reason as above. Changing only the price does not - there is no
 * Spanish for 42.
 */
export async function saveDishEdit(me: Viewer, input: DishEditInput): Promise<void> {
  assertCan(CAN.manageClients, me.role, "edit a dish");

  if (input.name?.trim() && !input.nameEs?.trim()) {
    throw new Error("A renamed dish needs its Spanish name too.");
  }
  if (input.fusion?.trim() && !input.fusionEs?.trim()) {
    throw new Error("A rewritten description needs its Spanish too.");
  }
  if (input.price !== undefined && input.price !== null && !(input.price > 0)) {
    throw new Error("A menu price has to be more than zero.");
  }

  const row = {
    dishId: input.dishId,
    name: input.name?.trim() || null,
    nameEs: input.nameEs?.trim() || null,
    fusion: input.fusion?.trim() || null,
    fusionEs: input.fusionEs?.trim() || null,
    price: input.price ?? null,
    category: input.category || null,
    needsLicence: input.needsLicence ?? null,
    updatedBy: me.id,
    updatedAt: new Date()
  };

  await db.insert(dishEdits).values(row)
    .onConflictDoUpdate({ target: dishEdits.dishId, set: row });
}

export async function listDishEdits() {
  return db.select().from(dishEdits);
}

export async function revertDish(me: Viewer, dishId: number): Promise<void> {
  assertCan(CAN.manageClients, me.role, "edit a dish");
  await db.delete(dishEdits).where(eq(dishEdits.dishId, dishId));
}
