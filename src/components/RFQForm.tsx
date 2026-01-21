"use client";

import { useState, FormEvent, ChangeEvent } from "react";
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

      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting RFQ:", error);
      alert("Failed to submit request. Please try the email option instead.");
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
    "w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-slate-400 transition-all duration-300 ease-in-out";

  const labelClasses = "block text-sm font-medium text-slate-700 mb-2";

  const errorClasses = "mt-1 text-sm text-red-600";

  if (isSuccess) {
    return (
      <Section id="rfq">
        <div className="max-w-2xl mx-auto text-center">
          <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm">
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
              Request Received!
            </h3>
            <p className="text-slate-600 mb-2">
              Thank you for your inquiry. Our team will review your requirements
              and get back to you within 24-48 hours.
            </p>
            <p className="text-sm text-slate-500">
              You will receive a confirmation email shortly with your request details.
            </p>
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
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-slate-900 text-white rounded-lg hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section id="rfq">
      <div className="max-w-2xl mx-auto">
        {!hideHeader && (
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Request a Quote
            </h2>
            <p className="text-lg text-slate-600 mb-3">
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
          className="p-6 md:p-8 rounded-xl bg-white border border-slate-200 shadow-sm"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className={labelClasses}>
                Name <span className="text-blue-900">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`${inputClasses} ${
                  errors.name ? "border-red-400" : ""
                }`}
                placeholder="Your name"
              />
              {errors.name && <p className={errorClasses}>{errors.name}</p>}
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className={labelClasses}>
                Company <span className="text-amber-400">*</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={`${inputClasses} ${
                  errors.company ? "border-red-400" : ""
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
                Email <span className="text-blue-900">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`${inputClasses} ${
                  errors.email ? "border-red-400" : ""
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
                Product Type <span className="text-blue-900">*</span>
              </label>
              <select
                id="productType"
                name="productType"
                value={formData.productType}
                onChange={handleChange}
                className={`${inputClasses} ${
                  errors.productType ? "border-red-400" : ""
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
                Estimated Quantity <span className="text-blue-900">*</span>
              </label>
              <input
                type="text"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className={`${inputClasses} ${
                  errors.quantity ? "border-red-400" : ""
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

          {/* Submit buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-slate-900 text-white rounded-lg hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
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
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        </form>
      </div>
    </Section>
  );
}
