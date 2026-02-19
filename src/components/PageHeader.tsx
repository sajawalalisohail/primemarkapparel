"use client";

import { motion } from "framer-motion";
import { easeOut } from "@/lib/motion/variants";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  eyebrow?: string;
}

export default function PageHeader({ title, subtitle, eyebrow }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background - Gradient with subtle gold accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)] via-[var(--color-bg)] to-[var(--color-surface)]" />

      {/* Radial Gold Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[var(--color-accent-glow)] opacity-30 blur-[100px] rounded-full pointer-events-none" />

      {/* Dot Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-accent) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Eyebrow Label */}
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="font-eyebrow text-[var(--color-accent)] mb-4 inline-block"
          >
            {eyebrow}
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl text-[var(--color-text-primary)] mb-6"
        >
          {title}
        </motion.h1>

        {/* Decorative Separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
          className="h-1 w-24 bg-[var(--color-accent)] mx-auto mb-6 rounded-full"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: easeOut }}
          className="font-body text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
