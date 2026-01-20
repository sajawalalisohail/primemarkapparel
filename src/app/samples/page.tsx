"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
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

export default function SamplesPage() {
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
      // For now, we'll use the RFQ table but mark it as a sample request
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
      console.error("Error submitting sample request:", error);
      alert("Failed to submit request. Please try emailing us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all";

  const labelClasses = "block text-sm font-medium text-slate-700 mb-2";

  return (
    <>
      <Navbar />
      <main>
        <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-900 border-b border-slate-800">
          <div className="mx-auto max-w-6xl text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Request Samples
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
              Get physical samples to evaluate quality, fit, and fabric before placing your bulk order.
            </p>
          </div>
        </div>

        <Section className="bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Sample Information
              </h2>
              <div className="space-y-4 text-slate-600">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    Free Samples for Qualified Buyers
                  </h3>
                  <p className="text-sm">
                    Sample costs are typically credited toward your bulk order. For qualified buyers planning orders of 500+ units, samples are often free.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    Delivery Time: 7-14 Days
                  </h3>
                  <p className="text-sm">
                    Physical samples are typically ready within 7-14 days after requirements are confirmed.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    What&apos;s Included
                  </h3>
                  <ul className="text-sm list-disc list-inside space-y-1">
                    <li>Size range samples (S, M, L, XL, or custom sizes)</li>
                    <li>Fabric swatches</li>
                    <li>Customization options (embroidery, printing samples)</li>
                    <li>Quality inspection report</li>
                  </ul>
                </div>
              </div>
            </div>

            {isSuccess ? (
              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-blue-900"
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
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Sample Request Received!
                </h3>
                <p className="text-slate-600 mb-2">
                  Thank you for your sample request. Our team will review your requirements and get back to you within 24-48 hours.
                </p>
                <p className="text-sm text-slate-500">
                  You will receive a confirmation email with sample details and shipping information.
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
                  className="mt-6 inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 md:p-8"
              >
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="company" className={labelClasses}>
                      Company <span className="text-blue-900">*</span>
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
                      Contact Name <span className="text-blue-900">*</span>
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
                      Email <span className="text-blue-900">*</span>
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
                      Product Type <span className="text-blue-900">*</span>
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
                      Quantity Planning <span className="text-blue-900">*</span>
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
                  className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-50 disabled:cursor-not-allowed"
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
            )}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
