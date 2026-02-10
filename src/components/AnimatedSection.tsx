"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const initialPrefersReducedMotion = mediaQuery.matches;
    setPrefersReducedMotion(initialPrefersReducedMotion);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    // Intersection Observer with improved settings for smoother scroll animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve after animation triggers to improve performance
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05, // Trigger when 5% of element is visible
        rootMargin: "0px 0px 100px 0px", // Trigger 100px BEFORE element enters viewport
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      // Check if element is already visible on mount
      const rect = currentRef.getBoundingClientRect();
      const isAlreadyVisible =
        rect.top < window.innerHeight + 100 &&
        rect.bottom > -100;

      if (isAlreadyVisible && !initialPrefersReducedMotion) {
        // Small delay to ensure smooth animation even for visible elements
        setTimeout(() => setIsVisible(true), 50);
      } else {
        observer.observe(currentRef);
      }
    }

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getTransform = () => {
    if (prefersReducedMotion || isVisible) return "translate(0, 0)";

    switch (direction) {
      case "up":
        return "translateY(16px)";
      case "down":
        return "translateY(-16px)";
      case "left":
        return "translateX(16px)";
      case "right":
        return "translateX(-16px)";
      default:
        return "translate(0, 0)";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: prefersReducedMotion ? 1 : isVisible ? 1 : 0,
        transform: getTransform(),
        transition: prefersReducedMotion
          ? "none"
          : `opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: prefersReducedMotion ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
