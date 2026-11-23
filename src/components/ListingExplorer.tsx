"use client";

import { useMemo, useState } from "react";
import { CATEGORIES, CATEGORY_LIST } from "@/lib/categories";
import type { ListingSummary, ListingType } from "@/data/types";
import { ListingCard } from "./ListingCard";

const BEDS = [
  { id: "any", label: "Any bedrooms" },
  { id: "1", label: "1 bedroom" },
  { id: "2", label: "2 bedrooms" },
  { id: "3", label: "3 bedrooms" },
  { id: "4", label: "4+ bedrooms" },
];

type TypeFilter = ListingType | "all";

export function ListingExplorer({ listings, lockedType }: { listings: ListingSummary[]; lockedType?: ListingType }) {
  const [type, setType] = useState<TypeFilter>(lockedType ?? "all");
  const [q, setQ] = useState("");
  const [area, setArea] = useState("all");
  const [band, setBand] = useState("all");
  const [beds, setBeds] = useState("any");
  const [sort, setSort] = useState("featured");

  const scoped = useMemo(() => listings.filter((l) => type === "all" || l.type === type), [listings, type]);
  const areas = useMemo(() => Array.from(new Set(scoped.map((l) => l.area))).sort(), [scoped]);
  const bands = type === "all" ? null : CATEGORIES[type].priceBands;

  const changeType = (t: TypeFilter) => {
    setType(t);
    setArea("all");
    setBand("all");
    if (sort.startsWith("price")) setSort("featured");
  };

  const filtered = useMemo(() => {
    const b = bands?.find((x) => x.id === band);
    const needle = q.trim().toLowerCase();
    const out = scoped.filter((l) => {
      if (area !== "all" && l.area !== area) return false;
      if (b && !(l.price >= b.min && l.price < b.max)) return false;
      if (beds !== "any") {
        const n = Number(beds);
        if (!l.bedroomOptions.some((o) => (n === 4 ? o >= 4 : o === n))) return false;
      }
      if (needle && !l.searchText.includes(needle)) return false;
      return true;
    });
    return out.sort((a, c) => {
      if (sort === "price-asc") return a.price - c.price;
      if (sort === "price-desc") return c.price - a.price;
      if (sort === "newest") return c.updatedAt.localeCompare(a.updatedAt);
      return Number(c.featured) - Number(a.featured) || c.updatedAt.localeCompare(a.updatedAt);
    });
  }, [scoped, bands, band, area, beds, q, sort]);

  const field = "rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900";
  const tabs: { id: TypeFilter; label: string }[] = [
    { id: "all", label: "All" },
    ...CATEGORY_LIST.map((c) => ({ id: c.type as TypeFilter, label: c.label })),
  ];

  return (
    <div>
      {!lockedType && (
        <div className="mb-5 flex flex-wrap gap-2" role="group" aria-label="Listing type">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              aria-pressed={type === t.id}
              onClick={() => changeType(t.id)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                type === t.id ? "bg-slate-900 text-white" : "border border-slate-300 text-slate-700 hover:bg-slate-50"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <label className="sr-only" htmlFor="q">Search</label>
        <input id="q" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search name or area" className={`${field} w-full sm:w-56`} />
        <label className="sr-only" htmlFor="area">Area</label>
        <select id="area" value={area} onChange={(e) => setArea(e.target.value)} className={field}>
          <option value="all">All areas</option>
          {areas.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
        {bands && (
          <>
            <label className="sr-only" htmlFor="price">Price</label>
            <select id="price" value={band} onChange={(e) => setBand(e.target.value)} className={field}>
              {bands.map((b) => (
                <option key={b.id} value={b.id}>{b.label}</option>
              ))}
            </select>
          </>
        )}
        <label className="sr-only" htmlFor="beds">Bedrooms</label>
        <select id="beds" value={beds} onChange={(e) => setBeds(e.target.value)} className={field}>
          {BEDS.map((b) => (
            <option key={b.id} value={b.id}>{b.label}</option>
          ))}
        </select>
        <label className="sr-only" htmlFor="sort">Sort</label>
        <select id="sort" value={sort} onChange={(e) => setSort(e.target.value)} className={field}>
          <option value="featured">Featured</option>
          <option value="newest">Newest</option>
          {bands && <option value="price-asc">Price: low to high</option>}
          {bands && <option value="price-desc">Price: high to low</option>}
        </select>
        <p className="text-sm text-slate-500" aria-live="polite">
          {filtered.length} listing{filtered.length === 1 ? "" : "s"}
        </p>
      </div>

      {filtered.length ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => (
            <ListingCard key={`${s.type}-${s.slug}`} s={s} />
          ))}
        </div>
      ) : (
        <p className="mt-8 rounded-xl bg-slate-50 p-6 text-slate-600">
          No listing matches these filters. Try another area, price range or type.
        </p>
      )}
    </div>
  );
}
