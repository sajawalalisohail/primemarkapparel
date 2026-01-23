"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(3);
  const sectionRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate items per view based on screen size
  const getItemsPerView = useCallback(() => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    // Intersection Observer for scroll animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Update items per view on resize
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

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || prefersReducedMotion) return;

    const maxIndex = Math.max(0, testimonials.length - itemsPerView);

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, itemsPerView, prefersReducedMotion]);

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

  const getHeaderAnimation = () => {
    if (prefersReducedMotion) {
      return { opacity: 1, transform: "none" };
    }
    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(24px)",
      transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
    };
  };

  const getCarouselAnimation = () => {
    if (prefersReducedMotion) {
      return { opacity: 1, transform: "none" };
    }
    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(30px)",
      transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
    };
  };

  return (
    <Section className="bg-white" animate={false}>
      <div ref={sectionRef}>
        <div className="text-center mb-12" style={getHeaderAnimation()}>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Trusted by businesses worldwide for quality and reliability.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative" style={getCarouselAnimation()}>
          {/* Navigation Arrows */}
          {testimonials.length > itemsPerView && (
            <>
              <button
                onClick={goToPrevious}
                disabled={currentIndex === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 lg:-translate-x-8 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center group transition-all duration-300 ease-out hover:bg-slate-50 hover:border-blue-900/30 hover:shadow-lg hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white disabled:hover:border-slate-200 disabled:hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-5 h-5 lg:w-6 lg:h-6 text-slate-600 transition-all duration-300 group-hover:text-blue-900 group-hover:-translate-x-0.5"
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
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 lg:translate-x-8 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center group transition-all duration-300 ease-out hover:bg-slate-50 hover:border-blue-900/30 hover:shadow-lg hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white disabled:hover:border-slate-200 disabled:hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-5 h-5 lg:w-6 lg:h-6 text-slate-600 transition-all duration-300 group-hover:text-blue-900 group-hover:translate-x-0.5"
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
                transition: prefersReducedMotion
                  ? "none"
                  : "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="group p-6 rounded-xl bg-white border border-slate-200 shadow-sm h-full flex flex-col transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 hover:border-blue-100">
                    {/* Quote icon */}
                    <svg
                      className="w-8 h-8 text-blue-900/20 mb-4 shrink-0 transition-colors duration-300 group-hover:text-blue-900/30"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-slate-700 mb-6 leading-relaxed flex-1">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                      <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 p-2 transition-all duration-300 group-hover:border-blue-200 group-hover:shadow-sm">
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
                        <p className="text-slate-900 font-semibold text-sm">
                          {testimonial.name}
                        </p>
                        <p className="text-slate-600 text-xs font-medium">
                          {testimonial.title}
                        </p>
                        <p className="text-slate-700 text-xs font-medium mt-0.5">
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

          {/* Dot Indicators */}
          {testimonials.length > itemsPerView && (
            <div className="flex justify-center items-center gap-2 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    currentIndex === index
                      ? "bg-blue-900 w-8"
                      : "bg-slate-300 w-2 hover:bg-slate-400 hover:scale-110"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Auto-play indicator */}
          {!prefersReducedMotion && (
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="text-xs text-slate-500 hover:text-slate-700 transition-colors duration-300 flex items-center gap-1.5"
                aria-label={isAutoPlaying ? "Pause auto-play" : "Resume auto-play"}
              >
                {isAutoPlaying ? (
                  <>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                    Auto-playing
                  </>
                ) : (
                  <>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Paused
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
