"use client";

import { useMemo, useState } from "react";
import type { Dish, EventType } from "@/lib/dishes";
import type { VisibleDish } from "@/lib/permissions";
import { FORMAT_LABEL, matchesEvent } from "@/lib/dishes";
import { soles } from "@/lib/pricing";

export default function Moments({
  dishes,
  moments
}: {
  dishes: VisibleDish[];
  moments: EventType[];
}) {
  const [openId, setOpenId] = useState<string>(moments[0]?.id ?? "");

  const counts = useMemo(
    () =>
      Object.fromEntries(
        moments.map((m) => [m.id, dishes.filter((d) => matchesEvent(d, m.filter)).length])
      ) as Record<string, number>,
    [dishes, moments]
  );

  const open = moments.find((m) => m.id === openId) ?? moments[0];
  const shown = useMemo(
    () => (open ? dishes.filter((d) => matchesEvent(d, open.filter)) : []),
    [dishes, open]
  );

  const max = Math.max(...Object.values(counts), 1);

  return (
    <div>
      {/* The arc. Bar height encodes how much of the matrix serves each moment. */}
      <ol className="mb-10 grid gap-2 sm:grid-cols-4 lg:grid-cols-7">
        {moments.map((m, i) => {
          const on = m.id === open?.id;
          const n = counts[m.id];
          return (
            <li key={m.id}>
              <button
                type="button"
                onClick={() => setOpenId(m.id)}
                aria-pressed={on}
                className={`flex w-full flex-col justify-between rounded-xl border p-3 text-left transition-colors ${
                  on ? "border-aji bg-surface" : "border-line hover:border-ink-3"
                }`}
              >
                <span className="font-mono text-[10px] text-ink-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-1 block text-sm font-bold leading-tight">{m.name}</span>
                <span
                  className="mt-3 block h-1 rounded-full bg-aji"
                  style={{ width: `${Math.max(8, (n / max) * 100)}%` }}
                  aria-hidden="true"
                />
                <span className="tnum mt-1.5 block font-mono text-[11px] text-ink-2">
                  {n} dishes
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      {open && (
        <>
          <div className="mb-5 border-t border-line pt-5">
            <h2 className="font-display text-2xl font-semibold tracking-tight">{open.name}</h2>
            <p className="mt-1.5 max-w-2xl text-sm text-ink-2">{open.blurb}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((d) => (
              <article key={d.id} className="rounded-xl border border-line bg-surface p-4">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-sm font-bold leading-tight">{d.name}</h3>
                  <span className="tnum shrink-0 font-mono text-xs text-ink-2">
                    {"price" in d ? soles(d.price) : null}
                  </span>
                </div>
                <p className="mt-1.5 text-xs">
                  <span className="font-bold text-thistle">{d.origin}</span>
                  <span className="text-ink-3"> → </span>
                  <span className="font-bold text-aji">{d.subOrigin}</span>
                </p>
                <p className="mt-2 flex flex-wrap items-center gap-1.5 font-mono text-[10px] text-ink-3">
                  <span className="rounded border border-line px-1.5 py-0.5">
                    {FORMAT_LABEL[d.format]}
                  </span>
                  {d.needsLicence && (
                    <span className="rounded border border-line px-1.5 py-0.5 text-warn">
                      licence
                    </span>
                  )}
                  {d.veg && (
                    <span className="rounded border border-line px-1.5 py-0.5 text-good">veg</span>
                  )}
                </p>
              </article>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
