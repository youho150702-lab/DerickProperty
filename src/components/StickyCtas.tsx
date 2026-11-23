import { WhatsAppButton } from "./WhatsAppButton";

interface CardProps {
  title: string;
  priceText: string;
  note: string;
  label: string;
  message: string;
}

/** Desktop: sticky card in the right column. */
export function DesktopCtaCard({ title, priceText, note, label, message }: CardProps) {
  return (
    <div className="sticky top-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="mt-2 font-display text-3xl font-semibold text-amber-700">{priceText}</p>
      <p className="mt-3 text-sm">{note}</p>
      <WhatsAppButton message={message} fullWidth className="mt-5">
        {label}
      </WhatsAppButton>
    </div>
  );
}

/** Mobile: fixed bottom bar. */
export function MobileStickyBar({ priceText, label, message }: Omit<CardProps, "title" | "note">) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-md items-center gap-3">
        <p className="shrink-0 font-display text-lg font-semibold leading-tight text-amber-700">{priceText}</p>
        <WhatsAppButton message={message} fullWidth>
          {label}
        </WhatsAppButton>
      </div>
    </div>
  );
}
