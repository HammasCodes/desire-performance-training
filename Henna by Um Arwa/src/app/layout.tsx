import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Henna by Um Arwa | Professional Henna & Face Painting Kuwait",
  description: "Exquisite bridal henna, party henna, traditional Arabic & Indian designs, and creative kids' face painting at the comfort of your home. Premium safe materials and rich colors, serving all occasions across Kuwait.",
  keywords: ["henna kuwait", "henna home service", "face painting kuwait", "bridal henna kuwait", "arabic henna design", "indian henna design", "henna artist kuwait"],
  openGraph: {
    title: "Henna by Um Arwa | Professional Henna & Face Painting Kuwait",
    description: "Exquisite bridal henna, traditional designs, and creative face painting home service across Kuwait.",
    type: "website",
    locale: "en_KW",
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
      className={`${cormorant.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-cream-base text-maroon-dark selection:bg-gold-metallic selection:text-maroon-dark">
        {children}
      </body>
    </html>
  );
}
