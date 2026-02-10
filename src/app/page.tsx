import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

// Dynamically import below-fold components to reduce initial bundle size
const WhoWeAre = dynamic(() => import("@/components/WhoWeAre"));
const WhatWeDo = dynamic(() => import("@/components/WhatWeDo"));
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const ProductCategories = dynamic(() => import("@/components/ProductCategories"));
const ClientsAndTestimonials = dynamic(() => import("@/components/ClientsAndTestimonials"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <WhatWeDo />
        <HowItWorks />
        <ProductCategories />
        <ClientsAndTestimonials />
      </main>
      <Footer />
    </>
  );
}
