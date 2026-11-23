import type { SubsaleListing } from "./types";

/**
 * SUBSALE LISTINGS
 * To add one: copy the SAMPLE object, paste it after the last one, and replace every value.
 * Put photos in /public/images/<slug>/ and list them in `images` (e.g. "/images/<slug>/1.jpg").
 * The sample below is `published: false`, so it only appears in `npm run dev`, never on the live site.
 */
export const subsales: SubsaleListing[] = [
  {
    type: "subsale",
    slug: "sample-subsale-3r2b-subang-jaya",
    published: false, // <- change to true when real
    ref: "SS-001",
    updatedAt: "2026-11-23",
    title: "SAMPLE: 3-Bedroom Condo, Subang Jaya (replace me)",
    shortTitle: "3-Bedroom Condo at Subang Jaya",
    tagline: "Sample subsale listing. Replace with your real unit details.",
    description:
      "Sample subsale listing in Subang Jaya: 3 bedrooms, 2 bathrooms, 1,100 sq.ft. Replace this text with a real description of under 160 characters.",
    status: "available",
    area: "Subang Jaya",
    city: "Subang Jaya",
    state: "Selangor",
    address: "Replace with condo name and road, Subang Jaya, Selangor",
    propertyType: "Condominium",
    tenure: "Freehold",
    price: 650000,
    tags: ["Freehold", "Walk to LRT"],
    bedrooms: 3,
    bathrooms: 2,
    carparks: 2,
    builtUpSqft: 1100,
    furnishing: "Partly Furnished",
    occupancy: "Vacant",
    floorLevel: "Mid floor",
    facing: "North-East",
    view: "Pool view",
    yearBuilt: 2015,
    titleType: "Strata title",
    maintenanceFee: "RM0.35 psf",
    highlights: ["Bright and airy layout", "Well-kept unit", "Walking distance to LRT"],
    features: ["Swimming pool", "Gymnasium", "24-hour security", "Covered playground"],
    connectivity: [
      { distance: "400m", mode: "Walking", place: "Replace with nearest LRT / shop / school" },
      { distance: "2km", mode: "Driving", place: "Replace with nearest mall or hospital" },
    ],
    faqs: [
      { question: "Is the price negotiable?", answer: "Message us on WhatsApp with your offer and we will check with the owner." },
      { question: "Can I arrange a viewing?", answer: "Yes. WhatsApp us your preferred date and time and we will arrange it." },
    ],
    seoKeywords: ["condo for sale Subang Jaya", "subsale Subang Jaya", "3 bedroom condo Subang Jaya"],
  },
];
