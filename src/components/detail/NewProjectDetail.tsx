import Image from "next/image";
import type { NewProjectListing } from "@/data/types";
import { bedroomRange, sizeRange } from "@/data";
import { fmtRM } from "@/lib/constants";
import { defaultMessage, rebateMessage, unitMessage } from "@/lib/whatsapp";
import { FaqAccordion } from "../FaqAccordion";
import { Gallery } from "../Gallery";
import { WhatsAppButton } from "../WhatsAppButton";
import { ConnectivityList, DetailShell, FactsTable, Section } from "./shared";

export function NewProjectDetail({ p }: { p: NewProjectListing }) {
  const msg = defaultMessage(p);
  const facts: [string, string][] = [
    ["Developer", p.developer],
    ["Architect", p.architect],
    ["Location", p.address],
    ["Land title & tenure", `${p.landTitle} | ${p.tenure ?? ""}`],
    ["Property type", p.propertyType],
    ["Land size", p.landSize],
    ["Towers & units", p.towers],
    ["Density & lifts", `${p.density} | ${p.lifts}`],
    ["Built-up size", `${sizeRange(p.units)} (${bedroomRange(p.units)})`],
    ["Expected completion", p.completion],
    ["Maintenance fee", p.maintenanceFee],
    ...(p.greenCert ? ([["Green certification", p.greenCert]] as [string, string][]) : []),
        ...(p.bookingFee ? ([["Booking fee", p.bookingFee]] as [string, string][]) : []),
  ];

  return (
    <DetailShell
      listing={p}
      heroTags={p.tags}
      priceText={`From ${fmtRM(p.price)}`}
      message={msg}
      cta={{ hero: "Get E-Brochure (WhatsApp)", card: "Get E-Brochure & Price List", mobile: "Get E-Brochure", final: "Get E-Brochure & Price List" }}
      secondary={{ href: "#layouts", label: "See layouts & prices" }}
      cardNote="Limited-time rebates and free legal fees available."
      finalTitle={`Get the price list and rebate package for ${p.shortTitle}`}
      finalText="Message us on WhatsApp and we will send the E-Brochure, floor plans and the latest package. No obligation."
    >
      {p.images?.length ? (
        <Section id="gallery" title="Gallery">
          <Gallery images={p.images} alt={p.title} />
        </Section>
      ) : null}

      <Section id="highlights" title={`Why ${p.shortTitle}`}>
        <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {p.usps.map((u) => (
            <li key={u.title} className="border-l-2 border-amber-600 pl-4">
              <h3 className="font-semibold text-slate-900">{u.title}</h3>
              <p className="mt-1 text-sm leading-relaxed">{u.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="quick-facts" title="Quick facts">
        <FactsTable facts={facts} />
      </Section>

           <Section id="layouts" title="Unit layouts & starting price" intro="Starting SPA prices. Nett price depends on floor, facing and the package you pick.">
        <div className="grid gap-6 sm:grid-cols-2">
          {p.units.map((u) => (
            <article key={u.id} className="flex flex-col rounded-2xl border border-slate-200 p-6">
              {u.image && (
                <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-xl bg-slate-50">
                  <Image
                    src={u.image}
                    alt={`${p.shortTitle} ${u.name} floor plan`}
                    fill
                    sizes="(min-width:640px) 400px, 100vw"
                    className="object-contain"
                  />
                </div>
              )}
              <h3 className="font-display text-2xl font-semibold text-slate-900">{u.name}</h3>
              <p className="mt-1 text-slate-500">{u.sizeSqft} sq.ft.</p>
              <ul className="mt-4 space-y-1 text-sm">
                <li>{u.bedrooms} Bedrooms, {u.bathrooms} Bathrooms</li>
                <li>{u.carparks}</li>
              </ul>
              <p className="mt-5 text-xs text-slate-500">From</p>
              <p className="font-display text-3xl font-semibold text-amber-700">{fmtRM(u.priceFrom)}</p>
              <WhatsAppButton message={unitMessage(p, u)} fullWidth className="mt-6">
                Get Floor Plan &amp; Nett Price
              </WhatsAppButton>
            </article>
          ))}
        </div>
      </Section>

      <Section id="sales-package" title="Sales package & furnishing options" intro="Limited-time package. Choose a fully furnished unit, or take a cash rebate and furnish it yourself.">
        <div className="grid gap-6 md:grid-cols-2">
          {p.furnishingOptions.map((o) => (
            <article key={o.id} className="rounded-2xl border border-slate-200 p-6">
              {o.badge && <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">{o.badge}</span>}
              <h3 className="mt-3 font-display text-xl font-semibold text-slate-900">{o.title}</h3>
              <p className="mt-2 text-sm">{o.summary}</p>
              {o.extraRebate && (
                <ul className="mt-4 space-y-1 rounded-xl bg-amber-50 p-4 text-sm font-semibold text-amber-900">
                  {p.units.map((u) => (
                    <li key={u.id}>
                      {u.name}: extra {fmtRM(o.extraRebate?.[u.id] ?? 0)} rebate
                    </li>
                  ))}
                </ul>
              )}
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm">
                {o.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-900 p-6 text-white">
            <h3 className="font-display text-xl font-semibold">Rebates &amp; discounts</h3>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
              {p.rebates.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            {p.bumiNote && <p className="mt-3 text-sm text-amber-300">{p.bumiNote}</p>}
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="font-display text-xl font-semibold text-slate-900">Legal fees &amp; more</h3>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm">
              {p.legalPerks.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-semibold text-slate-900">Panel banks</p>
            <p className="mt-1 text-sm">{p.panelBanks.join(", ")}</p>
          </div>
        </div>

        <div className="mt-8">
          <WhatsAppButton message={rebateMessage(p)} size="lg">
            Claim Early Bird Rebate
          </WhatsAppButton>
        </div>
      </Section>

      {p.connectivity?.length ? (
        <Section id="connectivity" title="Connectivity & amenities">
          <ConnectivityList items={p.connectivity} />
        </Section>
      ) : null}

      {p.faqs?.length ? (
        <Section id="faq" title={`${p.shortTitle}: frequently asked questions`}>
          <FaqAccordion faqs={p.faqs} />
        </Section>
      ) : null}
    </DetailShell>
  );
}
