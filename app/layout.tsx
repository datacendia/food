import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces, Karla, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// Self-hosted at build time: no external request, no layout shift.
const display = Fraunces({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-display" });
const body = Karla({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-body" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: {
    default: "Aye Si Cena",
    template: "%s · Aye Si Cena"
  },
  description:
    "Scottish-Peruvian catering in Lima. Glasgow technique, Lima pantry — canapés, buffets and plated dinners."
};

const NAV = [
  { href: "/", label: "Home" },
  { href: "/find", label: "Find dishes" },
  { href: "/menu", label: "The matrix" },
  { href: "/seasonal", label: "Season" },
  { href: "/packages", label: "Packages" },
  { href: "/builder", label: "Build a menu" }
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-sans">
        <header className="border-b border-line">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4">
            <Link href="/" className="font-display text-2xl font-semibold tracking-tight">
              Aye <span className="text-aji">Si</span> Cena
            </Link>
            <nav className="flex flex-wrap gap-5 text-sm">
              {NAV.map((n) => (
                <Link key={n.href} href={n.href} className="text-ink-2 hover:text-ink">
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-5">{children}</main>

        <footer className="mt-20 border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-ink-3">
            <p className="mb-2 max-w-2xl">
              All prices in soles, exclusive of IGV. Costs are planning estimates modelled to a
              25–30% food cost, not verified supplier quotes.
            </p>
            <p>Aye Si Cena · Lima · Scottish-Peruvian catering</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
