import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-24 text-center">
      <h1 className="font-display text-4xl font-semibold text-slate-900">Page not found</h1>
      <p className="mt-4">This listing may have been sold, rented out or removed.</p>
      <Link href="/" className="mt-8 inline-block rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white">
        Back to all listings
      </Link>
    </main>
  );
}
