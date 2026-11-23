import Link from "next/link";
import { allListings, toSummary } from "@/data";
import { CATEGORY_LIST } from "@/lib/categories";
import { ListingExplorer } from "@/components/ListingExplorer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function HomePage() {
  const listings = allListings();
  const summaries = listings.map(toSummary);

  return (
    <main>
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight md:text-6xl">
            New projects, subsale and rental homes in Subang Jaya and the Klang Valley
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-300">
            Browse listings, then WhatsApp for E-Brochures, prices and viewings.
          </p>
          <div className="mt-8">
            <WhatsAppButton size="lg" message="Hi, I saw your website. I'm looking for a property. Could you recommend suitable options?">
              Tell us what you need
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-14">
        <div className="grid gap-4 sm:grid-cols-3">
          {CATEGORY_LIST.map((c) => {
            const count = listings.filter((l) => l.type === c.type).length;
            return (
              <Link key={c.slug} href={`/${c.slug}`} className="rounded-2xl border border-slate-200 p-6 transition-shadow hover:shadow-lg">
                <h2 className="font-display text-2xl font-semibold text-slate-900">{c.label}</h2>
                <p className="mt-2 text-sm">{c.intro}</p>
                <p className="mt-4 text-sm font-semibold text-amber-700">
                  {count} listing{count === 1 ? "" : "s"}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <section id="listings" className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="font-display text-3xl font-semibold text-slate-900">All listings</h2>
        <div className="mt-6">
          <ListingExplorer listings={summaries} />
        </div>
      </section>
    </main>
  );
}
