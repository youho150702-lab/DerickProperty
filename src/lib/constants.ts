export const WHATSAPP_NUMBER = "601162148584"; // no "+"
export const SITE_NAME = "SJ Property Consultant";
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-domain.vercel.app"
).replace(/\/$/, "");

/** Shown in the footer. Replace with your real details (REN/REA number is required for advertising). */
export const AGENT = {
  name: "Your Name",
  registration: "REN 00000",
  company: "Your Company Sdn. Bhd. (000000-X)",
};

export const fmtRM = (n: number) => `RM${n.toLocaleString("en-US")}`;
export const fmtNum = (n: number) => n.toLocaleString("en-US");
