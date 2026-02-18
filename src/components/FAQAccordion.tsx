"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer:
      "Our standard MOQ is 200–300 units depending on the product type. Hoodies and t-shirts start at 200 units. Workwear and denim typically start at 300 units. For first-time orders or market testing, contact us — we'll do our best to accommodate your situation.",
  },
  {
    question: "Do you own your own factories?",
    answer:
      "No. We work with a network of vetted partner factories in Pakistan. This means we can match your order to the right facility for your product type, and scale capacity across partners for large orders. You deal with one point of contact — us — throughout the entire process.",
  },
  {
    question: "How long does production take?",
    answer:
      "Most orders ship in 4–8 weeks from sample approval and deposit confirmation. Simple products (t-shirts, basic uniforms) are typically 3–5 weeks. Complex products (denim, technical workwear) are 6–8 weeks. We provide a specific production timeline with your confirmed quote.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "Standard terms are 30% deposit on order confirmation and 70% balance before shipment. Payment is by bank wire transfer (USD). For repeat clients, we can discuss adjusted terms.",
  },
  {
    question: "Can I request samples before placing a bulk order?",
    answer:
      "Yes. We provide pre-production samples for physical evaluation. For buyers planning orders of 500+ units, sample costs are typically credited toward your bulk order. Sample turnaround is 7–14 days after requirements are confirmed. Request samples at primemarkapparel.com/samples.",
  },
  {
    question: "What shipping options do you offer?",
    answer:
      "We offer FOB (Free On Board, Port of Karachi), CIF (Cost, Insurance, and Freight to your destination port), and door-to-door delivery. Freight costs are quoted separately based on volume, destination, and incoterms preference.",
  },
  {
    question: "Can I use a third-party quality inspector?",
    answer:
      "Yes. We welcome third-party inspection by agencies such as SGS, Bureau Veritas, and Intertek. Inspection costs are at the buyer's expense. Please notify us at least 5 business days before your required inspection date so we can schedule factory access.",
  },
  {
    question: "What customization options are available?",
    answer:
      "Most of our products support embroidery, screen printing, heat transfer printing, woven labels, hangtags, custom packaging, and size grading. Customization options vary by product — see individual product pages for specifics, or contact us with your requirements.",
  },
  {
    question: "What export documents do you provide?",
    answer:
      "Standard export documentation includes: Commercial Invoice, Packing List, Bill of Lading (or Airway Bill for air freight), Certificate of Origin, and Pre-Shipment Inspection Report. Additional documents (e.g., FORM E for preferential tariffs) can be arranged where applicable.",
  },
  {
    question: "I have a tech pack. Can you work from it?",
    answer:
      "Yes — if you have a tech pack, send it with your RFQ and it speeds up the sampling process significantly. If you don't have one, we can work from reference samples, detailed descriptions, or reference images and develop one for you.",
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
    <div className="border border-white/10 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left bg-[#0F1623] hover:bg-[#080C14] transition-colors"
      >
        <span className="font-medium text-white pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
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
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-96" : "max-h-0"
          }`}
      >
        <div className="p-5 pt-0 bg-[#0F1623]">
          <p className="text-slate-400 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
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
  );
}
