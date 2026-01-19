import Link from "next/link";
import Image from "next/image";
import Section from "./Section";

const services = [
  {
    title: "Sampling",
    description: "Physical samples for fit, fabric, and quality approval before bulk production.",
    image: "/services/sampling.png",
    badges: ["Fit & Fabric Approval", "Pre-production"],
  },
  {
    title: "Size Patterns",
    description: "Comprehensive size grading and technical specifications for global markets.",
    image: "/services/pattern.png",
    badges: ["Size Grading", "Tech Pack Ready"],
  },
  {
    title: "Screen Printing",
    description: "Professional printing services for bulk runs with multi-color capabilities.",
    image: "/services/screen.png",
    badges: ["Bulk Runs", "Multi-color"],
  },
];

const includedServices = [
  {
    title: "Private Label Options",
    description: "Custom branding and labeling for your products.",
  },
  {
    title: "Fabric Sourcing",
    description: "Access to premium fabric suppliers and materials.",
  },
  {
    title: "Packaging & Labeling",
    description: "Complete packaging solutions with custom labeling.",
  },
  {
    title: "Worldwide Shipping Support",
    description: "International shipping and logistics coordination.",
  },
];

interface ServicesProps {
  hideHeader?: boolean;
}

export default function Services({ hideHeader = false }: ServicesProps) {
  return (
    <>
      <Section>
        {!hideHeader && (
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Find More About Our Services
            </p>
          </div>
        )}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-video bg-zinc-800 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/30 via-transparent to-zinc-950/50 z-10" />
                <Image
                  src={service.image}
                  alt={`${service.title} service`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-400 mb-4 flex-1">
                  {service.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.badges.map((badge, badgeIndex) => (
                    <span
                      key={badgeIndex}
                      className="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* CTA Link */}
                <Link
                  href="/rfq"
                  className="inline-flex items-center text-sm text-amber-400 hover:text-amber-300 transition-colors"
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
          ))}
        </div>
      </Section>

      {/* What's Included Section */}
      <Section className="bg-zinc-900">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            What&apos;s Included
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {includedServices.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-zinc-950 border border-zinc-800"
            >
              <h3 className="text-base font-semibold text-white mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-400">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
