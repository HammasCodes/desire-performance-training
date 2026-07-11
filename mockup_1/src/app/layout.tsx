import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Bellamy Lash Studio | Boutique Lash & Esthetics in Savannah, GA",
  description: "Experience luxury lash artistry and professional esthetics by Jerrika Hinton, licensed esthetician with 5 years of experience. Offering classic lash sets, volume lash sets, lash lifts, and brows in Savannah, Georgia.",
  keywords: "lash studio savannah, lash extensions savannah ga, lash lift savannah, brows savannah, esthetician savannah ga, Jerrika Hinton, classic lashes, volume lashes, facials savannah",
  openGraph: {
    title: "Bellamy Lash Studio | Boutique Lash & Esthetics in Savannah, GA",
    description: "Experience luxury lash artistry and professional esthetics by Jerrika Hinton, licensed esthetician. Single-on-single classic lash sets, dense volumes, lifts, and brow lamination.",
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
      className={`${serif.variable} ${sans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-cream text-espresso">{children}</body>
    </html>
  );
}
