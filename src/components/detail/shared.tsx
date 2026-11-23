import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";
import type { Connectivity, Listing } from "@/data/types";
import { DesktopCtaCard, MobileStickyBar } from "../StickyCtas";
import { WhatsAppButton } from "../WhatsAppButton";

export function Section({ id, title, intro, children }: { id: string; title: string; intro?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-6">
      <h2 className="font-display text-2xl font-semibold text-slate-900 md:text-3xl">{title}</h2>
      <div className="mt-2 h-0.5 w-12 bg-amber-600" />
      {intro && <p className="mt-4 max-w-2xl">{intro}</p>}
      <div className="mt-8">{children}</div>
    </section>
  );
}

export function FactsTable({ facts }: { facts: [string, string][] }) {
  return (
    <dl className="divide-y divide-slate-200 rounded-2xl border border-slate-200">
      {facts.map(([k, v]) => (
        <div key={k} className="grid gap-1 p-4 sm:grid-cols-[200px_1fr] sm:gap-6">
          <dt className="text-sm text-slate-500">{k}</dt>
          <dd className="font-medium text-slate-900">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
      {items.map((i) => (
        <li key={i} className="border-l-2 border-amber-600 pl-4 text-slate-800">
          {i}
        </li>
      ))}
    </ul>
  );
}

export function ConnectivityList({ items }: { items: Connectivity[] }) {
  return (
    <ul className="divide-y divide-slate-200 rounded-2xl border border-slate-200">
      {items.map((c) => (
        <li key={c.place} className={`flex items-center gap-4 p-4 ${c.highlight ? "bg-amber-50" : ""}`}>
          <span className="w-16 shrink-0 font-display text-xl font-semibold text-slate-900">{c.distance}</span>
          <span className="w-20 shrink-0 text-sm text-slate-500">{c.mode}</span>
          <span className="text-sm text-slate-800">{c.place}</span>
        </li>
      ))}
    </ul>
  );
}

interface ShellProps {
  listing: Listing;
  heroTags: string[];
  priceText: string; // e.g. "From RM608,800" or "RM2,300 / month"
  message: string;
  cta: { hero: string; card: string; mobile: string; final: string };
  secondary: { href: string; label: string };
  cardNote: string;
  finalTitle: string;
  finalText: string;
  children: React.ReactNode;
}

/** Hero + two-column layout + sticky CTAs + final CTA, shared by every listing type. */
export function DetailShell({ listing, heroTags, priceText, message, cta, secondary, cardNote, finalTitle, finalText, children }: ShellProps) {
  const cat = CATEGORIES[listing.type];
  return (
    <main>
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "repeating-linear-gradient(90deg, rgba(217,119,6,.6) 0 1px, transparent 1px 36px)" }}
        />
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">
          <Link href={`/${cat.slug}`} className="text-sm text-slate-300 hover:text-white">
            All {cat.label.toLowerCase()}
          </Link>
          <div className="mt-6 flex flex-wrap gap-2">
            {heroTags.map((t) => (
              <span key={t} className="rounded-full border border-amber-500/60 px-4 py-1.5 text-sm font-semibold text-amber-300">
                {t}
              </span>
            ))}
            <span className="rounded-full bg-amber-600 px-4 py-1.5 text-sm font-semibold text-white">{priceText}</span>
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">{listing.title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">{listing.tagline}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <WhatsAppButton message={message} size="lg">
              {cta.hero}
            </WhatsAppButton>
            <a href={secondary.href} className="inline-flex items-center rounded-full border border-white/40 px-7 py-4 font-semibold hover:bg-white/10">
              {secondary.label}
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 pb-28 lg:grid-cols-[minmax(0,1fr)_300px] lg:pb-16">
        <div className="space-y-20">{children}</div>
        <aside className="hidden lg:block">
          <DesktopCtaCard title={listing.shortTitle} priceText={priceText} note={cardNote} label={cta.card} message={message} />
        </aside>
      </div>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">{finalTitle}</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">{finalText}</p>
          <div className="mt-8">
            <WhatsAppButton message={message} size="lg">
              {cta.final}
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <MobileStickyBar priceText={priceText} label={cta.mobile} message={message} />
    </main>
  );
}
