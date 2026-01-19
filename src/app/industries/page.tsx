import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Industries from "@/components/Industries";
import Link from "next/link";

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Custom Header */}
        <div className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 bg-zinc-950">
          <div className="mx-auto max-w-6xl">
            {/* Title and Subtitle */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                Industries
              </h1>
              <p className="text-base sm:text-lg text-zinc-400 max-w-2xl">
                Trusted by businesses across diverse sectors for reliable bulk
                apparel supply.
              </p>
            </div>
          </div>
        </div>

        {/* Industries Content */}
        <Industries hideHeader />

        {/* Bottom CTA */}
        <div className="px-4 sm:px-6 lg:px-8 py-12 bg-zinc-900 border-t border-zinc-800">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-lg text-zinc-400 mb-6">
              Tell us what you need — we&apos;ll respond with pricing, MOQ, and
              timeline.
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
      </main>
      <Footer />
    </>
  );
}
