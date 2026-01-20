import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProductCategories from "@/components/ProductCategories";
import Industries from "@/components/Industries";
import FactoryShowcase from "@/components/FactoryShowcase";
import HowItWorks from "@/components/HowItWorks";
import Quality from "@/components/Quality";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Certifications from "@/components/Certifications";
import PricingGuide from "@/components/PricingGuide";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import RFQForm from "@/components/RFQForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductCategories />
        <TrustBar />
        <Industries />
        <FactoryShowcase />
        <HowItWorks />
        <Quality />
        <Services />
        <CaseStudies />
        <Certifications />
        <PricingGuide />
        <FAQ />
        <Testimonials />
        <FinalCTA />
        <RFQForm />
      </main>
      <Footer />
    </>
  );
}
