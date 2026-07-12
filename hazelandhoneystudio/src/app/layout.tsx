import type { Metadata } from "next";
import { Playfair_Display, Nunito_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const nunito = Nunito_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Hazel & Honey Lash & Brow Studio | Kamloops, BC",
  description:
    "Boutique lash and brow artistry in Kamloops, BC. Custom lash extensions, lash lift & tint, brow lamination, and relaxation facials by certified artist Chlöe Asselin. Book your appointment today.",
  keywords: [
    "Lash Extensions Kamloops",
    "Brow Lamination Kamloops",
    "Lash Lift Kamloops",
    "Brow Waxing Kamloops",
    "Hazel & Honey Studio",
    "Kamloops Lash Studio",
    "Kamloops Beauty Studio",
  ],
  authors: [{ name: "Chlöe Asselin", url: "https://instagram.com/hazelandhoneystudio" }],
  openGraph: {
    title: "Hazel & Honey Lash & Brow Studio | Kamloops, BC",
    description:
      "Relaxing, luxurious lash and brow artistry in Kamloops, BC. Book your appointment with certified artist Chlöe Asselin.",
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
      className={`${playfair.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
