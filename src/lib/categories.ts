import type { ListingType } from "@/data/types";

export interface PriceBand {
  id: string;
  label: string;
  min: number;
  max: number;
}

export interface Category {
  type: ListingType;
  slug: string; // URL segment
  label: string; // plural, for navigation
  singular: string;
  h1: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  emptyText: string;
  priceBands: PriceBand[];
}

const ANY: PriceBand = { id: "all", label: "Any price", min: 0, max: Infinity };

export const CATEGORIES: Record<ListingType, Category> = {
  "new-project": {
    type: "new-project",
    slug: "new-projects",
    label: "New Projects",
    singular: "New Project",
    h1: "New project launches",
    intro:
      "Developer launches with E-Brochures, floor plans, rebates and booking packages. WhatsApp for the latest price list.",
    metaTitle: "New Property Launches in Subang Jaya & Klang Valley",
    metaDescription:
      "Browse new freehold and leasehold property launches in Subang Jaya and the Klang Valley. Get E-Brochures, floor plans, price lists and the latest rebates on WhatsApp.",
    emptyText: "No new project matches these filters yet.",
    priceBands: [
      ANY,
      { id: "u700", label: "Below RM700k", min: 0, max: 700_000 },
      { id: "700-1m", label: "RM700k – RM1M", min: 700_000, max: 1_000_000 },
      { id: "1-1.5m", label: "RM1M – RM1.5M", min: 1_000_000, max: 1_500_000 },
      { id: "o1.5m", label: "Above RM1.5M", min: 1_500_000, max: Infinity },
    ],
  },
  subsale: {
    type: "subsale",
    slug: "subsale",
    label: "Subsale",
    singular: "Subsale",
    h1: "Subsale properties",
    intro:
      "Ready-to-move-in homes from existing owners. Message us to arrange a viewing or to get the best price.",
    metaTitle: "Subsale Properties for Sale in Subang Jaya & Klang Valley",
    metaDescription:
      "Browse subsale condos, apartments and houses for sale in Subang Jaya and the Klang Valley. Photos, size, price and viewing on WhatsApp.",
    emptyText: "No subsale listing matches these filters yet.",
    priceBands: [
      ANY,
      { id: "u500", label: "Below RM500k", min: 0, max: 500_000 },
      { id: "500-800", label: "RM500k – RM800k", min: 500_000, max: 800_000 },
      { id: "800-1.2m", label: "RM800k – RM1.2M", min: 800_000, max: 1_200_000 },
      { id: "o1.2m", label: "Above RM1.2M", min: 1_200_000, max: Infinity },
    ],
  },
  rent: {
    type: "rent",
    slug: "rent",
    label: "Rent",
    singular: "For Rent",
    h1: "Properties for rent",
    intro:
      "Homes available for rent with clear monthly rent, deposit and tenure. Message us to book a viewing.",
    metaTitle: "Property for Rent in Subang Jaya & Klang Valley",
    metaDescription:
      "Find condos and apartments for rent in Subang Jaya and the Klang Valley. See monthly rent, deposit, furnishing and book a viewing on WhatsApp.",
    emptyText: "No rental listing matches these filters yet.",
    priceBands: [
      ANY,
      { id: "u1500", label: "Below RM1,500", min: 0, max: 1_500 },
      { id: "1500-2500", label: "RM1,500 – RM2,500", min: 1_500, max: 2_500 },
      { id: "2500-4000", label: "RM2,500 – RM4,000", min: 2_500, max: 4_000 },
      { id: "o4000", label: "Above RM4,000", min: 4_000, max: Infinity },
    ],
  },
};

export const CATEGORY_LIST = Object.values(CATEGORIES);

export function typeFromSlug(slug: string): ListingType | undefined {
  return CATEGORY_LIST.find((c) => c.slug === slug)?.type;
}
