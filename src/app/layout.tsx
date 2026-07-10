import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Desire Performance Training | Personal Training Gym in Waco, TX",
  description:
    "Personalized strength & performance training in Waco, Texas. One-on-one coaching, performance programs, and youth training in a clean, disciplined facility. Book your first session today.",
  keywords: [
    "personal training Waco TX",
    "performance training Waco",
    "youth training Waco",
    "gym Waco Texas",
    "strength coach Waco",
  ],
  openGraph: {
    title: "Desire Performance Training | Waco, TX",
    description:
      "Personalized strength & performance training in Waco, Texas. Book your first session today.",
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
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
