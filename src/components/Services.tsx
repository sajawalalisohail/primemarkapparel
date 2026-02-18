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
      <Section className="bg-[var(--color-bg)]">
        {!hideHeader && (
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
              Our Services
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
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
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C9A84C] text-[#080C14] flex items-center justify-center font-bold text-lg">
                  {phase.phaseNumber}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">
                    {phase.phase}
                  </h3>
                  <div className="h-px bg-[var(--color-border)] mt-2 max-w-md" />
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {phase.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6 flex flex-col hover:border-[#C9A84C]/50 hover:shadow-md transition-all duration-200"
                  >
                    <h4 className="text-lg font-semibold text-[var(--color-text-primary)] mb-3">
                      {service.title}
                    </h4>
                    <p className="text-sm text-[var(--color-text-secondary)] mb-4 leading-relaxed flex-1">
                      {service.description}
                    </p>

                    {/* Capability Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)] border border-[var(--color-border)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href="/rfq"
                      className="inline-flex items-center justify-center text-sm font-medium text-[#C9A84C] hover:text-[#D4B65D] py-2 px-4 border border-[#C9A84C]/20 rounded-md hover:border-[#C9A84C]/40 hover:bg-[#C9A84C]/10 transition-colors"
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
