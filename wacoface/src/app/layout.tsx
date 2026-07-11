import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Waco Face Artistry | Permanent Makeup & Brows by Olivia in Waco, TX",
  description: "Wake up with permanent beauty. Specialized in Microblading, Ombre Powder Brows, Combo Brows, Lip Blushing, Lip Neutralization, and Nano Strokes by Olivia. Bilingual artist in Waco, TX.",
  keywords: ["permanent makeup waco", "microblading waco tx", "ombre powder brows waco", "lip blushing waco", "eyebrows waco texas", "waco face artistry", "olivia permanent makeup"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF6F0] text-slate-800 font-sans">
        {children}
      </body>
    </html>
  );
}
