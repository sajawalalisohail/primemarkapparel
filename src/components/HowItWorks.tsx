"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion, useInView } from "framer-motion";
import Section from "./Section";

const steps = [
  {
    number: "01",
    title: "Requirements & Consultation",
    description:
      "Share your product needs, specifications, and quantities. We discuss materials, customization, and timelines.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Sampling & Approvals",
    description:
      "We create physical samples for your review. Refine fit, fabric, and finish before bulk production.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Production",
    description:
      "Manufacturing begins with rigorous quality control at every stage. Regular progress updates provided.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Inspection & Delivery",
    description:
      "Final QC inspection, careful packaging, and worldwide shipping with full documentation.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
  },
];

// Premium easing curve
const premiumEase = [0.25, 0.1, 0.25, 1] as const;

type Step = (typeof steps)[number];

function StepCard({ step, index, totalSteps }: { step: Step; index: number; totalSteps: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const iconScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    shouldReduceMotion ? [1, 1, 1] : [0.8, 1, 0.8]
  );

  return (
    <motion.div
      ref={cardRef}
      className="relative"
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
    >
      <motion.div
        className="relative z-10 flex flex-col items-center text-center group"
        whileHover={shouldReduceMotion ? {} : { y: -6 }}
      >
        {/* Step number circle with gold border */}
        <motion.div
          className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mb-6 transition-all duration-300 ${isHovered
            ? "border-[#C9A84C] bg-[#C9A84C]/10"
            : "border-[#C9A84C]/30 bg-[#0F1623]"
            }`}
          style={{ scale: iconScale }}
        >
          <span className="font-stat text-2xl text-[#C9A84C]">{step.number}</span>
        </motion.div>

        {/* Icon */}
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 ${isHovered ? "bg-[#C9A84C] text-[#080C14]" : "bg-white/5 text-slate-300"
            }`}
        >
          {step.icon}
        </div>

        {/* Title */}
        <h3
          className={`font-heading text-lg text-white mb-2 transition-colors duration-300 ${isHovered ? "text-[#C9A84C]" : ""
            }`}
        >
          {step.title}
        </h3>

        {/* Description */}
        <p className="font-body text-slate-400 text-sm max-w-xs">{step.description}</p>
      </motion.div>
    </motion.div>
  );
}

interface HowItWorksProps {
  hideHeader?: boolean;
}

export default function HowItWorks({ hideHeader = false }: HowItWorksProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="process" className="bg-[#0F1623]" animate={false}>
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
              className="font-display text-3xl sm:text-4xl text-white mb-4"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: premiumEase }}
            >
              How It Works
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              className="font-body text-lg text-slate-400 max-w-2xl mx-auto"
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
                totalSteps={steps.length}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
