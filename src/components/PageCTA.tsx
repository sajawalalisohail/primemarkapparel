import Link from "next/link";

export default function PageCTA() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16 bg-zinc-900 border-t border-zinc-800">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Ready to get started?
        </h2>
        <p className="text-lg text-zinc-400 mb-8 max-w-xl mx-auto">
          Request a detailed quote for your bulk apparel requirements.
        </p>
        <Link
          href="/rfq"
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-amber-500 text-zinc-950 rounded-lg hover:bg-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-zinc-900"
        >
          Request a Quote
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
