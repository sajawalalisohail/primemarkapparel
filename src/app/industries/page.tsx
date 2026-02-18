import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Industries from "@/components/Industries";
import Link from "next/link";

export const metadata = {
  title: "Industries We Serve | B2B Apparel Solutions - PrimeMark Apparel",
  description: "Trusted by businesses across diverse industries: hospitals, construction, restaurants, retail brands, logistics, and schools. Reliable bulk apparel supply.",
};

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#080C14]">
        <PageHeader
          title="Industries"
          subtitle="Trusted by businesses across diverse sectors for reliable bulk apparel supply."
        />

        {/* Industries Content */}
        <Industries hideHeader />

        {/* Bottom CTA */}
        <div className="px-4 sm:px-6 lg:px-8 py-12 bg-[#0F1623] border-t border-white/10">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-lg text-slate-400 mb-6">
              Tell us what you need, we&apos;ll respond with pricing, MOQ, and
              timeline.
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
      </main>
      <Footer />
    </>
  );
}
