import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://goldenlinks.vercel.app"),
  title: "Golden Links | Luxury Permanent Jewelry Studio in Boise, ID",
  description: "Experience Boise's premier permanent jewelry welding studio. Get custom-fit, tarnish-free gold & silver bracelets, anklets, and necklaces welded inside Boise Town Square Mall.",
  keywords: ["permanent jewelry Boise", "welded bracelets Boise", "jewelry welding studio", "tarnish-free jewelry", "Boise Town Square Mall jewelry"],
  authors: [{ name: "Golden Links Studio" }],
  openGraph: {
    title: "Golden Links | Luxury Permanent Jewelry Studio in Boise, ID",
    description: "Get custom-fit, tarnish-free permanent jewelry welded at our boutique inside Boise Town Square Mall.",
    url: "https://goldenlinks.vercel.app",
    siteName: "Golden Links Studio",
    images: [
      {
        url: "/hero_jewelry.png",
        width: 1200,
        height: 630,
        alt: "Golden Links Permanent Jewelry Welding Studio",
      },
    ],
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
      className={`${playfair.variable} ${montserrat.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-luxury-black text-gray-100 font-sans">
        {children}
      </body>
    </html>
  );
}
