"use client";

import { useFormStatus } from "react-dom";
import { saveQuote } from "@/app/quotes/actions";
import type { ServiceTier } from "@/lib/dishes";

function Submit({ disabled }: { disabled: boolean }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={disabled || pending}
      className="mt-2 w-full rounded-md bg-ink px-4 py-2 text-sm font-medium text-bg
                 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {pending ? "Saving…" : "Save this quote"}
    </button>
  );
}

/**
 * Saves the selection, not the figures.
 *
 * The totals shown beside this button were computed in the browser and are not
 * submitted: the server prices the dish ids again with the same lib/pricing.ts
 * and writes down what IT said. A number that travels through a form is a
 * number somebody can edit, and a quote is the one thing here a client will
 * hold you to.
 */
export default function SaveQuote({
  dishIds, guests, tier, district, venue, peak, month
}: {
  dishIds: number[];
  guests: number;
  tier: ServiceTier;
  district: string;
  venue: string;
  peak: boolean;
  month: number;
}) {
  const empty = dishIds.length === 0;

  return (
    <form action={saveQuote} className="mt-5 border-t border-line pt-4">
      <label className="flex flex-col gap-1.5">
        <span className="font-mono text-[10px] uppercase tracking-wider text-ink-3">
          Save as
        </span>
        <input
          name="name" required maxLength={120}
          placeholder="Ferguson wedding, 120"
          className="rounded-md border border-line bg-bg px-2.5 py-1.5 text-sm
                     focus:border-aji focus:outline-none"
        />
      </label>

      <input type="hidden" name="dishIds" value={dishIds.join(",")} />
      <input type="hidden" name="guests" value={guests} />
      <input type="hidden" name="tier" value={tier} />
      <input type="hidden" name="district" value={district} />
      <input type="hidden" name="venue" value={venue} />
      <input type="hidden" name="peak" value={peak ? "true" : ""} />
      <input type="hidden" name="month" value={month} />

      <Submit disabled={empty} />
      {empty && (
        <p className="mt-1.5 text-[11px] text-ink-3">Pick at least one dish first.</p>
      )}
    </form>
  );
}
