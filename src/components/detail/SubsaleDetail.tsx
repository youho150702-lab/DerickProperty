import type { SubsaleListing } from "@/data/types";
import { fmtNum, fmtRM } from "@/lib/constants";
import { bestPriceMessage, defaultMessage } from "@/lib/whatsapp";
import { FaqAccordion } from "../FaqAccordion";
import { Gallery } from "../Gallery";
import { WhatsAppButton } from "../WhatsAppButton";
import { CheckList, ConnectivityList, DetailShell, FactsTable, Section } from "./shared";

export function SubsaleDetail({ p }: { p: SubsaleListing }) {
  const facts: [string, string][] = [
    ["Asking price", `${fmtRM(p.price)} (about ${fmtRM(Math.round(p.price / p.builtUpSqft))} psf)`],
    ["Property type", p.propertyType],
    ["Location", p.address],
    ["Built-up size", `${fmtNum(p.builtUpSqft)} sq.ft.`],
    ["Bedrooms / Bathrooms", `${p.bedrooms} / ${p.bathrooms}`],
    ["Carparks", String(p.carparks)],
    ["Furnishing", p.furnishing],
    ["Occupancy", p.occupancy],
    ...(p.tenure ? ([["Tenure", p.tenure]] as [string, string][]) : []),
    ["Title", p.titleType],
    ...(p.floorLevel ? ([["Floor level", p.floorLevel]] as [string, string][]) : []),
    ...(p.facing ? ([["Facing", p.facing]] as [string, string][]) : []),
    ...(p.view ? ([["View", p.view]] as [string, string][]) : []),
    ...(p.yearBuilt ? ([["Year built", String(p.yearBuilt)]] as [string, string][]) : []),
    ...(p.maintenanceFee ? ([["Maintenance fee", p.maintenanceFee]] as [string, string][]) : []),
    ...(p.ref ? ([["Reference", p.ref]] as [string, string][]) : []),
  ];

  return (
    <DetailShell
      listing={p}
      heroTags={[...p.tags, `${p.bedrooms} Bedrooms`, `${fmtNum(p.builtUpSqft)} sq.ft.`]}
      priceText={fmtRM(p.price)}
      message={defaultMessage(p)}
      cta={{ hero: "Arrange a Viewing (WhatsApp)", card: "Arrange a Viewing", mobile: "Book Viewing", final: "Arrange a Viewing" }}
      secondary={{ href: "#details", label: "See property details" }}
      cardNote="Message us to check availability and arrange a viewing."
      finalTitle={`Interested in ${p.shortTitle}?`}
      finalText="Message us on WhatsApp to confirm availability, arrange a viewing or discuss your offer."
    >
      {p.images?.length ? (
        <Section id="gallery" title="Photos">
          <Gallery images={p.images} alt={p.title} />
        </Section>
      ) : null}

      <Section id="highlights" title="Highlights">
        <CheckList items={p.highlights} />
      </Section>

      <Section id="details" title="Property details">
        <FactsTable facts={facts} />
        <div className="mt-6">
          <WhatsAppButton message={bestPriceMessage(p)} variant="outline-light">
            Ask for Best Price &amp; Similar Units
          </WhatsAppButton>
        </div>
      </Section>

      {p.features.length ? (
        <Section id="features" title="Facilities & features">
          <CheckList items={p.features} />
        </Section>
      ) : null}

      {p.connectivity?.length ? (
        <Section id="location" title="Location & nearby">
          <ConnectivityList items={p.connectivity} />
        </Section>
      ) : null}

      {p.faqs?.length ? (
        <Section id="faq" title="Frequently asked questions">
          <FaqAccordion faqs={p.faqs} />
        </Section>
      ) : null}
    </DetailShell>
  );
}
