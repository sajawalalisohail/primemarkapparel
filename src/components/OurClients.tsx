"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Section from "./Section";

const clientLogos = [
  {
    name: "Accuteq Pakistan",
    logoPath: "/clients/accute.png",
    industry: "Pest Management",
    location: "Lahore",
  },
  {
    name: "C-Shine Group",
    logoPath: "/clients/cshine.png",
    industry: "Facilities & Hygiene",
    location: "Lahore",
  },
  {
    name: "Jugaarh",
    logoPath: "/clients/jugaarh.png",
    industry: "Cultural Retail",
    location: "Pakistan",
  },
  {
    name: "Creemees",
    logoPath: "/clients/creemees.png",
    industry: "Food & Beverage",
    location: "Lahore",
  },
  {
    name: "Izmir Wok",
    logoPath: "/clients/izmirwok.png",
    industry: "Restaurant",
    location: "Lahore",
  },
  {
    name: "KLIX",
    logoPath: "/clients/klix.png",
    industry: "Events & Branding",
    location: "Lahore",
  },
];

export default function OurClients() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <Section className="bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          Our Clients
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Trusted by businesses across multiple industries.
        </p>
      </div>

      {/* Running Logo Animation */}
      <div className="relative w-full bg-slate-50 border-y border-slate-200 overflow-hidden">
        <div className="py-8 sm:py-12">
          <div className="relative w-full overflow-hidden">
            <div
              className="flex gap-8 sm:gap-12 lg:gap-16"
              style={{
                animation: prefersReducedMotion
                  ? "none"
                  : "slideLogos 20s linear infinite",
                willChange: prefersReducedMotion ? "auto" : "transform",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              {/* First set of logos */}
              {clientLogos.map((client, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-40 sm:w-48 lg:w-56"
                >
                  <div className="relative w-full flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <Image
                      src={client.logoPath}
                      alt={`${client.name} logo`}
                      width={120}
                      height={60}
                      className="max-h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 mb-2"
                      sizes="(max-width: 768px) 120px, 160px"
                      loading="lazy"
                    />
                    <div className="text-center mt-2">
                      <p className="text-xs font-medium text-slate-900 mb-0.5">
                        {client.name}
                      </p>
                      <p className="text-[10px] text-slate-500 mb-1">
                        {client.industry}
                      </p>
                      <p className="text-[10px] text-slate-400">
                        {client.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {clientLogos.map((client, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-40 sm:w-48 lg:w-56"
                >
                  <div className="relative w-full flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <Image
                      src={client.logoPath}
                      alt={`${client.name} logo`}
                      width={120}
                      height={60}
                      className="max-h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 mb-2"
                      sizes="(max-width: 768px) 120px, 160px"
                      loading="lazy"
                    />
                    <div className="text-center mt-2">
                      <p className="text-xs font-medium text-slate-900 mb-0.5">
                        {client.name}
                      </p>
                      <p className="text-[10px] text-slate-500 mb-1">
                        {client.industry}
                      </p>
                      <p className="text-[10px] text-slate-400">
                        {client.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideLogos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </Section>
  );
}
