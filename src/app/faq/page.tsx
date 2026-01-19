import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PageCTA from "@/components/PageCTA";
import FAQ from "@/components/FAQ";

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
