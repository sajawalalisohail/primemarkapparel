"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#products", label: "Products" },
  { href: "#industries", label: "Industries" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-semibold text-white hover:text-amber-400 transition-colors"
          >
            PrimeMark Apparel
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm text-zinc-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#rfq"
              onClick={(e) => scrollToSection(e, "#rfq")}
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium bg-amber-500 text-zinc-950 rounded-lg hover:bg-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
            >
              Request a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-lg"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block py-2 text-zinc-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#rfq"
              onClick={(e) => scrollToSection(e, "#rfq")}
              className="block w-full text-center px-5 py-3 text-sm font-medium bg-amber-500 text-zinc-950 rounded-lg hover:bg-amber-400 transition-colors"
            >
              Request a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
