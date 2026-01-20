"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/industries", label: "Industries" },
  { href: "/faq", label: "FAQ" },
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
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center -ml-5">
            <Image
              src="/branding/APPAREL.svg"
              alt="PrimeMark Apparel"
              width={320}
              height={80}
              priority
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
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
                      // Close dropdown when focus leaves the entire dropdown container
                      const currentTarget = e.currentTarget;
                      const relatedTarget = e.relatedTarget as Node | null;
                      if (relatedTarget && !currentTarget.contains(relatedTarget)) {
                        setIsProductsHovered(false);
                      }
                    }}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1 text-sm transition-colors ${
                        isActive
                          ? "text-slate-900 font-medium"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {link.label}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
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
                      className={`absolute top-full left-0 pt-2 w-56 transition-all duration-200 ${
                        isProductsHovered
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                      role="menu"
                      aria-label="Product categories"
                      onMouseEnter={() => setIsProductsHovered(true)}
                      onMouseLeave={() => setIsProductsHovered(false)}
                    >
                      <div className="bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden">
                        <div className="py-2">
                          {productCategories.map((category) => (
                            <Link
                              key={category.href}
                              href={category.href}
                              className="block px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors focus:outline-none focus:bg-slate-50 focus:text-slate-900 focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                              role="menuitem"
                              tabIndex={isProductsHovered ? 0 : -1}
                            >
                              {category.label}
                            </Link>
                          ))}
                          <div className="border-t border-slate-200 my-1" />
                          <Link
                            href="/products"
                            className="block px-4 py-2 text-sm font-medium text-blue-900 hover:text-blue-800 hover:bg-blue-50 transition-colors focus:outline-none focus:bg-blue-50 focus:text-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                            role="menuitem"
                            tabIndex={isProductsHovered ? 0 : -1}
                          >
                            View All Products
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
                  className={`text-sm transition-colors ${
                    isActive
                      ? "text-slate-900 font-medium"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/rfq"
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
            >
              Request a Quote
            </Link>
            <Link
              href="/admin/login"
              className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
            >
              Admin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
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
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 transition-colors ${
                    isActive
                      ? "text-slate-900 font-medium"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/rfq"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-5 py-3 text-sm font-medium bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/admin/login"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm text-slate-500 hover:text-slate-700 transition-colors"
            >
              Admin
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
