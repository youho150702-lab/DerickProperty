import { CATEGORIES } from "@/lib/categories";
import { fmtNum } from "@/lib/constants";
import { newProjects } from "./new-projects";
import { rentals } from "./rentals";
import { subsales } from "./subsales";
import type { Listing, ListingStatus, ListingSummary, ListingType, UnitType } from "./types";

/** Unpublished listings show in `npm run dev` (with a DRAFT badge) but never in production. */
export const isVisible = (l: Listing) => l.published || process.env.NODE_ENV !== "production";

export function allListings(): Listing[] {
  return [...newProjects, ...subsales, ...rentals].filter(isVisible);
}

export function getListing(type: ListingType, slug: string): Listing | undefined {
  return allListings().find((l) => l.type === type && l.slug === slug);
}

export const listingPath = (l: Listing) => `/${CATEGORIES[l.type].slug}/${l.slug}`;

export function sizeRange(units: UnitType[]): string {
  const s = units.map((u) => u.sizeSqft);
  const a = Math.min(...s);
  const b = Math.max(...s);
  return a === b ? `${fmtNum(a)} sq.ft.` : `${fmtNum(a)} – ${fmtNum(b)} sq.ft.`;
}

export function bedroomRange(units: UnitType[]): string {
  const s = units.map((u) => u.bedrooms);
  const a = Math.min(...s);
  const b = Math.max(...s);
  return a === b ? `${a} Bedrooms` : `${a} to ${b} Bedrooms`;
}

export function bedroomOptions(l: Listing): number[] {
  return l.type === "new-project" ? l.units.map((u) => u.bedrooms) : [l.bedrooms];
}

export function statusLabel(l: Listing): string {
  const map: Record<ListingStatus, string> = {
    available: l.type === "new-project" ? "Now Selling" : l.type === "rent" ? "Available" : "Available",
    "under-offer": "Under Offer",
    "coming-soon": "Coming Soon",
    sold: "Sold",
    rented: "Rented",
  };
  return map[l.status];
}

function specsOf(l: Listing): string[] {
  switch (l.type) {
    case "new-project":
      return [sizeRange(l.units), bedroomRange(l.units), `Completion ${l.completion}`];
    case "subsale":
      return [`${fmtNum(l.builtUpSqft)} sq.ft.`, `${l.bedrooms} Bed · ${l.bathrooms} Bath`, l.furnishing];
    case "rent":
      return [`${fmtNum(l.sizeSqft)} sq.ft.`, `${l.bedrooms} Bed · ${l.bathrooms} Bath`, l.furnishing];
  }
}

export function toSummary(l: Listing): ListingSummary {
  return {
    type: l.type,
    slug: l.slug,
    href: listingPath(l),
    title: l.title,
    tagline: l.tagline,
    area: l.area,
    state: l.state,
    price: l.price,
    priceSuffix: l.type === "rent" ? " / month" : "",
    statusLabel: statusLabel(l),
    specs: specsOf(l),
    tags: l.tags,
    bedroomOptions: bedroomOptions(l),
    image: l.images?.[0],
    draft: !l.published,
    featured: !!l.featured,
    updatedAt: l.updatedAt,
    searchText: `${l.title} ${l.area} ${l.city} ${l.address} ${l.propertyType} ${l.ref ?? ""}`.toLowerCase(),
  };
}
