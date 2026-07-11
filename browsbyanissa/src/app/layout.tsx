import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brows by Anissa | Premier Microblading & Powder Brows | Charleston, SC",
  description: "Get perfect natural 'it girl' brows by Anissa Martinez. Over 6+ years experience in microblading, powder brows, color boosts & professional beauty training in Charleston, South Carolina.",
  keywords: ["microblading charleston", "powder brows charleston sc", "eyebrow microblading south carolina", "anissa martinez brows", "lowcountry microblading", "brow training charleston"],
  authors: [{ name: "Anissa Martinez" }],
  openGraph: {
    title: "Brows by Anissa | Premier Microblading & Powder Brows | Charleston, SC",
    description: "Get perfect natural 'it girl' brows by Anissa Martinez. Over 6+ years experience in microblading, powder brows, and training.",
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
      className={`${playfair.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

