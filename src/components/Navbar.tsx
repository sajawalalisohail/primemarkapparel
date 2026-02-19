"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "./BrandLogo";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries" },
  { href: "/services", label: "Our Services" },
  { href: "/about", label: "About" },
];

const productCategories = [
  { href: "/products/hoodies", label: "Custom Hoodies" },
  { href: "/products/hats", label: "Baseball Hats" },
  { href: "/products/work-pants", label: "Work Pants" },
  { href: "/products/tshirts", label: "White T-Shirts" },
];

// Premium easing curve
const premiumEase = [0.25, 0.1, 0.25, 1] as const;

// NavLink component with animated underline
interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  className?: string; // Default state class
  activeClassName?: string; // Active state class
  underlineColor?: string; // Color class for the underline
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children?: React.ReactNode;
}

function NavLink({ href, label, isActive, className, activeClassName, underlineColor, onClick, children }: NavLinkProps) {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <Link
      href={href}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative font-nav text-sm transition-colors duration-300 ${isActive
        ? activeClassName || "text-[var(--color-text-primary)] font-semibold"
        : className || "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
        }`}
    >
      <span className="relative">
        {label}
        {children}
        {/* Animated underline */}
        <motion.span
          className={`absolute -bottom-1 left-0 right-0 h-0.5 ${underlineColor || "bg-[var(--color-text-primary)]"}`}
          initial={false}
          animate={{
            scaleX: isActive || isHovered ? 1 : 0,
          }}
          style={{ originX: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.3,
            ease: premiumEase,
          }}
        />
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsHovered, setIsProductsHovered] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  // Scroll-driven animations
  const { scrollY } = useScroll();

  // Scroll state for color change
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Transform values for smooth background transition - start early in hero section
  const bgOpacity = useTransform(scrollY, [50, 150], [0, 0.9]);
  const backdropBlur = useTransform(scrollY, [50, 150], [0, 12]);
  const borderOpacity = useTransform(scrollY, [50, 150], [0, 0.05]);
  const shadowOpacity = useTransform(scrollY, [50, 150], [0, 0.2]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Home click handler
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: shouldReduceMotion ? "auto" : "smooth" });
    }
  };

  // Determine if we are in the Hero section (Light Mode needs White text here)
  const isHeroVisible = !isScrolled && pathname === "/";

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 w-full"
      style={{
        backgroundColor: shouldReduceMotion
          ? "rgba(var(--color-bg-rgb), 0.85)"
          : useTransform(bgOpacity, (v) => `rgba(var(--color-bg-rgb), ${v})`),
        backdropFilter: shouldReduceMotion
          ? "blur(12px)"
          : useTransform(backdropBlur, (v) => `blur(${v}px)`),
        WebkitBackdropFilter: shouldReduceMotion
          ? "blur(12px)"
          : useTransform(backdropBlur, (v) => `blur(${v}px)`),
        borderBottom: shouldReduceMotion
          ? "1px solid rgba(var(--color-border-rgb), 0.05)"
          : useTransform(borderOpacity, (v) => `1px solid rgba(var(--color-border-rgb), ${v})`),
        boxShadow: shouldReduceMotion
          ? "0 4px 30px rgba(0, 0, 0, 0.2)"
          : useTransform(shadowOpacity, (v) => `0 4px 30px rgba(0, 0, 0, ${v})`),
        WebkitTapHighlightColor: "transparent",
      }}
    >
      {/* Light mode bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent opacity-0 dark:opacity-0 transition-opacity duration-300 group-[.light]:opacity-100" />

      <div className="mx-auto max-w-[1920px] px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <BrandLogo
            variant="navbar"
            isHeroVisible={isHeroVisible}
            className="flex items-center -ml-5 group"
            onClick={handleHomeClick}
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 lg:gap-12">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isHeroVisible = !isScrolled && pathname === "/";

              const linkColorClass = isHeroVisible ? "text-white/90 hover:text-white" : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]";
              const activeColorClass = isHeroVisible ? "text-white font-semibold" : "text-[var(--color-text-primary)] font-semibold";
              const underlineClass = isHeroVisible ? "bg-white" : "bg-[var(--color-text-primary)]";

              // Special handling for Products dropdown
              if (link.href === "/products") {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setIsProductsHovered(true)}
                    onMouseLeave={() => setIsProductsHovered(false)}
                    onFocus={() => setIsProductsHovered(true)}
                    onBlur={(e) => {
                      const currentTarget = e.currentTarget;
                      const relatedTarget = e.relatedTarget as Node | null;
                      if (relatedTarget && !currentTarget.contains(relatedTarget)) {
                        setIsProductsHovered(false);
                      }
                    }}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1 font-nav text-sm transition-all duration-300 ${isActive || isProductsHovered
                        ? activeColorClass
                        : linkColorClass
                        }`}
                    >
                      <span className="relative">
                        {link.label}
                        <motion.span
                          className={`absolute -bottom-1 left-0 right-0 h-0.5 ${underlineClass}`}
                          initial={false}
                          animate={{
                            scaleX: isActive || isProductsHovered ? 1 : 0,
                          }}
                          style={{ originX: 0 }}
                          transition={{
                            duration: shouldReduceMotion ? 0 : 0.3,
                            ease: premiumEase,
                          }}
                        />
                      </span>
                      <motion.svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: isProductsHovered ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: premiumEase }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </motion.svg>
                    </Link>

                    {/* Dropdown Menu */}
                    <motion.div
                      className="absolute top-full left-0 pt-2 w-56"
                      initial={false}
                      animate={{
                        opacity: isProductsHovered ? 1 : 0,
                        y: isProductsHovered ? 0 : -8,
                        pointerEvents: isProductsHovered ? "auto" : "none",
                      }}
                      transition={{ duration: 0.2, ease: premiumEase }}
                      role="menu"
                      aria-label="Product categories"
                      onMouseEnter={() => setIsProductsHovered(true)}
                      onMouseLeave={() => setIsProductsHovered(false)}
                    >
                      <div className="bg-[var(--color-surface)]/95 backdrop-blur-xl border border-[var(--color-border)] rounded-xl shadow-xl shadow-black/10 dark:shadow-black/30 overflow-hidden">
                        <div className="py-2">
                          {productCategories.map((category, index) => (
                            <motion.div
                              key={category.href}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{
                                opacity: isProductsHovered ? 1 : 0,
                                x: isProductsHovered ? 0 : -10,
                              }}
                              transition={{
                                duration: 0.2,
                                delay: isProductsHovered ? index * 0.05 : 0,
                                ease: premiumEase,
                              }}
                            >
                              <Link
                                href={category.href}
                                className="block px-4 py-2.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-elevated)] transition-colors duration-200 focus:outline-none focus-visible:bg-[var(--color-surface-elevated)] focus-visible:text-[var(--color-text-primary)]"
                                role="menuitem"
                                tabIndex={isProductsHovered ? 0 : -1}
                              >
                                {category.label}
                              </Link>
                            </motion.div>
                          ))}
                          <div className="border-t border-white/10 my-1" />
                          <Link
                            href="/products"
                            className="block px-4 py-2.5 text-sm font-medium text-[var(--color-text-primary)] hover:text-[#C9A84C] hover:bg-white/5 transition-colors duration-200 focus:outline-none focus-visible:bg-white/5"
                            role="menuitem"
                            tabIndex={isProductsHovered ? 0 : -1}
                          >
                            View All Products →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              }

              // Regular links
              return (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  isActive={isActive}
                  className={linkColorClass}
                  activeClassName={activeColorClass}
                  underlineColor={underlineClass}
                  onClick={link.href === "/" ? handleHomeClick : undefined}
                />
              );
            })}

            {/* CTA Button with gold styling */}
            <motion.div
              className="relative overflow-hidden rounded-lg"
              whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            >
              {/* Background fill layer */}
              <motion.div
                className="absolute inset-0 bg-[#C9A84C]"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                style={{ originX: 0 }}
                transition={{ duration: 0.3, ease: premiumEase }}
              />
              <Link
                href="/rfq"
                className="relative z-10 inline-flex items-center justify-center px-5 py-2.5 font-button text-sm border border-[#C9A84C] text-[#C9A84C] hover:text-[#080C14] rounded-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080C14]"
              >
                <span>Request a Quote</span>
                <svg
                  className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-lg pointer-events-none"
                initial={{ boxShadow: "0 0 0 0 rgba(201, 168, 76, 0)" }}
                whileHover={{
                  boxShadow: "0 0 20px rgba(201, 168, 76, 0.25)",
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]/50 ${isHeroVisible
              ? "text-white/90 hover:text-white"
              : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              }`}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="w-6 h-6 relative">
              <motion.span
                className="absolute left-0 w-6 h-0.5 bg-current"
                animate={{
                  top: isOpen ? "11px" : "4px",
                  rotate: isOpen ? 45 : 0,
                }}
                transition={{ duration: 0.3, ease: premiumEase }}
              />
              <motion.span
                className="absolute left-0 top-[11px] w-6 h-0.5 bg-current"
                animate={{
                  opacity: isOpen ? 0 : 1,
                  scaleX: isOpen ? 0 : 1,
                }}
                transition={{ duration: 0.3, ease: premiumEase }}
              />
              <motion.span
                className="absolute left-0 w-6 h-0.5 bg-current"
                animate={{
                  top: isOpen ? "11px" : "19px",
                  rotate: isOpen ? -45 : 0,
                }}
                transition={{ duration: 0.3, ease: premiumEase }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden w-full overflow-hidden bg-[var(--color-bg)]/95 backdrop-blur-xl"
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: premiumEase }}
      >
        <div className="px-6 py-4 space-y-1">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;

            // Mobile Products Dropdown
            if (link.href === "/products") {
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                  transition={{ duration: 0.3, delay: isOpen ? index * 0.05 : 0, ease: premiumEase }}
                >
                  <div className={`flex items-center justify-between w-full py-3 px-2 rounded-lg font-nav transition-all duration-200 focus-within:ring-2 focus-within:ring-[#C9A84C]/30 ${isActive || isMobileProductsOpen
                    ? "text-[#C9A84C] font-medium bg-[#C9A84C]/10"
                    : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-elevated)]"
                    }`}>
                    <Link
                      href="/products"
                      onClick={() => setIsOpen(false)}
                      className="flex-1 hover:text-[var(--color-text-primary)] transition-colors"
                    >
                      {link.label}
                    </Link>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMobileProductsOpen(!isMobileProductsOpen);
                      }}
                      className="p-1 -mr-1 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus:outline-none"
                      aria-label="Toggle products menu"
                    >
                      <motion.svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: isMobileProductsOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </button>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isMobileProductsOpen ? "auto" : 0,
                      opacity: isMobileProductsOpen ? 1 : 0,
                      marginBottom: isMobileProductsOpen ? 8 : 0
                    }}
                    transition={{ duration: 0.3, ease: premiumEase }}
                    className="overflow-hidden pl-4 border-l-2 border-[var(--color-border)] ml-2 space-y-1 bg-black/5 dark:bg-white/5 rounded-r-lg"
                  >
                    {productCategories.map((category) => (
                      <Link
                        key={category.href}
                        href={category.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-2.5 px-3 text-sm text-[var(--color-text-secondary)] hover:text-[#C9A84C] transition-colors"
                      >
                        {category.label}
                      </Link>
                    ))}
                    <div className="border-t border-[var(--color-border)] my-1 mx-2" />
                    <Link
                      href="/products"
                      onClick={() => setIsOpen(false)}
                      className="block py-2.5 px-3 text-sm font-medium text-[var(--color-text-primary)] hover:text-[#C9A84C] transition-colors"
                    >
                      View All Products →
                    </Link>
                  </motion.div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  x: isOpen ? 0 : -20,
                }}
                transition={{
                  duration: 0.3,
                  delay: isOpen ? index * 0.05 : 0,
                  ease: premiumEase,
                }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-2 rounded-lg font-nav transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]/30 ${isActive
                    ? "text-[#C9A84C] font-medium bg-[#C9A84C]/10"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-elevated)] active:bg-[var(--color-surface-elevated)]"
                    }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            );
          })}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: isOpen ? 1 : 0,
              y: isOpen ? 0 : -10,
            }}
            transition={{
              duration: 0.3,
              delay: isOpen ? (navLinks.length + 1) * 0.05 : 0,
              ease: premiumEase,
            }}
          >
            <Link
              href="/rfq"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-5 py-3 font-button text-sm bg-[#C9A84C] text-[#080C14] rounded-lg hover:bg-[#D4B65D] active:bg-[#B8973B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] transition-all duration-200 mt-4"
            >
              Request a Quote
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
