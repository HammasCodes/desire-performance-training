import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nipa Desai Henna | Henna Artist in North Austin, TX",
  description:
    "Nipa Desai is a henna and mehndi artist with 20+ years serving North Austin, TX. Bridal mehndi, sangeet and wedding guest henna, corporate and festival events, and school and community events. By appointment; mobile service available for events. Message on Instagram to book.",
  keywords: [
    "henna artist Austin",
    "mehndi Austin TX",
    "bridal mehndi Austin",
    "henna North Austin",
    "wedding henna Austin",
    "Indian henna artist Austin",
  ],
  alternates: { canonical: "https://nipa-desai-henna.vercel.app/" },
  openGraph: {
    title: "Nipa Desai Henna | Henna Artist in North Austin, TX",
    description:
      "20+ years of intricate, personalized henna designs across North Austin. Bridal mehndi, weddings, festivals, and community events. By appointment.",
    type: "website",
    locale: "en_US",
    siteName: "Nipa Desai Henna",
  },
  robots: { index: true, follow: true },
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
      <body className="min-h-full flex flex-col bg-cream-base text-maroon-deep selection:bg-gold-metallic selection:text-maroon-deep">
        {children}
      </body>
    </html>
  );
}
