import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Link from "next/link";

export const metadata = {
  title: "Our Process | Manufacturing Workflow - PrimeMark Apparel",
  description:
    "Learn about our streamlined manufacturing process: requirements, sampling, production, and delivery. Clear timelines and communication at every step.",
};

const processSteps = [
  {
    number: "01",
    title: "Requirements & Consultation",
    color: "blue",
    description:
      "Submit your RFQ with product type, quantity, fabric preferences, and any reference samples or tech packs you have. We'll review and respond within 24 business hours with questions, feasibility notes, and an indicative quote range. If your requirements are complex, we'll schedule a call.",
    listTitle: "What to prepare:",
    listItems: [
      "Product type and intended use",
      "Target quantity (and future order frequency if applicable)",
      "Size range required",
      "Any existing samples, tech packs, or reference images",
      "Required delivery deadline",
    ],
  },
  {
    number: "02",
    title: "Sampling & Approvals",
    color: "emerald",
    description:
      "We develop a physical sample to your specifications — typically within 7–14 days of confirmed requirements. You'll receive the sample by courier for physical review. Feedback is collected, and revisions are incorporated in a counter-sample if needed. Bulk production begins only after you sign off on the approved sample.",
    listTitle: "What's included in sampling:",
    listItems: [
      "Fit sample in your specified size(s)",
      "Fabric swatch confirmation",
      "Customization mock-up (embroidery, print, label)",
      "Sample inspection report",
    ],
  },
  {
    number: "03",
    title: "Production",
    color: "amber",
    description:
      "Once sample approval and deposit are confirmed, production is scheduled. You'll receive a production timeline with milestone dates. We conduct in-process inspections at key stages and provide progress updates. Any deviations from the approved spec are flagged immediately.",
    listTitle: "Production milestones:",
    listItems: [
      "Order confirmation and deposit receipt",
      "Fabric cutting commencement",
      "In-process QC checkpoint (30–50% completion)",
      "Production complete / pre-shipment inspection scheduled",
    ],
  },
  {
    number: "04",
    title: "Inspection & Delivery",
    color: "violet",
    description:
      "A full pre-shipment inspection is conducted against your approved sample. An inspection report is issued. The balance payment is due before shipment. We coordinate FOB, CIF, or door-to-door freight and provide full export documentation: Commercial Invoice, Packing List, Certificate of Origin, and Bill of Lading.",
    listTitle: "Export documentation provided:",
    listItems: [
      "Commercial Invoice",
      "Packing List",
      "Bill of Lading / Airway Bill",
      "Certificate of Origin (where applicable)",
      "Inspection Report",
    ],
  },
];

const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
  blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-900" },
  emerald: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-900" },
  amber: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-900" },
  violet: { bg: "bg-violet-50", border: "border-violet-200", text: "text-violet-900" },
};

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="Our Process"
          subtitle="A streamlined process from initial inquiry to final delivery with clear timelines and communication at every step."
        />

        <Section className="bg-white">
          <div className="max-w-4xl mx-auto space-y-12">
            {processSteps.map((step, index) => {
              const colors = colorClasses[step.color];
              return (
                <div
                  key={index}
                  className="relative"
                >
                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute left-6 top-20 w-0.5 h-[calc(100%+48px)] bg-slate-200" />
                  )}

                  <div className="flex gap-6">
                    {/* Step Number */}
                    <div
                      className={`hidden md:flex w-12 h-12 ${colors.bg} ${colors.border} border rounded-full items-center justify-center flex-shrink-0`}
                    >
                      <span className={`text-lg font-bold ${colors.text}`}>
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className={`md:hidden text-lg font-bold ${colors.text}`}
                        >
                          {step.number}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                          {step.title}
                        </h2>
                      </div>

                      <p className="text-slate-600 leading-relaxed mb-6">
                        {step.description}
                      </p>

                      <div
                        className={`p-5 rounded-xl ${colors.bg} ${colors.border} border`}
                      >
                        <h4 className="font-semibold text-slate-900 mb-3">
                          {step.listTitle}
                        </h4>
                        <ul className="space-y-2">
                          {step.listItems.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-start gap-2 text-slate-700"
                            >
                              <svg
                                className={`w-5 h-5 flex-shrink-0 mt-0.5 ${colors.text}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="bg-slate-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Ready to Start?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Tell us what you need and we&apos;ll respond within 24 business
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
