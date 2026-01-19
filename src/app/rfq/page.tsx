import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import RFQForm from "@/components/RFQForm";

export default function RFQPage() {
  return (
    <>
      <Navbar />
      <main>
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
