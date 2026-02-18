import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import FAQAccordion from "@/components/FAQAccordion";
import Link from "next/link";

export const metadata = {
  title: "FAQ | Common Questions About Bulk Apparel Manufacturing — PrimeMark Apparel",
  description:
    "Answers to common questions about bulk apparel manufacturing: MOQ, lead times, payment terms, sampling, shipping, and customization options.",
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before placing your first order."
        />

        <Section className="bg-white">
          <div className="max-w-3xl mx-auto">
            <FAQAccordion />
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="bg-slate-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-slate-600 mb-8">
              Email us at{" "}
              <a
                href="mailto:sales@primemarkapparel.com"
                className="text-blue-700 hover:text-blue-800 underline"
              >
                sales@primemarkapparel.com
              </a>{" "}
              or send a WhatsApp message and we&apos;ll reply within 24 business
              hours.
            </p>
            <Link
              href="/rfq"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
            >
              Request a Quote
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
