import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PageCTA from "@/components/PageCTA";
import Quality from "@/components/Quality";

export default function QualityPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Quality"
          subtitle="Our commitment to quality is uncompromising. Every garment undergoes multiple quality control checkpoints."
        />
        <Quality />
        <PageCTA />
      </main>
      <Footer />
    </>
  );
}
