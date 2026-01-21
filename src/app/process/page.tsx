import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PageCTA from "@/components/PageCTA";
import HowItWorks from "@/components/HowItWorks";

export const metadata = {
  title: "Our Process | Manufacturing Workflow - PrimeMark Apparel",
  description: "Learn about our streamlined manufacturing process: sampling, production, and delivery. Clear timelines and communication at every step.",
};

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Process"
          subtitle="A streamlined process from initial inquiry to final delivery with clear timelines and communication at every step."
        />

        <HowItWorks hideHeader />
        <PageCTA />
      </main>
      <Footer />
    </>
  );
}
