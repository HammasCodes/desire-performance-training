import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sans = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "BML Beauty | Brows, Lashes & Makeup Studio in Round Rock, TX",
  description:
    "Expert brow shaping & tinting, lash lift & tint, and bridal/event makeup by Bri, a licensed esthetician in Round Rock serving Hutto, TX. Natural, confidence-boosting results in a relaxed, unhurried studio.",
  keywords: [
    "brows Round Rock",
    "lash lift Round Rock",
    "brow tint Round Rock",
    "makeup Round Rock",
    "brow shaping Hutto",
    "lash lift Hutto",
    "esthetician Round Rock TX",
    "bridal makeup Round Rock",
    "BML Beauty",
  ],
  openGraph: {
    title: "BML Beauty | Brows, Lashes & Makeup Studio in Round Rock, TX",
    description:
      "Expert brows, lashes & makeup by Bri — a licensed esthetician in Round Rock serving Hutto, TX. Natural, confidence-boosting results in a relaxed studio.",
    siteName: "BML Beauty",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-cream-warm text-matte-body font-sans">
        {children}
      </body>
    </html>
  );
}
