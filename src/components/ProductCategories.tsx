"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Section from "./Section";

const products = [
  {
    title: "Uniforms",
    description:
      "Professional corporate and service uniforms for teams of any size.",
    moq: "200-300 units",
    leadTime: "4-6 weeks",
    customization: "Logo embroidery, screen printing, custom colors, size grading",
    placeholderColor: "bg-[#C9A84C]/5",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Scrubs",
    description:
      "Comfortable, durable medical scrubs for healthcare professionals.",
    moq: "250-350 units",
    leadTime: "4-6 weeks",
    customization: "Medical-grade fabrics, color options, logo placement, pocket styles",
    placeholderColor: "bg-[#C9A84C]/5",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Industrial Workwear",
    description:
      "Tough, safety-compliant apparel for factories and construction.",
    moq: "300-400 units",
    leadTime: "5-7 weeks",
    customization: "High-visibility options, reinforced seams, safety certifications, custom sizing",
    placeholderColor: "bg-[#C9A84C]/5",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Hoodies",
    description: "Premium hoodies and sweatshirts for casual and branded wear.",
    moq: "200-300 units",
    leadTime: "3-5 weeks",
    customization: "Fabric weight options, drawstring colors, zipper styles, embroidery or printing",
    placeholderColor: "bg-[#C9A84C]/5",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Denim / Jeans",
    description: "Classic and modern denim styles for any market segment.",
    moq: "300-400 units",
    leadTime: "5-7 weeks",
    customization: "Wash options, fit variations, hardware choices, distressing, custom labels",
    placeholderColor: "bg-[#C9A84C]/5",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "Custom Apparel",
    description:
      "Bespoke designs manufactured to your exact specifications.",
    moq: "200-300 units",
    leadTime: "4-8 weeks",
    customization: "Complete design flexibility, fabric selection, pattern development, full branding",
    placeholderColor: "bg-[#C9A84C]/5",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
];

// Premium easing curve
const premiumEase = [0.25, 0.1, 0.25, 1] as const;

// Product card component
interface ProductCardProps {
  product: (typeof products)[0];
  index: number;
  shouldReduceMotion: boolean | null;
}

function ProductCard({ product, index, shouldReduceMotion }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm cursor-default overflow-hidden"
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: shouldReduceMotion ? 0 : index * 0.08,
        ease: premiumEase,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
            y: -10,
            boxShadow: "0 25px 50px -12px rgba(201, 168, 76, 0.15)",
          }
      }
    >
      {/* Animated gold top border */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-[#C9A84C]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        style={{ originX: 0 }}
        transition={{ duration: 0.3, ease: premiumEase }}
      />

      {/* Placeholder image area */}
      <div
        className={`w-full h-40 ${product.placeholderColor} flex items-center justify-center transition-colors duration-300 ${isHovered ? "bg-[#C9A84C]/10" : ""
          }`}
      >
        <div
          className={`transition-all duration-300 ${isHovered ? "text-[#C9A84C] scale-110" : "text-[var(--color-text-muted)] opacity-60"
            }`}
        >
          {product.icon}
        </div>
      </div>

      <div className="p-6">
        {/* Title */}
        <h3
          className={`font-heading text-xl text-[var(--color-text-primary)] mb-2 transition-colors duration-300 ${isHovered ? "text-[#C9A84C]" : ""
            }`}
        >
          {product.title}
        </h3>

        {/* Description */}
        <p className="font-body text-[var(--color-text-secondary)] mb-4">{product.description}</p>

        {/* B2B Metadata */}
        <div className="space-y-2 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400">MOQ:</span>
            <span className="px-2 py-0.5 bg-white/5 text-slate-300 font-medium rounded">
              {product.moq}
            </span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-[var(--color-text-muted)]">Lead Time:</span>
            <span className="px-2 py-0.5 bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)] font-medium rounded">
              {product.leadTime}
            </span>
          </div>
          <div className="text-xs">
            <span className="text-[var(--color-text-muted)] block mb-2">Customization:</span>
            <div className="flex flex-wrap gap-1.5">
              {product.customization.split(", ").map((item, i) => (
                <span
                  key={i}
                  className="inline-block px-2 py-0.5 bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/20 rounded-md text-[10px] font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface ProductCategoriesProps {
  hideHeader?: boolean;
}

export default function ProductCategories({ hideHeader = false }: ProductCategoriesProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="products" className="bg-section-primary" animate={false}>
      <div>
        {!hideHeader && (
          <div className="text-center mb-12">
            {/* Eyebrow */}
            <motion.div
              className="font-eyebrow text-[#C9A84C] mb-4"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: premiumEase }}
            >
              Products
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="font-display text-3xl sm:text-4xl text-[var(--color-text-primary)] mb-4"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: premiumEase }}
            >
              Product Categories
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              className="font-body text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: premiumEase }}
            >
              From corporate uniforms to custom streetwear, we manufacture it all at
              scale.
            </motion.p>
          </div>
        )}

        {/* Product cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>

        {/* View All Products link */}
        <motion.div
          className="text-center mt-10"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.5, ease: premiumEase }}
        >
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 text-[#C9A84C] font-medium hover:text-[#D4B65D] transition-colors duration-300"
          >
            <span>View All Products</span>
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={shouldReduceMotion ? {} : { x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
