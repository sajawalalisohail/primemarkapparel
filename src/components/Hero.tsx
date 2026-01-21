"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
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
      label: "ISO Certified",
      description: "Factories",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
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
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="max-w-2xl">
          {/* Left Content on Dark Overlay */}
          <div className="space-y-8">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
              }}
            >
              Premium bulk apparel manufacturing - {" "}
              <span className="text-blue-400">made in Pakistan</span>, supplied
              at scale.
            </h1>
            <p
              className="text-lg sm:text-xl text-slate-200 max-w-xl leading-relaxed"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s",
              }}
            >
              Uniforms, scrubs, industrial workwear, hoodies, denim, and custom
              apparel. Top-tier quality, competitive bulk pricing, and reliable
              delivery.
            </p>
            
            {/* Credibility Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/15 hover:scale-105 transition-all duration-300"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.5s ease-out ${0.4 + index * 0.1}s, transform 0.5s ease-out ${0.4 + index * 0.1}s`,
                  }}
                >
                  <div className="text-blue-400 mb-2">{stat.icon}</div>
                  <div className="text-xl font-bold text-white">{stat.label}</div>
                  <div className="text-xs text-slate-300">{stat.description}</div>
                </div>
              ))}
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease-out 0.8s, transform 0.6s ease-out 0.8s",
              }}
            >
              <Link
                href="/rfq"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-white/10 backdrop-blur-sm border-2 border-white/80 text-white rounded-lg hover:bg-white/20 hover:border-white hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 font-semibold"
              >
                Request a Quote
              </Link>
              <Link
                href="/samples"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-white/10 backdrop-blur-sm border-2 border-white/80 text-white rounded-lg hover:bg-white/20 hover:border-white hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 font-semibold"
              >
                Get Samples
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
