"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    href: "/products",
    image: "/products/Uniforms.png",
  },
  {
    title: "Scrubs",
    description:
      "Comfortable, durable medical scrubs for healthcare professionals.",
    moq: "250-350 units",
    leadTime: "4-6 weeks",
    customization: "Medical-grade fabrics, color options, logo placement, pocket styles",
    href: "/products",
    image: "/products/Scrubs.png",
  },
  {
    title: "Industrial Workwear",
    description:
      "Tough, safety-compliant apparel for factories and construction.",
    moq: "300-400 units",
    leadTime: "5-7 weeks",
    customization: "High-visibility options, reinforced seams, safety certifications, custom sizing",
    href: "/products/work-pants",
    image: "/products/industrial workwear.png",
  },
  {
    title: "Hoodies",
    description: "Premium hoodies and sweatshirts for casual and branded wear.",
    moq: "200-300 units",
    leadTime: "3-5 weeks",
    customization: "Fabric weight options, drawstring colors, zipper styles, embroidery or printing",
    href: "/products/hoodies",
    image: "/products/Hoodies.png",
  },
  {
    title: "Denim / Jeans",
    description: "Classic and modern denim styles for any market segment.",
    moq: "300-400 units",
    leadTime: "5-7 weeks",
    customization: "Wash options, fit variations, hardware choices, distressing, custom labels",
    href: "/products",
    image: "/products/Denim.png",
  },
  {
    title: "Custom Apparel",
    description:
      "Bespoke designs manufactured to your exact specifications.",
    moq: "200-300 units",
    leadTime: "4-8 weeks",
    customization: "Full branding, custom labels, packaging, hangtags",
    href: "/products",
    image: "/products/Custom Apparel.png",
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
    <Link href={product.href} className="block h-full">
      <motion.div
        className="group relative rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm cursor-pointer overflow-hidden h-full"
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

        {/* Image container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-surface-elevated)]">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className={`object-cover transition-transform duration-500 ease-out ${
              isHovered ? "scale-105" : "scale-100"
            }`}
             sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Overlay to ensure text readability if needed, though most is below */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
          <div className="space-y-2 pt-4 border-t border-[var(--color-border)]">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[var(--color-text-muted)]">MOQ:</span>
              <span className="px-2 py-0.5 bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)] font-medium rounded">
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
    </Link>
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
