"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Section from "./Section";

const testimonials = [
  {
    quote:
      "PrimeMark has been our go-to supplier for staff uniforms. The quality is consistent, and their team understands our operational needs. The turnaround time is always reliable.",
    name: "Ahmed Hassan",
    title: "Operations Manager",
    company: "Accuteq Pakistan",
    location: "Lahore",
    logoPath: "/clients/accute.png",
  },
  {
    quote:
      "We needed bulk uniforms for our operations teams across multiple locations. PrimeMark delivered on time with consistent quality. Their communication throughout the process was excellent.",
    name: "Fatima Ali",
    title: "Procurement Director",
    company: "C-Shine Group",
    location: "Lahore",
    logoPath: "/clients/cshine.png",
  },
  {
    quote:
      "Working with PrimeMark for our retail staff apparel has been seamless. They understand brand alignment and deliver exactly what we need. The customization options are comprehensive.",
    name: "Zain Malik",
    title: "Brand Manager",
    company: "Jugaarh",
    location: "",
    logoPath: "/clients/jugaarh.png",
  },
  {
    quote:
      "Our outlet staff uniforms needed to be both functional and brand-consistent. PrimeMark handled everything from fabric selection to final delivery. Very professional service.",
    name: "Sara Khan",
    title: "Retail Operations Lead",
    company: "Creemees",
    location: "Lahore",
    logoPath: "/clients/creemees.png",
  },
  {
    quote:
      "Kitchen and front-of-house uniforms require durability and proper fit. PrimeMark delivered uniforms that meet our standards and have held up well through daily use.",
    name: "Omar Sheikh",
    title: "Restaurant Manager",
    company: "Izmir Wok",
    location: "Lahore",
    logoPath: "/clients/izmirwok.png",
  },
  {
    quote:
      "For our events and branding needs, PrimeMark provided quality staff uniforms and event shirts. The customization process was straightforward, and the final products exceeded expectations.",
    name: "Ayesha Raza",
    title: "Events Coordinator",
    company: "KLIX",
    location: "Lahore",
    logoPath: "/clients/klix.png",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate how many testimonials to show per view based on screen size
  const getItemsPerView = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth >= 1024) return 3; // lg: 3 items
    if (window.innerWidth >= 768) return 2; // md: 2 items
    return 1; // sm: 1 item
  };

  const [itemsPerView, setItemsPerView] = useState(3);

  // Update items per view on resize
  useEffect(() => {
    if (typeof window === "undefined") return;
    const updateItemsPerView = () => {
      const newItemsPerView = getItemsPerView();
      setItemsPerView(newItemsPerView);
      // Reset index if it's out of bounds after resize
      const newMaxIndex = Math.max(0, testimonials.length - newItemsPerView);
      setCurrentIndex((prev) => Math.min(prev, newMaxIndex));
    };
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <Section className="bg-slate-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Trusted by businesses worldwide for quality and reliability.
        </p>
      </div>

      {/* Testimonials Carousel */}
      <div className="relative">
        {/* Navigation Arrows */}
        {testimonials.length > itemsPerView && (
          <>
            <button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 lg:-translate-x-8 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-white border border-slate-300 shadow-md hover:bg-slate-50 hover:border-blue-900/30 hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-slate-300 disabled:hover:shadow-md transition-all duration-300 ease-in-out flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6 text-slate-700 group-hover:text-blue-900 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={goToNext}
              disabled={currentIndex >= maxIndex}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 lg:translate-x-8 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-white border border-slate-300 shadow-md hover:bg-slate-50 hover:border-blue-900/30 hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-slate-300 disabled:hover:shadow-md transition-all duration-300 ease-in-out flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Next testimonial"
            >
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6 text-slate-700 group-hover:text-blue-900 transition-colors"
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
            </button>
          </>
        )}

        {/* Testimonials Container */}
        <div className="overflow-hidden mx-4 sm:mx-8 lg:mx-16">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out h-full flex flex-col">
                  {/* Quote icon */}
                  <svg
                    className="w-8 h-8 text-blue-900/20 mb-4 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-slate-700 mb-6 leading-relaxed flex-1">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                    <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 p-2">
                      <Image
                        src={testimonial.logoPath}
                        alt={`${testimonial.company} logo`}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-slate-900 font-medium text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-slate-500 text-xs">
                        {testimonial.title}
                      </p>
                      <p className="text-slate-500 text-xs mt-0.5">
                        {testimonial.company}
                        {testimonial.location && `, ${testimonial.location}`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        {testimonials.length > itemsPerView && (
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-50 ${
                  currentIndex === index
                    ? "bg-blue-900 w-8"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
