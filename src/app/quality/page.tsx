import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Quality from "@/components/Quality";

export const metadata = {
  title: "Quality Standards | Manufacturing Excellence - PrimeMark Apparel",
  description: "Our commitment to quality: multi-stage QC checks, premium fabrics, expert stitching, and customization excellence. 99%+ quality pass rate.",
};

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
      </main>
      <Footer />
    </>
  );
}
