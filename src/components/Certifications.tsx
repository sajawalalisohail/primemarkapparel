import Section from "./Section";

const certifications = [
  {
    name: "ISO Certified",
    description: "International quality management standards",
    icon: (
      <svg
        className="w-8 h-8 text-blue-900"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    name: "Social Compliance",
    description: "BSCI, WRAP certified factories",
    icon: (
      <svg
        className="w-8 h-8 text-blue-900"
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
    name: "Quality Standards",
    description: "AATCC, ASTM compliant",
    icon: (
      <svg
        className="w-8 h-8 text-blue-900"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
];

export default function Certifications() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          Certifications & Compliance
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Our manufacturing partners meet international quality and social compliance standards.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all text-center"
          >
            <div className="mb-4 flex justify-center">
              <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                {cert.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              {cert.name}
            </h3>
            <p className="text-sm text-slate-600">{cert.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
