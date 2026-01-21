"use client";

import { ReactNode } from "react";
import AnimatedSection from "./AnimatedSection";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  animate?: boolean;
  animationDelay?: number;
}

export default function Section({
  id,
  children,
  className = "",
  fullWidth = false,
  animate = true,
  animationDelay = 0,
}: SectionProps) {
  const content = (
    <div className={fullWidth ? "w-full" : "mx-auto max-w-6xl"}>
      {children}
    </div>
  );

  if (!animate) {
    return (
      <section
        id={id}
        className={`px-4 sm:px-6 lg:px-8 py-16 md:py-24 ${className}`}
      >
        {content}
      </section>
    );
  }

  return (
    <section
      id={id}
      className={`px-4 sm:px-6 lg:px-8 py-16 md:py-24 ${className}`}
    >
      <AnimatedSection delay={animationDelay} direction="up">
        {content}
      </AnimatedSection>
    </section>
  );
}
