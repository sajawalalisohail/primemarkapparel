"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const distanceFromBottom = documentHeight - (scrollY + windowHeight);

      const shouldShow = scrollY > 300 && distanceFromBottom > 200;

      if (shouldShow && !shouldRender) {
        setShouldRender(true);
        // Small delay before showing for smooth animation
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsVisible(true);
          });
        });
      } else if (!shouldShow && shouldRender) {
        setIsVisible(false);
        // Wait for exit animation before unmounting
        setTimeout(() => setShouldRender(false), 300);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [shouldRender]);

  if (!shouldRender) return null;

  return (
    <div
      className="fixed bottom-6 left-1/2 z-40"
      style={{
        transform: `translateX(-50%) translateY(${isVisible ? "0" : "20px"})`,
        opacity: isVisible ? 1 : 0,
        transition: prefersReducedMotion
          ? "none"
          : "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <Link
        href="/rfq"
        className="group inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-blue-700 text-white rounded-full shadow-lg shadow-blue-700/25 transition-all duration-300 ease-out hover:bg-blue-800 hover:shadow-xl hover:shadow-blue-700/30 hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
      >
        <span>Request a Quote</span>
        <svg
          className="ml-2 w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>
    </div>
  );
}
