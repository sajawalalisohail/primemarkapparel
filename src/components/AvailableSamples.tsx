import Link from "next/link";
import Section from "./Section";

const samples = [
  {
    title: "Custom Hoodies",
    spec: "Premium cotton blend, multiple color options",
    moq: "200 units",
    customization: "Embroidery / Print",
  },
  {
    title: "Baseball Hats",
    spec: "Adjustable fit, structured cap",
    moq: "300 units",
    customization: "Embroidery / Patches",
  },
  {
    title: "Work Pants",
    spec: "Durable fabric, reinforced seams",
    moq: "250 units",
    customization: "Custom fit / Logo",
  },
  {
    title: "White T-Shirts",
    spec: "100% cotton, various weights",
    moq: "200 units",
    customization: "Print / Embroidery",
  },
  {
    title: "Embroidery Sample / Patches",
    spec: "High-quality thread, custom designs",
    moq: "100 units",
    customization: "Full custom",
  },
];

export default function AvailableSamples() {
  return (
    <Section className="bg-[#080C14]">
      {/* Header Row */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Available Samples
          </h2>
          <p className="text-lg text-slate-400">
            Available samples for review. Full bulk production available across core
            categories.
          </p>
        </div>
        <div className="flex flex-col items-start md:items-end gap-2">
          <Link
            href="/rfq"
            className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium bg-[#C9A84C] text-[#080C14] rounded-lg hover:bg-[#D4B65D] transition-colors"
          >
            Request a Quote
          </Link>
          <p className="text-xs text-slate-500">
            Typical MOQ: 200-300 units / Lead time: 2-4 weeks
          </p>
        </div>
      </div>

      {/* Sample Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {samples.map((sample, index) => (
          <div
            key={index}
            className="group rounded-xl bg-[#0F1623] border border-white/10 shadow-sm hover:shadow-md hover:border-[#C9A84C]/50 transition-all duration-300 overflow-hidden"
          >
            {/* Media Area */}
            <div className="aspect-video bg-[#080C14] border-b border-white/10 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-slate-500 group-hover:text-[#C9A84C] transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {sample.title}
                </h3>
                <p className="text-sm text-slate-400">{sample.spec}</p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-white/5 text-slate-300 border border-white/10">
                  MOQ: {sample.moq}
                </span>
                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-white/5 text-slate-300 border border-white/10">
                  {sample.customization}
                </span>
              </div>

              {/* CTA Link */}
              <Link
                href="/rfq"
                className="inline-flex items-center text-sm text-[#C9A84C] hover:text-[#D4B65D] transition-colors"
              >
                Request Quote
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
        ))}
      </div>
    </Section>
  );
}
