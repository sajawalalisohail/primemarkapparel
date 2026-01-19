import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageCTA from "@/components/PageCTA";
import AvailableSamples from "@/components/AvailableSamples";
import BulkCapabilities from "@/components/BulkCapabilities";
import PricingGuide from "@/components/PricingGuide";
import Image from "next/image";

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Custom Header */}
        <div className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 bg-zinc-950">
          <div className="mx-auto max-w-6xl text-center">
            {/* Title and Subtitle */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                Products
              </h1>
              <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
                From corporate uniforms to custom streetwear, we manufacture it all
                at scale.
              </p>
            </div>
          </div>
        </div>

        {/* Product Hero Image */}
        <div className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="mx-auto max-w-6xl">
            <div className="relative aspect-video rounded-xl border border-zinc-800 overflow-hidden">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-transparent to-zinc-950/60 z-10" />
              
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
            <p className="mt-4 text-sm text-zinc-500 text-center">
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
