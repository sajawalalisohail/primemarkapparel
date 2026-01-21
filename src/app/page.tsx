import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CapabilitySlider from "@/components/CapabilitySlider";
import Industries from "@/components/Industries";
import CaseStudies from "@/components/CaseStudies";
import HowItWorks from "@/components/HowItWorks";
import ProductCategories from "@/components/ProductCategories";
import Services from "@/components/Services";
import Quality from "@/components/Quality";
import Testimonials from "@/components/Testimonials";
import PricingGuide from "@/components/PricingGuide";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

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
