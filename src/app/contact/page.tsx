import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

export const metadata = {
  title: "Contact Us | PrimeMark Apparel",
  description: "Get in touch with PrimeMark Apparel. Contact our team to discuss your bulk apparel requirements, request quotes, or learn more about our manufacturing services.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#080C14]">
        <PageHeader
          title="Contact Us"
          subtitle="Get in touch with our team to discuss your bulk apparel requirements."
        />
        <Section className="bg-[#080C14]">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-slate-400 mb-8">
                    Have questions about our products, process, or pricing? Our
                    team is ready to assist you with detailed information and
                    personalized quotes.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="mailto:sales@primemarkapparel.com"
                    className="flex items-start gap-4 p-4 rounded-xl bg-[#0F1623] border border-white/10 hover:border-[#C9A84C]/30 hover:shadow-md transition-all group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center group-hover:bg-[#C9A84C]/20 transition-colors">
                      <svg
                        className="w-6 h-6 text-[#C9A84C]"
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
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Email</h3>
                      <p className="text-slate-400 text-sm">
                        sales@primemarkapparel.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/13046854016"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl bg-[#0F1623] border border-white/10 hover:border-[#C9A84C]/30 hover:shadow-md transition-all group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center group-hover:bg-[#C9A84C]/20 transition-colors">
                      <svg
                        className="w-6 h-6 text-[#C9A84C]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">WhatsApp</h3>
                      <p className="text-slate-400 text-sm">
                        Chat with us directly
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-[#0F1623] border border-white/10 shadow-sm">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Business Hours
                </h3>
                <div className="space-y-3 text-slate-400">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM PKT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM PKT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/5">
                  <p className="text-sm text-slate-500">
                    We typically respond to inquiries within 24-48 hours during
                    business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
