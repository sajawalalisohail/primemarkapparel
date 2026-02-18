import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import AvailableSamples from "@/components/AvailableSamples";
import BulkCapabilities from "@/components/BulkCapabilities";
import PricingGuide from "@/components/PricingGuide";
import Image from "next/image";

export const metadata = {
  title: "Products | Bulk Apparel Manufacturing - PrimeMark Apparel",
  description: "Browse our product categories: uniforms, scrubs, industrial workwear, hoodies, denim, and custom apparel. All available for bulk manufacturing with competitive pricing.",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#080C14]">
        <PageHeader
          title="Products"
          subtitle="From corporate uniforms to custom streetwear, we manufacture it all at scale."
        />

        {/* Product Hero Image */}
        <div className="px-4 sm:px-6 lg:px-8 py-12 bg-[#080C14]">
          <div className="mx-auto max-w-6xl">
            <div className="relative aspect-video rounded-xl border border-white/10 overflow-hidden shadow-2xl shadow-black/50">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080C14]/80 z-10" />

              {/* Image */}
              <Image
                src="/branding/prodimg1.png"
                alt="Bulk apparel product range including hoodies, t-shirts, workwear, caps, and embroidery samples"
                fill
                className="object-cover"
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              />
            </div>

            {/* Caption */}
            <p className="mt-4 text-sm text-slate-400 text-center">
              Representative samples and product categories available for bulk production.
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <AvailableSamples />
        <BulkCapabilities />
        <PricingGuide />
      </main>
      <Footer />
    </>
  );
}
