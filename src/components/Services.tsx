import Link from "next/link";
import Section from "./Section";

const servicePhases = [
  {
    phase: "Pre-Production",
    phaseNumber: "01",
    services: [
      {
        title: "Sampling",
        description: "Physical samples for fit, fabric, and quality approval before bulk production.",
        tags: ["Fit & Fabric Approval", "Pre-production", "Quality Review"],
      },
      {
        title: "Size Patterns",
        description: "Comprehensive size grading and technical specifications for global markets.",
        tags: ["Size Grading", "Tech Pack Ready", "Global Standards"],
      },
      {
        title: "Tech Packs",
        description: "Detailed technical specifications, measurements, and construction details for production.",
        tags: ["Technical Specs", "Measurement Charts", "Construction Details"],
      },
    ],
  },
  {
    phase: "Production",
    phaseNumber: "02",
    services: [
      {
        title: "Screen Printing",
        description: "Professional printing services for bulk runs with multi-color capabilities.",
        tags: ["Bulk Runs", "Multi-color", "High Volume"],
      },
      {
        title: "Embroidery",
        description: "Professional embroidery services with multi-head machines for high-volume custom designs and logos.",
        tags: ["Multi-head Machines", "Custom Designs", "Logo Embroidery"],
      },
      {
        title: "Stitching / Assembly",
        description: "Expert cut-and-sew manufacturing with reinforced seams and precision finishing.",
        tags: ["Cut & Sew", "Reinforced Seams", "Precision Finishing"],
      },
    ],
  },
  {
    phase: "Finishing & Delivery",
    phaseNumber: "03",
    services: [
      {
        title: "Quality Control",
        description: "Multi-stage QC checks at every production stage ensuring consistent quality standards.",
        tags: ["Multi-stage QC", "Quality Standards", "Consistent Quality"],
      },
      {
        title: "Packaging",
        description: "Professional packaging solutions tailored to your requirements and shipping needs.",
        tags: ["Custom Packaging", "Branded Options", "Export Ready"],
      },
      {
        title: "Export & Shipping",
        description: "FOB, CIF, and door-to-door shipping options with complete documentation and tracking.",
        tags: ["FOB/CIF Options", "Complete Documentation", "Tracking Provided"],
      },
    ],
  },
];

interface ServicesProps {
  hideHeader?: boolean;
}

export default function Services({ hideHeader = false }: ServicesProps) {
  return (
    <>
      <Section className="bg-white">
        {!hideHeader && (
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              End-to-end manufacturing services from pre-production to delivery.
            </p>
          </div>
        )}

        {/* Services by Phase */}
        <div className="space-y-16">
          {servicePhases.map((phase, phaseIndex) => (
            <div key={phaseIndex}>
              {/* Phase Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-lg">
                  {phase.phaseNumber}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {phase.phase}
                  </h3>
                  <div className="h-px bg-slate-200 mt-2 max-w-md" />
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {phase.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col hover:border-slate-300 hover:shadow-md transition-all duration-200"
                  >
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">
                      {service.title}
                    </h4>
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed flex-1">
                      {service.description}
                    </p>

                    {/* Capability Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href="/rfq"
                      className="inline-flex items-center justify-center text-sm font-medium text-blue-900 hover:text-blue-800 py-2 px-4 border border-blue-900/20 rounded-md hover:border-blue-900/40 hover:bg-blue-50/50 transition-colors"
                    >
                      Request a Quote
                      <svg
                        className="ml-1.5 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
