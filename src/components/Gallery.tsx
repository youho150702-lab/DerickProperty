"use client";

import Image from "next/image";
import { useState } from "react";

export function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const step = (d: number) => setOpen((i) => (i === null ? i : (i + d + images.length) % images.length));

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpen(i)}
            className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100"
            aria-label={`Enlarge photo ${i + 1}`}
          >
            <Image src={src} alt={`${alt} photo ${i + 1}`} fill sizes="(min-width:1024px) 300px, 50vw" className="object-cover transition-transform hover:scale-105" />
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpen(null)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(null);
            if (e.key === "ArrowRight") step(1);
            if (e.key === "ArrowLeft") step(-1);
          }}
        >
          <div className="relative h-[80vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={images[open]} alt={`${alt} photo ${open + 1}`} fill sizes="100vw" className="object-contain" />
          </div>
          <button type="button" onClick={() => setOpen(null)} className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900">
            Close
          </button>
          {images.length > 1 && (
            <>
              <button type="button" onClick={(e) => { e.stopPropagation(); step(-1); }} className="absolute left-4 top-1/2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900">
                Prev
              </button>
              <button type="button" onClick={(e) => { e.stopPropagation(); step(1); }} className="absolute right-4 top-1/2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900">
                Next
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
