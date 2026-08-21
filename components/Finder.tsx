"use client";

import { useMemo, useState } from "react";
import type { Dish, EventType, Flavour } from "@/lib/dishes";
import { CATEGORY_LABEL, CATEGORY_ORDER, FLAVOUR_AXES, matchesEvent } from "@/lib/dishes";
import { soles } from "@/lib/pricing";

interface Props {
  dishes: Dish[];
  events: EventType[];
  flavours: Record<number, Flavour[]>;
}

export default function Finder({ dishes, events, flavours }: Props) {
  const [eventId, setEventId] = useState<string | null>(null);
  const [picked, setPicked] = useState<Flavour[]>([]);
  /** "any" widens as you add flavours; "all" narrows. */
  const [mode, setMode] = useState<"any" | "all">("any");

  const activeEvent = events.find((e) => e.id === eventId) ?? null;

  const results = useMemo(() => {
    let out = dishes;
    if (activeEvent) out = out.filter((d) => matchesEvent(d, activeEvent.filter));
    if (picked.length > 0) {
      out = out.filter((d) => {
        const f = flavours[d.id] ?? [];
        return mode === "all"
          ? picked.every((p) => f.includes(p))
          : picked.some((p) => f.includes(p));
      });
    }
    return out;
  }, [dishes, activeEvent, picked, mode, flavours]);

  // How many dishes each flavour would still yield, given the current event.
  const counts = useMemo(() => {
    const base = activeEvent
      ? dishes.filter((d) => matchesEvent(d, activeEvent.filter))
      : dishes;
    const c = {} as Record<Flavour, number>;
    for (const f of FLAVOUR_AXES) {
      c[f] = base.filter((d) => (flavours[d.id] ?? []).includes(f)).length;
    }
    return c;
  }, [dishes, activeEvent, flavours]);

  const toggleFlavour = (f: Flavour) =>
    setPicked((prev) => (prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]));

  const clear = () => {
    setEventId(null);
    setPicked([]);
  };

  const grouped = useMemo(() => {
    const g: Record<string, Dish[]> = {};
    for (const d of results) (g[d.category] ??= []).push(d);
    return g;
  }, [results]);

  return (
    <div>
      <fieldset className="mb-8">
        <legend className="mb-3 font-mono text-[11px] uppercase tracking-wider text-ink-3">
          What are you planning?
        </legend>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((e) => {
            const on = eventId === e.id;
            return (
              <button
                key={e.id}
                type="button"
                onClick={() => setEventId(on ? null : e.id)}
                aria-pressed={on}
                className={`rounded-lg border p-3 text-left transition-colors ${
                  on ? "border-aji bg-surface" : "border-line hover:border-ink-3"
                }`}
              >
                <span className="block text-sm font-bold leading-tight">{e.name}</span>
                <span className="mt-1 block text-xs text-ink-2">{e.blurb}</span>
              </button>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="mb-8">
        <legend className="mb-3 font-mono text-[11px] uppercase tracking-wider text-ink-3">
          Flavour compass
        </legend>
        <div className="flex flex-wrap items-center gap-2">
          {FLAVOUR_AXES.map((f) => {
            const on = picked.includes(f);
            const n = counts[f];
            return (
              <button
                key={f}
                type="button"
                onClick={() => toggleFlavour(f)}
                aria-pressed={on}
                disabled={n === 0 && !on}
                className={`rounded-full border px-4 py-2 text-sm capitalize disabled:cursor-not-allowed disabled:opacity-40 ${
                  on
                    ? "border-ink bg-ink font-bold text-bg"
                    : "border-line text-ink-2 hover:border-ink-3"
                }`}
              >
                {f}{" "}
                <span className={`tnum font-mono text-[11px] ${on ? "opacity-70" : "text-ink-3"}`}>
                  {n}
                </span>
              </button>
            );
          })}

          {picked.length > 1 && (
            <button
              type="button"
              onClick={() => setMode(mode === "any" ? "all" : "any")}
              className="rounded-full border border-line px-3 py-2 font-mono text-[11px] text-ink-2 hover:border-ink-3"
            >
              match: {mode === "any" ? "any" : "all"}
            </button>
          )}
        </div>
      </fieldset>

      <div className="mb-6 flex flex-wrap items-baseline gap-3 border-t border-line pt-5">
        <p className="font-mono text-sm">
          <span className="tnum font-semibold">{results.length}</span>
          <span className="text-ink-2"> of {dishes.length} dishes</span>
        </p>
        {(activeEvent || picked.length > 0) && (
          <button
            type="button"
            onClick={clear}
            className="font-mono text-[11px] text-ink-3 underline hover:text-ink"
          >
            clear filters
          </button>
        )}
      </div>

      {results.length === 0 ? (
        <p className="rounded-xl border border-line bg-surface p-6 text-sm text-ink-2">
          Nothing matches that combination. Try switching the match mode to{" "}
          <strong>any</strong>, or drop a flavour.
        </p>
      ) : (
        CATEGORY_ORDER
          .filter((c) => grouped[c]?.length)
          .map((cat) => (
            <section key={cat} className="mb-8">
              <h3 className="mb-3 font-mono text-[11px] uppercase tracking-wider text-ink-3">
                {CATEGORY_LABEL[cat as keyof typeof CATEGORY_LABEL]} · {grouped[cat].length}
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {grouped[cat].map((d) => (
                  <article key={d.id} className="rounded-xl border border-line bg-surface p-4">
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="text-sm font-bold leading-tight">{d.name}</h4>
                      <span className="tnum shrink-0 font-mono text-xs text-ink-2">
                        {soles(d.price)}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs">
                      <span className="font-bold text-thistle">{d.origin}</span>
                      <span className="text-ink-3"> → </span>
                      <span className="font-bold text-aji">{d.subOrigin}</span>
                    </p>
                    <p className="mt-2 flex flex-wrap gap-1">
                      {(flavours[d.id] ?? []).map((f) => (
                        <span
                          key={f}
                          className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] capitalize text-ink-3"
                        >
                          {f}
                        </span>
                      ))}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ))
      )}
    </div>
  );
}
