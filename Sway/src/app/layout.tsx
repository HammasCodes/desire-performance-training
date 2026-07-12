import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Local Strangers Studios | Custom Tattoos & Piercings | Huntsville, AL",
  description: "Experience premium custom tattoo artistry and professional body piercings at Local Strangers Studios in Huntsville, Alabama. Discover a welcoming, clean, family-oriented, and judgment-free atmosphere.",
  keywords: ["Tattoo Studio Huntsville", "Piercings Huntsville AL", "Custom Tattoos Alabama", "Local Strangers", "Local Strangers Studios", "Sway Art", "Jordan Ln Tattoo"],
  authors: [{ name: "Local Strangers Studios" }],
  openGraph: {
    title: "Local Strangers Studios | Custom Tattoos & Piercings in Huntsville, AL",
    description: "Welcome to Local Strangers Studios. A premier tattoo and piercing studio offering custom artistry in a laid-back, sterile, and welcoming environment.",
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
      className={`${playfair.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-charcoal-950 text-gray-100 selection:bg-gold-amber selection:text-black">
        {children}
      </body>
    </html>
  );
}
