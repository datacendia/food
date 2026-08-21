"use client";

import { useMemo, useState } from "react";
import type { Dish, Ingredient } from "@/lib/dishes";
import { MONTH_NAMES, inSeason, dishesOutOfSeason } from "@/lib/dishes";

const SHORT = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

export default function Seasonal({
  dishes,
  ingredients
}: {
  dishes: Dish[];
  ingredients: Ingredient[];
}) {
  // Default to the real current month rather than a hardcoded one.
  const [month, setMonth] = useState(() => new Date().getMonth() + 1);

  const seasonal = ingredients.filter((i) => !i.yearRound);
  const pantry = ingredients.filter((i) => i.yearRound);

  const inNow = seasonal.filter((i) => inSeason(i, month));
  const outNow = seasonal.filter((i) => !inSeason(i, month));

  const offMenu = useMemo(() => dishesOutOfSeason(ingredients, month), [ingredients, month]);
  const byId = useMemo(() => new Map(dishes.map((d) => [d.id, d])), [dishes]);

  const unverified = ingredients.filter((i) => !i.verified).length;

  return (
    <div>
      {unverified > 0 && (
        <p className="mb-8 rounded-lg border border-bad/40 bg-surface p-4 text-sm">
          <strong className="text-bad">
            {unverified} of {ingredients.length} seasons are unconfirmed.
          </strong>{" "}
          <span className="text-ink-2">
            The dish links below are reliable — they come from the matrix. The month windows are
            estimates and nobody has checked them at a market yet. Confirm before you promise a
            client anything, and correct them in{" "}
            <code className="rounded bg-raised px-1.5 py-0.5 font-mono text-xs">
              data/ingredients.ts
            </code>{" "}
            as you buy through the year.
          </span>
        </p>
      )}

      <fieldset className="mb-9">
        <legend className="mb-3 font-mono text-[11px] uppercase tracking-wider text-ink-3">
          Month
        </legend>
        <div className="flex flex-wrap gap-1.5">
          {MONTH_NAMES.map((m, i) => {
            const n = i + 1;
            const on = n === month;
            return (
              <button
                key={m}
                type="button"
                onClick={() => setMonth(n)}
                aria-pressed={on}
                aria-label={m}
                className={`w-11 rounded-lg border py-2 font-mono text-xs ${
                  on
                    ? "border-ink bg-ink font-bold text-bg"
                    : "border-line text-ink-2 hover:border-ink-3"
                }`}
              >
                {SHORT[i]}
              </button>
            );
          })}
        </div>
        <p className="mt-3 font-display text-2xl font-semibold">{MONTH_NAMES[month - 1]}</p>
      </fieldset>

      <div className="grid gap-5 lg:grid-cols-2">
        <section className="rounded-xl border border-line bg-surface p-5">
          <h2 className="font-mono text-[11px] uppercase tracking-wider text-good">
            Buying now · {inNow.length}
          </h2>
          <ul className="mt-4 space-y-3">
            {inNow.map((i) => (
              <li key={i.id}>
                <span className="text-sm font-bold">{i.name}</span>
                {!i.verified && (
                  <span className="ml-2 rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-ink-3">
                    unconfirmed
                  </span>
                )}
                <span className="mt-0.5 block text-xs text-ink-2">{i.note}</span>
                <span className="mt-1 block font-mono text-[11px] text-ink-3">
                  {i.dishes.length} dish{i.dishes.length === 1 ? "" : "es"}
                </span>
              </li>
            ))}
            {inNow.length === 0 && (
              <li className="text-sm text-ink-2">Nothing seasonal peaks this month.</li>
            )}
          </ul>
        </section>

        <section className="rounded-xl border border-line bg-surface p-5">
          <h2 className="font-mono text-[11px] uppercase tracking-wider text-warn">
            Out of window · {outNow.length}
          </h2>
          <ul className="mt-4 space-y-3">
            {outNow.map((i) => (
              <li key={i.id}>
                <span className="text-sm font-bold text-ink-2">{i.name}</span>
                <span className="mt-0.5 block font-mono text-[11px] text-ink-3">
                  back in{" "}
                  {i.months.length
                    ? i.months.map((m) => MONTH_NAMES[m - 1].slice(0, 3)).join(", ")
                    : "—"}
                </span>
              </li>
            ))}
            {outNow.length === 0 && (
              <li className="text-sm text-ink-2">Everything seasonal is available.</li>
            )}
          </ul>
        </section>
      </div>

      <section className="mt-9">
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          Off the menu in {MONTH_NAMES[month - 1]}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-ink-2">
          {offMenu.size === 0 ? (
            "Every dish in the matrix is buildable this month."
          ) : (
            <>
              <strong className="text-ink">{offMenu.size}</strong> of {dishes.length} dishes depend
              on something out of window. Quote around them, or swap the ingredient.
            </>
          )}
        </p>

        {offMenu.size > 0 && (
          <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {[...offMenu]
              .map((id) => byId.get(id))
              .filter((d): d is Dish => Boolean(d))
              .sort((a, b) => a.id - b.id)
              .map((d) => {
                const blockers = seasonal.filter(
                  (i) => i.dishes.includes(d.id) && !inSeason(i, month)
                );
                return (
                  <div key={d.id} className="rounded-lg border border-line p-3">
                    <span className="block text-sm font-bold leading-tight">{d.name}</span>
                    <span className="mt-1 block font-mono text-[11px] text-warn">
                      {blockers.map((b) => b.name).join(", ")}
                    </span>
                  </div>
                );
              })}
          </div>
        )}
      </section>

      <section className="mt-10 border-t border-line pt-7">
        <h2 className="font-mono text-[11px] uppercase tracking-wider text-ink-3">
          Available all year · {pantry.length}
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {pantry.map((i) => (
            <span
              key={i.id}
              title={i.note}
              className="rounded-full border border-line px-3 py-1.5 text-xs text-ink-2"
            >
              {i.name}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
