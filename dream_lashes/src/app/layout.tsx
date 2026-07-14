import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dream Lashes & Spa | Lash Extensions in Kyle & South Austin, TX",
  description:
    "Dream Lashes & Spa is a lash extension and esthetics studio on S. Old Hwy 81 in Kyle, TX, serving Kyle and South Austin. Lash extensions, fills, facials, microdermabrasion, hot stone massage, and chemical peels by Anna Mendivil. Message on Instagram to book.",
  keywords: [
    "lash extensions Kyle TX",
    "lash extensions South Austin",
    "lash fills Kyle TX",
    "eyelash extensions Kyle Texas",
    "facials Kyle TX",
    "microdermabrasion South Austin",
    "Anna Mendivil lash artist",
    "Dream Lashes and Spa",
  ],
  openGraph: {
    title: "Dream Lashes & Spa | Lash Extensions in Kyle & South Austin, TX",
    description:
      "Lash extension and esthetics studio in Kyle, TX serving Kyle and South Austin. Lash sets, fills, facials, microdermabrasion, hot stone massage, and chemical peels by Anna Mendivil — DM on Instagram to book.",
    siteName: "Dream Lashes & Spa",
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
      className={`${cormorant.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-sage-bg text-sage-ink font-sans">
        {children}
      </body>
    </html>
  );
}
