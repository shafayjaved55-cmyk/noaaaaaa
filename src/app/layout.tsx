import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

/**
 * Fonts are self-hosted with next/font/local instead of next/font/google so
 * builds never depend on the Google Fonts CDN being reachable from the build
 * machine (a common cause of failed CI/Netlify deploys).
 */
const sora = localFont({
  src: "../fonts/sora-latin.woff2",
  weight: "400 800",
  style: "normal",
  variable: "--font-sora",
  display: "swap",
});

const manrope = localFont({
  src: "../fonts/manrope-latin.woff2",
  weight: "400 800",
  style: "normal",
  variable: "--font-manrope",
  display: "swap",
});

const instrument = localFont({
  src: [
    { path: "../fonts/instrument-latin.woff2", weight: "400", style: "normal" },
    { path: "../fonts/instrument-italic-latin.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nova Solution — Digital Product Agency | Web, Mobile, Design & Growth",
    template: "%s — Nova Solution",
  },
  description:
    "Nova Solution is a full-service digital agency building high-converting websites, mobile apps, brands and growth systems for ambitious companies. 320+ projects shipped across 12 countries.",
  keywords: ["digital agency", "web development", "mobile app development", "UI UX design", "digital marketing", "ecommerce", "Nova Solution"],
  openGraph: {
    title: "Nova Solution — Digital Product Agency",
    description: "We design and build digital products that move business forward.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable} ${instrument.variable}`}>
      <body className="bg-bone font-body text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
