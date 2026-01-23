"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { heroStagger, heroItem, cardReveal, viewportSettings } from "@/lib/motion/variants";

export default function Hero() {
  // Intro reveal states - coordinated sequence
  const [introPhase, setIntroPhase] = useState<"initial" | "background" | "content" | "complete">("initial");
  const [imageLoaded, setImageLoaded] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reducedMotion = mediaQuery.matches;
    setPrefersReducedMotion(reducedMotion);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    // Premium intro sequence - fast, coordinated reveal
    if (reducedMotion) {
      // Skip animation for reduced motion
      setIntroPhase("complete");
    } else {
      // Phase 1: Initial pause (very brief)
      const bgTimer = setTimeout(() => setIntroPhase("background"), 50);
      // Phase 2: Content begins revealing
      const contentTimer = setTimeout(() => setIntroPhase("content"), 200);
      // Phase 3: Complete (enables interactions)
      const completeTimer = setTimeout(() => setIntroPhase("complete"), 900);

      return () => {
        mediaQuery.removeEventListener("change", handleChange);
        clearTimeout(bgTimer);
        clearTimeout(contentTimer);
        clearTimeout(completeTimer);
      };
    }

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Subtle parallax effect on scroll
  useEffect(() => {
    if (prefersReducedMotion || introPhase !== "complete") return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (heroRef.current) {
            const scrolled = window.scrollY;
            const rate = scrolled * 0.12;
            setParallaxOffset(Math.min(rate, 80));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prefersReducedMotion, introPhase]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const stats = [
    {
      label: "15+ Years",
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
      label: "200+ Clients",
      description: "Global",
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

  // Check if content should be visible
  const showContent = introPhase === "content" || introPhase === "complete";
  const showBackground = introPhase !== "initial";

  // Premium easing curve - starts slow, accelerates, ends soft
  const premiumEase = "cubic-bezier(0.22, 1, 0.36, 1)";

  // Staggered content reveal with tight timing
  const getContentStyle = (order: number) => {
    if (prefersReducedMotion) {
      return { opacity: 1, transform: "none" };
    }

    const baseDelay = order * 60; // 60ms stagger between elements

    return {
      opacity: showContent ? 1 : 0,
      transform: showContent ? "translateY(0)" : "translateY(20px)",
      transition: `opacity 0.5s ${premiumEase} ${baseDelay}ms, transform 0.5s ${premiumEase} ${baseDelay}ms`,
    };
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background Image with Premium Reveal */}
      <div
        className="absolute inset-0"
        style={{
          opacity: showBackground && imageLoaded ? 1 : 0,
          transform: prefersReducedMotion
            ? "none"
            : showBackground
              ? `translateY(${parallaxOffset}px) scale(1.02)`
              : "scale(1.05)",
          transition: prefersReducedMotion
            ? "none"
            : `opacity 0.7s ${premiumEase}, transform 0.8s ${premiumEase}`,
          willChange: prefersReducedMotion ? "auto" : "transform, opacity",
        }}
      >
        <Image
          src="/branding/home2.png"
          alt="PrimeMark Apparel - Manufacturing Facility"
          fill
          className="object-cover"
          priority
          quality={90}
          onLoad={handleImageLoad}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/40"
          style={{
            opacity: showBackground ? 1 : 0,
            transition: `opacity 0.6s ${premiumEase} 0.1s`,
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="max-w-2xl">
          <motion.div
            className="space-y-8"
            variants={heroStagger}
            initial="hidden"
            animate={introPhase === "content" || introPhase === "complete" ? "visible" : "hidden"}
          >
            {/* Headline */}
            <motion.h1
              variants={heroItem}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Premium bulk apparel manufacturing -{" "}
              <span className="text-blue-400">made in Pakistan</span>, supplied
              at scale.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={heroItem}
              className="text-lg sm:text-xl text-slate-200 max-w-xl leading-relaxed"
            >
              Uniforms, scrubs, industrial workwear, hoodies, denim, and custom
              apparel. Top-tier quality, competitive bulk pricing, and reliable
              delivery.
            </motion.p>

            {/* Trust statement */}
            <motion.p
              variants={heroItem}
              className="text-base sm:text-lg text-blue-300 font-medium max-w-xl"
            >
              Trusted by 200+ global brands and procurement teams for consistent quality and on-time delivery.
            </motion.p>

            {/* Stats Grid with stagger */}
            <motion.div
              variants={heroStagger}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={cardReveal}
                  className="group flex flex-col items-center justify-center p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg h-[100px] cursor-default transition-all duration-300 ease-out hover:bg-white/15 hover:scale-[1.02]"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="text-blue-400 mb-2 shrink-0 transition-transform duration-300 ease-out group-hover:scale-110">
                    {stat.icon}
                  </div>
                  <div className="text-lg font-bold text-white text-center mb-0.5 leading-tight">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-300 text-center leading-tight">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={heroItem}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/rfq"
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white text-slate-900 rounded-lg transition-all duration-300 ease-out hover:bg-blue-50 hover:shadow-xl hover:shadow-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  <span>Request a Quote</span>
                  <motion.svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/samples"
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white/10 backdrop-blur-sm border-2 border-white/80 text-white rounded-lg transition-all duration-300 ease-out hover:bg-white/20 hover:border-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  <span>Request Samples</span>
                  <motion.svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </motion.svg>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - appears last */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        style={{
          opacity: introPhase === "complete" ? 1 : 0,
          transform: introPhase === "complete" ? "translateY(0)" : "translateY(10px)",
          transition: prefersReducedMotion ? "none" : `opacity 0.4s ${premiumEase} 0.1s, transform 0.4s ${premiumEase} 0.1s`,
        }}
      >
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div
              className="w-1.5 h-1.5 bg-white/60 rounded-full"
              style={{
                animation: prefersReducedMotion ? "none" : "scrollBounce 2s ease-in-out infinite",
                animationDelay: "1s",
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollBounce {
          0%, 100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(12px);
            opacity: 0.3;
          }
        }
      `}</style>
    </section>
  );
}
