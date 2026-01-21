import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import Link from "next/link";

export const metadata = {
  title: "Manufacturing Services | Pre-Production to Delivery - PrimeMark Apparel",
  description: "End-to-end manufacturing services: sampling, tech packs, screen printing, embroidery, stitching, quality control, packaging, and export shipping.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Services"
          subtitle="End-to-end manufacturing services from sampling to bulk production"
        />

        {/* Services Content */}
        <Services hideHeader />

        {/* Bottom CTA */}
        <div className="px-4 sm:px-6 lg:px-8 py-12 bg-slate-50 border-t border-slate-200">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-lg text-slate-600 mb-6">
              Tell us what you need, we&apos;ll respond with pricing, MOQ, and
              timeline.
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
      </main>
      <Footer />
    </>
  );
}
