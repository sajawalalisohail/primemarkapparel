import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageCTA from "@/components/PageCTA";
import PageHeader from "@/components/PageHeader";
import AvailableSamples from "@/components/AvailableSamples";
import BulkCapabilities from "@/components/BulkCapabilities";
import PricingGuide from "@/components/PricingGuide";
import Image from "next/image";

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Products"
          subtitle="From corporate uniforms to custom streetwear, we manufacture it all at scale."
        />

        {/* Product Hero Image */}
        <div className="px-4 sm:px-6 lg:px-8 py-12 bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="relative aspect-video rounded-xl border border-slate-200 overflow-hidden shadow-lg">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-transparent to-slate-900/20 z-10" />
              
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
            <p className="mt-4 text-sm text-slate-500 text-center">
              Representative samples and product categories available for bulk production.
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <AvailableSamples />
        <BulkCapabilities />
        <PricingGuide />
        <PageCTA />
      </main>
      <Footer />
    </>
  );
}
