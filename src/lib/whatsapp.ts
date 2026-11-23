import type { Listing, UnitType } from "@/data/types";
import { WHATSAPP_NUMBER, fmtRM } from "./constants";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const refText = (l: Listing) => (l.ref ? ` (Ref: ${l.ref})` : "");

/** Main pre-filled message for each listing type. */
export function defaultMessage(l: Listing): string {
  switch (l.type) {
    case "new-project":
      return `Hi, I saw ${l.shortTitle} on your website. Could you please send me the E-Brochure, Floor Plans, and latest Rebate Package?`;
    case "subsale":
      return `Hi, I saw ${l.shortTitle}${refText(l)} listed for sale at ${fmtRM(l.price)} on your website. Is it still available? I'd like to arrange a viewing.`;
    case "rent":
      return `Hi, I saw ${l.shortTitle}${refText(l)} listed for rent at ${fmtRM(l.price)}/month on your website. Is it still available? I'd like to arrange a viewing.`;
  }
}

export function unitMessage(l: Listing, u: UnitType): string {
  return `Hi, I saw ${l.shortTitle} on your website. I'm interested in ${u.name} (${u.sizeSqft} sq.ft., ${u.bedrooms} Bedrooms). Could you please send me the Floor Plan and latest Nett Price?`;
}

export function rebateMessage(l: Listing): string {
  return `Hi, I saw ${l.shortTitle} on your website. I'd like to claim the Early Bird Rebate. Could you please share the current Sales Package and how to proceed?`;
}

export function bestPriceMessage(l: Listing): string {
  return `Hi, I'm interested in ${l.shortTitle}${refText(l)} on your website. Is the price negotiable? Could you also share similar units in the same area?`;
}
