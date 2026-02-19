import Link from "next/link";
import Section from "./Section";

export default function FinalCTA() {
  return (
    <Section>
      <div className="relative rounded-2xl bg-[var(--color-surface-elevated)] border border-[var(--color-border)] p-8 md:p-12 lg:p-16 text-center overflow-hidden">
        {/* Faint gold radial glow behind heading */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, var(--color-accent-glow) 0%, transparent 65%)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10">
          <p className="font-eyebrow text-[var(--color-accent)] mb-4">
            Get Started
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[var(--color-text-primary)] mb-4">
            Let&apos;s Build Something{" "}
            <span className="text-[var(--color-accent)]">Great Together</span>
          </h2>
          <p className="font-body text-lg text-[var(--color-text-secondary)] mb-8 max-w-xl mx-auto">
            Share your requirements and get a detailed quote within 24–48 hours.
            No obligation, no hidden fees.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/rfq"
              className="inline-flex items-center justify-center px-8 py-4 font-button text-sm bg-[var(--color-accent)] text-[var(--color-bg)] rounded-lg hover:opacity-90 active:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
            >
              Request a Quote
              <svg
                className="ml-2 w-5 h-5"
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
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 font-button text-sm border border-[var(--color-border)] text-[var(--color-text-secondary)] rounded-lg hover:text-[var(--color-text-primary)] hover:border-[var(--color-accent)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
            >
              You can also call us →
            </Link>
          </div>
          <p className="font-body text-sm text-[var(--color-text-muted)] mt-6">
            Available Mon–Fri • Response within 24 hrs • No commitment required
          </p>
        </div>
      </div>
    </Section>
  );
}
