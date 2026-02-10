"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Section from "./Section";

const steps = [
  {
    number: "01",
    title: "Requirements & Consultation",
    description:
      "Share your product needs, specifications, and quantities. We discuss materials, customization, and timelines.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    placeholderColor: "bg-blue-50",
    placeholderIcon: (
      <svg className="w-16 h-16 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Sampling & Approvals",
    description:
      "We create physical samples for your review. Refine fit, fabric, and finish before bulk production.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    placeholderColor: "bg-emerald-50",
    placeholderIcon: (
      <svg className="w-16 h-16 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Production",
    description:
      "Manufacturing begins with rigorous quality control at every stage. Regular progress updates provided.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    placeholderColor: "bg-amber-50",
    placeholderIcon: (
      <svg className="w-16 h-16 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Inspection & Delivery",
    description:
      "Final QC inspection, careful packaging, and worldwide shipping with full documentation.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    placeholderColor: "bg-violet-50",
    placeholderIcon: (
      <svg className="w-16 h-16 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
  },
];

type Step = (typeof steps)[number];

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

function StepCard({ step, index, totalSteps }: { step: Step; index: number; totalSteps: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-10, 10]
  );

  return (
    <motion.div
      ref={cardRef}
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px 80px 0px", amount: 0.2 }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: easeOut,
      }}
      whileHover={{ y: -4, scale: 1.02 }}
    >
      {/* Connector line */}
      {index < totalSteps - 1 && (
        <div className="hidden lg:block absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500/30 to-slate-200" />
      )}
      <div className="relative z-10 flex flex-col items-center text-center group">
        {/* Placeholder image with scroll parallax */}
        <div
          className={`w-full h-36 ${step.placeholderColor} rounded-xl overflow-hidden mb-5 transition-shadow duration-300 group-hover:shadow-md`}
        >
          <motion.div
            className="w-full h-full flex items-center justify-center"
            style={{ y: imageY }}
          >
            {step.placeholderIcon}
          </motion.div>
        </div>

        {/* Step number + icon */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl font-bold text-blue-900">
            {step.number}
          </span>
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 transition-all duration-300 group-hover:bg-blue-200 group-hover:scale-110">
            {step.icon}
          </div>
        </div>

        <h3 className="text-lg font-semibold text-slate-900 mb-2 transition-colors duration-300 group-hover:text-blue-900">
          {step.title}
        </h3>
        <p className="text-slate-600 text-sm max-w-xs">{step.description}</p>
      </div>
    </motion.div>
  );
}

interface HowItWorksProps {
  hideHeader?: boolean;
}

export default function HowItWorks({ hideHeader = false }: HowItWorksProps) {
  return (
    <Section id="process" className="bg-white" animate={false}>
      <div>
        {!hideHeader && (
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px 80px 0px", amount: 0.2 }}
            transition={{ duration: 0.4, ease: easeOut }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A streamlined process from initial inquiry to final delivery.
            </p>
          </motion.div>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
    </Section>
  );
}
