import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import RFQForm from "@/components/RFQForm";

export const metadata = {
  title: "Request a Quote | Get Custom Pricing - PrimeMark Apparel",
  description: "Request a custom quote for bulk apparel manufacturing. Fill out our RFQ form and receive detailed pricing within 24-48 hours.",
};

export default function RFQPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[var(--color-bg)]">
        <PageHeader
          title="Request a Quote"
          subtitle="Fill out the form below and we'll get back to you with a detailed quote."
        />
        <RFQForm hideHeader />
      </main>
      <Footer />
    </>
  );
}
