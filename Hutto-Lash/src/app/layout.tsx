import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
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
  title: "Hutto Lash Co | Lash Extensions in Hutto, TX with Bailey",
  description:
    "Hutto Lash Co is a boutique lash studio on Taylor St in Hutto, Texas, run by lash artist Bailey Graves. Custom lash extensions by appointment — DM on Instagram to book.",
  keywords: [
    "lash extensions Hutto",
    "lash artist Hutto TX",
    "eyelash extensions Hutto",
    "Hutto lash studio",
    "Bailey Graves lash",
    "lash extensions near Austin TX",
  ],
  openGraph: {
    title: "Hutto Lash Co | Lash Extensions in Hutto, TX with Bailey",
    description:
      "Boutique lash studio on Taylor St in Hutto, Texas, run by lash artist Bailey Graves. Custom lash extensions by appointment — DM on Instagram to book.",
    siteName: "Hutto Lash Co",
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
      className={`${playfair.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-cream-base text-plum-ink font-sans">
        {children}
      </body>
    </html>
  );
}
