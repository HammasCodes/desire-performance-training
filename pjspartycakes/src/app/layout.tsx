import type { Metadata } from "next";
import { Inter, Playfair_Display, Pacifico } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PJ's Party Cakes | Custom Cakes in Kelowna Since 1976",
  description:
    "Kelowna's original custom cake shop. PJ's Party Cakes has been the Okanagan's go-to for cartoon, sculpted, wedding, fondant, and photo cakes since 1976. Order your custom cake today — please phone first.",
  keywords: [
    "custom cakes Kelowna",
    "cake shop Kelowna",
    "wedding cakes Kelowna",
    "cartoon cakes Okanagan",
    "sculpted cakes Kelowna",
    "PJ's Party Cakes",
  ],
  openGraph: {
    title: "PJ's Party Cakes | Custom Cakes in Kelowna Since 1976",
    description:
      "Kelowna's original custom cake shop, serving the Okanagan since 1976. Order your custom cake today.",
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
      className={`${inter.variable} ${playfair.variable} ${pacifico.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
