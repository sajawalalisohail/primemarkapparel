import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import PageCTA from "@/components/PageCTA";

// Dynamically import below-fold components to reduce initial bundle size
const OurClients = dynamic(() => import("@/components/OurClients"));
const ProductCategories = dynamic(() => import("@/components/ProductCategories"));
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const FAQ = dynamic(() => import("@/components/FAQ"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OurClients />
        <ProductCategories />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <PageCTA />
      </main>
      <Footer />
    </>
  );
}
