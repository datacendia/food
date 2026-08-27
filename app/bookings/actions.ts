"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { requireViewer } from "@/lib/session";
import { createBooking, deleteBooking, confirmBooking } from "@/lib/repo/bookings";
import type { ServiceTier } from "@/lib/dishes";

/** "19:30" → minutes from midnight, which is what lib/capacity.ts reasons in. */
const clock = z.string().regex(/^\d{1,2}:\d{2}$/, "Service time should look like 19:30")
  .transform((s) => { const [h, m] = s.split(":").map(Number); return h * 60 + m; });

const BookingForm = z.object({
  eventDate: z.string().min(8).transform((s) => new Date(s + "T00:00:00")),
  serviceMinutes: clock,
  durationMinutes: z.coerce.number().int().min(30).max(720).default(180),
  guests: z.coerce.number().int().positive().max(2000),
  tier: z.enum(["scran", "buffet", "plated"]),
  district: z.string().min(1, "Pick a district — the travel maths needs it."),
  venue: z.string().min(1, "Pick a venue type."),
  quoteId: z.string().uuid().nullish().or(z.literal("").transform(() => null)),
  clientId: z.string().uuid().nullish().or(z.literal("").transform(() => null)),
  notes: z.string().max(2000).nullish()
});

export async function addBooking(_prev: string | undefined, form: FormData) {
  const me = await requireViewer();
  const parsed = BookingForm.safeParse(Object.fromEntries(form));
  if (!parsed.success) return parsed.error.issues[0]?.message ?? "That did not look right.";

  try {
    await createBooking(me, {
      ...parsed.data,
      tier: parsed.data.tier as ServiceTier,
      quoteId: parsed.data.quoteId ?? null,
      clientId: parsed.data.clientId ?? null,
      notes: parsed.data.notes ?? null,
      dishIds: form.getAll("dishIds").map(Number).filter(Number.isInteger)
    });
  } catch (err) {
    return err instanceof Error ? err.message : "Could not save that booking.";
  }
  revalidatePath("/bookings");
  return undefined;
}

export async function dropBooking(id: string) {
  const me = await requireViewer();
  await deleteBooking(me, id);
  revalidatePath("/bookings");
}

export async function toggleBooking(id: string, confirmed: boolean) {
  const me = await requireViewer();
  await confirmBooking(me, id, confirmed);
  revalidatePath("/bookings");
}
