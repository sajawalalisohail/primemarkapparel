"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, viewportSettings } from "@/lib/motion/variants";

export default function PageCTA() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16 bg-slate-50 border-t border-slate-200">
      <motion.div
        className="mx-auto max-w-6xl text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
          Ready to get started?
        </h2>
        <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
          Request a detailed quote for your bulk apparel requirements.
        </p>
        <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
          <Link
            href="/rfq"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Request a Quote
            <motion.svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
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
      </motion.div>
    </div>
  );
}
