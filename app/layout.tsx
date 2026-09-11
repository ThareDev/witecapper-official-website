import { ThemeModeScript } from "flowbite-react";
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import { ThemeInit } from "../.flowbite-react/init";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const sans = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const BASE_URL = "https://whitecaper.lk"; // 🔁 Replace with your actual domain (should this be witecapper.lk?)

export const viewport: Viewport = {
  themeColor: "#07080A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "WiteCapper — Sri Lanka's Fearless Female Rap Icon | Official Site",
    template: "%s | WiteCapper",
  },
  description:
    "Official website of WiteCapper (also searched as White Capper, White Caper, Wite Capper; සුදු තොප්පිකාරී) — an emerging Sri Lankan female rapper and hip-hop artist known for rare, unfiltered live performances. Stream music, check tour dates, and follow her rise in the local rap scene.",

  keywords: [
    // ── Artist identity
    "WiteCapper",
    "Wite Capper",
    "White Capper",
    "White Caper",
    "WiteCapper rapper",
    "WiteCapper official",
    "White Capper rapper",
    "White Caper rapper",
    "සුදු තොප්පිකාරී",
    "WiteCapper music",
    "WiteCapper songs",
    "WiteCapper Sri Lanka",
    "WiteCapper rap",
    "White Capper Sri Lanka",
    "White Caper Sri Lanka",

    // ── Genre / sound
    "Sri Lankan female rapper",
    "female rapper Sri Lanka",
    "Sri Lanka hip hop artist female",
    "Sinhala rap artist female",
    "Sinhala rap",
    "Sinhala hip hop",
    "Sri Lanka rap music",
    "Sri Lankan rapper",
    "underground rap Sri Lanka",
    "South Asian female rapper",
    "Asian hip hop artist female",

    // ── Location signals
    "Sri Lanka music artist",
    "Colombo rapper",
    "Sri Lankan music 2026",
    "Sinhala music 2026",

    // ── Intent / action keywords
    "book Sri Lankan rapper",
    "hire female rapper Sri Lanka",
    "WiteCapper booking",
    "WiteCapper tour dates",
    "WiteCapper live show",
    "Sri Lanka live rap performance",
    "rap collaboration Sri Lanka",
    "rap press inquiry Sri Lanka",

    // ── Discovery / streaming
    // 🔁 Add specific song titles, features, and platform links here once confirmed
    "WiteCapper Spotify",
    "WiteCapper YouTube",
    "WiteCapper TikTok",
    "WiteCapper Instagram",
    "stream Sri Lanka rap",
    "new Sri Lankan music",
    "best Sri Lankan female rapper",
    "rising rapper Sri Lanka",
  ],

  authors: [{ name: "WiteCapper", url: BASE_URL }],
  creator: "WiteCapper",
  publisher: "WiteCapper Official",

  category: "music",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "WiteCapper Official",
    title: "WiteCapper — Sri Lanka's Fearless Female Rap Icon",
    description:
      "Rare and unfiltered — the art and soul of live performance. Stream music, check tour dates, and follow the rise of WiteCapper (සුදු තොප්පිකාරී), one of Sri Lanka's most fearless voices in rap.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WiteCapper — Official",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "WiteCapper — Sri Lanka's Fearless Female Rap Icon",
    description:
      "Official site of WiteCapper. Rare, unfiltered rap from Sri Lanka. Stream music, book shows, and follow the journey.",
    images: ["/og-image.jpg"],
    creator: "@witecapper", // 🔁 Replace with the real handle
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },

  manifest: "/manifest.json",

  alternates: {
    canonical: BASE_URL,
  },

  verification: {
    // google: "your-google-site-verification-token", // Uncomment and add when you verify Search Console
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "WiteCapper",
  alternateName: ["White Capper", "White Caper", "Wite Capper", "සුදු තොප්පිකාරී"],
  url: BASE_URL,
  genre: ["Rap", "Hip-Hop", "Sinhala Rap"],
  homeLocation: {
    "@type": "Place",
    name: "Colombo, Sri Lanka",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={`${display.variable} ${sans.variable} bg-[#07080A] antialiased`}>
        <ThemeInit />
        {children}
      </body>
    </html>
  );
}