import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Quality from "@/components/Quality";
import Section from "@/components/Section";

export const metadata = {
  title: "Quality Standards | Manufacturing Excellence - PrimeMark Apparel",
  description:
    "Our commitment to quality: multi-stage QC checks, premium fabrics, expert stitching, and customization excellence. 99%+ quality pass rate.",
};

const qcSteps = [
  {
    number: "01",
    title: "Incoming Fabric Inspection",
    description:
      "Raw materials are inspected for weight, color consistency, weave integrity, and defect rate before cutting begins.",
  },
  {
    number: "02",
    title: "In-Process Checks",
    description:
      "During cutting and stitching, supervisors conduct periodic inline checks for seam consistency, construction accuracy, and size conformance.",
  },
  {
    number: "03",
    title: "Mid-Production Inspection",
    description:
      "At 30–50% production completion, a batch inspection is conducted and results are documented. Any issues are flagged and resolved before production continues.",
  },
  {
    number: "04",
    title: "Pre-Shipment Final QC",
    description:
      "A full final inspection is conducted against your approved sample and specifications. Defect rate threshold: below 1% AQL 2.5.",
  },
  {
    number: "05",
    title: "Packing & Export Verification",
    description:
      "Packing is verified against the agreed packing list. Carton labeling, quantity counts, and documentation are confirmed before handoff to freight.",
  },
];

export default function QualityPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="Quality Standards"
          subtitle="Our commitment to quality is uncompromising. Every garment undergoes multiple quality control checkpoints."
        />

        <Quality />

        {/* QC Process Section */}
        <Section className="bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Our Quality Control Process
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Every order goes through five defined checkpoints. Here&apos;s
                what happens at each stage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {qcSteps.map((step, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl bg-white border border-slate-200 shadow-sm ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                    }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold text-blue-900">
                      {step.number}
                    </span>
                    <div className="h-px flex-1 bg-slate-200" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Third-Party Inspection Callout */}
        <Section className="bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 rounded-2xl bg-blue-50 border border-blue-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Third-Party Inspection
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    We accommodate third-party inspection by agencies including
                    SGS, Bureau Veritas, and Intertek. Third-party inspection
                    costs are at buyer&apos;s expense and must be arranged at
                    least 5 business days before the inspection date. Contact us
                    to coordinate access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Partner Factory Standards */}
        <Section className="bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Partner Factory Standards
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  We work with partner factories that maintain responsible
                  manufacturing practices. Our factory selection process
                  evaluates production capacity, quality systems, worker
                  conditions, and compliance track record.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Many of our partner facilities are working toward WRAP and
                  BSCI certification. We can provide factory audit documentation
                  upon request for qualified buyers.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200">
                    <span className="text-sm text-slate-600">
                      Factory Standards:
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      Responsible Manufacturing
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200">
                    <span className="text-sm text-slate-600">
                      Certification Path:
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      WRAP & BSCI
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200">
                    <span className="text-sm text-slate-600">
                      Quality Pass Rate:
                    </span>
                    <span className="text-sm font-semibold text-blue-900">
                      99%+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
