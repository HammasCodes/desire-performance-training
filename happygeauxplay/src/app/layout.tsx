import type { Metadata } from "next";
import { Fredoka, Quicksand } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Happy Geaux Play | Premium Soft Play Rentals in Shreveport & Bossier City",
  description: "Playful, safe, and clean soft play party rentals for toddlers ages 0-5 in Shreveport and Bossier City, LA. Book our pastel ball pits, climbing foam blocks, bounce houses, and custom balloon arches for your next birthday party, baby shower, or daycare event!",
  keywords: "soft play rental, toddler party rental, ball pit rental, bounce house, Shreveport, Bossier City, Louisiana, kids birthday party, baby shower",
  icons: {
    icon: "/favicon.ico",
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
      className={`${fredoka.variable} ${quicksand.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-cream text-charcoal">
        {children}
      </body>
    </html>
  );
}
