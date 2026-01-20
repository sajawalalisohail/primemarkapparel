import Link from "next/link";

export default function PageCTA() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
          Ready to get started?
        </h2>
        <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
          Request a detailed quote for your bulk apparel requirements.
        </p>
        <Link
          href="/rfq"
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-50"
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
