import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

export const metadata = {
  title: "Privacy Policy | PrimeMark Apparel",
  description: "Privacy Policy for PrimeMark Apparel. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="Privacy Policy"
          subtitle="How we collect, use, and protect your information"
        />
        <Section>
          <div className="max-w-4xl mx-auto prose prose-slate">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Information We Collect
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  When you submit a Request for Quote (RFQ) or contact us through
                  our website, we collect the following information:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Company name and business information</li>
                  <li>Product requirements and specifications</li>
                  <li>Quantity estimates and budget information</li>
                  <li>How you heard about us (optional)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We use the information you provide to:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                  <li>Process and respond to your quote requests</li>
                  <li>Communicate with you about your requirements</li>
                  <li>Provide manufacturing services and quotes</li>
                  <li>Improve our services and website experience</li>
                  <li>Send you relevant information about our services (with your consent)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Data Storage and Security
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Your information is stored securely in Supabase, a cloud database
                  service with encryption at rest. We implement appropriate technical
                  and organizational measures to protect your personal data against
                  unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Data Sharing
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third
                  parties. We may share your information only in the following
                  circumstances:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                  <li>With our manufacturing partners to fulfill your orders (only necessary information)</li>
                  <li>When required by law or to protect our rights</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Your Rights
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                  <li>Access your personal data we hold</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Request data portability</li>
                </ul>
                <p className="text-slate-600 leading-relaxed">
                  To exercise these rights, please contact us at{" "}
                  <a
                    href="mailto:sales@primemarkapparel.com"
                    className="text-blue-900 hover:text-blue-800 underline"
                  >
                    sales@primemarkapparel.com
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Cookies and Tracking
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Our website may use analytics tools to understand how visitors
                  interact with our site. If we implement analytics, we will update
                  this policy to include cookie information and provide a cookie
                  consent mechanism.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Data Retention
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We retain your personal information for as long as necessary to
                  fulfill the purposes outlined in this policy, unless a longer
                  retention period is required by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Changes to This Policy
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time. We will notify
                  you of any changes by posting the new policy on this page and
                  updating the "Last Updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Contact Us
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data
                  practices, please contact us at:
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
