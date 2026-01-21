"use client";

import { useEffect, useState } from "react";

interface Slide {
  headline: string;
  subtext: string;
  icon?: React.ReactNode;
}

const slides: Slide[] = [
  {
    headline: "50,000+ Units / Month",
    subtext: "Cut & sew manufacturing with scalable capacity for growing brands",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
  },
  {
    headline: "All Apparel Categories",
    subtext: "T-shirts, hoodies, caps, uniforms, workwear, private label",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    headline: "Full Customization",
    subtext: "Fabric sourcing, GSM, colors, prints, embroidery, private labeling",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    headline: "Manufactured in Pakistan",
    subtext: "Ethical sourcing, experienced workforce, export-ready operations",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    headline: "Fast, Reliable Turnaround",
    subtext: "Sampling → bulk production → export with clear timelines",
    icon: (
      <svg
        className="w-6 h-6"
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
    headline: "Low MOQs Available",
    subtext: "Support for startups and established brands alike",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function CapabilitySlider() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
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
    <section
      className="relative w-full bg-slate-50 border-y border-slate-200 overflow-hidden"
      aria-label="Manufacturing capabilities"
    >
      <div className="py-8 sm:py-12 overflow-hidden">
        <div className="relative w-full overflow-hidden">
          {/* Infinite scrolling container */}
          <div
            className="flex gap-6 sm:gap-8 lg:gap-12"
            style={{
              animation: prefersReducedMotion
                ? "none"
                : "slide 25s linear infinite",
              willChange: prefersReducedMotion ? "auto" : "transform",
            }}
          >
            {/* First set of slides */}
            {slides.map((slide, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[380px]"
              >
                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-slate-200 h-full flex flex-col items-center text-center">
                  {slide.icon && (
                    <div className="text-blue-900 mb-4 flex-shrink-0">
                      {slide.icon}
                    </div>
                  )}
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
                    {slide.headline}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {slide.subtext}
                  </p>
                </div>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {slides.map((slide, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[380px]"
              >
                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-slate-200 h-full flex flex-col items-center text-center">
                  {slide.icon && (
                    <div className="text-blue-900 mb-4 flex-shrink-0">
                      {slide.icon}
                    </div>
                  )}
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
                    {slide.headline}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {slide.subtext}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
