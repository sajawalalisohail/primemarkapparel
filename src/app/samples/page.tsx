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
      <main className="flex-1 bg-[#080C14]">
        <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-[#080C14] border-b border-white/5">
          <div className="mx-auto max-w-6xl text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#C9A84C]/10 flex items-center justify-center">
              {/* Icon or image can go here */}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Request Samples
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
              Get physical samples to evaluate quality, fit, and fabric before
              placing your bulk order.
            </p>
          </div>
        </div>

        <Section className="bg-[#0F1623]">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#080C14] border border-white/10 shadow-sm rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Sample Information
              </h2>
              <div className="space-y-4 text-slate-400">
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    Free Samples for Qualified Buyers
                  </h3>
                  <p className="text-sm">
                    Sample costs are typically credited toward your bulk order.
                    For qualified buyers planning orders of 500+ units, samples
                    are often free.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    Delivery Time: 7-14 Days
                  </h3>
                  <p className="text-sm">
                    Physical samples are typically ready within 7-14 days after
                    requirements are confirmed.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">
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
