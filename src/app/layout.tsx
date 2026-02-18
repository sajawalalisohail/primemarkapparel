import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import StickyCTA from "@/components/StickyCTA";
import WhatsAppWidget from "@/components/WhatsAppWidget";

// FOUC prevention script - runs before React hydration
const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored === 'light' ? 'light' : stored === 'dark' ? 'dark' : (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://primemarkapparel.com"),
  title: "PrimeMark Apparel | Premium Bulk Apparel Manufacturing from Pakistan",
  description:
    "Premium bulk apparel manufacturing from Pakistan. We supply uniforms, scrubs, industrial workwear, hoodies, denim, and custom apparel at competitive prices with consistent quality.",
  keywords: [
    "bulk apparel manufacturing",
    "wholesale clothing Pakistan",
    "uniform supplier",
    "scrubs manufacturer",
    "industrial workwear",
    "custom apparel",
    "private label clothing",
    "B2B apparel",
  ],
  authors: [{ name: "PrimeMark Apparel" }],
  openGraph: {
    title: "PrimeMark Apparel | Premium Bulk Apparel Manufacturing",
    description:
      "Premium bulk apparel manufacturing from Pakistan. Uniforms, scrubs, workwear, hoodies, denim, and custom apparel at scale.",
    url: "https://primemarkapparel.com",
    siteName: "PrimeMark Apparel",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PrimeMark Apparel - Premium Bulk Apparel Manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimeMark Apparel | Premium Bulk Apparel Manufacturing",
    description:
      "Premium bulk apparel manufacturing from Pakistan. Uniforms, scrubs, workwear, and custom apparel at scale.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased bg-bg text-text-primary min-h-screen flex flex-col">
        {/* Google Analytics - Replace G-XXXXXXXXXX with your actual GA4 Measurement ID */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
        <ThemeProvider>
          {children}
          <StickyCTA />
          <WhatsAppWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
