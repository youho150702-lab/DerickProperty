import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allListings, toSummary } from "@/data";
import { CATEGORIES, CATEGORY_LIST, typeFromSlug } from "@/lib/categories";
import { SITE_URL } from "@/lib/constants";
import { ListingExplorer } from "@/components/ListingExplorer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const dynamicParams = false;

type Params = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return CATEGORY_LIST.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { category } = await params;
  const type = typeFromSlug(category);
  if (!type) return {};
  const c = CATEGORIES[type];
  const url = `${SITE_URL}/${c.slug}`;
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: { canonical: url },
    openGraph: { type: "website", url, title: c.metaTitle, description: c.metaDescription, locale: "en_MY" },
  };
}

export default async function CategoryPage({ params }: Params) {
  const { category } = await params;
  const type = typeFromSlug(category);
  if (!type) notFound();
  const c = CATEGORIES[type];
  const summaries = allListings().filter((l) => l.type === type).map(toSummary);

  return (
    <main>
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight md:text-5xl">{c.h1}</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">{c.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        {summaries.length ? (
          <ListingExplorer listings={summaries} lockedType={type} />
        ) : (
          <div className="rounded-2xl bg-slate-50 p-8">
            <p className="text-slate-700">{c.emptyText}</p>
            <div className="mt-5">
              <WhatsAppButton message={`Hi, I'm looking for ${c.singular.toLowerCase()} options. Could you help me find something suitable?`}>
                Tell us your requirements
              </WhatsAppButton>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
