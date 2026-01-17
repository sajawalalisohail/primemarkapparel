import Section from "./Section";

const trustItems = [
  {
    title: "Flexible MOQ",
    description: "Minimum orders tailored to your business needs",
    icon: (
      <svg
        className="w-8 h-8 text-amber-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "2–6 Week Lead Time",
    description: "Fast turnaround from sample approval to delivery",
    icon: (
      <svg
        className="w-8 h-8 text-amber-400"
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
  {
    title: "Full Customization",
    description: "Embroidery, printing, and private label options",
    icon: (
      <svg
        className="w-8 h-8 text-amber-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
  },
  {
    title: "Quality Control",
    description: "QC checks at every stage of production",
    icon: (
      <svg
        className="w-8 h-8 text-amber-400"
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
];

export default function TrustBar() {
  return (
    <Section className="bg-zinc-900 border-y border-zinc-800">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trustItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-zinc-400">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
