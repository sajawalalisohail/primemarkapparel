import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Link from "next/link";

export const metadata = {
  title: "White T-Shirts — Bulk Cotton Manufacturing | PrimeMark Apparel",
  description:
    "Foundational 100% cotton tees for printing, branding, and retail basics. Available in multiple weights and fits. MOQ 200 units, 2-4 weeks lead time.",
};

const customizationOptions = [
  "GSM weight (160–220gsm)",
  "Fit (fitted/relaxed/boxy)",
  "Neck style",
  "Screen print or embroidery",
  "Private label tags",
];

export default function TshirtsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="White T-Shirts"
          subtitle="Foundational 100% cotton tees for printing, branding, and retail basics"
        />

        <Section className="bg-white">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product Image Placeholder */}
            <div className="aspect-video bg-slate-100 rounded-2xl flex items-center justify-center border border-slate-200">
              <div className="text-center">
                <svg
                  className="w-24 h-24 text-slate-300 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-slate-400 text-sm">
                  Product image placeholder
                </p>
                {/* TODO: Replace with real product photo */}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Bulk Cotton Manufacturing
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Foundational 100% cotton tees for printing, branding, and retail
                basics. Available in multiple weights and fits.
              </p>

              {/* Specs Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <p className="text-sm text-slate-500 mb-1">
                    Minimum Order Quantity
                  </p>
                  <p className="text-xl font-bold text-blue-900">200 units</p>
                </div>
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <p className="text-sm text-slate-500 mb-1">Lead Time</p>
                  <p className="text-xl font-bold text-blue-900">2–4 weeks</p>
                </div>
              </div>

              {/* Customization Options */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  Customization Options
                </h3>
                <div className="flex flex-wrap gap-2">
                  {customizationOptions.map((option, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-sm bg-blue-50 text-blue-900 rounded-full border border-blue-200"
                    >
                      {option}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/rfq"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
              >
                Request a Quote
                <svg
                  className="w-5 h-5 ml-2"
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

        {/* Additional Info Section */}
        <Section className="bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Why Choose PrimeMark for T-Shirts?
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-blue-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  100% Cotton
                </h3>
                <p className="text-sm text-slate-600">
                  Premium ring-spun cotton for comfort and print quality
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-blue-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Print Ready
                </h3>
                <p className="text-sm text-slate-600">
                  Optimized for screen printing and DTG applications
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-blue-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Fast Turnaround
                </h3>
                <p className="text-sm text-slate-600">
                  2–4 weeks from sample approval to delivery
                </p>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
