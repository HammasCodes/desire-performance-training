import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Wiper Mobile Car Wash & Detailing | Doorstep Service UAE",
  description: "Premium doorstep mobile car washing and detailing service in Dubai, Sharjah, Ajman, and Umm Al Quwain. Professional equipment, eco-friendly approach, operating daily 10AM - 10PM.",
  keywords: [
    "mobile car wash dubai",
    "car detailing sharjah",
    "doorstep car wash ajman",
    "mobile wash uaq",
    "eco car wash uae",
    "car polishing dubai",
    "interior detailing uae",
    "wiper car wash"
  ],
  authors: [{ name: "Wiper Car Wash" }],
  openGraph: {
    title: "Wiper Mobile Car Wash & Detailing | Doorstep Service UAE",
    description: "Eco-friendly, professional mobile car wash coming directly to your home or office in Dubai, Sharjah, Ajman, and UAQ.",
    url: "https://wiper.ae",
    siteName: "Wiper Mobile Car Wash",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wiper Mobile Car Wash & Detailing | Doorstep Service UAE",
    description: "Professional doorstep car detailing and washing operating 10AM - 10PM daily.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoWashService",
    "name": "Wiper Mobile Car Wash & Detailing",
    "image": "https://wiper.ae/og-image.jpg", // placeholder target for metadata
    "@id": "https://wiper.ae/#website",
    "url": "https://wiper.ae",
    "telephone": "+971504345233",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Dubai" },
      { "@type": "AdministrativeArea", "name": "Sharjah" },
      { "@type": "AdministrativeArea", "name": "Ajman" },
      { "@type": "AdministrativeArea", "name": "Umm Al Quwain" }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "22:00"
    },
    "sameAs": [
      "https://www.instagram.com/wiper.ae"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
