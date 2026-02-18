"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Link from "next/link";
import Section from "./Section";
import { supabase } from "@/lib/supabase";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  productType: string;
  quantity: string;
  customization: string;
  notes: string;
  budgetRange: string;
  timeline: string;
  hearAboutUs: string;
  preferredContactMethod: string;
}

interface FormErrors {
  name?: string;
  company?: string;
  email?: string;
  productType?: string;
  quantity?: string;
}

const productTypes = [
  "Uniforms",
  "Scrubs",
  "Workwear",
  "Hoodies",
  "Denim",
  "Custom",
  "Samples",
];

const customizationOptions = [
  "None",
  "Embroidery",
  "Printing",
  "Private Label",
];

interface RFQFormProps {
  hideHeader?: boolean;
}

export default function RFQForm({ hideHeader = false }: RFQFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    productType: "",
    quantity: "",
    customization: "None",
    notes: "",
    budgetRange: "",
    timeline: "",
    hearAboutUs: "",
    preferredContactMethod: "Email",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string>("");

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.productType) {
      newErrors.productType = "Please select a product type";
    }

    if (!formData.quantity.trim()) {
      newErrors.quantity = "Estimated quantity is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("rfq_submissions").insert({
        name: formData.name,
        company: formData.company,
        email: formData.email,
        product_type: formData.productType,
        quantity: parseInt(formData.quantity) || 0,
        customization: formData.customization,
        details: `Phone: ${formData.phone || "Not provided"}
Notes: ${formData.notes || "None"}
Budget Range: ${formData.budgetRange || "Not specified"}
Timeline: ${formData.timeline || "Not specified"}
How did you hear about us: ${formData.hearAboutUs || "Not specified"}
Preferred Contact Method: ${formData.preferredContactMethod || "Email"}`,
      });

      if (error) throw error;

      // Track conversion event (Google Analytics)
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "rfq_submission", {
          event_category: "engagement",
          event_label: formData.productType,
          value: parseInt(formData.quantity) || 0,
        });
      }

      setIsSuccess(true);
      setSubmitError("");
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("Error submitting RFQ:", error);
      }
      setSubmitError("Failed to submit request. Please try again or use the email option below.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateMailtoLink = () => {
    const subject = encodeURIComponent("RFQ - PrimeMark Apparel");
    const body = encodeURIComponent(
      `Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone/WhatsApp: ${formData.phone || "Not provided"}
Product Type: ${formData.productType || "Not selected"}
Estimated Quantity: ${formData.quantity}
Customization: ${formData.customization}
Budget Range: ${formData.budgetRange || "Not specified"}
Timeline: ${formData.timeline || "Not specified"}
How did you hear about us: ${formData.hearAboutUs || "Not specified"}
Preferred Contact Method: ${formData.preferredContactMethod || "Email"}
Notes: ${formData.notes || "None"}`
    );
    return `mailto:sales@primemarkapparel.com?subject=${subject}&body=${body}`;
  };

  const inputClasses =
    "w-full px-4 py-3 bg-[#080C14] border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent hover:border-[#C9A84C]/50 transition-all duration-300 ease-in-out";

  const labelClasses = "block text-sm font-medium text-slate-300 mb-2";

  const errorClasses = "mt-1 text-sm text-red-400";

  if (isSuccess) {
    return (
      <Section id="rfq" className="bg-[#080C14]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="p-8 rounded-xl bg-[#0F1623] border border-white/10 shadow-sm">
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
              We&apos;ve received your request.
            </h3>
            <p className="text-slate-400 mb-4">
              Our team will review your requirements and respond within 24
              business hours. For urgent inquiries, reach us directly on
              WhatsApp.
            </p>
            <a
              href="https://wa.me/13046854016"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-sm text-green-500 hover:text-green-400 mb-6"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
            <button
              onClick={() => {
                setIsSuccess(false);
                setFormData({
                  name: "",
                  company: "",
                  email: "",
                  phone: "",
                  productType: "",
                  quantity: "",
                  customization: "None",
                  notes: "",
                  budgetRange: "",
                  timeline: "",
                  hearAboutUs: "",
                  preferredContactMethod: "Email",
                });
              }}
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-[#C9A84C] text-[#080C14] rounded-lg hover:bg-[#D4B65D] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#C9A84C]"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section id="rfq" className="bg-[#080C14]">
      <div className="max-w-2xl mx-auto">
        {!hideHeader && (
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Request a Quote
            </h2>
            <p className="text-lg text-slate-400 mb-3">
              Fill out the form below and we&apos;ll get back to you with a
              detailed quote.
            </p>
            <p className="text-sm text-slate-500">
              Response time: 24-48 hours during business days
            </p>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="p-6 md:p-8 rounded-xl bg-[#0F1623] border border-white/10 shadow-sm"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className={labelClasses}>
                Name <span className="text-[#C9A84C]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`${inputClasses} ${errors.name ? "border-red-500/50" : ""
                  }`}
                placeholder="Your name"
              />
              {errors.name && <p className={errorClasses}>{errors.name}</p>}
            </div>

            {/* Company */}
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
                className={`${inputClasses} ${errors.company ? "border-red-500/50" : ""
                  }`}
                placeholder="Company name"
              />
              {errors.company && (
                <p className={errorClasses}>{errors.company}</p>
              )}
            </div>

            {/* Email */}
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
                className={`${inputClasses} ${errors.email ? "border-red-500/50" : ""
                  }`}
                placeholder="you@company.com"
              />
              {errors.email && <p className={errorClasses}>{errors.email}</p>}
            </div>

            {/* Phone */}
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

            {/* Product Type */}
            <div>
              <label htmlFor="productType" className={labelClasses}>
                Product Type <span className="text-[#C9A84C]">*</span>
              </label>
              <select
                id="productType"
                name="productType"
                value={formData.productType}
                onChange={handleChange}
                className={`${inputClasses} ${errors.productType ? "border-red-500/50" : ""
                  }`}
              >
                <option value="">Select a product</option>
                {productTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.productType && (
                <p className={errorClasses}>{errors.productType}</p>
              )}
            </div>

            {/* Quantity */}
            <div>
              <label htmlFor="quantity" className={labelClasses}>
                Estimated Quantity <span className="text-[#C9A84C]">*</span>
              </label>
              <input
                type="text"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className={`${inputClasses} ${errors.quantity ? "border-red-500/50" : ""
                  }`}
                placeholder="e.g., 500 units"
              />
              {errors.quantity && (
                <p className={errorClasses}>{errors.quantity}</p>
              )}
            </div>
          </div>

          {/* Customization */}
          <div className="mb-6">
            <label htmlFor="customization" className={labelClasses}>
              Customization
            </label>
            <select
              id="customization"
              name="customization"
              value={formData.customization}
              onChange={handleChange}
              className={inputClasses}
            >
              {customizationOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Budget Range */}
          <div className="mb-6">
            <label htmlFor="budgetRange" className={labelClasses}>
              Budget Range
            </label>
            <select
              id="budgetRange"
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleChange}
              className={inputClasses}
            >
              <option value="">Select budget range</option>
              <option value="Under $5K">Under $5K</option>
              <option value="$5K-$10K">$5K-$10K</option>
              <option value="$10K-$25K">$10K-$25K</option>
              <option value="$25K+">$25K+</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>

          {/* Timeline */}
          <div className="mb-6">
            <label htmlFor="timeline" className={labelClasses}>
              Timeline
            </label>
            <input
              type="text"
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className={inputClasses}
              placeholder="e.g., Q2 2024, 3 months, etc."
            />
          </div>

          {/* How did you hear about us */}
          <div className="mb-6">
            <label htmlFor="hearAboutUs" className={labelClasses}>
              How did you hear about us?
            </label>
            <select
              id="hearAboutUs"
              name="hearAboutUs"
              value={formData.hearAboutUs}
              onChange={handleChange}
              className={inputClasses}
            >
              <option value="">Select an option</option>
              <option value="Google Search">Google Search</option>
              <option value="Referral">Referral</option>
              <option value="Trade Show">Trade Show</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Preferred Contact Method */}
          <div className="mb-6">
            <label htmlFor="preferredContactMethod" className={labelClasses}>
              Preferred Contact Method
            </label>
            <select
              id="preferredContactMethod"
              name="preferredContactMethod"
              value={formData.preferredContactMethod}
              onChange={handleChange}
              className={inputClasses}
            >
              <option value="Email">Email</option>
              <option value="Phone">Phone</option>
              <option value="WhatsApp">WhatsApp</option>
            </select>
          </div>

          {/* Notes */}
          <div className="mb-8">
            <label htmlFor="notes" className={labelClasses}>
              Additional Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={4}
              className={inputClasses}
              placeholder="Describe your requirements, specifications, timeline, etc."
            />
          </div>

          {/* Error Message */}
          {submitError && (
            <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="flex-1">
                  <p className="text-sm font-medium text-red-400 mb-1">
                    Submission Error
                  </p>
                  <p className="text-sm text-red-300">{submitError}</p>
                </div>
              </div>
            </div>
          )}

          {/* Privacy Consent */}
          <div className="mb-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                required
                className="mt-1 w-4 h-4 text-[#C9A84C] border-white/20 bg-[#080C14] rounded focus:ring-[#C9A84C] focus:ring-2"
              />
              <span className="text-sm text-slate-400">
                I agree to the{" "}
                <Link
                  href="/privacy"
                  target="_blank"
                  className="text-[#C9A84C] hover:text-[#D4B65D] underline"
                >
                  Privacy Policy
                </Link>{" "}
                and consent to being contacted regarding my inquiry.
              </span>
            </label>
          </div>

          {/* Submit buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-[#C9A84C] text-[#080C14] rounded-lg hover:bg-[#D4B65D] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:ring-offset-2 focus:ring-offset-[#080C14]"
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
                "Submit Request"
              )}
            </button>
            <a
              href={generateMailtoLink()}
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-[#080C14] border border-white/10 text-slate-300 rounded-lg hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C9A84C]"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email Us Instead
            </a>
          </div>

          {/* Helper Text */}
          <p className="text-center text-sm text-slate-500 mt-4">
            We respond within 24 business hours · Your information is kept
            confidential
          </p>
        </form>
      </div>
    </Section>
  );
}
