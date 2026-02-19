"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Section from "./Section";

const steps = [
  {
    number: "01",
    title: "Requirements & Consultation",
    description:
      "Share your product needs, specifications, and quantities. We discuss materials, customization, and timelines.",
    image: "/how it works/Requirements & Consultation.png",
  },
  {
    number: "02",
    title: "Sampling & Approvals",
    description:
      "We create physical samples for your review. Refine fit, fabric, and finish before bulk production.",
    image: "/how it works/Sampling & Approvals.png",
  },
  {
    number: "03",
    title: "Production",
    description:
      "Manufacturing begins with rigorous quality control at every stage. Regular progress updates provided.",
    image: "/how it works/Production.png",
  },
  {
    number: "04",
    title: "Inspection & Delivery",
    description:
      "Final QC inspection, careful packaging, and worldwide shipping with full documentation.",
    image: "/how it works/Inspection & Delivery.png",
  },
];

// Premium easing curve
const premiumEase = [0.25, 0.1, 0.25, 1] as const;

type Step = (typeof steps)[number];

function StepCard({ step, index }: { step: Step; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm overflow-hidden"
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
            y: -6,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
            borderColor: "rgba(201, 168, 76, 0.3)",
          }
      }
    >
      {/* Image container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={step.image}
          alt={step.title}
          fill
          className={`object-cover transition-transform duration-300 ease-out ${
            isHovered ? "scale-[1.02]" : "scale-100"
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Step number badge */}
        <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-[#C9A84C] flex items-center justify-center shadow-lg">
          <span className="font-stat text-lg text-[#080C14]">{step.number}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 text-center">
        {/* Title */}
        <h3
          className={`font-heading text-lg text-[var(--color-text-primary)] mb-2 transition-colors duration-300 ${
            isHovered ? "text-[#C9A84C]" : ""
          }`}
        >
          {step.title}
        </h3>

        {/* Description */}
        <p className="font-body text-[var(--color-text-secondary)] text-sm">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

interface HowItWorksProps {
  hideHeader?: boolean;
}

export default function HowItWorks({ hideHeader = false }: HowItWorksProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="process" className="bg-section-elevated" animate={false}>
      <div ref={sectionRef}>
        {!hideHeader && (
          <div className="text-center mb-16">
            {/* Eyebrow */}
            <motion.div
              className="font-eyebrow text-[#C9A84C] mb-4"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: premiumEase }}
            >
              Our Process
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="font-display text-3xl sm:text-4xl text-[var(--color-text-primary)] mb-4"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: premiumEase }}
            >
              How It Works
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              className="font-body text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: premiumEase }}
            >
              A streamlined process from initial inquiry to final delivery.
            </motion.p>
          </div>
        )}

        {/* Timeline container */}
        <div className="relative">
          {/* Golden connecting line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent z-0" />

          {/* Steps grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                step={step}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
