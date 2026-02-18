"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Section from "./Section";

const industries = [
  {
    title: "Hospitals & Clinics",
    description: "Medical-grade scrubs and lab coats",
    moq: "250–350 units",
    leadTime: "4–6 weeks",
    specs: ["Fluid-resistant fabrics", "OEKO-TEX options", "Color-coded"],
    image: "/industries/hospitals.png",
  },
  {
    title: "Construction",
    description: "High-visibility and safety workwear",
    moq: "300–500 units",
    leadTime: "5–7 weeks",
    specs: ["Hi-vis options", "Reinforced knees", "EN 20471 compliant"],
    image: "/industries/construction.png",
  },
  {
    title: "Restaurants",
    description: "Chef coats, aprons, and service uniforms",
    moq: "200–300 units",
    leadTime: "3–5 weeks",
    specs: ["Stain-resistant finish", "Heat-resistant options"],
    image: "/industries/restaurants.png",
  },
  {
    title: "Retail Brands",
    description: "Private label and branded apparel lines",
    moq: "200–300 units",
    leadTime: "4–6 weeks",
    specs: ["Full private label", "Custom hangtags", "Retail-ready packaging"],
    image: "/industries/retail.png",
  },
  {
    title: "Logistics",
    description: "Durable uniforms for warehouse and delivery",
    moq: "300–400 units",
    leadTime: "4–6 weeks",
    specs: ["Durable poly-cotton", "Hi-vis stripes", "ID badge loops"],
    image: "/industries/logistics.png",
  },
  {
    title: "Schools",
    description: "Student uniforms and PE kits",
    moq: "200–300 units",
    leadTime: "4–6 weeks",
    specs: ["Color matching", "Embroidered crests", "PE kit available"],
    image: "/industries/school.png",
  },
];

// Premium easing curve
const premiumEase = [0.25, 0.1, 0.25, 1] as const;

// Industry card component
interface IndustryCardProps {
  industry: (typeof industries)[0];
  index: number;
  shouldReduceMotion: boolean | null;
}

function IndustryCard({ industry, index, shouldReduceMotion }: IndustryCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative rounded-2xl bg-[#0F1623] border border-white/10 shadow-sm overflow-hidden flex flex-col"
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: shouldReduceMotion ? 0 : index * 0.1,
        ease: premiumEase,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
            y: -8,
            boxShadow: "0 25px 50px -12px rgba(201, 168, 76, 0.15)",
          }
      }
    >
      {/* Animated gold top border */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-[#C9A84C] z-20"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        style={{ originX: 0 }}
        transition={{ duration: 0.3, ease: premiumEase }}
      />

      {/* Image */}
      <div className="relative aspect-[4/3] bg-[#080C14] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080C14]/80 z-10" />
        <Image
          src={industry.image}
          alt={`${industry.title} industry - ${industry.description}`}
          fill
          className={`object-cover transition-transform duration-500 ${isHovered ? "scale-105" : "scale-100"
            }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Title */}
        <h3
          className={`font-heading text-lg text-white mb-2 transition-colors duration-300 ${isHovered ? "text-[#C9A84C]" : ""
            }`}
        >
          {industry.title}
        </h3>

        {/* Description */}
        <p className="font-body text-sm text-slate-400 mb-3">{industry.description}</p>

        {/* Key Specs - Gold styling */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {industry.specs.map((spec, specIndex) => (
            <span
              key={specIndex}
              className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/20 rounded"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* B2B Metadata */}
        <div className="space-y-2 pt-4 border-t border-white/10 mt-auto">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500">MOQ:</span>
            <span className="px-2 py-0.5 bg-white/5 text-slate-300 font-medium rounded">
              {industry.moq}
            </span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500">Lead Time:</span>
            <span className="px-2 py-0.5 bg-white/5 text-slate-300 font-medium rounded">
              {industry.leadTime}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface IndustriesProps {
  hideHeader?: boolean;
}

export default function Industries({ hideHeader = false }: IndustriesProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="industries" className="bg-[#080C14]">
      {!hideHeader && (
        <div className="text-center mb-12">
          {/* Eyebrow */}
          <motion.div
            className="font-eyebrow text-[#C9A84C] mb-4"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: premiumEase }}
          >
            Industries We Serve
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="font-display text-3xl sm:text-4xl text-white mb-4"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: premiumEase }}
          >
            Industries We Serve
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="font-body text-lg text-slate-400 max-w-2xl mx-auto"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: premiumEase }}
          >
            Trusted by businesses across diverse sectors for reliable bulk apparel
            supply.
          </motion.p>
        </div>
      )}

      {/* Industry cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((industry, index) => (
          <IndustryCard
            key={index}
            industry={industry}
            index={index}
            shouldReduceMotion={shouldReduceMotion}
          />
        ))}
      </div>
    </Section>
  );
}
