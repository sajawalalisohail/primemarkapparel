import Image from "next/image";
import Section from "./Section";

const industries = [
  {
    title: "Hospitals & Clinics",
    description: "Medical-grade scrubs and lab coats",
    image: "/industries/hospitals.png",
  },
  {
    title: "Construction",
    description: "High-visibility and safety workwear",
    image: "/industries/construction.png",
  },
  {
    title: "Restaurants",
    description: "Chef coats, aprons, and service uniforms",
    image: "/industries/restaurants.png",
  },
  {
    title: "Retail Brands",
    description: "Private label and branded apparel lines",
    image: "/industries/retail.png",
  },
  {
    title: "Logistics",
    description: "Durable uniforms for warehouse and delivery",
    image: "/industries/logistics.png",
  },
  {
    title: "Schools",
    description: "Student uniforms and PE kits",
    image: "/industries/school.png",
  },
];

const typicalOrders = [
  {
    title: "Uniform programs",
    description: "Corporate and service uniforms for teams.",
  },
  {
    title: "Workwear & safety basics",
    description: "Safety-compliant apparel for industrial settings.",
  },
  {
    title: "Branded retail runs",
    description: "Private label and custom branded apparel.",
  },
  {
    title: "School uniforms & spiritwear",
    description: "Student uniforms and athletic apparel.",
  },
];

interface IndustriesProps {
  hideHeader?: boolean;
}

export default function Industries({ hideHeader = false }: IndustriesProps) {
  return (
    <>
      <Section id="industries" className="bg-zinc-900">
        {!hideHeader && (
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Trusted by businesses across diverse sectors for reliable bulk apparel
              supply.
            </p>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-zinc-800 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-transparent to-zinc-950/60 z-10" />
                <Image
                  src={industry.image}
                  alt={`${industry.title} industry - ${industry.description}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {industry.title}
                </h3>
                <p className="text-sm text-zinc-400">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Typical Orders Section */}
      <Section>
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Typical Orders
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {typicalOrders.map((order, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-zinc-900 border border-zinc-800"
            >
              <h3 className="text-base font-semibold text-white mb-1">
                {order.title}
              </h3>
              <p className="text-sm text-zinc-400">{order.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
