import type { Metadata } from "next";
import { requireCan, CAN } from "@/lib/session";
import { listBookings, dayVerdict } from "@/lib/repo/bookings";
import { listClients } from "@/lib/repo/clients";
import { TIERS } from "@/lib/pricing";
import { DISTRICTS, VENUE_TYPES } from "@/data/venues";
import { dropBooking, toggleBooking } from "./actions";
import BookingForm from "./form";

export const metadata: Metadata = { title: "Bookings" };

const hhmm = (m: number) =>
  `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;

export default async function BookingsPage() {
  const me = await requireCan(CAN.seeKitchen, "see the bookings");
  const all = await listBookings(me);
  const clients = CAN.seeAllClients(me.role) ? await listClients(me) : [];

  // The days that actually carry more than one job are the only ones capacity
  // has anything to say about.
  const days = [...new Set(all.map((b) => b.eventDate.toDateString()))];
  const verdicts = await Promise.all(
    days.map((d) => dayVerdict(me, new Date(d)))
  );
  const busy = verdicts.filter((v) => v.clashes.length > 0 || v.unjudgeable.length > 0);

  return (
    <>
      <section className="border-b border-line py-12">
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Bookings
        </h1>
        <p className="mt-4 max-w-2xl text-ink-2">
          What you have actually sold. The day check reads from here, so “can I take this
          one?” is answered against the Saturday you already have, not an example.
        </p>
      </section>

      {busy.length > 0 && (
        <section className="mt-8 rounded-xl border border-warn bg-surface p-5">
          <h2 className="font-display text-xl font-semibold tracking-tight text-warn">
            Days that need a look
          </h2>
          {busy.map((v) => (
            <div key={v.day.toISOString()} className="mt-4">
              <h3 className="font-mono text-[11px] uppercase tracking-wider text-ink-3">
                {v.day.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" })}
                {" · "}{v.bookings.length} jobs
              </h3>
              <ul className="mt-1.5 space-y-1 text-sm text-ink-2">
                {v.clashes.map((c, i) => (
                  <li key={i}>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-bad">
                      {c.kind}
                    </span>{" "}
                    {c.detail}
                  </li>
                ))}
                {v.unjudgeable.map((u) => (
                  <li key={u.id} className="text-ink-3">
                    One booking could not be checked — {u.reason}.
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      <section className="grid gap-10 py-10 md:grid-cols-[340px_1fr]">
        {CAN.writeBookings(me.role) ? <BookingForm clients={clients.map((c) => ({ id: c.id, name: c.name }))} /> : <div />}

        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            On the books · {all.length}
          </h2>
          {all.length === 0 ? (
            <p className="mt-4 text-sm text-ink-2">
              Nothing booked. Add one and the day check starts answering from real jobs.
            </p>
          ) : (
            <ul className="mt-4 divide-y divide-line/60">
              {all.map((b) => (
                <li key={b.id} className="py-3">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <span className="font-medium">
                      {b.eventDate.toLocaleDateString("en-GB", {
                        weekday: "short", day: "numeric", month: "short"
                      })}{" "}
                      <span className="font-mono tabular-nums">{hhmm(b.serviceMinutes)}</span>
                    </span>
                    <span className="font-mono text-[11px] text-ink-3">
                      {b.confirmed ? "confirmed" : "provisional"}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-ink-2">
                    {b.clientName ?? b.quoteName ?? "—"} · {b.guests} guests ·{" "}
                    {TIERS[b.tier as "scran"]?.name ?? b.tier}
                    {b.district && ` · ${DISTRICTS.find((d) => d.id === b.district)?.name ?? b.district}`}
                    {b.venue && `, ${VENUE_TYPES.find((v) => v.id === b.venue)?.name ?? b.venue}`}
                  </p>
                  {CAN.writeBookings(me.role) && (
                    <div className="mt-1.5 flex gap-4">
                      <form action={toggleBooking.bind(null, b.id, !b.confirmed)}>
                        <button type="submit" className="text-xs text-ink-3 hover:text-ink">
                          {b.confirmed ? "mark provisional" : "confirm"}
                        </button>
                      </form>
                      <form action={dropBooking.bind(null, b.id)}>
                        <button type="submit" className="text-xs text-ink-3 hover:text-bad">
                          remove
                        </button>
                      </form>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
