import Section from "./Section";
import Link from "next/link";

const pricingTiers = [
  {
    volume: "500 units",
    priceRange: "$18-25 per unit",
    description: "Standard pricing for small orders",
    note: "Ideal for testing markets or initial runs",
  },
  {
    volume: "1,000 units",
    priceRange: "$14-18 per unit",
    description: "Volume discounts available",
    note: "Better per-unit pricing",
  },
  {
    volume: "5,000 units",
    priceRange: "$10-14 per unit",
    description: "Significant volume discounts",
    note: "Best value for established programs",
  },
  {
    volume: "10,000+ units",
    priceRange: "Custom pricing",
    description: "Custom pricing and dedicated support",
    note: "Long-term partnership rates",
  },
];

export default function PricingGuide() {
  return (
    <Section className="bg-[var(--color-bg)]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] mb-2">
            Pricing Guide
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-2">
            Pricing varies by product type, quantity, fabric, and customization. Contact us
            for detailed quotes.
          </p>
          <p className="text-sm text-[var(--color-text-muted)]">
            Prices shown are estimates. Final pricing depends on specifications.
          </p>
        </div>
        <div className="bg-[#C9A84C]/5 border border-[#C9A84C]/20 rounded-lg p-4 mb-8">
          <p className="text-sm text-[#C9A84C] text-center">
            Indicative pricing for standard bulk orders. Actual price depends on product
            type, fabric specification, and customization. Contact us for a product-specific
            quote.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className="p-5 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm hover:shadow-md hover:border-[#C9A84C]/30 transition-all"
            >
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                {tier.volume}
              </h3>
              <p className="text-base font-bold text-[#C9A84C] mb-2">
                {tier.priceRange}
              </p>
              <p className="text-sm text-[var(--color-text-secondary)] mb-2">{tier.description}</p>
              <p className="text-xs text-[var(--color-text-muted)]">{tier.note}</p>
            </div>
          ))}
        </div>
        <div className="bg-[var(--color-surface-elevated)] border border-[var(--color-border)] rounded-lg p-4 mb-8">
          <p className="text-sm text-[var(--color-text-secondary)] text-center">
            <strong>Note:</strong> Prices vary by fabric, customization, MOQ, and product complexity.
            Contact us for exact quotes tailored to your requirements.
          </p>
        </div>
        <div className="text-center">
          <Link
            href="/rfq"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-[#C9A84C] text-[#080C14] rounded-lg hover:bg-[#D4B65D] transition-colors"
          >
            Request a Quote
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
