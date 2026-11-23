import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";
import { fmtRM } from "@/lib/constants";
import type { ListingSummary } from "@/data/types";

export function ListingCard({ s }: { s: ListingSummary }) {
  return (
    <Link
      href={s.href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-xl"
    >
      <div className="relative h-44 bg-slate-900">
        {s.image ? (
          <Image src={s.image} alt={s.title} fill sizes="(min-width:1024px) 380px, 100vw" className="object-cover" />
        ) : (
          <div
            aria-hidden
            className="absolute inset-0 opacity-30"
            style={{ backgroundImage: "repeating-linear-gradient(90deg, rgba(217,119,6,.5) 0 1px, transparent 1px 28px)" }}
          />
        )}
        <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 p-4">
          <span className="rounded-full bg-amber-600 px-3 py-1 text-xs font-semibold text-white">
            {CATEGORIES[s.type].singular}
          </span>
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">{s.statusLabel}</span>
          {s.draft && <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">DRAFT</span>}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-semibold text-slate-900 group-hover:text-amber-700">{s.title}</h3>
        <p className="mt-1 text-sm text-slate-500">
          {s.area}, {s.state}
        </p>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed">{s.tagline}</p>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium text-slate-900">
          {s.specs.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
        <div className="mt-auto flex items-end justify-between border-t border-slate-100 pt-4">
          <p className="font-display text-2xl font-semibold text-amber-700">
            {s.type === "new-project" && <span className="mr-1 text-sm font-sans font-normal text-slate-500">From</span>}
            {fmtRM(s.price)}
            <span className="text-sm font-sans font-normal text-slate-500">{s.priceSuffix}</span>
          </p>
          <span className="text-sm font-semibold text-slate-900">View</span>
        </div>
      </div>
    </Link>
  );
}
