import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "VYNE SALON | Premium Barbershop & Grooming in Al Helio, Ajman",
  description: "Experience premium grooming at VYNE SALON, Al Helio, Ajman. Specializing in precision haircuts, beard styling, hair treatments, and hot towel shaves. Book your tailored grooming experience today.",
  keywords: ["barbershop ajman", "vyne salon ajman", "haircut ajman", "beard styling ajman", "al helio barbershop", "grooming packages", "mens salon ajman"],
  authors: [{ name: "VYNE SALON" }],
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
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-brand-charcoal text-gray-200 antialiased">
        {children}
      </body>
    </html>
  );
}
