import type { Metadata } from "next";
import { Quicksand, Manrope } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Get Tipsy Beauty Bar | Sculpted Gel Nails in Kamloops, BC",
  description:
    "Kamloops' premier destination for high-quality sculpted gel nails. Founded by Sage Nolin, Get Tipsy Beauty Bar offers sculpted gel nails, overlays, nail art & more in a bright, comfortable studio. Book today!",
  keywords: [
    "Sculpted Gel Nails Kamloops",
    "Nail Studio Kamloops",
    "Gel Overlays Kamloops",
    "Nail Art Kamloops",
    "Manicure Kamloops",
    "Get Tipsy Beauty Bar",
    "Sage Nolin",
    "Kamloops BC Nail Salon",
  ],
  authors: [{ name: "Sage Nolin", url: "https://instagram.com/getipsybeautybar" }],
  openGraph: {
    title: "Get Tipsy Beauty Bar | Sculpted Gel Nails in Kamloops, BC",
    description:
      "Premier sculpted gel nail artistry in Kamloops, BC. Founded by Sage Nolin. Book your appointment today.",
    type: "website",
    locale: "en_US",
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
      className={`${quicksand.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
