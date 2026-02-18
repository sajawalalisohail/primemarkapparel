"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { supabase } from "@/lib/supabase";

interface SampleFormData {
  company: string;
  contactName: string;
  email: string;
  phone: string;
  productType: string;
  quantityPlanning: string;
  sampleRequirements: string;
}

const productTypes = [
  "Uniforms",
  "Scrubs",
  "Workwear",
  "Hoodies",
  "Denim",
  "Custom",
];

export default function SamplesForm() {
  const [formData, setFormData] = useState<SampleFormData>({
    company: "",
    contactName: "",
    email: "",
    phone: "",
    productType: "",
    quantityPlanning: "",
    sampleRequirements: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("rfq_submissions").insert({
        name: formData.contactName,
        company: formData.company,
        email: formData.email,
        product_type: formData.productType || "Samples",
        quantity: 0,
        customization: "Sample Request",
        details: `Phone: ${formData.phone || "Not provided"}
Quantity Planning: ${formData.quantityPlanning || "Not specified"}
Sample Requirements: ${formData.sampleRequirements || "None"}`,
      });

      if (error) throw error;

      setIsSuccess(true);
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("Error submitting sample request:", error);
      }
      alert("Failed to submit request. Please try emailing us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 bg-[#080C14] border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent transition-all";

  const labelClasses = "block text-sm font-medium text-slate-300 mb-2";

  if (isSuccess) {
    return (
      <div className="bg-[#080C14] border border-white/10 shadow-sm rounded-xl p-8 text-center text-white">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#C9A84C]/10 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-[#C9A84C]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">
          Sample Request Received!
        </h3>
        <p className="text-slate-400 mb-2">
          Thank you for your sample request. Our team will review your
          requirements and get back to you within 24-48 hours.
        </p>
        <p className="text-sm text-slate-500">
          You will receive a confirmation email with sample details and shipping
          information.
        </p>
        <button
          onClick={() => {
            setIsSuccess(false);
            setFormData({
              company: "",
              contactName: "",
              email: "",
              phone: "",
              productType: "",
              quantityPlanning: "",
              sampleRequirements: "",
            });
          }}
          className="mt-6 inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-[#C9A84C] text-[#080C14] rounded-lg hover:bg-[#D4B65D] transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#080C14] border border-white/10 shadow-sm rounded-xl p-6 md:p-8"
    >
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="company" className={labelClasses}>
            Company <span className="text-[#C9A84C]">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Company name"
            required
          />
        </div>
        <div>
          <label htmlFor="contactName" className={labelClasses}>
            Contact Name <span className="text-[#C9A84C]">*</span>
          </label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email <span className="text-[#C9A84C]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="you@company.com"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone / WhatsApp
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
            placeholder="+1 234 567 8900"
          />
        </div>
        <div>
          <label htmlFor="productType" className={labelClasses}>
            Product Type <span className="text-[#C9A84C]">*</span>
          </label>
          <select
            id="productType"
            name="productType"
            value={formData.productType}
            onChange={handleChange}
            className={inputClasses}
            required
          >
            <option value="">Select a product</option>
            {productTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="quantityPlanning" className={labelClasses}>
            Quantity Planning <span className="text-[#C9A84C]">*</span>
          </label>
          <input
            type="text"
            id="quantityPlanning"
            name="quantityPlanning"
            value={formData.quantityPlanning}
            onChange={handleChange}
            className={inputClasses}
            placeholder="e.g., 500-1000 units"
            required
          />
        </div>
      </div>

      <div className="mb-8">
        <label htmlFor="sampleRequirements" className={labelClasses}>
          Sample Requirements
        </label>
        <textarea
          id="sampleRequirements"
          name="sampleRequirements"
          value={formData.sampleRequirements}
          onChange={handleChange}
          rows={4}
          className={inputClasses}
          placeholder="Describe what you need in the samples: sizes, colors, customization options, etc."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-[#C9A84C] text-[#080C14] rounded-lg hover:bg-[#D4B65D] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:ring-offset-2 focus:ring-offset-[#080C14] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Submitting...
          </>
        ) : (
          "Request Samples"
        )}
      </button>
    </form>
  );
}
