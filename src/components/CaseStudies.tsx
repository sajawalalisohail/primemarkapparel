import Section from "./Section";
import Image from "next/image";

const clients = [
  {
    name: "Accuteq Pakistan",
    location: "Lahore",
    industry: "Integrated Pest Management & Consultancy",
    workProvided: "Staff uniforms, branded apparel for technicians and office staff",
    tone: "Professional, corporate",
    logoPath: "/clients/accute.png",
  },
  {
    name: "C-Shine Group",
    location: "Lahore",
    industry: "Facilities & Hygiene Services",
    workProvided: "Uniform supply, consistent bulk apparel for operations teams",
    tone: "Enterprise, trusted, scalable",
    logoPath: "/clients/cshine.png",
  },
  {
    name: "Jugaarh",
    location: "",
    industry: "Cultural & Traditional Retail",
    workProvided: "Custom apparel for retail staff, brand-aligned clothing",
    tone: "Minimal, premium, cultural",
    logoPath: "/clients/jugaarh.png",
  },
  {
    name: "Creemees",
    location: "Lahore",
    industry: "Food & Beverage",
    workProvided: "Staff uniforms, branded apparel for outlets",
    tone: "Friendly, consumer-facing, clean",
    logoPath: "/clients/creemees.png",
  },
  {
    name: "Izmir Wok",
    location: "Lahore",
    industry: "Restaurant / Chinese Cuisine",
    workProvided: "Kitchen & front-of-house uniforms",
    tone: "Bold, restaurant-grade",
    logoPath: "/clients/izmirwok.png",
  },
  {
    name: "KLIX",
    location: "Lahore",
    industry: "Events, Tech & Branding",
    workProvided: "Staff uniforms, event branding shirts",
    tone: "Modern, innovative",
    logoPath: "/clients/klix.png",
  },
];

export default function CaseStudies() {
  return (
    <Section className="bg-slate-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          Our Clients
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Trusted by businesses across diverse industries for reliable bulk apparel solutions.
        </p>
      </div>
      
      {/* Client Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((client, index) => (
          <div
            key={index}
            className="group p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-900/30 hover:-translate-y-1 transition-[shadow,border-color,transform] duration-300 ease-in-out"
          >
            {/* Logo Area */}
            <div className="mb-4 flex items-center justify-center h-20 bg-slate-50 rounded-lg border border-slate-200 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors duration-300 p-3">
              <Image
                src={client.logoPath}
                alt={`${client.name} logo`}
                width={120}
                height={60}
                className="max-h-14 w-auto object-contain"
                sizes="(max-width: 768px) 120px, 120px"
                loading="lazy"
              />
            </div>
            
            {/* Company Info */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-slate-900 mb-1">
                {client.name}
              </h3>
              {client.location && (
                <p className="text-xs text-slate-500 mb-3">{client.location}</p>
              )}
              
              {/* Industry Badge */}
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-900 border border-blue-200 mb-3">
                {client.industry}
              </span>
              
              {/* Work Provided */}
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                {client.workProvided}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
