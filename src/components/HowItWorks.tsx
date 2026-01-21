import Section from "./Section";

const steps = [
  {
    number: "01",
    title: "Sample",
    description:
      "Share your requirements. We create samples with your specifications for approval before bulk production.",
    timeline: "7-14 days",
    details: "Physical samples delivered for fit, fabric, and quality review. Modifications available before approval.",
  },
  {
    number: "02",
    title: "Production",
    description:
      "Once approved, we begin manufacturing with rigorous quality control checks at every stage.",
    timeline: "2-6 weeks",
    details: "Regular progress updates provided. Quality control at multiple checkpoints. Payment terms: 30% deposit, 70% before shipping.",
  },
  {
    number: "03",
    title: "Delivery",
    description:
      "Your order is carefully packaged and shipped worldwide with tracking and documentation.",
    timeline: "1-3 weeks",
    details: "FOB, CIF, or door-to-door shipping options. Complete documentation for customs. Tracking provided.",
  },
];

interface HowItWorksProps {
  hideHeader?: boolean;
}

export default function HowItWorks({ hideHeader = false }: HowItWorksProps) {
  return (
    <Section id="process" className="bg-white">
      {!hideHeader && (
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A streamlined process from initial inquiry to final delivery.
          </p>
        </div>
      )}
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-12 left-1/2 w-full h-px bg-gradient-to-r from-blue-500/30 to-slate-200" />
            )}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white border-2 border-blue-900 flex items-center justify-center mb-6 shadow-sm">
                <span className="text-3xl font-bold text-blue-900">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-blue-800 mb-3 font-medium">
                {step.timeline}
              </p>
              <p className="text-slate-600 max-w-xs mb-3">{step.description}</p>
              <p className="text-xs text-slate-500 max-w-xs">{step.details}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
