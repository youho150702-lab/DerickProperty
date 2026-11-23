import type { Faq } from "@/data/types";

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {faqs.map((f) => (
        <details key={f.question} className="group p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
            {f.question}
            <span aria-hidden className="text-xl leading-none text-amber-600 transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 leading-relaxed">{f.answer}</p>
        </details>
      ))}
    </div>
  );
}
