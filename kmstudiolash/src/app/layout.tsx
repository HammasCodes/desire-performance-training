import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "KM Studio Lash | Luxury Lash & Brow Studio Kelowna",
  description: "Experience boutique luxury lash extensions, lifts, and brow lamination in Kelowna, BC. Meticulous artistry by Karli. Book your custom lash appointment today.",
  keywords: ["Lash Extensions Kelowna", "Lash Lift Kelowna", "Brow Lamination Kelowna", "Classic Lashes", "Volume Lashes", "Hybrid Lashes", "KM Studio Lash", "Kelowna Beauty Salon"],
  authors: [{ name: "Karli", url: "https://instagram.com/kmstudiolash" }],
  openGraph: {
    title: "KM Studio Lash | Luxury Lash & Brow Studio Kelowna",
    description: "Luxury meets artistry in every lash extension. Experience boutique services by Karli.",
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
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

