import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
