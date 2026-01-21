import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CapabilitySlider from "@/components/CapabilitySlider";
import TrustBar from "@/components/TrustBar";
import ProductCategories from "@/components/ProductCategories";
import Industries from "@/components/Industries";
import HowItWorks from "@/components/HowItWorks";
import Quality from "@/components/Quality";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import PricingGuide from "@/components/PricingGuide";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CapabilitySlider />
        <ProductCategories />
        <Industries />
        <HowItWorks />
        <Quality />
        <Services />
        <CaseStudies />
        <PricingGuide />
        <FAQ />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
