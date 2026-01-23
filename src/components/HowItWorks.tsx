"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { fadeInUp, staggerContainer, cardReveal, viewportSettings } from "@/lib/motion/variants";

const steps = [
  {
    number: "01",
    title: "Sample",
    description:
      "Share your requirements. We create samples with your specifications for approval before bulk production.",
    timeline: "7-14 days",
    details: "Physical samples delivered for fit, fabric, and quality review. Modifications available before approval.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Production",
    description:
      "Once approved, we begin manufacturing with rigorous quality control checks at every stage.",
    timeline: "2-6 weeks",
    details: "Regular progress updates provided. Quality control at multiple checkpoints. Payment terms: 30% deposit, 70% before shipping.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Delivery",
    description:
      "Your order is carefully packaged and shipped worldwide with tracking and documentation.",
    timeline: "1-3 weeks",
    details: "FOB, CIF, or door-to-door shipping options. Complete documentation for customs. Tracking provided.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
  },
];

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
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A streamlined process from initial inquiry to final delivery.
            </p>
          </motion.div>
        )}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={cardReveal}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              {/* Connector line - animated */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500/40 to-slate-200"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={viewportSettings}
                  transition={{ delay: 0.4 + index * 0.25, duration: 0.6 }}
                  style={{ transformOrigin: "left center" }}
                />
              )}
              <div className="relative z-10 flex flex-col items-center text-center group">
                {/* Animated circle with number */}
                <div
                  className="w-24 h-24 rounded-full bg-white border-2 border-blue-900 flex items-center justify-center mb-6 shadow-sm transition-all duration-500 ease-out group-hover:shadow-lg group-hover:border-blue-700 group-hover:scale-105"
                >
                  <span className="text-3xl font-bold text-blue-900 transition-transform duration-300 group-hover:scale-110">
                    {step.number}
                  </span>
                </div>

                {/* Icon badge */}
                <div className="absolute top-16 right-1/2 translate-x-10 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 transition-all duration-300 group-hover:bg-blue-200 group-hover:scale-110">
                  {step.icon}
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-2 transition-colors duration-300 group-hover:text-blue-900">
                  {step.title}
                </h3>
                <p className="text-sm text-blue-800 mb-3 font-medium">
                  {step.timeline}
                </p>
                <p className="text-slate-600 max-w-xs mb-3">{step.description}</p>
                <p className="text-xs text-slate-500 max-w-xs">{step.details}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
