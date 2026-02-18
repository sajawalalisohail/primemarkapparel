"use client";

import { motion, useReducedMotion } from "framer-motion";

const points = [
  {
    title: "Established production systems",
    description:
      "Proven workflows refined over decades to deliver consistent results, order after order.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Experienced manufacturing team",
    description:
      "Skilled operators, technicians, and supervisors with hands-on apparel production expertise.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Consistent quality standards",
    description:
      "Defined checkpoints across sampling, production, and final inspection.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Competitive pricing through in-house control",
    description:
      "Direct oversight of sourcing, production, and finishing to keep costs efficient without compromising quality.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    title: "Clear communication & timelines",
    description:
      "Transparent updates, realistic lead times, and dependable delivery schedules.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

// Premium easing curve
const premiumEase = [0.25, 0.1, 0.25, 1] as const;

// Check icon that animates in
function AnimatedCheck({ delay, shouldReduceMotion }: { delay: number; shouldReduceMotion: boolean | null }) {
  return (
    <motion.div
      className="w-6 h-6 rounded-full bg-[#C9A84C] flex items-center justify-center shrink-0"
      initial={shouldReduceMotion ? {} : { scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 15,
        delay: shouldReduceMotion ? 0 : delay,
      }}
    >
      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
      </svg>
    </motion.div>
  );
}

export default function WorkWithPrimeMark() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#080C14] border-t border-white/10 relative overflow-hidden">
      {/* Background accent - blurred gold circle */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#C9A84C]/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
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
            Why Choose Us
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="font-display text-3xl sm:text-4xl text-white mb-3"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: premiumEase }}
          >
            Work With PrimeMark
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="font-body text-lg text-slate-400 max-w-xl mx-auto"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: premiumEase }}
          >
            A manufacturing partner built for reliability at scale.
          </motion.p>
        </div>

        {/* Points grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
          {points.map((point, index) => (
            <motion.div
              key={index}
              className="flex gap-4 group"
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: shouldReduceMotion ? 0 : 0.3 + index * 0.1,
                ease: premiumEase,
              }}
            >
              {/* Animated gold check icon */}
              <AnimatedCheck delay={0.4 + index * 0.1} shouldReduceMotion={shouldReduceMotion} />

              <div>
                <h3 className="font-heading text-base text-white mb-1 group-hover:text-[#C9A84C] transition-colors duration-300">
                  {point.title}
                </h3>
                <p className="font-body text-sm text-slate-400 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
