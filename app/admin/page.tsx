import type { Metadata } from "next";
import { requireCan, CAN } from "@/lib/session";
import { loadCopy } from "@/lib/copy";
import { listCopy } from "@/lib/repo/copy";
import CopyEditor from "./copy-editor";

export const metadata: Metadata = { title: "Admin" };

export default async function AdminPage() {
  const me = await requireCan(CAN.manageClients, "edit the site");
  const t = await loadCopy(me.locale);
  const rows = await listCopy(me);

  const sections = [...new Set(rows.map((r) => r.section))];
  const edited = rows.filter((r) => r.edited).length;

  return (
    <>
      <section className="border-b border-line py-12">
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {t("admin.heading")}
        </h1>
        <p className="mt-4 max-w-2xl text-ink-2">{t("admin.lede")}</p>
        <p className="mt-3 font-mono text-sm text-ink-3">
          {rows.length} · {edited} edited
        </p>
      </section>

      <section className="py-10">
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          {t("admin.copy")}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-ink-2">{t("admin.copyLede")}</p>

        {sections.map((section) => (
          <div key={section} className="mt-8">
            <h3 className="font-mono text-[11px] uppercase tracking-wider text-ink-3">
              {section} · {rows.filter((r) => r.section === section).length}
            </h3>
            <div className="mt-2 divide-y divide-line/60">
              {rows.filter((r) => r.section === section).map((r) => (
                <CopyEditor
                  key={r.key} row={r}
                  labels={{
                    en: t("admin.english"), es: t("admin.spanish"),
                    save: t("admin.save"), saved: t("admin.saved"),
                    revert: t("admin.revertToCode")
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
