import type { NewProjectListing } from "./types";

/**
 * NEW PROJECTS
 * To add one: copy the whole object below, paste it after the last one, change the values.
 * `slug` must be unique. Set `published: false` to keep it hidden on the live site.
 */
export const newProjects: NewProjectListing[] = [
  {
    type: "new-project",
    slug: "trybe-residences-sj7-subang-jaya",
    published: true,
    featured: true,
    updatedAt: "2026-11-23",
    title: "Trybe Residences @ SJ7, Subang Jaya",
    shortTitle: "Trybe Residences @ SJ7",
    tagline: "Freehold TOD Serviced Apartment by Sime Darby Property in Subang Jaya",
    description:
      "Freehold serviced apartment by Sime Darby Property at SJ7, USJ 7, Subang Jaya. 730–920 sq.ft., 2–3 bedrooms, 650m walk to USJ 7 LRT & BRT interchange.",
    status: "available",
    area: "Subang Jaya",
    city: "Subang Jaya",
    state: "Selangor",
    address: "SJ7 Township, Persiaran Subang, USJ 7, Subang Jaya, Selangor",
    propertyType: "Serviced Apartment",
    tenure: "Freehold",
    price: 608800,
    tags: ["Freehold", "TOD / Walking to LRT & BRT"],
    images: [
      "/Public/Image/Trybe-Residence-sj7-subang-jaya-entrance.jpg"],

    developer: "Sime Darby Property (SJ7) Sdn Bhd",
    architect: "UIG Architects Sdn Bhd",
    landTitle: "Commercial Title",
    landSize: "3.378 Acres",
    towers:
      "2 Towers, 998 Units (Tower A: 525 units up to Level 39; Tower B: 473 units up to Level 40)",
    density: "11–16 units per floor",
    lifts: "3+1 lifts per floor",
    completion: "March 2031",
    maintenanceFee: "RM0.42 psf (including Sinking Fund)",
    greenCert: "GreenRE Silver Certification",
    bookingFee: "RM3,000 (fully refundable with bank loan rejection letter)",

    units: [
      { id: "type-a", name: "Type A", sizeSqft: 730, bedrooms: 2, bathrooms: 2, carparks: "1–2 Carparks", priceFrom: 608800 },
      { id: "type-b", name: "Type B", sizeSqft: 920, bedrooms: 3, bathrooms: 2, carparks: "2 Carparks", priceFrom: 800800 },
    ],

    usps: [
      { title: "Master developer of Subang Jaya", description: "Built by Sime Darby Property, the township developer behind much of Subang Jaya." },
      { title: "Top masterplan district", description: "Part of the SJ7 Township masterplan, with future Highline connectivity." },
      { title: "650m walk to LRT & BRT", description: "Walkway link to USJ 7 Station, the LRT Kelana Jaya Line and BRT Sunway Line interchange." },
      { title: "Freehold, Subang Jaya address", description: "Freehold serviced apartment with a prestigious Subang Jaya postcode." },
      { title: "Flexi layouts", description: "Hackable walls let you reshape the space to suit your household." },
      { title: "Strong rental demand", description: "Nearby colleges, medical centres and commercial hubs support tenant demand." },
      { title: "GreenRE Silver certified", description: "A sustainable development designed with energy and resource efficiency in mind." },
      { title: "Speed-ramp car park", description: "Speed-ramp parking on Level 1–6 for fast, easy access to your car." },
    ],

    connectivity: [
      { distance: "200m", mode: "Walking", place: "SJ7 Upcoming Collaboration Hub" },
      { distance: "500m", mode: "Walking", place: "USJ Taipan LRT Station" },
      { distance: "650m", mode: "Walking", place: "USJ 7 Station (LRT Kelana Jaya Line & BRT Sunway Line Interchange)", highlight: true },
      { distance: "650m", mode: "Walking", place: "LRT Feeder Bus & MyRapid Smart Selangor Bus Services" },
      { distance: "800m", mode: "Walking", place: "Cilantro Culinary Academy" },
      { distance: "1.1km", mode: "Driving", place: "QHC / OSC Orthopaedic Specialist Centre" },
      { distance: "2.0km", mode: "Driving", place: "International Medical College (IMC)" },
      { distance: "3.6km", mode: "Driving", place: "Subang Jaya Medical Centre (SJMC)" },
    ],

    rebates: [
      "5% Standard Rebate",
      "2% SPA Signing Rebate (sign within 21 days)",
      "2% Easy Entry Rebate",
      "1% Early Bird Rebate",
    ],
    legalPerks: [
      "Developer-borne legal fees & disbursement on SPA",
      "Developer-borne legal fees on loan agreement",
      "Free 1-year maintenance fees",
    ],
    bumiNote: "Additional 5% Bumi discount available.",
    furnishingOptions: [
      {
        id: "fully-furnished",
        title: "Option 1: Fully Furnished Package",
        badge: "Move-in / rental ready",
        summary: "Get the keys and move in, or list it for rent straight away.",
        items: [
          "Living & dining furniture set",
          "Queen bed & wardrobe in every bedroom",
          "Curtains, lighting and fans",
          "Fridge and washer dryer",
          "Complimentary kitchen cabinet with hood & hob",
          "Air-conditioners in living room & all bedrooms",
          "Water heaters",
          "Digital door lockset",
        ],
      },
      {
        id: "partly-furnished",
        title: "Option 2: Partly Furnished + Extra Cash Rebate",
        badge: "Furnish it your way",
        summary: "Take the essentials and an extra cash rebate to furnish the unit yourself.",
        items: ["Kitchen cabinet with hood & hob", "Air-conditioners", "Water heaters", "Digital door lockset"],
        extraRebate: { "type-a": 35000, "type-b": 45000 },
      },
    ],
    panelBanks: ["Maybank", "CIMB", "OCBC", "Bank Islam", "AmBank", "MBSB", "RHB", "Alliance Bank", "Public Bank"],

    faqs: [
      { question: "What is the starting price of Trybe Residences @ SJ7?", answer: "Type A (730 sq.ft., 2 bedrooms) starts from RM608,800 and Type B (920 sq.ft., 3 bedrooms) starts from RM800,800 (starting SPA prices). Final nett price depends on the unit, floor and the rebate package you choose. WhatsApp for the latest price list." },
      { question: "How much is the booking fee and down payment?", answer: "The booking fee is RM3,000 and is fully refundable with a bank loan rejection letter. The balance of the down payment and loan margin depend on your bank approval and the payment schedule in the SPA. Message us for a personalised payment breakdown." },
      { question: "Is Trybe Residences freehold? What is the land title?", answer: "Yes. It is a Freehold development on Commercial Title, so ownership has no expiry date." },
      { question: "When is the expected completion date?", answer: "The expected completion is March 2031. Please refer to the SPA for the official delivery of vacant possession timeline." },
      { question: "How far is it from the LRT and BRT?", answer: "The project has a walkway link to USJ 7 Station, the LRT Kelana Jaya Line and BRT Sunway Line interchange, about 650m on foot. USJ Taipan LRT Station is about 500m away on foot." },
      { question: "What furnishing packages are available?", answer: "Option 1 is a Fully Furnished package (furniture, appliances, air-conditioners, kitchen cabinet and digital lockset). Option 2 is Partly Furnished with an extra cash rebate: RM35,000 for Type A and RM45,000 for Type B." },
      { question: "What rebates and legal fee perks are offered?", answer: "Rebates include 5% Standard, 2% SPA Signing (within 21 days), 2% Easy Entry and 1% Early Bird, with an additional 5% Bumi discount available. The developer also bears the SPA and loan legal fees and disbursement, and provides 1 year of free maintenance fees. Packages are for a limited time." },
      { question: "What is the monthly maintenance fee?", answer: "The maintenance fee is RM0.42 per sq.ft., including sinking fund. The first year is free under the current package." },
      { question: "Is Trybe Residences good for rental investment?", answer: "The location is close to colleges, medical centres and commercial hubs, and within walking distance of the LRT and BRT interchange, which supports tenant demand. Actual rental returns vary, so please do your own due diligence." },
      { question: "Which banks offer home loans for this project?", answer: "Panel banks: Maybank, CIMB, OCBC, Bank Islam, AmBank, MBSB, RHB, Alliance Bank and Public Bank." },
    ],

    seoKeywords: [
      "Trybe Residences",
      "Trybe Residences SJ7",
      "SJ7 Subang Jaya",
      "USJ 7 serviced apartment",
      "Sime Darby Property Subang Jaya",
      "freehold apartment Subang Jaya",
      "USJ 7 LRT BRT",
      "Trybe Residences price",
      "Trybe Residences floor plan",
      "Trybe Residences e-brochure",
      "new launch Subang Jaya",
    ],
  },
];
