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

export const metadata: Metadata = {
  title: "Good'N Gone Cookie Jar | Custom Decorated Cookies in Waco, TX",
  description: "Handmade, delicious custom decorated sugar cookies for weddings, baby showers, birthdays, and holidays in Waco, Texas. Order your custom batch designed with love by Melissa.",
  keywords: ["custom cookies Waco", "decorated sugar cookies", "Waco Texas bakery", "wedding cookies Waco", "birthday cookies Waco", "Good'N Gone Cookie Jar", "Melissa cookies"],
  authors: [{ name: "Melissa" }],
  openGraph: {
    title: "Good'N Gone Cookie Jar | Custom Decorated Cookies in Waco, TX",
    description: "Handmade, delicious custom decorated sugar cookies for weddings, baby showers, birthdays, and holidays in Waco, Texas. Made with love by Melissa.",
    type: "website",
    locale: "en_US",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${quicksand.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF6EE] text-[#451A03]">
        {children}
      </body>
    </html>
  );
}

