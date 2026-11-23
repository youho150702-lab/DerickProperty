export type ListingType = "new-project" | "subsale" | "rent";
export type ListingStatus = "available" | "under-offer" | "coming-soon" | "sold" | "rented";
export type Furnishing = "Fully Furnished" | "Partly Furnished" | "Unfurnished";

export interface Connectivity {
  distance: string;
  mode: "Walking" | "Driving";
  place: string;
  highlight?: boolean;
}

export interface Faq {
  question: string;
  answer: string;
}

/** Fields shared by every listing type. */
export interface BaseListing {
  slug: string; // unique within its type, used in the URL
  published: boolean; // false = visible in `npm run dev` only, hidden in production
  ref?: string; // your own reference code, e.g. "RT-012"
  title: string;
  shortTitle: string; // used inside WhatsApp messages
  tagline: string;
  description: string; // also used as the SEO meta description (keep under ~160 chars)
  status: ListingStatus;
  featured?: boolean;
  updatedAt: string; // YYYY-MM-DD, used for sorting and sitemap
  area: string; // used by the area filter, e.g. "Subang Jaya"
  city: string;
  state: string;
  address: string;
  propertyType: string;
  tenure?: "Freehold" | "Leasehold";
  price: number; // sale price (RM) or monthly rent (RM) for rentals; "from" price for new projects
  tags: string[]; // short chips shown on cards and hero
  images?: string[]; // paths inside /public (e.g. "/images/abc/1.jpg") or https URLs
  heroImage?: string;
  connectivity?: Connectivity[];
  faqs?: Faq[];
  seoKeywords: string[];
  ogImage?: string;
}

export interface UnitType {
  id: string;
  name: string;
  sizeSqft: number;
  bedrooms: number;
  bathrooms: number;
  carparks: string;
  priceFrom: number;
}

export interface Usp {
  title: string;
  description: string;
}

export interface FurnishingOption {
  id: string;
  title: string;
  badge?: string;
  summary: string;
  items: string[];
  extraRebate?: Record<string, number>; // unit id -> RM
}

export interface NewProjectListing extends BaseListing {
  type: "new-project";
  developer: string;
  architect: string;
  landTitle: string;
  landSize: string;
  towers: string;
  density: string;
  lifts: string;
  completion: string;
  maintenanceFee: string;
  greenCert?: string;
  bookingFee: string;
  units: UnitType[];
  usps: Usp[];
  rebates: string[];
  legalPerks: string[];
  bumiNote?: string;
  furnishingOptions: FurnishingOption[];
  panelBanks: string[];
}

export interface SubsaleListing extends BaseListing {
  type: "subsale";
  bedrooms: number;
  bathrooms: number;
  carparks: number;
  builtUpSqft: number;
  furnishing: Furnishing;
  occupancy: "Vacant" | "Tenanted";
  floorLevel?: string;
  facing?: string;
  view?: string;
  yearBuilt?: number;
  titleType: string; // e.g. "Strata title"
  maintenanceFee?: string;
  highlights: string[];
  features: string[];
}

export interface RentalListing extends BaseListing {
  type: "rent";
  bedrooms: number;
  bathrooms: number;
  carparks: number;
  sizeSqft: number;
  furnishing: Furnishing;
  deposit: string; // e.g. "2 + 1 months"
  minTenure: string; // e.g. "12 months"
  availableFrom: string; // e.g. "Immediately" or "1 Jan 2027"
  highlights: string[];
  facilities: string[];
  rules: string[];
  inclusions?: string[];
}

export type Listing = NewProjectListing | SubsaleListing | RentalListing;

/** Lightweight shape sent to client components (filters, cards). */
export interface ListingSummary {
  type: ListingType;
  slug: string;
  href: string;
  title: string;
  tagline: string;
  area: string;
  state: string;
  price: number;
  priceSuffix: string;
  statusLabel: string;
  specs: string[];
  tags: string[];
  bedroomOptions: number[];
  image?: string;
  draft: boolean;
  featured: boolean;
  updatedAt: string;
  searchText: string;
}
