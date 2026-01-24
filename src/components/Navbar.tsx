"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsHovered, setIsProductsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    // Handle scroll for navbar background
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-out ${
        isScrolled
          ? "bg-slate-900/10 border-b border-white/10"
          : "bg-slate-900/5 border-b border-white/5"
      }`}
    >
      <div className="mx-auto max-w-[1920px] px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={handleHomeClick}
            className="flex items-center -ml-5 group"
          >
            <Image
              src="/logo/footerl.svg"
              alt="PrimeMark Apparel"
              width={200}
              height={50}
              priority
              className="h-16 w-auto transition-transform duration-300 ease-out group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 lg:gap-12">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

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
                      className={`inline-flex items-center gap-1 text-sm font-medium transition-all duration-300 ease-out ${
                        isActive
                          ? "text-white font-semibold"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      <span className="relative">
                        {link.label}
                        <span
                          className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-300 ease-out ${
                            isActive || isProductsHovered ? "w-full" : "w-0"
                          }`}
                        />
                      </span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ease-out ${
                          isProductsHovered ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Link>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 pt-2 w-56 transition-all duration-300 ease-out ${
                        isProductsHovered
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                      role="menu"
                      aria-label="Product categories"
                      onMouseEnter={() => setIsProductsHovered(true)}
                      onMouseLeave={() => setIsProductsHovered(false)}
                    >
                      <div className="bg-slate-900/20 backdrop-blur-sm border border-white/10 rounded-lg shadow-xl shadow-slate-900/30 overflow-hidden">
                        <div className="py-2">
                          {productCategories.map((category, index) => (
                            <Link
                              key={category.href}
                              href={category.href}
                              className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200 ease-out focus:outline-none focus:bg-white/5 focus:text-white focus:ring-2 focus:ring-blue-400 focus:ring-inset"
                              role="menuitem"
                              tabIndex={isProductsHovered ? 0 : -1}
                              style={{
                                transitionDelay: isProductsHovered
                                  ? `${index * 30}ms`
                                  : "0ms",
                              }}
                            >
                              {category.label}
                            </Link>
                          ))}
                          <div className="border-t border-white/10 my-1" />
                          <Link
                            href="/products"
                            className="block px-4 py-2.5 text-sm font-medium text-blue-400 hover:text-blue-300 hover:bg-white/5 transition-colors duration-200 ease-out focus:outline-none focus:bg-white/5 focus:text-blue-300 focus:ring-2 focus:ring-blue-400 focus:ring-inset"
                            role="menuitem"
                            tabIndex={isProductsHovered ? 0 : -1}
                          >
                            View All Products →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              // Regular links
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={link.href === "/" ? handleHomeClick : undefined}
                  className={`text-sm font-medium transition-all duration-300 ease-out relative group ${
                    isActive
                      ? "text-white"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-300 ease-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}

            {/* CTA Button with micro-interaction */}
            <Link
              href="/rfq"
              className="group inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold bg-blue-700 text-white rounded-lg transition-all duration-300 ease-out hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-700/30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              style={{
                transform: "scale(1)",
                transition: "transform 0.2s ease-out, background-color 0.3s ease-out, box-shadow 0.3s ease-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = "scale(0.98)";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
            >
              <span>Request a Quote</span>
              <svg
                className="w-4 h-4 ml-1.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5"
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
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg transition-colors duration-200"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="w-6 h-6 relative">
              <span
                className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-out ${
                  isOpen ? "top-[11px] rotate-45" : "top-1"
                }`}
              />
              <span
                className={`absolute left-0 top-[11px] w-6 h-0.5 bg-current transition-all duration-300 ease-out ${
                  isOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                }`}
              />
              <span
                className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-out ${
                  isOpen ? "top-[11px] -rotate-45" : "top-[19px]"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-slate-800 border-t border-slate-700 w-full overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-1">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-2 rounded-lg transition-all duration-200 ease-out ${
                  isActive
                    ? "text-white font-medium bg-slate-700/50"
                    : "text-slate-300 hover:text-white hover:bg-slate-700/30"
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "translateX(0)" : "translateX(-10px)",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/rfq"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center px-5 py-3 text-sm font-semibold bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-all duration-200 ease-out mt-4"
            style={{
              transitionDelay: isOpen ? `${navLinks.length * 50}ms` : "0ms",
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(-10px)",
            }}
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
