import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

export const metadata = {
  title: "About Us | PrimeMark Apparel - Bulk Apparel Manufacturing Partner",
  description:
    "PrimeMark Apparel connects procurement teams with vetted manufacturing facilities in Pakistan. Over 20 years of experience in apparel production, QC, and export logistics.",
};

const values = [
  {
    title: "Quality First",
    description:
      "Rigorous QC at every production stage. We inspect fabrics, monitor stitching, and verify finishing before anything ships.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "True Partnership",
    description:
      "Single point of contact throughout your order. We align our incentives with yours - your success is our success.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Full Transparency",
    description:
      "Clear pricing, real-time production updates, and no hidden fees. You always know where your order stands.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
  },
  {
    title: "Reliable Delivery",
    description:
      "Consistent timelines and proactive communication. We flag issues early and solve problems before they impact your schedule.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const process = [
  {
    title: "We Source",
    description:
      "We maintain relationships with vetted partner factories across Pakistan's textile hubs. Each factory is selected for its track record, production capacity, and quality systems.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
  {
    title: "We Manage",
    description:
      "We handle sampling, QC checkpoints, production oversight, and pre-shipment inspection. You communicate with one point of contact throughout.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    title: "We Deliver",
    description:
      "We manage export documentation, freight coordination, and final handoff - FOB, CIF, or door-to-door, with full tracking and documentation.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
        />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[var(--color-bg)]">
        <PageHeader
          title="About PrimeMark Apparel"
          subtitle="A sourcing and manufacturing partner built for mid-market buyers."
        />

        {/* Section 1: Hero Intro */}
        <Section className="bg-[var(--color-bg)]">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6 text-justify">
              PrimeMark Apparel connects procurement teams, brand buyers, and
              uniform suppliers with vetted, established manufacturing
              facilities in Pakistan - one of the world&apos;s leading textile
              production hubs.
            </p>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6 text-justify">
              We&apos;re not a factory. We&apos;re the layer between your
              order and the factory floor: managing specifications, quality
              control, sampling, timelines, and export documentation so your
              team doesn&apos;t have to.
            </p>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed text-justify">
              Our founding team brings over 20 years of hands-on experience
              inside apparel manufacturing - production management, fabric
              sourcing, QC, and export logistics. We built PrimeMark to make
              that access available to companies ordering 500 to 10,000+
              units, not just the largest enterprises.
            </p>
          </div>
        </Section>

        {/* Section 2: Our Story with Stats */}
        <Section className="bg-[var(--color-surface)]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] mb-8 text-center">
              Our Story
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6 text-justify">
              Pakistan ranks among the world&apos;s top five textile exporters,
              with a mature supply chain for cotton, denim, twill, and technical
              fabrics. Manufacturing infrastructure is concentrated in Lahore,
              Faisalabad, and Karachi - cities with decades of export-oriented
              production experience.
            </p>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-10 text-justify">
              Our partner factories operate modern facilities with skilled
              workforces and established relationships with international
              freight and compliance partners. We founded PrimeMark to bridge
              the gap between these world-class facilities and mid-market buyers
              who deserve the same access as enterprise brands.
            </p>

            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] shadow-sm text-center">
                <p className="text-3xl font-bold text-[#C9A84C] mb-2">20+</p>
                <p className="text-[var(--color-text-secondary)]">
                  Years of Team Experience
                </p>
              </div>
              <div className="p-6 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] shadow-sm text-center">
                <p className="text-3xl font-bold text-[#C9A84C] mb-2">
                  500-10,000+
                </p>
                <p className="text-[var(--color-text-secondary)]">
                  Units Per Order
                </p>
              </div>
              <div className="p-6 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] shadow-sm text-center">
                <p className="text-3xl font-bold text-[#C9A84C] mb-2">
                  4-8 Weeks
                </p>
                <p className="text-[var(--color-text-secondary)]">
                  Typical Lead Time
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Section 3: Our Values */}
        <Section className="bg-[var(--color-bg)]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] mb-10 text-center">
              Our Values
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm hover:border-[#C9A84C]/50 transition-colors duration-300"
                >
                  <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-lg flex items-center justify-center text-[#C9A84C] mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Section 4: Our Process */}
        <Section className="bg-[var(--color-surface)]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] mb-10 text-center">
              Our Process
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {process.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] shadow-sm hover:border-[#C9A84C]/50 transition-colors duration-300"
                >
                  <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-lg flex items-center justify-center text-[#C9A84C] mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
