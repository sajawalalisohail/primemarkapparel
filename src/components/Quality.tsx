import Section from "./Section";

const qualityPoints = [
  {
    title: "Top-Tier Manufacturing Partners",
    description:
      "We work with established factories in Pakistan known for excellence in textile production and ethical practices.",
  },
  {
    title: "Premium Fabric Options",
    description:
      "Choose from a wide range of fabrics including cotton, poly-cotton blends, twill, denim, and specialized technical fabrics.",
  },
  {
    title: "Expert Stitching Standards",
    description:
      "Double-stitched seams, reinforced stress points, and precision finishing for long-lasting durability.",
  },
  {
    title: "Customization Excellence",
    description:
      "State-of-the-art embroidery machines, screen printing, heat transfer, and private label capabilities.",
  },
];

export default function Quality() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Quality & Manufacturing Excellence
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Our commitment to quality is uncompromising. Every garment undergoes
            multiple quality control checkpoints from raw material inspection to
            final packaging.
          </p>
          <div className="space-y-6">
            {qualityPoints.map((point, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-blue-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-slate-900 font-medium mb-1">{point.title}</h3>
                  <p className="text-sm text-slate-600">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative">
          <div className="aspect-square rounded-2xl bg-white border border-slate-200 shadow-sm p-8 flex items-center justify-center">
            <div className="space-y-6 w-full max-w-sm">
              {/* QC Badge */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-900"
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
                </div>
                <div>
                  <p className="text-slate-900 font-medium">Quality Assured</p>
                  <p className="text-sm text-slate-500">Multi-stage QC checks</p>
                </div>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-center">
                  <p className="text-2xl font-bold text-blue-900">99%</p>
                  <p className="text-xs text-slate-500">Quality Pass Rate</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-center">
                  <p className="text-2xl font-bold text-blue-900">5+</p>
                  <p className="text-xs text-slate-500">QC Checkpoints</p>
                </div>
              </div>
              {/* Enterprise Credibility Signals */}
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-white border border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-600">Response Time:</span>
                    <span className="text-xs font-semibold text-slate-900">24-48 hours</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-white border border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-600">Compliance:</span>
                    <span className="text-xs font-semibold text-slate-900">Ethical Sourcing</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                  <p className="text-xs text-slate-700 text-center font-medium">
                    Reliable bulk fulfillment with consistent quality standards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
