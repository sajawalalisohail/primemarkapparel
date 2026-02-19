"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

const stats = [
  {
    label: "20+ Years",
    description: "Experience",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "10M+ Units",
    description: "Produced",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    label: "100+ Clients",
    description: "Worldwide",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "99%+ Quality",
    description: "Pass Rate",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const trustItems = [
  {
    label: "Competitive FOB/CIF Freight",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
  {
    label: "No Pattern Development Fee",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
      </svg>
    ),
  },
  {
    label: "Branding Solutions",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
  },
  {
    label: "Premium Quality",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

// Premium easing curve
const premiumEase = [0.25, 0.1, 0.25, 1] as const;

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Animation helper
  const fadeInUp = (delay: number) => ({
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: shouldReduceMotion ? 0 : 0.6,
      delay: shouldReduceMotion ? 0 : delay,
      ease: premiumEase,
    },
  });

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col pt-20 overflow-hidden"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/branding/home2.png"
          alt="PrimeMark Apparel - Manufacturing Facility"
          fill
          className="object-cover"
          priority
          quality={90}
        />

        {/* Gradient overlay - dark on left, transparent on right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(15, 22, 35, 0.9) 0%, rgba(15, 22, 35, 0.8) 40%, rgba(15, 22, 35, 0.4) 100%)",
          }}
        />

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/textures/noise.svg')",
            backgroundRepeat: "repeat",
            opacity: 0.03,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full">
          <div className="max-w-2xl">
            <div className="space-y-4">
              {/* Eyebrow label - delay 0s */}
              <motion.div
                className="inline-flex items-center px-3 py-1 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full"
                {...fadeInUp(0)}
              >
                <span className="font-eyebrow text-sm text-[#C9A84C]">
                  Bulk Apparel Manufacturer
                </span>
              </motion.div>

              {/* H1 with staggered lines */}
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                <motion.span className="block" {...fadeInUp(0.15)}>
                  Premium bulk apparel
                </motion.span>
                <motion.span className="block" {...fadeInUp(0.3)}>
                  manufacturing &ndash;
                </motion.span>
                <motion.span className="block text-[#C9A84C]" {...fadeInUp(0.45)}>
                  Made in Pakistan
                </motion.span>
              </h1>

              {/* Sub-copy - delay 0.6s */}
              <motion.p
                className="font-body text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed"
                {...fadeInUp(0.6)}
              >
                Custom Apparel, Uniforms, Industrial Workwear and Denim. Top-tier
                quality, competitive bulk pricing, and reliable delivery.
              </motion.p>

              {/* Trust line - delay 0.7s */}
              <motion.p
                className="text-sm sm:text-base text-[#C9A84C] font-medium max-w-xl"
                {...fadeInUp(0.7)}
              >
                Trusted by 100+ businesses worldwide for consistent quality and
                on-time delivery.
              </motion.p>

              {/* Stats Grid - stagger starting at 0.8s */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="group relative flex flex-col items-center justify-center p-3 sm:p-4 bg-[var(--color-surface)]/10 backdrop-blur-sm rounded-lg cursor-default overflow-hidden border border-white/10 transition-all duration-300"
                    {...fadeInUp(0.8 + index * 0.1)}
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                          y: -4,
                          boxShadow: "0 8px 30px rgba(201, 168, 76, 0.15)",
                          borderColor: "rgba(201, 168, 76, 0.3)",
                        }
                    }
                  >
                    {/* Gold left border */}
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#C9A84C]" />

                    {/* Icon */}
                    <div className="text-[#C9A84C] mb-2 shrink-0 transition-transform duration-300 ease-out group-hover:scale-110">
                      {stat.icon}
                    </div>

                    {/* Number - Montserrat Black */}
                    <div className="font-stat text-base sm:text-lg text-white text-center mb-0.5 leading-tight">
                      {stat.label}
                    </div>

                    {/* Description */}
                    <div className="text-[10px] sm:text-xs text-slate-400 text-center leading-tight uppercase tracking-wider">
                      {stat.description}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons - delay 1.1s */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3"
                {...fadeInUp(1.1)}
              >
                {/* Primary Button - Solid Gold */}
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                >
                  <Link
                    href="/rfq"
                    className="group inline-flex items-center justify-center px-5 py-2.5 font-button text-sm bg-[#C9A84C] text-[#080C14] rounded-lg transition-all duration-300 ease-out hover:bg-[#D4B65D] hover:shadow-xl hover:shadow-[#C9A84C]/30 focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:ring-offset-2 focus:ring-offset-[#080C14]"
                  >
                    <span>Request a Quote</span>
                    <svg
                      className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </motion.div>

                {/* Secondary Button - Transparent with Gold Border + Fill Animation */}
                <motion.div
                  className="relative overflow-hidden rounded-lg"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                >
                  {/* Background fill layer */}
                  <motion.div
                    className="absolute inset-0 bg-[#C9A84C]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    style={{ originX: 0 }}
                    transition={{ duration: 0.3, ease: premiumEase }}
                  />
                  <Link
                    href="/samples"
                    className="relative z-10 group inline-flex items-center justify-center px-5 py-2.5 font-button text-sm border-2 border-[#C9A84C] text-[#C9A84C] hover:text-[#080C14] rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:ring-offset-2 focus:ring-offset-[#080C14]"
                  >
                    <span>Request Samples</span>
                    <svg
                      className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Marquee Ticker Bar */}
      <div
        className="relative z-10 border-t border-b border-white/20 overflow-hidden"
        style={{
          backgroundColor: "rgba(15, 22, 35, 0.7)",
        }}
      >
        <div className="py-3">
          <motion.div
            className="flex whitespace-nowrap"
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
            {/* Duplicate items for seamless loop - 4x for safety on wide screens */}
            {[...trustItems, ...trustItems, ...trustItems, ...trustItems].map((item, index) => (
              <div key={index} className="flex items-center mx-6 sm:mx-8">
                <div className="text-[#C9A84C] mr-2">{item.icon}</div>
                <span className="text-xs font-medium text-white/90">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>


    </section>
  );
}
