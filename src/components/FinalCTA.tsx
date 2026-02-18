import Link from "next/link";
import Section from "./Section";

export default function FinalCTA() {
  return (
    <Section>
      <div className="relative rounded-2xl bg-[#0F1623] border border-white/10 p-8 md:p-12 lg:p-16 text-center overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Tell us what you need,{" "}
            <span className="text-[#C9A84C]">we&apos;ll quote fast.</span>
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">
            Share your requirements and get a detailed quote within 24-48 hours.
            No obligation, no hidden fees.
          </p>
          <Link
            href="/rfq"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-[#C9A84C] text-[#080C14] rounded-lg hover:bg-[#D4B65D] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:ring-offset-2 focus:ring-offset-[#080C14]"
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
