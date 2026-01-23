import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

// Dynamically import below-fold components to reduce initial bundle size
const CapabilitySlider = dynamic(() => import("@/components/CapabilitySlider"), {
  loading: () => <div className="h-32 bg-slate-50 animate-pulse" />,
});
const Industries = dynamic(() => import("@/components/Industries"));
const CaseStudies = dynamic(() => import("@/components/CaseStudies"));
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const ProductCategories = dynamic(() => import("@/components/ProductCategories"));
const Services = dynamic(() => import("@/components/Services"));
const Quality = dynamic(() => import("@/components/Quality"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const PricingGuide = dynamic(() => import("@/components/PricingGuide"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const FinalCTA = dynamic(() => import("@/components/FinalCTA"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CapabilitySlider />
        <Industries />
        <CaseStudies />
        <HowItWorks />
        <ProductCategories />
        <Services />
        <Quality />
        <Testimonials />
        <PricingGuide />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
