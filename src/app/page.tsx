import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProductCategories from "@/components/ProductCategories";
import Industries from "@/components/Industries";
import HowItWorks from "@/components/HowItWorks";
import Quality from "@/components/Quality";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import RFQForm from "@/components/RFQForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ProductCategories />
        <Industries />
        <HowItWorks />
        <Quality />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <RFQForm />
      </main>
      <Footer />
    </>
  );
}
