"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
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

// Premium easing curve
const premiumEase = [0.25, 0.1, 0.25, 1] as const;

export default function ClientsAndTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(3);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const getItemsPerView = useCallback(() => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateItemsPerView = () => {
      const newItemsPerView = getItemsPerView();
      setItemsPerView(newItemsPerView);
      const newMaxIndex = Math.max(0, testimonials.length - newItemsPerView);
      setCurrentIndex((prev) => Math.min(prev, newMaxIndex));
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, [getItemsPerView]);

  useEffect(() => {
    if (!isAutoPlaying || shouldReduceMotion) return;

    const maxIndex = Math.max(0, testimonials.length - itemsPerView);

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, itemsPerView, shouldReduceMotion]);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    setIsAutoPlaying(false);
  };

  return (
    <Section className="bg-section-elevated" animate={false}>
      <div>
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* Eyebrow */}
          <motion.div
            className="font-eyebrow text-[#C9A84C] mb-4"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: premiumEase }}
          >
            Trusted by Brands Worldwide
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="font-display text-3xl sm:text-4xl text-[var(--color-text-primary)] mb-4"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: premiumEase }}
          >
            Our Clients & Testimonials
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="font-body text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: premiumEase }}
          >
            Trusted by businesses across multiple industries for quality and
            reliability.
          </motion.p>
        </div>

        {/* Client Logos Running Bar */}
        <motion.div
          className="relative w-full bg-[var(--color-bg)] border-y border-[var(--color-border)] overflow-hidden rounded-xl mb-12"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: premiumEase }}
        >
          {/* Gradient fade on edges - darker */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />

          <div className="py-8 sm:py-10">
            <div className="relative w-full overflow-hidden">
              <motion.div
                className="flex gap-8 sm:gap-12 lg:gap-16"
                animate={shouldReduceMotion ? {} : { x: [0, "-50%"] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
              >
                {/* First set of logos */}
                {clientLogos.map((client, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 w-40 sm:w-48 lg:w-56 group"
                  >
                    <div className="relative w-full flex flex-col items-center justify-center p-4 bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] shadow-sm transition-all duration-300 hover:border-[#C9A84C]/30 hover:shadow-md">
                      <Image
                        src={client.logoPath}
                        alt={`${client.name} logo`}
                        width={120}
                        height={60}
                        className="max-h-12 w-auto object-contain transition-all duration-300 mb-2"
                        sizes="(max-width: 768px) 120px, 160px"
                        loading="lazy"
                      />
                      <div className="text-center mt-2">
                        <p className="text-xs font-medium text-[var(--color-text-primary)] mb-0.5 group-hover:text-[#C9A84C] transition-colors duration-300">
                          {client.name}
                        </p>
                        <p className="text-[10px] text-[var(--color-text-muted)]">
                          {client.industry}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Duplicate set for seamless loop */}
                {clientLogos.map((client, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 w-40 sm:w-48 lg:w-56 group"
                  >
                    <div className="relative w-full flex flex-col items-center justify-center p-4 bg-[#0F1623] rounded-lg border border-white/10 shadow-sm transition-all duration-300 hover:border-[#C9A84C]/30 hover:shadow-md">
                      <Image
                        src={client.logoPath}
                        alt={`${client.name} logo`}
                        width={120}
                        height={60}
                        className="max-h-12 w-auto object-contain transition-all duration-300 mb-2"
                        sizes="(max-width: 768px) 120px, 160px"
                        loading="lazy"
                      />
                      <div className="text-center mt-2">
                        <p className="text-xs font-medium text-[var(--color-text-primary)] mb-0.5 group-hover:text-[#C9A84C] transition-colors duration-300">
                          {client.name}
                        </p>
                        <p className="text-[10px] text-slate-400">
                          {client.industry}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          {testimonials.length > itemsPerView && (
            <>
              <button
                onClick={goToPrevious}
                disabled={currentIndex === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 lg:-translate-x-8 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] shadow-md flex items-center justify-center group transition-all duration-300 ease-out hover:bg-[#C9A84C]/10 hover:border-[#C9A84C]/30 hover:shadow-lg hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-[var(--color-surface)] disabled:hover:border-[var(--color-border)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-5 h-5 lg:w-6 lg:h-6 text-[var(--color-text-muted)] transition-all duration-300 group-hover:text-[#C9A84C] group-hover:-translate-x-0.5"
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
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 lg:translate-x-8 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] shadow-md flex items-center justify-center group transition-all duration-300 ease-out hover:bg-[#C9A84C]/10 hover:border-[#C9A84C]/30 hover:shadow-lg hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-[var(--color-surface)] disabled:hover:border-[var(--color-border)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-5 h-5 lg:w-6 lg:h-6 text-[var(--color-text-muted)] transition-all duration-300 group-hover:text-[#C9A84C] group-hover:translate-x-0.5"
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
              className="flex"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                transition: shouldReduceMotion
                  ? "none"
                  : "transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)",
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="group relative p-8 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm h-full flex flex-col transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 hover:border-[#C9A84C]/20">
                    {/* Large decorative quotation mark */}
                    <div
                      className="absolute top-4 right-4 font-display-black text-8xl text-[#C9A84C]/[0.08] leading-none pointer-events-none select-none"
                      aria-hidden="true"
                    >
                      &ldquo;
                    </div>

                    {/* Quote icon */}
                    <svg
                      className="w-8 h-8 text-[#C9A84C]/30 mb-5 shrink-0 transition-colors duration-300 group-hover:text-[#C9A84C]/50"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>

                    {/* Quote text */}
                    <p className="font-body text-base sm:text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed flex-1 relative z-10">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    {/* Author info */}
                    <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
                      <div className="w-12 h-12 rounded-lg bg-[var(--color-surface-elevated)] border border-[var(--color-border)] flex items-center justify-center shrink-0 p-2 transition-all duration-300 group-hover:border-[#C9A84C]/30 group-hover:shadow-sm">
                        <Image
                          src={testimonial.logoPath}
                          alt={`${testimonial.company} logo`}
                          width={48}
                          height={48}
                          className="w-full h-full object-contain"
                          sizes="48px"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        {/* Name in gold */}
                        <p className="text-[#C9A84C] font-semibold text-sm">
                          {testimonial.name}
                        </p>
                        {/* Role in muted slate */}
                        <p className="text-[var(--color-text-muted)] text-xs font-medium">
                          {testimonial.title}
                        </p>
                        <p className="text-[var(--color-text-muted)] text-xs font-medium mt-0.5">
                          {testimonial.company}
                          {testimonial.location && ` • ${testimonial.location}`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators - Gold styling */}
          {testimonials.length > itemsPerView && (
            <div className="flex justify-center items-center gap-2 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080C14] ${currentIndex === index
                    ? "bg-[#C9A84C] w-8"
                    : "bg-[#C9A84C]/30 w-2 hover:bg-[#C9A84C]/50 hover:scale-110"
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
