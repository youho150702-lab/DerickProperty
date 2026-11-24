import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { CATEGORY_LIST } from "@/lib/categories";
import { AGENT, SITE_NAME, SITE_URL } from "@/lib/constants";
import { waLink } from "@/lib/whatsapp";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display" });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `New Projects, Subsale & Rental Property in Subang Jaya | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Browse new project launches, subsale and rental properties in Subang Jaya and the Klang Valley. Get E-Brochures, prices and viewings via WhatsApp.",
  openGraph: { siteName: SITE_NAME, locale: "en_MY", type: "website" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-MY" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-4">
            <Link href="/" className="font-display text-lg font-semibold text-slate-900">
              {SITE_NAME}
            </Link>
            <nav aria-label="Main" className="order-3 flex w-full gap-5 text-sm font-semibold text-slate-700 sm:order-none sm:w-auto">
              {CATEGORY_LIST.map((c) => (
                <Link key={c.slug} href={`/${c.slug}`} className="hover:text-amber-700">
                  {c.label}
                </Link>
              ))}
            </nav>
            <a
              href={waLink("Hi, I'd like to know more about your latest property listings.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              WhatsApp Us
            </a>
          </div>
        </header>
        {children}
        <footer className="border-t border-slate-200 bg-slate-50 pb-24 lg:pb-0">
          <div className="mx-auto max-w-6xl space-y-3 px-5 py-8 text-sm text-slate-500">
            <p className="font-semibold text-slate-700">
              {AGENT.name} ({AGENT.registration}) 
            </p>
            <p>
              This website is operated by an independent real estate negotiator and does not represent the
              developer. Prices, rebates, specifications and availability are subject to change without notice and
              to developer/owner approval. Images and figures are for illustration only. Please refer to the Sale
              and Purchase Agreement or Tenancy Agreement for accurate terms. E&amp;OE.
            </p>
            <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
