import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Link from "next/link";

export const metadata = {
  title: "Custom Hoodies — Bulk Manufacturing | PrimeMark Apparel",
  description:
    "Premium cotton-blend hoodies manufactured to your specifications. Ideal for branded merchandise, retail lines, and corporate giftwear. MOQ 200 units, 3-5 weeks lead time.",
};

const customizationOptions = [
  "Fabric weight (280–420gsm)",
  "Drawstring color",
  "Zipper style",
  "Embroidery or screen print",
  "Custom labels and tags",
  "Size grading S–3XL",
];

export default function HoodiesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="Custom Hoodies"
          subtitle="Premium cotton-blend hoodies manufactured to your specifications"
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
                Bulk Hoodie Manufacturing
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Premium cotton-blend hoodies manufactured to your
                specifications. Ideal for branded merchandise, retail lines, and
                corporate giftwear.
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
                  <p className="text-xl font-bold text-blue-900">3–5 weeks</p>
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
              Why Choose PrimeMark for Hoodies?
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
                  Quality Fabrics
                </h3>
                <p className="text-sm text-slate-600">
                  Premium cotton-blend materials in various GSM weights
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
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Private Label
                </h3>
                <p className="text-sm text-slate-600">
                  Custom labels, tags, and packaging for your brand
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
                  3–5 weeks from sample approval to delivery
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
