import type { Metadata } from "next";
import Link from "next/link";
import { viewer } from "@/lib/session";
import { CAN } from "@/lib/permissions";
import { logout } from "./login/actions";
import type { Role } from "@/db/schema";
import { Fraunces, Karla, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// Self-hosted at build time: no external request, no layout shift.
const display = Fraunces({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-display" });
const body = Karla({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-body" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-mono" });

/**
 * Nothing here is ever prerendered.
 *
 * Every page depends on who is asking, so a build-time snapshot is wrong by
 * definition. Next decides staticness by whether a render touched cookies -
 * which made this depend on whether DATABASE_URL happened to be set during the
 * build, and a page carrying the cost base must not be static by accident in
 * one environment and dynamic in another. Say it out loud instead.
 */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: {
    default: "Aye Si Cena",
    template: "%s · Aye Si Cena"
  },
  description:
    "Scottish-Peruvian catering in Lima. Glasgow technique, Lima pantry — canapés, buffets and plated dinners."
};

/**
 * The nav, by role.
 *
 * `needs` is the same predicate the page itself enforces, so a link can never
 * appear for someone the page would then refuse. This is convenience, not
 * security - hiding a link protects nothing, and every one of these pages
 * checks again on the server.
 */
const NAV: { href: string; label: string; needs?: (r: Role) => boolean }[] = [
  { href: "/", label: "Home" },
  { href: "/moments", label: "The evening" },
  { href: "/find", label: "Find dishes" },
  { href: "/menu", label: "The matrix", needs: CAN.seeMoney },
  { href: "/recipes", label: "Recipes", needs: CAN.seeKitchen },
  { href: "/seasonal", label: "Season", needs: CAN.seeKitchen },
  { href: "/compare", label: "Compare", needs: CAN.seeMoney },
  { href: "/graph", label: "Ingredients", needs: CAN.seeKitchen },
  { href: "/packages", label: "Packages" },
  { href: "/builder", label: "Build a menu", needs: CAN.writeQuotes },
  { href: "/quotes", label: "Quotes", needs: CAN.writeQuotes },
  { href: "/clients", label: "Clients", needs: CAN.manageClients },
  { href: "/bookings", label: "Bookings", needs: CAN.writeBookings },
  { href: "/prices", label: "Prices", needs: CAN.writePrices }
];

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const me = await viewer();
  const links = me ? NAV.filter((n) => !n.needs || n.needs(me.role)) : [];

  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-sans">
        <header className="border-b border-line">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4">
            <Link href="/" className="font-display text-2xl font-semibold tracking-tight">
              Aye <span className="text-aji">Si</span> Cena
            </Link>
            <nav className="flex flex-wrap items-center gap-5 text-sm">
              {links.map((n) => (
                <Link key={n.href} href={n.href} className="text-ink-2 hover:text-ink">
                  {n.label}
                </Link>
              ))}
              {me && (
                <form action={logout} className="flex items-center gap-3">
                  <span
                    className="font-mono text-[11px] uppercase tracking-wider text-ink-3"
                    title={me.email}
                  >
                    {me.role}
                  </span>
                  <button type="submit" className="text-ink-3 hover:text-ink">
                    Sign out
                  </button>
                </form>
              )}
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-5">{children}</main>

        <footer className="mt-20 border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-ink-3">
            {me && CAN.seeMoney(me.role) && (
              <p className="mb-2 max-w-2xl">
                All prices in soles, exclusive of IGV. Costs are planning estimates modelled to a
                25–30% food cost, not verified supplier quotes.
              </p>
            )}
            <p>Aye Si Cena · Lima · Scottish-Peruvian catering</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
