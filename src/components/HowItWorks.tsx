import Section from "./Section";

const steps = [
  {
    number: "01",
    title: "Sample",
    description:
      "Share your requirements. We create samples with your specifications for approval before bulk production.",
  },
  {
    number: "02",
    title: "Production",
    description:
      "Once approved, we begin manufacturing with rigorous quality control checks at every stage.",
  },
  {
    number: "03",
    title: "Delivery",
    description:
      "Your order is carefully packaged and shipped worldwide with tracking and documentation.",
  },
];

export default function HowItWorks() {
  return (
    <Section id="process">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          How It Works
        </h2>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
          A streamlined process from initial inquiry to final delivery.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-12 left-1/2 w-full h-px bg-gradient-to-r from-amber-500/50 to-zinc-800" />
            )}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-zinc-900 border-2 border-amber-500 flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-amber-400">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-zinc-400 max-w-xs">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
