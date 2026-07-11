import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Coco's Face Painting & Balloon Twisting | Huntsville & Madison, AL",
  description: "Vibrant and professional face painting, balloon twisting, and custom balloon decor for kids' birthday parties, corporate events, festivals, and more in Huntsville, Madison, and the Tennessee Valley. FDA-compliant & biodegradable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#fffcf9] text-gray-800">{children}</body>
    </html>
  );
}
