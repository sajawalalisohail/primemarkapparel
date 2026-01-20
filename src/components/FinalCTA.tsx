import Link from "next/link";
import Section from "./Section";

export default function FinalCTA() {
  return (
    <Section>
      <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 border border-slate-800 p-8 md:p-12 lg:p-16 text-center overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-blue-400/5 rounded-full blur-3xl" />

        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Tell us what you need —{" "}
            <span className="text-blue-400">we&apos;ll quote fast.</span>
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
            Share your requirements and get a detailed quote within 24–48 hours.
            No obligation, no hidden fees.
          </p>
          <Link
            href="/rfq"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
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
    </Section>
  );
}
