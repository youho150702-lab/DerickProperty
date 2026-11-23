import type { Metadata } from "next";
import { listingPath } from "@/data";
import type { Faq, Listing } from "@/data/types";
import { SITE_URL, fmtRM } from "./constants";

export function buildTitle(l: Listing): string {
  switch (l.type) {
    case "new-project":
      return `${l.title} | ${l.tenure ?? ""} ${l.propertyType} from ${fmtRM(l.price)} – Price, Floor Plan & E-Brochure`.replace("  ", " ");
    case "subsale":
      return `${l.title} for Sale | ${fmtRM(l.price)}, ${l.bedrooms} Bedrooms, ${l.area}`;
    case "rent":
      return `${l.title} for Rent | ${fmtRM(l.price)}/month, ${l.bedrooms} Bedrooms, ${l.area}`;
  }
}

export function buildKeywords(l: Listing): string[] {
  const base = [...l.seoKeywords, l.area, l.city, l.propertyType];
  if (l.tenure) base.push(l.tenure);
  const extra =
    l.type === "new-project"
      ? ["new launch", "price", "floor plan", "e-brochure", "rebate"]
      : l.type === "subsale"
        ? [`${l.propertyType} for sale ${l.area}`, `subsale ${l.area}`]
        : [`${l.propertyType} for rent ${l.area}`, `rent ${l.area}`];
  return Array.from(new Set([...base, ...extra]));
}

export function buildMetadata(l: Listing): Metadata {
  const title = buildTitle(l);
  const url = `${SITE_URL}${listingPath(l)}`;
  const images = l.ogImage ? [{ url: l.ogImage, width: 1200, height: 630, alt: l.title }] : undefined;
  return {
    title: { absolute: title },
    description: l.description,
    keywords: buildKeywords(l),
    alternates: { canonical: url },
    openGraph: { type: "website", url, title, description: l.description, locale: "en_MY", images },
    twitter: {
      card: l.ogImage ? "summary_large_image" : "summary",
      title,
      description: l.description,
      images: l.ogImage ? [l.ogImage] : undefined,
    },
  };
}

function floorSize(l: Listing): number {
  switch (l.type) {
    case "new-project":
      return l.units[0].sizeSqft;
    case "subsale":
      return l.builtUpSqft;
    case "rent":
      return l.sizeSqft;
  }
}

export function listingSchema(l: Listing) {
  const url = `${SITE_URL}${listingPath(l)}`;
  const open = l.status === "available" || l.status === "coming-soon" || l.status === "under-offer";
  const offer: Record<string, unknown> = {
    "@type": "Offer",
    priceCurrency: "MYR",
    price: l.price,
    url,
    availability: open ? "https://schema.org/InStock" : "https://schema.org/SoldOut",
  };
  if (l.type === "rent") {
    offer.priceSpecification = {
      "@type": "UnitPriceSpecification",
      price: l.price,
      priceCurrency: "MYR",
      unitCode: "MON",
    };
  }
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: l.title,
    description: l.description,
    url,
    image: l.images?.[0] ?? (l.ogImage ? `${SITE_URL}${l.ogImage}` : undefined),
    datePosted: l.updatedAt,
    about: {
      "@type": "Apartment",
      name: l.title,
      floorSize: { "@type": "QuantitativeValue", value: floorSize(l), unitCode: "FTK" },
      address: {
        "@type": "PostalAddress",
        streetAddress: l.address,
        addressLocality: l.city,
        addressRegion: l.state,
        addressCountry: "MY",
      },
    },
    offers: offer,
    provider: l.type === "new-project" ? { "@type": "Organization", name: l.developer } : undefined,
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
