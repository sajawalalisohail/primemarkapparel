import Section from "./Section";

const caseStudies = [
  {
    industry: "Healthcare",
    orderSize: "50,000 units",
    challenge: "Large-scale scrub order with tight deadline and multiple size requirements",
    solution: "Coordinated production across multiple lines, implemented quality checkpoints, and maintained regular communication",
    result: "Delivered on time with 99.2% quality pass rate. Client reordered 75K units.",
  },
  {
    industry: "Restaurant Chain",
    orderSize: "25,000 units",
    challenge: "Custom branded uniforms with specific fabric requirements and logo placement",
    solution: "Created detailed tech packs, provided samples for approval, and executed bulk production with consistent branding",
    result: "Perfect logo placement across all units. Client expanded to 50+ locations.",
  },
  {
    industry: "Construction",
    orderSize: "15,000 units",
    challenge: "Safety-compliant workwear with high-visibility requirements and durability standards",
    solution: "Sourced certified high-visibility fabric, reinforced stress points, and conducted multiple QC inspections",
    result: "Met all safety standards. Zero defects reported. Ongoing partnership established.",
  },
];

export default function CaseStudies() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          Client Success Stories
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Real results from real partnerships. See how we've helped businesses scale their apparel programs.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all"
          >
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-900 border border-blue-200 mb-2">
                {study.industry}
              </span>
              <p className="text-sm font-semibold text-slate-900 mb-4">
                Order Size: {study.orderSize}
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="text-xs font-semibold text-slate-500 uppercase mb-1">
                  Challenge
                </h4>
                <p className="text-sm text-slate-700">{study.challenge}</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-500 uppercase mb-1">
                  Solution
                </h4>
                <p className="text-sm text-slate-700">{study.solution}</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-500 uppercase mb-1">
                  Result
                </h4>
                <p className="text-sm text-slate-700 font-medium">{study.result}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm text-slate-500">
          Client logos available with permission. Contact us to learn more about our partnerships.
        </p>
      </div>
    </Section>
  );
}
