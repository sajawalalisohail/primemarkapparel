import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PageCTA from "@/components/PageCTA";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "FAQ | Frequently Asked Questions - PrimeMark Apparel",
  description: "Frequently asked questions about bulk apparel manufacturing, MOQ, lead times, customization, pricing, and working with PrimeMark Apparel.",
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="FAQ"
          subtitle="Everything you need to know about working with us."
        />
        <FAQ hideHeader />
        <PageCTA />
      </main>
      <Footer />
    </>
  );
}
