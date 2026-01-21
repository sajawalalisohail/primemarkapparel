import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

export const metadata = {
  title: "Terms of Service | PrimeMark Apparel",
  description: "Terms of Service for PrimeMark Apparel. Read our terms and conditions for bulk apparel manufacturing services.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Terms of Service"
          subtitle="Terms and conditions for our manufacturing services"
        />
        <Section>
          <div className="max-w-4xl mx-auto prose prose-slate">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Service Description
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  PrimeMark Apparel provides bulk apparel manufacturing services,
                  including uniforms, scrubs, industrial workwear, hoodies, denim,
                  and custom apparel. We operate as a manufacturing partner connecting
                  businesses with production facilities in Pakistan.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Quotes and Pricing
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  All quotes provided are estimates based on the information you
                  provide. Final pricing may vary based on:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                  <li>Final product specifications and requirements</li>
                  <li>Fabric selection and quality</li>
                  <li>Customization complexity</li>
                  <li>Order quantity</li>
                  <li>Shipping and delivery options</li>
                </ul>
                <p className="text-slate-600 leading-relaxed">
                  Quotes are valid for 30 days unless otherwise stated. Prices are
                  subject to change based on market conditions and material costs.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Order Terms and Conditions
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Orders are confirmed upon:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                  <li>Written acceptance of the final quote</li>
                  <li>Approval of samples (if applicable)</li>
                  <li>Payment of deposit as specified in the quote</li>
                  <li>Receipt of complete technical specifications</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Payment Terms
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Standard payment terms:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                  <li>30% deposit required upon order confirmation</li>
                  <li>70% balance due before shipping</li>
                  <li>Payment methods: Bank transfer, wire transfer, or as agreed</li>
                  <li>All prices are in USD unless otherwise specified</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Shipping and Delivery
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Shipping options available:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                  <li>FOB (Free On Board) - Port of origin</li>
                  <li>CIF (Cost, Insurance, and Freight) - Destination port</li>
                  <li>Door-to-door shipping (quoted separately)</li>
                </ul>
                <p className="text-slate-600 leading-relaxed">
                  Delivery timelines are estimates and may vary based on order
                  complexity, customization requirements, and production capacity.
                  We will provide regular updates on order status.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Quality and Inspection
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  All products undergo quality control checks at multiple stages.
                  Samples are provided for approval before bulk production. Final
                  inspection is conducted before shipping. Any quality issues must
                  be reported within 7 days of delivery.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Returns and Refunds
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Due to the custom nature of our manufacturing services:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                  <li>Custom orders are non-refundable once production begins</li>
                  <li>Returns are only accepted for manufacturing defects</li>
                  <li>Defective items will be replaced or refunded at our discretion</li>
                  <li>Returns must be requested within 7 days of delivery</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  PrimeMark Apparel's liability is limited to the value of the
                  specific order. We are not liable for:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of profits or business opportunities</li>
                  <li>Delays caused by circumstances beyond our control (force majeure)</li>
                  <li>Issues arising from incorrect specifications provided by the client</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Intellectual Property
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Clients retain all rights to their designs, logos, and branding.
                  We will not use client designs or branding for any purpose other
                  than fulfilling the specific order. All manufacturing processes
                  and techniques remain our proprietary information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Changes to Terms
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We reserve the right to modify these terms at any time. Changes
                  will be posted on this page with an updated "Last Updated" date.
                  Continued use of our services after changes constitutes acceptance
                  of the new terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Contact
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  For questions about these terms, please contact us at:
                </p>
                <p className="text-slate-600 leading-relaxed">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:sales@primemarkapparel.com"
                    className="text-blue-900 hover:text-blue-800 underline"
                  >
                    sales@primemarkapparel.com
                  </a>
                </p>
                <p className="text-slate-600 leading-relaxed mt-2">
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </p>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
