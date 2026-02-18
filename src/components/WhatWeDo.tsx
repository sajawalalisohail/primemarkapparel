"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Section from "./Section";

const services = [
  {
    title: "Custom Apparel Manufacturing",
    description:
      "From concept to finished product — we manufacture custom apparel to your exact specifications, fabrics, and branding.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    title: "Bulk Production & Private Label",
    description:
      "Scale your brand with reliable bulk manufacturing and full private-label services including custom tags, labels, and packaging.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Workwear & Uniform Supply",
    description:
      "Durable, safety-compliant uniforms and industrial workwear built for demanding environments and daily use.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

// Premium easing curve
const premiumEase = [0.25, 0.1, 0.25, 1] as const;

// Service card component with hover effects
interface ServiceCardProps {
  service: (typeof services)[0];
  index: number;
  shouldReduceMotion: boolean | null;
}

function ServiceCard({ service, index, shouldReduceMotion }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative p-6 rounded-xl bg-[#0F1623] border border-white/10 shadow-sm overflow-hidden"
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: shouldReduceMotion ? 0 : index * 0.15,
        ease: premiumEase,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
            y: -8,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
            borderColor: "rgba(201, 168, 76, 0.3)",
          }
      }
    >
      {/* Animated gold top border */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-[#C9A84C]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        style={{ originX: 0 }}
        transition={{ duration: 0.3, ease: premiumEase }}
      />

      {/* Icon container */}
      <div
        className={`mb-4 p-3 inline-block rounded-lg transition-all duration-300 ${isHovered
          ? "bg-[#C9A84C]/10 text-[#C9A84C]"
          : "bg-white/5 text-slate-300"
          }`}
      >
        {service.icon}
      </div>

      {/* Title */}
      <h3
        className={`font-heading text-xl text-white mb-2 transition-colors duration-300 ${isHovered ? "text-[#C9A84C]" : ""
          }`}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p className="font-body text-slate-400 leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
}

export default function WhatWeDo() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section className="bg-[#080C14]">
      <div>
        {/* Header */}
        <div className="text-center mb-12">
          {/* Eyebrow */}
          <motion.div
            className="font-eyebrow text-[#C9A84C] mb-4"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: premiumEase }}
          >
            Services
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="font-display text-3xl sm:text-4xl text-white mb-4"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: premiumEase }}
          >
            What We Do
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="font-body text-lg text-slate-400 max-w-2xl mx-auto"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: premiumEase }}
          >
            End-to-end apparel solutions for brands, suppliers, and businesses.
          </motion.p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
