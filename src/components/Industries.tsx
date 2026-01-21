import Image from "next/image";
import Section from "./Section";

const industries = [
  {
    title: "Hospitals & Clinics",
    description: "Medical-grade scrubs and lab coats",
    moq: "200-300 units",
    leadTime: "4-6 weeks",
    image: "/industries/hospitals.png",
  },
  {
    title: "Construction",
    description: "High-visibility and safety workwear",
    moq: "200-300 units",
    leadTime: "4-6 weeks",
    image: "/industries/construction.png",
  },
  {
    title: "Restaurants",
    description: "Chef coats, aprons, and service uniforms",
    moq: "200-300 units",
    leadTime: "4-6 weeks",
    image: "/industries/restaurants.png",
  },
  {
    title: "Retail Brands",
    description: "Private label and branded apparel lines",
    moq: "200-300 units",
    leadTime: "4-6 weeks",
    image: "/industries/retail.png",
  },
  {
    title: "Logistics",
    description: "Durable uniforms for warehouse and delivery",
    moq: "200-300 units",
    leadTime: "4-6 weeks",
    image: "/industries/logistics.png",
  },
  {
    title: "Schools",
    description: "Student uniforms and PE kits",
    moq: "200-300 units",
    leadTime: "4-6 weeks",
    image: "/industries/school.png",
  },
];

interface IndustriesProps {
  hideHeader?: boolean;
}

export default function Industries({ hideHeader = false }: IndustriesProps) {
  return (
    <>
      <Section id="industries" className="bg-white">
        {!hideHeader && (
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Trusted by businesses across diverse sectors for reliable bulk apparel
              supply.
            </p>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-900/30 hover:-translate-y-1 transition-all duration-300 ease-in-out overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-transparent to-slate-900/20 z-10" />
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
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {industry.title}
                </h3>
                <p className="text-sm text-slate-600 mb-4">{industry.description}</p>
                
                {/* B2B Metadata */}
                <div className="space-y-2 pt-4 border-t border-slate-100 mt-auto">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">MOQ:</span>
                    <span className="text-slate-700 font-medium">{industry.moq}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Lead Time:</span>
                    <span className="text-slate-700 font-medium">{industry.leadTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
