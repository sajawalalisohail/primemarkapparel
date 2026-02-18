import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Industries from "@/components/Industries";
import Link from "next/link";

export const metadata = {
  title: "Industries We Serve | B2B Apparel Solutions - PrimeMark Apparel",
  description: "Trusted by businesses across diverse industries: hospitals, construction, restaurants, retail brands, logistics, and schools. Reliable bulk apparel supply.",
};

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[var(--color-bg)]">
        <PageHeader
          title="Industries"
          subtitle="Trusted by businesses across diverse sectors for reliable bulk apparel supply."
        />

        {/* Industries Content */}
        <Industries hideHeader />


      </main>
      <Footer />
    </>
  );
}
