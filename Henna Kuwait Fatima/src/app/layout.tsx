import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Henna Kuwait Fatima | Professional 24-Hour Home Service Henna Artist",
  description: "Elegant, intricate, and custom henna designs for brides, parties, and special occasions. Offering professional 24-hour home service across all areas of Kuwait. Book your session now!",
  keywords: [
    "Henna Kuwait Fatima",
    "Henna Kuwait",
    "Henna artist Kuwait",
    "Kuwait Henna Home Service",
    "Bridal Henna Kuwait",
    "24 hours henna Kuwait",
    "Arabic Henna designs",
    "Indian Henna designs",
    "Henna home delivery Kuwait",
    "69695042"
  ],
  authors: [{ name: "Henna Kuwait Fatima" }],
  formatDetection: {
    telephone: true,
  },
  openGraph: {
    title: "Henna Kuwait Fatima | 24-Hour Home Service Henna",
    description: "Intricate, gorgeous henna designs brought directly to your home in Kuwait. Available 24/7. Book your slot today!",
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
      className={`${playfair.variable} ${outfit.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FCFBF7] text-[#2A2521]">
        {children}
      </body>
    </html>
  );
}

