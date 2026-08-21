"use client";

import { useMemo, useState } from "react";
import type { Dish, ServiceTier } from "@/lib/dishes";
import { CATEGORY_LABEL, CATEGORY_ORDER } from "@/lib/dishes";
import { buildQuote, TIERS, soles, marginFlag } from "@/lib/pricing";



export default function MenuBuilder({ dishes }: { dishes: Dish[] }) {
  const [tier, setTier] = useState<ServiceTier>("plated");
  const [guests, setGuests] = useState(20);
  const [picked, setPicked] = useState<number[]>([1, 2, 20, 76]);

  // A dish only appears if it is offered at the chosen tier.
  const available = useMemo(
    () => dishes.filter((d) => d.tiers.includes(tier)),
    [dishes, tier]
  );

  // Dropping the tier can strip dishes out of the selection; derive the live
  // selection from what is actually available rather than mutating on change.
  const selected = useMemo(
    () => available.filter((d) => picked.includes(d.id)),
    [available, picked]
  );

  const quote = useMemo(() => {
    if (selected.length === 0 || guests <= 0) return null;
    try {
      return buildQuote({ dishes: selected, guests, tier });
    } catch {
      return null;
    }
  }, [selected, guests, tier]);

  const toggle = (id: number) =>
    setPicked((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const droppedCount = picked.length - selected.length;

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
      {/* ---------------- picker ---------------- */}
      <div>
        <fieldset className="mb-6">
          <legend className="mb-2 font-mono text-[11px] uppercase tracking-wider text-ink-3">
            Service tier
          </legend>
          <div className="flex flex-wrap gap-2">
            {Object.values(TIERS).map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTier(t.id)}
                aria-pressed={tier === t.id}
                className={`rounded-full border px-4 py-2 text-sm ${
                  tier === t.id
                    ? "border-ink bg-ink font-bold text-bg"
                    : "border-line text-ink-2 hover:border-ink-3"
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="mb-8">
          <legend className="mb-2 font-mono text-[11px] uppercase tracking-wider text-ink-3">
            Guests
          </legend>
          <input
            type="number"
            min={1}
            max={500}
            value={guests}
            onChange={(e) => setGuests(Math.max(1, Number(e.target.value) || 1))}
            className="tnum w-32 rounded-lg border border-line bg-surface px-3 py-2 font-mono"
            aria-label="Number of guests"
          />
          <span className="ml-3 text-sm text-ink-3">
            minimum {TIERS[tier].minGuests} for this tier
          </span>
        </fieldset>

        {droppedCount > 0 && (
          <p className="mb-6 rounded-lg border border-line bg-surface p-3 text-sm text-ink-2">
            {droppedCount} selected dish{droppedCount === 1 ? "" : "es"} not offered at this tier —
            still saved if you switch back.
          </p>
        )}

        {CATEGORY_ORDER.map((cat) => {
          const rows = available.filter((d) => d.category === cat);
          if (rows.length === 0) return null;
          return (
            <section key={cat} className="mb-8">
              <h3 className="mb-3 font-mono text-[11px] uppercase tracking-wider text-ink-3">
                {CATEGORY_LABEL[cat]}
              </h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {rows.map((d) => {
                  const on = picked.includes(d.id);
                  return (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => toggle(d.id)}
                      aria-pressed={on}
                      className={`rounded-lg border p-3 text-left transition-colors ${
                        on ? "border-aji bg-surface" : "border-line hover:border-ink-3"
                      }`}
                    >
                      <span className="flex items-baseline justify-between gap-2">
                        <span className="text-sm font-bold leading-tight">{d.name}</span>
                        <span className="tnum shrink-0 font-mono text-xs text-ink-2">
                          {soles(d.price)}
                        </span>
                      </span>
                      <span className="mt-1 block text-xs">
                        <span className="text-thistle">{d.origin}</span>
                        <span className="text-ink-3"> → </span>
                        <span className="text-aji">{d.subOrigin}</span>
                      </span>
                      {marginFlag(d) === "over" && (
                        <span className="mt-1 block font-mono text-[10px] text-bad">
                          above 30% food cost
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {/* ---------------- quote ---------------- */}
      <aside className="lg:sticky lg:top-6 lg:self-start">
        <div className="rounded-xl border border-line bg-surface p-5">
          <h3 className="font-display text-xl font-semibold">Your quote</h3>

          {!quote ? (
            <p className="mt-3 text-sm text-ink-2">Pick at least one dish to see the price.</p>
          ) : (
            <>
              <p className="mt-1 font-mono text-[11px] text-ink-3">
                {quote.tier.name} · {quote.guests} guests · {selected.length} dishes
              </p>

              {quote.warnings.map((w) => (
                <p
                  key={w}
                  className="mt-3 rounded-lg border border-line bg-raised p-2.5 text-xs text-warn"
                >
                  {w}
                </p>
              ))}

              <dl className="mt-4 space-y-1.5 font-mono text-xs">
                <Row label="Menu, per guest" value={soles(quote.menuValuePerGuest)} />
                {quote.serviceLines.map((l) => (
                  <Row key={l.label} label={l.label} value={soles(l.perGuest)} muted />
                ))}
                <Row label="Net, per guest" value={soles(quote.netPerGuest)} strong />
              </dl>

              <dl className="mt-4 space-y-1.5 border-t border-line pt-4 font-mono text-xs">
                <Row label={`Net · ${quote.guests} guests`} value={soles(quote.netTotal)} />
                <Row label="IGV at 18%" value={soles(quote.igvTotal)} muted />
                <Row label="Client pays" value={soles(quote.grossTotal)} strong />
              </dl>

              <div className="mt-4 rounded-lg bg-raised p-3">
                <p className="font-mono text-[10px] uppercase tracking-wider text-ink-3">
                  What you keep
                </p>
                <p className="tnum mt-1 font-mono text-lg font-semibold text-good">
                  {soles(quote.contributionTotal)}
                </p>
                <p className="mt-1 text-xs text-ink-2">
                  {soles(quote.contributionPerGuest)} per guest ·{" "}
                  {(quote.contributionRatio * 100).toFixed(0)}% of net. Food and service costs are
                  already out.
                </p>
              </div>

              <p className="mt-4 text-[11px] leading-relaxed text-ink-3">
                Kitchen rent, insurance and your own wage come out of this figure. Estimates only —
                not a binding quote.
              </p>
            </>
          )}
        </div>
      </aside>
    </div>
  );
}

function Row({
  label,
  value,
  muted,
  strong
}: {
  label: string;
  value: string;
  muted?: boolean;
  strong?: boolean;
}) {
  return (
    <div
      className={`flex justify-between gap-3 ${strong ? "border-t border-line pt-1.5 font-semibold text-ink" : muted ? "text-ink-3" : "text-ink-2"}`}
    >
      <dt className="min-w-0 break-words">{label}</dt>
      <dd className="tnum shrink-0">{value}</dd>
    </div>
  );
}
