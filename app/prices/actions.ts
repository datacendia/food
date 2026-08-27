"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { requireViewer } from "@/lib/session";
import { recordPrice, forgetPrice } from "@/lib/repo/prices";

const PriceForm = z.object({
  ingredientKey: z.string().min(2),
  soles: z.coerce.number().positive().max(10000),
  per: z.enum(["kg", "L", "each", "bunch"]),
  unitGrams: z.coerce.number().positive().nullish().or(z.literal("").transform(() => null)),
  source: z.string().max(200).nullish(),
  note: z.string().max(500).nullish()
});

export async function savePrice(_prev: string | undefined, form: FormData) {
  const me = await requireViewer();
  const parsed = PriceForm.safeParse(Object.fromEntries(form));
  if (!parsed.success) return parsed.error.issues[0]?.message ?? "That did not look right.";
  try {
    await recordPrice(me, {
      ...parsed.data,
      unitGrams: parsed.data.unitGrams ?? null,
      source: parsed.data.source ?? null,
      note: parsed.data.note ?? null
    });
  } catch (err) {
    // The message from recordPrice names the nearest key, which is the useful
    // part — a typo'd ingredient would otherwise sit in the table matching
    // nothing forever.
    return err instanceof Error ? err.message : "Could not save that price.";
  }
  revalidatePath("/prices");
  revalidatePath("/menu");
  return undefined;
}

export async function dropPrice(key: string) {
  const me = await requireViewer();
  await forgetPrice(me, key);
  revalidatePath("/prices");
  revalidatePath("/menu");
}
