import type { Metadata } from "next";
import { requireCan, CAN } from "@/lib/session";
import { listVerifiedPrices, priceBook } from "@/lib/repo/prices";
import { ESTIMATES } from "@/lib/costing";
import { soles } from "@/lib/pricing";
import { dropPrice } from "./actions";
import PriceForm from "./form";

export const metadata: Metadata = { title: "Prices" };

export default async function PricesPage() {
  const me = await requireCan(CAN.writePrices, "record a verified price");
  const verified = await listVerifiedPrices();
  const book = await priceBook();
  const total = Object.keys(ESTIMATES.food).length;

  return (
    <>
      <section className="border-b border-line py-12">
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          What things actually cost
        </h1>
        <p className="mt-4 max-w-2xl text-ink-2">
          Every price the app ships with is an estimate. Write down what you paid at the
          stall and it applies everywhere immediately — no rebuild, nothing to redownload.
        </p>
        <p className="mt-3 font-mono text-sm text-ink-3">
          <span className="text-good">{verified.length}</span> verified of {total} ingredients
          {verified.length === 0 && " — every figure is still a guess"}
        </p>
      </section>

      <section className="grid gap-10 py-10 md:grid-cols-[340px_1fr]">
        <PriceForm />

        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight">Verified</h2>
          {verified.length === 0 ? (
            <p className="mt-4 text-sm text-ink-2">
              Nothing yet. The first market run is the one that makes every quote real.
            </p>
          ) : (
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-line text-left font-mono text-[11px] uppercase tracking-wider text-ink-3">
                    <th className="py-2 pr-4 font-medium">Ingredient</th>
                    <th className="py-2 pr-4 text-right font-medium">Paid</th>
                    <th className="py-2 pr-4 text-right font-medium">Estimate was</th>
                    <th className="py-2 pr-4 text-right font-medium">Diff</th>
                    <th className="py-2 pr-4 font-medium">Where</th>
                    <th className="py-2 font-medium"></th>
                  </tr>
                </thead>
                <tbody>
                  {verified.map((v) => {
                    const diff = v.estimate === null ? null : (v.soles - v.estimate) / v.estimate;
                    return (
                      <tr key={v.id} className="border-b border-line/60">
                        <td className="py-2.5 pr-4">
                          {v.ingredientKey}
                          <span className="ml-2 font-mono text-[11px] text-ink-3">/{v.per}</span>
                        </td>
                        <td className="py-2.5 pr-4 text-right font-mono tabular-nums">
                          {soles(v.soles)}
                        </td>
                        <td className="py-2.5 pr-4 text-right font-mono tabular-nums text-ink-3">
                          {v.estimate === null ? "—" : soles(v.estimate)}
                        </td>
                        <td
                          className={`py-2.5 pr-4 text-right font-mono tabular-nums ${
                            diff === null ? "text-ink-3" : diff > 0.15 ? "text-bad"
                            : diff < -0.15 ? "text-good" : "text-ink-2"
                          }`}
                        >
                          {diff === null ? "—" : `${diff > 0 ? "+" : ""}${(diff * 100).toFixed(0)}%`}
                        </td>
                        <td className="py-2.5 pr-4 text-xs text-ink-2">
                          {v.source ?? "—"}
                          <span className="block text-ink-3">
                            {v.verifiedByName ?? "someone"} ·{" "}
                            {v.verifiedAt.toLocaleDateString("en-GB")}
                          </span>
                        </td>
                        <td className="py-2.5 text-right">
                          <form action={dropPrice.bind(null, v.ingredientKey)}>
                            <button type="submit" className="text-xs text-ink-3 hover:text-bad">
                              revert
                            </button>
                          </form>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <p className="mt-4 text-xs text-ink-3">
                A diff over 15% either way is worth a second look — it usually means the
                estimate was wrong rather than the market moving.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
