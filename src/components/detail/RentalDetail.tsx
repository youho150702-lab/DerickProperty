import type { RentalListing } from "@/data/types";
import { fmtNum, fmtRM } from "@/lib/constants";
import { defaultMessage } from "@/lib/whatsapp";
import { FaqAccordion } from "../FaqAccordion";
import { Gallery } from "../Gallery";
import { CheckList, ConnectivityList, DetailShell, FactsTable, Section } from "./shared";

export function RentalDetail({ p }: { p: RentalListing }) {
  const facts: [string, string][] = [
    ["Monthly rent", fmtRM(p.price)],
    ["Deposit", p.deposit],
    ["Minimum tenancy", p.minTenure],
    ["Available from", p.availableFrom],
    ["Property type", p.propertyType],
    ["Location", p.address],
    ["Built-up size", `${fmtNum(p.sizeSqft)} sq.ft.`],
    ["Bedrooms / Bathrooms", `${p.bedrooms} / ${p.bathrooms}`],
    ["Carparks", String(p.carparks)],
    ["Furnishing", p.furnishing],
    ...(p.ref ? ([["Reference", p.ref]] as [string, string][]) : []),
  ];

  return (
    <DetailShell
      listing={p}
      heroTags={[...p.tags, `${p.bedrooms} Bedrooms`, `${fmtNum(p.sizeSqft)} sq.ft.`]}
      priceText={`${fmtRM(p.price)} / month`}
      message={defaultMessage(p)}
      cta={{ hero: "Book a Viewing (WhatsApp)", card: "Book a Viewing", mobile: "Book Viewing", final: "Book a Viewing" }}
      secondary={{ href: "#terms", label: "See rental terms" }}
      cardNote={`Available: ${p.availableFrom}. Message us to confirm and book a viewing.`}
      finalTitle={`Want to rent ${p.shortTitle}?`}
      finalText="Message us on WhatsApp to confirm availability, book a viewing and get the tenancy details."
    >
      {p.images?.length ? (
        <Section id="gallery" title="Photos">
          <Gallery images={p.images} alt={p.title} />
        </Section>
      ) : null}

      <Section id="highlights" title="Highlights">
        <CheckList items={p.highlights} />
      </Section>

      <Section id="terms" title="Rental terms & details">
        <FactsTable facts={facts} />
      </Section>

      {p.inclusions?.length ? (
        <Section id="inclusions" title="What's included">
          <CheckList items={p.inclusions} />
        </Section>
      ) : null}

      {p.facilities.length ? (
        <Section id="facilities" title="Building facilities">
          <CheckList items={p.facilities} />
        </Section>
      ) : null}

      {p.rules.length ? (
        <Section id="rules" title="House rules">
          <CheckList items={p.rules} />
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
