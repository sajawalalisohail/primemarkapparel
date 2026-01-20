import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PageCTA from "@/components/PageCTA";
import Section from "@/components/Section";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="About Us"
          subtitle="Premium bulk apparel manufacturing from Pakistan, serving businesses worldwide."
        />
        <Section>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Who We Are
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                PrimeMark Apparel is a bulk apparel manufacturer based in Pakistan,
                specializing in uniforms, scrubs, industrial workwear, and custom
                apparel. We serve businesses across diverse industries with
                reliable, high-quality products manufactured at scale.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Our network of manufacturing partners in Pakistan ensures consistent
                quality, competitive pricing, and timely delivery for bulk orders.
                We combine traditional craftsmanship with modern production
                capabilities to meet the standards of B2B clients worldwide.
              </p>
            </div>

            {/* Key Facts */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-white border border-slate-200 shadow-sm text-center">
                <p className="text-2xl font-bold text-blue-900 mb-1">200+</p>
                <p className="text-sm text-slate-600">Units MOQ</p>
              </div>
              <div className="p-4 rounded-lg bg-white border border-slate-200 shadow-sm text-center">
                <p className="text-2xl font-bold text-blue-900 mb-1">2-6</p>
                <p className="text-sm text-slate-600">Weeks Lead Time</p>
              </div>
              <div className="p-4 rounded-lg bg-white border border-slate-200 shadow-sm text-center">
                <p className="text-2xl font-bold text-blue-900 mb-1">100%</p>
                <p className="text-sm text-slate-600">Customizable</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Our Mission
                </h3>
                <p className="text-slate-600">
                  To deliver premium bulk apparel solutions that meet the highest
                  quality standards while maintaining competitive pricing and
                  reliable service for our global client base.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Our Values
                </h3>
                <p className="text-slate-600">
                  Quality, reliability, transparency, and partnership. We build
                  long-term relationships with our clients through consistent
                  delivery and open communication.
                </p>
              </div>
            </div>

            {/* Why Pakistan */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Why Pakistan Manufacturing
              </h3>
              <p className="text-slate-600 mb-4">
                Pakistan is a global leader in textile manufacturing with
                established infrastructure, skilled workforce, and competitive
                production costs. Our manufacturing partners leverage these
                advantages to deliver quality apparel at scale.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-900 mt-1">•</span>
                  <span>Established textile industry with decades of experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-900 mt-1">•</span>
                  <span>Competitive pricing without compromising quality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-900 mt-1">•</span>
                  <span>Skilled workforce and modern production facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-900 mt-1">•</span>
                  <span>Strategic location for global shipping</span>
                </li>
              </ul>
            </div>
          </div>
        </Section>
        <PageCTA />
      </main>
      <Footer />
    </>
  );
}
