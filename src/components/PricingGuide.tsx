import Section from "./Section";
import Link from "next/link";

const pricingTiers = [
  {
    volume: "200-500 units",
    description: "Standard pricing for small to medium orders",
    note: "Ideal for testing markets or initial runs",
  },
  {
    volume: "500-2,000 units",
    description: "Volume discounts available",
    note: "Best value for established programs",
  },
  {
    volume: "2,000+ units",
    description: "Custom pricing and dedicated support",
    note: "Long-term partnership rates",
  },
];

export default function PricingGuide() {
  return (
    <Section className="bg-zinc-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Pricing Guide
          </h2>
          <p className="text-zinc-400">
            Pricing varies by product type, quantity, and customization. Contact us
            for detailed quotes.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className="p-5 rounded-lg bg-zinc-950 border border-zinc-800"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {tier.volume}
              </h3>
              <p className="text-sm text-zinc-400 mb-2">{tier.description}</p>
              <p className="text-xs text-zinc-500">{tier.note}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/rfq"
            className="inline-flex items-center text-sm text-amber-400 hover:text-amber-300 transition-colors"
          >
            Request a detailed quote
            <svg
              className="ml-1 w-4 h-4"
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
      </div>
    </Section>
  );
}
