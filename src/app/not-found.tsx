import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center px-4">
          <h1 className="text-6xl sm:text-8xl font-bold text-slate-900 mb-4">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              Go to Homepage
            </Link>
            <Link
              href="/rfq"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
