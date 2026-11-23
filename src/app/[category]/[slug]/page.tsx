import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allListings, getListing } from "@/data";
import { CATEGORIES, typeFromSlug } from "@/lib/categories";
import { buildMetadata, faqSchema, listingSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { NewProjectDetail } from "@/components/detail/NewProjectDetail";
import { RentalDetail } from "@/components/detail/RentalDetail";
import { SubsaleDetail } from "@/components/detail/SubsaleDetail";

export const dynamicParams = false;

type Params = { params: Promise<{ category: string; slug: string }> };

export function generateStaticParams() {
  return allListings().map((l) => ({ category: CATEGORIES[l.type].slug, slug: l.slug }));
}

async function load(params: Params["params"]) {
  const { category, slug } = await params;
  const type = typeFromSlug(category);
  return type ? getListing(type, slug) : undefined;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const l = await load(params);
  return l ? buildMetadata(l) : {};
}

export default async function ListingPage({ params }: Params) {
  const l = await load(params);
  if (!l) notFound();

  return (
    <>
      <JsonLd data={listingSchema(l)} />
      {l.faqs?.length ? <JsonLd data={faqSchema(l.faqs)} /> : null}
      {l.type === "new-project" && <NewProjectDetail p={l} />}
      {l.type === "subsale" && <SubsaleDetail p={l} />}
      {l.type === "rent" && <RentalDetail p={l} />}
    </>
  );
}
