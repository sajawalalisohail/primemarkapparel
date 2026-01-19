import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Custom Header */}
        <div className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 bg-zinc-950">
          <div className="mx-auto max-w-6xl">
            {/* Header with Quick Specs */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                  Services
                </h1>
                <p className="text-base sm:text-lg text-zinc-400 max-w-2xl">
                  End-to-end manufacturing services from sampling to bulk production
                </p>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                <div>
                  <span className="text-zinc-500">MOQ:</span>
                  <span className="text-zinc-300 ml-1">200-300 units</span>
                </div>
                <div>
                  <span className="text-zinc-500">Lead time:</span>
                  <span className="text-zinc-300 ml-1">2-4 weeks</span>
                </div>
                <div>
                  <span className="text-zinc-500">Customization:</span>
                  <span className="text-zinc-300 ml-1">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Content */}
        <Services hideHeader />

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
