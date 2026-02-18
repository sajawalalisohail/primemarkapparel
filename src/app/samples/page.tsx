import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import SamplesForm from "./SamplesForm";

export const metadata = {
  title: "Request Samples | Evaluate Quality Before Bulk Orders — PrimeMark Apparel",
  description:
    "Request physical samples before committing to bulk production. Evaluate fabric quality, fit, and customization options. Free samples for qualified buyers planning 500+ units.",
};

export default function SamplesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-900 border-b border-slate-800">
          <div className="mx-auto max-w-6xl text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Request Samples
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
              Get physical samples to evaluate quality, fit, and fabric before
              placing your bulk order.
            </p>
          </div>
        </div>

        <Section className="bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Sample Information
              </h2>
              <div className="space-y-4 text-slate-600">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    Free Samples for Qualified Buyers
                  </h3>
                  <p className="text-sm">
                    Sample costs are typically credited toward your bulk order.
                    For qualified buyers planning orders of 500+ units, samples
                    are often free.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    Delivery Time: 7-14 Days
                  </h3>
                  <p className="text-sm">
                    Physical samples are typically ready within 7-14 days after
                    requirements are confirmed.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    What&apos;s Included
                  </h3>
                  <ul className="text-sm list-disc list-inside space-y-1">
                    <li>Size range samples (S, M, L, XL, or custom sizes)</li>
                    <li>Fabric swatches</li>
                    <li>Customization options (embroidery, printing samples)</li>
                    <li>Quality inspection report</li>
                  </ul>
                </div>
              </div>
            </div>

            <SamplesForm />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
