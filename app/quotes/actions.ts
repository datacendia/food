"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { requireViewer } from "@/lib/session";
import { createQuote, updateQuote, setQuoteStatus, deleteQuote } from "@/lib/repo/quotes";
import { bookFromQuote } from "@/lib/repo/bookings";
import { QUOTE_STATUS } from "@/db/schema";
import type { ServiceTier } from "@/lib/dishes";

/**
 * Nothing that arrives from a browser is trusted, including from a form this
 * app rendered a moment ago. The totals are never accepted at all - they are
 * recomputed from the dish ids by lib/pricing.ts inside the repository.
 */
const QuoteForm = z.object({
  name: z.string().min(1, "Give the quote a name you will recognise in March."),
  clientId: z.string().uuid().nullish().or(z.literal("").transform(() => null)),
  guests: z.coerce.number().int().positive().max(2000),
  tier: z.enum(["scran", "buffet", "plated"]),
  district: z.string().nullish().or(z.literal("").transform(() => null)),
  venue: z.string().nullish().or(z.literal("").transform(() => null)),
  month: z.coerce.number().int().min(1).max(12).nullish(),
  peak: z.coerce.boolean().default(false),
  notes: z.string().max(4000).nullish(),
  dishIds: z.string().transform((s) =>
    s.split(",").map((n) => Number(n.trim())).filter((n) => Number.isInteger(n) && n > 0))
});

function parse(form: FormData) {
  const parsed = QuoteForm.safeParse(Object.fromEntries(form));
  if (!parsed.success) {
    throw new Error(parsed.error.issues.map((i) => i.message).join(" "));
  }
  const d = parsed.data;
  return {
    name: d.name,
    clientId: d.clientId ?? null,
    guests: d.guests,
    tier: d.tier as ServiceTier,
    district: d.district ?? null,
    venue: d.venue ?? null,
    month: d.month ?? null,
    peak: d.peak,
    notes: d.notes ?? null,
    dishIds: d.dishIds
  };
}

export async function saveQuote(form: FormData) {
  const me = await requireViewer();
  const id = await createQuote(me, parse(form));
  revalidatePath("/quotes");
  redirect(`/quotes/${id}`);
}

export async function editQuote(id: string, form: FormData) {
  const me = await requireViewer();
  await updateQuote(me, id, parse(form));
  revalidatePath("/quotes");
  revalidatePath(`/quotes/${id}`);
}

export async function markQuote(id: string, form: FormData) {
  const me = await requireViewer();
  const status = z.enum(QUOTE_STATUS).parse(form.get("status"));
  await setQuoteStatus(me, id, status);
  revalidatePath("/quotes");
  revalidatePath(`/quotes/${id}`);
}

export async function removeQuote(id: string) {
  const me = await requireViewer();
  await deleteQuote(me, id);
  revalidatePath("/quotes");
  redirect("/quotes");
}

/** Won, and going in the book. The date and time are the only new facts. */
const BookForm = z.object({
  eventDate: z.string().min(8, "When is it?").transform((s) => new Date(s + "T00:00:00")),
  serviceMinutes: z.string().regex(/^\d{1,2}:\d{2}$/, "Service time should look like 19:30")
    .transform((s) => { const [h, m] = s.split(":").map(Number); return h * 60 + m; })
});

export async function bookQuote(id: string, _prev: string | undefined, form: FormData) {
  const me = await requireViewer();
  const parsed = BookForm.safeParse(Object.fromEntries(form));
  if (!parsed.success) return parsed.error.issues[0]?.message ?? "That did not look right.";

  let result;
  try {
    result = await bookFromQuote(me, id, parsed.data);
  } catch (err) {
    return err instanceof Error ? err.message : "Could not put that in the book.";
  }
  await setQuoteStatus(me, id, "won");
  revalidatePath("/bookings");
  revalidatePath(`/quotes/${id}`);
  redirect("/bookings");
}
