import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import Link from "next/link";

export const metadata = {
  title: "Manufacturing Services | Pre-Production to Delivery - PrimeMark Apparel",
  description: "End-to-end manufacturing services: sampling, tech packs, screen printing, embroidery, stitching, quality control, packaging, and export shipping.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#080C14]">
        <PageHeader
          title="Services"
          subtitle="End-to-end manufacturing services from sampling to bulk production"
        />

        {/* Services Content */}
        <Services hideHeader />


      </main>
      <Footer />
    </>
  );
}
