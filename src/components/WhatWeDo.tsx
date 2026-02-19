"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Section from "./Section";

const services = [
  {
    title: "Custom Apparel Manufacturing",
    description:
      "From concept to finished product - we manufacture custom apparel to your exact specifications, fabrics, and branding.",
    image: "/What we do/custom apparel manufacturing.png",
  },
  {
    title: "Bulk Production & Private Label",
    description:
      "Scale your brand with reliable bulk manufacturing and full private-label services including custom tags, labels, and packaging.",
    image: "/What we do/bulk production and private label.png",
  },
  {
    title: "Workwear & Uniform Supply",
    description:
      "Durable, safety-compliant uniforms and industrial workwear built for demanding environments and daily use.",
    image: "/What we do/workwear and uniform supply.png",
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
      className="group relative rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm overflow-hidden"
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
      {/* Image container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className={`object-cover transition-transform duration-300 ease-out ${
            isHovered ? "scale-[1.02]" : "scale-100"
          }`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Animated gold top border */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 bg-[#C9A84C]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          style={{ originX: 0 }}
          transition={{ duration: 0.3, ease: premiumEase }}
        />

        {/* Title */}
        <h3
          className={`font-heading text-xl text-[var(--color-text-primary)] mb-2 transition-colors duration-300 ${
            isHovered ? "text-[#C9A84C]" : ""
          }`}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p className="font-body text-[var(--color-text-secondary)] leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function WhatWeDo() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section className="bg-section-primary">
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
            className="font-display text-3xl sm:text-4xl text-[var(--color-text-primary)] mb-4"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: premiumEase }}
          >
            What We Do
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="font-body text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto"
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
