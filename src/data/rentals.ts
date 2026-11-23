import type { RentalListing } from "./types";

/**
 * RENTAL LISTINGS
 * To add one: copy the SAMPLE object, paste it after the last one, and replace every value.
 * When a unit is rented out, set `status: "rented"` (stays online as a record) or `published: false`.
 * The sample below is `published: false`, so it only appears in `npm run dev`, never on the live site.
 */
export const rentals: RentalListing[] = [
  {
    type: "rent",
    slug: "sample-rent-2r2b-subang-jaya",
    published: false, // <- change to true when real
    ref: "RT-001",
    updatedAt: "2026-11-23",
    title: "SAMPLE: 2-Bedroom Apartment for Rent, Subang Jaya (replace me)",
    shortTitle: "2-Bedroom Apartment at Subang Jaya",
    tagline: "Sample rental listing. Replace with your real unit details.",
    description:
      "Sample rental in Subang Jaya: 2 bedrooms, 2 bathrooms, fully furnished, RM2,300 per month. Replace this text with a real description of under 160 characters.",
    status: "available",
    area: "Subang Jaya",
    city: "Subang Jaya",
    state: "Selangor",
    address: "Replace with condo name and road, Subang Jaya, Selangor",
    propertyType: "Serviced Apartment",
    price: 2300,
    tags: ["Fully Furnished", "Near LRT"],
    bedrooms: 2,
    bathrooms: 2,
    carparks: 1,
    sizeSqft: 850,
    furnishing: "Fully Furnished",
    deposit: "2 + 1 months",
    minTenure: "12 months",
    availableFrom: "Immediately",
    highlights: ["Move-in ready", "Walking distance to LRT", "Quiet and well managed"],
    facilities: ["Swimming pool", "Gymnasium", "24-hour security", "Covered parking"],
    rules: ["No smoking indoors", "Pets by owner's approval"],
    inclusions: ["Air-conditioners", "Water heater", "Washing machine", "Fridge"],
    connectivity: [
      { distance: "300m", mode: "Walking", place: "Replace with nearest LRT / shop / school" },
    ],
    faqs: [
      { question: "How much is the deposit?", answer: "2 months security deposit plus 1 month utility deposit. Confirm details with us on WhatsApp." },
      { question: "What is the minimum tenancy?", answer: "12 months." },
    ],
    seoKeywords: ["apartment for rent Subang Jaya", "condo for rent Subang Jaya", "2 bedroom for rent Subang Jaya"],
  },
];
