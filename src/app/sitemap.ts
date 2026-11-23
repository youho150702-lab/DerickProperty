import type { MetadataRoute } from "next";
import { allListings, listingPath } from "@/data";
import { CATEGORY_LIST } from "@/lib/categories";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...CATEGORY_LIST.map((c) => ({
      url: `${SITE_URL}/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...allListings().map((l) => ({
      url: `${SITE_URL}${listingPath(l)}`,
      lastModified: new Date(l.updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}
