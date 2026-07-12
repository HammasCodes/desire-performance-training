import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lash Beauty Center | Silk Lash Extensions & Beauty Studio in Ajman, UAE",
  description: "Experience premium silk lash extensions, manicures, waxing, and luxury beauty treatments at Lash Beauty Center, Al Muwaihat 3, Ajman. Clean, relaxing, spotless beauty studio.",
  keywords: ["lash extensions ajman", "eyelash extensions ajman", "lash beauty center ajman", "nails ajman", "waxing ajman", "beauty center al muwaihat", "salon ajman", "silk lashes ajman"],
  openGraph: {
    title: "Lash Beauty Center | Silk Lash Extensions & Beauty Studio in Ajman, UAE",
    description: "Premium silk lash extensions, manicures, waxing, and luxury beauty treatments at Lash Beauty Center, Al Muwaihat 3, Ajman.",
    url: "https://lashbeautycenter.ae",
    siteName: "Lash Beauty Center",
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
      className={`${playfair.variable} ${montserrat.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-cream-base text-slate-body font-sans">
        {children}
      </body>
    </html>
  );
}
