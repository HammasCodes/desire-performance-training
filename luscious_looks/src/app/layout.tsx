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
  title: "Luscious Looks | Brow & Lash Studio, Shrewsbury",
  description:
    "Boutique brow and lash artistry in Shrewsbury, Shropshire. Brow threading, henna brows, brow lamination, and Korean & traditional lash lifts by Becky Stafford, brow artist since 2019. Book your appointment today.",
  keywords: [
    "Brow Threading Shrewsbury",
    "Henna Brows Shrewsbury",
    "Brow Lamination Shrewsbury",
    "Lash Lift Shrewsbury",
    "Definition Brows",
    "Luscious Looks",
    "Shrewsbury Brow Artist",
    "Shropshire Beauty Studio",
  ],
  authors: [{ name: "Becky Stafford", url: "https://instagram.com/luscious_looks__" }],
  openGraph: {
    title: "Luscious Looks | Brow & Lash Studio, Shrewsbury",
    description:
      "Personalised eyebrow magic in Shrewsbury, Shropshire. Book your appointment with brow artist Becky Stafford.",
    type: "website",
    locale: "en_GB",
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
