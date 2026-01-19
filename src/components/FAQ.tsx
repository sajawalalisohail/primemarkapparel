"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "./Section";

const faqs = [
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer:
      "Our MOQ varies by product type. For standard items like t-shirts and uniforms, we typically start at 200 units per style/color. For more complex items like custom denim or embroidered workwear, the MOQ may be higher. Contact us for specific requirements—we're flexible for the right partnerships.",
  },
  {
    question: "How does sampling work?",
    answer:
      "Once you share your requirements, we create physical samples for your approval. Sample production typically takes 7–14 days. You can request modifications before approving for bulk production. Sample costs depend on complexity but are often credited toward bulk orders.",
  },
  {
    question: "What is the typical lead time for production?",
    answer:
      "Standard production lead time is 2–6 weeks after sample approval, depending on order size and complexity. Rush orders may be accommodated with prior arrangement. We provide regular updates throughout the production process.",
  },
  {
    question: "Do you handle international shipping?",
    answer:
      "Yes, we ship worldwide. We can arrange FOB, CIF, or door-to-door delivery based on your preference. All shipments include proper documentation for customs clearance. Shipping costs and timelines vary by destination and order volume.",
  },
  {
    question: "What customization options are available?",
    answer:
      "We offer embroidery, screen printing, heat transfer, sublimation, and private label manufacturing. We can apply your logos, brand tags, and custom packaging. Our team can advise on the best method for your specific design and fabric.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "Typical terms include 30% deposit to begin production and 70% balance before shipping. For established relationships, we can discuss flexible arrangements. We accept bank transfers (TT) and can provide pro forma invoices and commercial documentation.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank wire transfers (TT) for international payments. We provide pro forma invoices and all necessary commercial documentation for your accounting and customs clearance.",
  },
  {
    question: "Do you provide quality guarantees?",
    answer:
      "Yes. All products undergo multiple quality control checkpoints. We guarantee that delivered goods match approved samples in terms of fabric, construction, and finish. Any defects are addressed promptly according to our quality assurance policy.",
  },
  {
    question: "What currency do you quote in?",
    answer:
      "We typically quote in USD, but can provide quotes in other major currencies upon request. All pricing is confirmed in writing before production begins.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-zinc-800 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-zinc-950 rounded-lg"
        aria-expanded={isOpen}
      >
        <span className="text-white font-medium pr-4">{question}</span>
        <span className="flex-shrink-0 text-amber-400">
          <svg
            className={`w-5 h-5 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
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
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-zinc-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

interface FAQProps {
  hideHeader?: boolean;
}

export default function FAQ({ hideHeader = false }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" className="bg-zinc-900">
      <div className="max-w-3xl mx-auto">
        {!hideHeader && (
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-zinc-400">
              Everything you need to know about working with us.
            </p>
          </div>
        )}
        <div className="bg-zinc-950 rounded-xl border border-zinc-800 px-6">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
