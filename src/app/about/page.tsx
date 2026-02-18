import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

export const metadata = {
  title: "About Us | PrimeMark Apparel - Bulk Apparel Manufacturing Partner",
  description:
    "PrimeMark Apparel connects procurement teams with vetted manufacturing facilities in Pakistan. Over 20 years of experience in apparel production, QC, and export logistics.",
};

const howWeWork = [
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
      "We manage export documentation, freight coordination, and final handoff — FOB, CIF, or door-to-door, with full tracking and documentation.",
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
      <main className="flex-1 bg-[#080C14]">
        <PageHeader
          title="About PrimeMark Apparel"
          subtitle="A sourcing and manufacturing partner built for mid-market buyers."
        />

        {/* Section 1: Hero/Intro */}
        <Section className="bg-[#080C14]">
          <div className="max-w-4xl mx-auto">
            <div className="prose max-w-none">
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                PrimeMark Apparel connects procurement teams, brand buyers, and
                uniform suppliers with vetted, established manufacturing
                facilities in Pakistan — one of the world&apos;s leading textile
                production hubs.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                We&apos;re not a factory. We&apos;re the layer between your
                order and the factory floor: managing specifications, quality
                control, sampling, timelines, and export documentation so your
                team doesn&apos;t have to.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                Our founding team brings over 20 years of hands-on experience
                inside apparel manufacturing — production management, fabric
                sourcing, QC, and export logistics. We built PrimeMark to make
                that access available to companies ordering 500 to 10,000+
                units, not just the largest enterprises.
              </p>
            </div>
          </div>
        </Section>

        {/* Section 2: How We Work */}
        <Section className="bg-[#0F1623]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 text-center">
              How We Work
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {howWeWork.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-[#080C14] border border-white/10 shadow-sm hover:border-[#C9A84C]/50 transition-colors duration-300"
                >
                  <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-lg flex items-center justify-center text-[#C9A84C] mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Section 3: Why Pakistan Manufacturing */}
        <Section className="bg-[#080C14]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Why Pakistan Manufacturing
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Pakistan ranks among the world&apos;s top five textile exporters,
              with a mature supply chain for cotton, denim, twill, and technical
              fabrics. Manufacturing infrastructure is concentrated in Lahore,
              Faisalabad, and Karachi — cities with decades of export-oriented
              production experience. Our partner factories operate modern
              facilities with skilled workforces and established relationships
              with international freight and compliance partners.
            </p>
          </div>
        </Section>

        {/* Section 4: Stats */}
        <Section className="bg-[#0F1623]">
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-[#080C14] border border-white/10 shadow-sm text-center">
                <p className="text-3xl font-bold text-[#C9A84C] mb-2">20+</p>
                <p className="text-slate-400">Years of Team Experience</p>
              </div>
              <div className="p-6 rounded-xl bg-[#080C14] border border-white/10 shadow-sm text-center">
                <p className="text-3xl font-bold text-[#C9A84C] mb-2">
                  500–10,000+
                </p>
                <p className="text-slate-400">Units Per Order</p>
              </div>
              <div className="p-6 rounded-xl bg-[#080C14] border border-white/10 shadow-sm text-center">
                <p className="text-3xl font-bold text-[#C9A84C] mb-2">
                  4–8 Weeks
                </p>
                <p className="text-slate-400">Typical Lead Time</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Section 5: Team Placeholder */}
        <Section className="bg-[#080C14]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
              Our Team
            </h2>
            <p className="text-lg text-slate-400 text-center mb-10">
              Our founding team has deep roots in apparel manufacturing, export
              logistics, and B2B supply chain operations.
            </p>

            <div className="flex justify-center">
              {/* TODO: Replace with real photo and bio */}
              <div className="w-64 p-6 rounded-xl bg-[#0F1623] border border-white/10 shadow-sm text-center">
                <div className="w-24 h-24 bg-white/5 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-slate-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  [Founder Name]
                </h3>
                <p className="text-sm text-slate-400">
                  Founder & Managing Director
                </p>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
