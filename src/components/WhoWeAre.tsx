"use client";

import { motion, useReducedMotion } from "framer-motion";
import Section from "./Section";

// Premium easing curve
const premiumEase = [0.25, 0.1, 0.25, 1] as const;

export default function WhoWeAre() {
  const shouldReduceMotion = useReducedMotion();

  const fadeInUp = {
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: premiumEase },
  };

  return (
    <Section className="bg-[#0F1623] relative overflow-hidden">
      {/* Large decorative watermark */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 font-display-black text-[20rem] leading-none text-white/[0.03] pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
      >
        01
      </div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left side - Decorative element with gold accent */}
        <motion.div
          className="relative hidden lg:block"
          initial={shouldReduceMotion ? {} : { opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: premiumEase }}
        >
          <div className="relative aspect-square max-w-md mx-auto">
            {/* Gold corner accents */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-[#C9A84C]" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-[#C9A84C]" />

            {/* Inner content */}
            <div className="absolute inset-8 bg-[#080C14] border border-white/10 rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <div className="font-stat text-6xl text-[#C9A84C] mb-2">20+</div>
                <div className="font-heading text-lg text-white">Years of Excellence</div>
              </div>
            </div>

            {/* Floating accent shapes */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#C9A84C]/10 rounded-full" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#C9A84C]/5 rounded-full" />
          </div>
        </motion.div>

        {/* Right side - Text content */}
        <div className="max-w-xl lg:max-w-none">
          {/* Eyebrow */}
          <motion.div
            className="font-eyebrow text-[#C9A84C] mb-4"
            {...fadeInUp}
          >
            About Us
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mb-6"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: premiumEase }}
          >
            Who We Are
          </motion.h2>

          {/* Body text */}
          <motion.p
            className="font-body text-lg text-slate-400 leading-relaxed mb-6"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: premiumEase }}
          >
            Primemark Apparel is a custom apparel manufacturer specializing in
            bulk and private-label production for fashion brands, uniform
            suppliers, and apparel printing companies.
          </motion.p>

          <motion.p
            className="font-body text-lg text-slate-400 leading-relaxed"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: premiumEase }}
          >
            With over 20 years of hands-on manufacturing experience, our
            operations are built on proven production systems, skilled labor, and
            long-term industry knowledge. Our manufacturing foundation predates
            this platform — we launched PrimeMark to give mid-market buyers direct
            access to the same Pakistan supply chain traditionally reserved for
            large enterprises.
          </motion.p>

          {/* Mobile stats - visible only on mobile/tablet */}
          <motion.div
            className="mt-8 flex gap-8 lg:hidden"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: premiumEase }}
          >
            <div className="text-center">
              <div className="font-stat text-4xl text-[#C9A84C]">20+</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">Years</div>
            </div>
            <div className="text-center">
              <div className="font-stat text-4xl text-[#C9A84C]">10M+</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">Units</div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
