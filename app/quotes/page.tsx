import { loadCopy } from "@/lib/copy";
import type { Metadata } from "next";
import Link from "next/link";
import { requireViewer } from "@/lib/session";
import { listQuotes } from "@/lib/repo/quotes";
import { CAN } from "@/lib/permissions";
import { soles } from "@/lib/pricing";
import { TIERS } from "@/lib/pricing";

export const metadata: Metadata = { title: "Quotes" };

const STATUS_STYLE: Record<string, string> = {
  draft: "text-ink-3 border-line",
  sent: "text-thistle border-thistle",
  won: "text-good border-good",
  lost: "text-ink-3 border-line line-through"
};

export default async function QuotesPage() {
  const me = await requireViewer();
  const t = await loadCopy(me.locale);
  const quotes = await listQuotes(me);
  const money = CAN.seeMoney(me.role);

  return (
    <>
      <section className="border-b border-line py-12">
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {t("quotes.heading")}
        </h1>
        <p className="mt-4 max-w-2xl text-ink-2">
          {me.role === "client"
            ? t("quotes.ledeClient")
            : t("quotes.ledeOwner")}
        </p>
      </section>

      {quotes.length === 0 ? (
        <div className="my-12 rounded-xl border border-dashed border-line px-6 py-14 text-center">
          <h2 className="font-display text-xl font-semibold">{t("quotes.empty")}</h2>
          <p className="mx-auto mt-2 max-w-sm text-sm text-ink-2">
            {CAN.writeQuotes(me.role)
              ? t("quotes.emptyOwner")
              : t("quotes.emptyClient")}
          </p>
          {CAN.writeQuotes(me.role) && (
            <Link
              href="/builder"
              className="mt-6 inline-block rounded-md bg-ink px-4 py-2 text-sm font-medium text-bg"
            >
              {t("nav.builder")}
            </Link>
          )}
        </div>
      ) : (
        <div className="my-10 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-line text-left font-mono text-[11px] uppercase tracking-wider text-ink-3">
                <th className="py-2 pr-4 font-medium">{t("quotes.colQuote")}</th>
                <th className="py-2 pr-4 font-medium">{t("quotes.colClient")}</th>
                <th className="py-2 pr-4 font-medium">{t("quotes.colGuests")}</th>
                <th className="py-2 pr-4 font-medium">{t("quotes.colTier")}</th>
                <th className="py-2 pr-4 text-right font-medium">{t("quotes.colPays")}</th>
                {money && <th className="py-2 pr-4 text-right font-medium">{t("quotes.colFoodCost")}</th>}
                <th className="py-2 font-medium">{t("quotes.colStatus")}</th>
              </tr>
            </thead>
            <tbody>
              {quotes.map((q) => (
                <tr key={q.id} className="border-b border-line/60 hover:bg-surface">
                  <td className="py-2.5 pr-4">
                    <Link href={`/quotes/${q.id}`} className="font-medium hover:text-aji">
                      {q.name}
                    </Link>
                    <span className="ml-2 font-mono text-[11px] text-ink-3">
                      {q.dishIds.length} {t("quotes.dishes")}
                    </span>
                  </td>
                  <td className="py-2.5 pr-4 text-ink-2">{q.clientName ?? "—"}</td>
                  <td className="py-2.5 pr-4 font-mono tabular-nums">{q.guests}</td>
                  <td className="py-2.5 pr-4 text-ink-2">{TIERS[q.tier as "scran"]?.name ?? q.tier}</td>
                  <td className="py-2.5 pr-4 text-right font-mono tabular-nums">
                    {soles(q.grossTotal)}
                  </td>
                  {money && (
                    <td className="py-2.5 pr-4 text-right font-mono tabular-nums text-ink-2">
                      {soles(q.foodCostTotal)}
                    </td>
                  )}
                  <td className="py-2.5">
                    <span
                      className={`rounded border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                        STATUS_STYLE[q.status] ?? STATUS_STYLE.draft
                      }`}
                    >
                      {q.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
