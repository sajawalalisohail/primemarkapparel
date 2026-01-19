import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageCTA from "@/components/PageCTA";
import HowItWorks from "@/components/HowItWorks";

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Custom Header */}
        <div className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 bg-zinc-950">
          <div className="mx-auto max-w-6xl text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Process
            </h1>
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
              A streamlined process from initial inquiry to final delivery with
              clear timelines and communication at every step.
            </p>
          </div>
        </div>

        <HowItWorks hideHeader />
        <PageCTA />
      </main>
      <Footer />
    </>
  );
}
