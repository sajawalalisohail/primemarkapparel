import Section from "./Section";
import Image from "next/image";

export default function FactoryShowcase() {
  return (
    <Section className="bg-slate-50">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Our Manufacturing Facility
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Based in Pakistan, we work directly with established factories to ensure quality, transparency, and reliable delivery for your bulk apparel needs.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-blue-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-slate-900 font-semibold mb-1">
                  Based in Pakistan
                </h3>
                <p className="text-sm text-slate-600">
                  Direct factory partnership with established manufacturing facilities. Timezone: PKT (UTC+5)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-blue-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-slate-900 font-semibold mb-1">
                  English-Speaking Team
                </h3>
                <p className="text-sm text-slate-600">
                  Clear communication throughout the entire process, from initial inquiry to final delivery.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-blue-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-slate-900 font-semibold mb-1">
                  Direct Factory Partnership
                </h3>
                <p className="text-sm text-slate-600">
                  No middlemen. We work directly with factories to ensure quality control and competitive pricing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative">
          <div className="aspect-square rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden shadow-lg">
            {/* Placeholder for factory image */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
              <div className="text-center p-8">
                <svg
                  className="w-24 h-24 mx-auto text-slate-400 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <p className="text-sm text-slate-500">
                  Factory photos available upon request
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
