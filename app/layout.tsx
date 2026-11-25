
import Script from "next/script";
import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ThemeProvider from "./theme-provider";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://smartmoneytools.xyz"),

  title: {
    default: "SmartMoneyTools - Free Financial Calculators",
    template: "%s | SmartMoneyTools",
  },

  description:
    "SmartMoneyTools offers free online financial calculators for EMI, SIP, FD, RD, GST, loans, savings and investments. Calculate returns, plan your finances and make smarter money decisions.",

  applicationName: "SmartMoneyTools",

  keywords: [
    "SmartMoneyTools",
    "financial calculators",
    "free online calculators",
    "EMI calculator",
    "SIP calculator",
    "FD calculator",
    "RD calculator",
    "GST calculator",
    "loan calculator",
    "investment calculator",
    "savings calculator",
    "financial planning",
  ],

  authors: [{ name: "SmartMoneyTools" }],
  creator: "SmartMoneyTools",
  publisher: "SmartMoneyTools",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: "SmartMoneyTools - Free Financial Calculators",

    description:
      "Explore free EMI, SIP, FD, RD, GST and loan calculators. Plan your savings, investments and financial future with SmartMoneyTools.",

    url: "https://smartmoneytools.xyz/",
    siteName: "SmartMoneyTools",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "https://smartmoneytools.xyz/og-image.png",
        width: 1200,
        height: 630,
        alt: "SmartMoneyTools - Free Financial Calculators",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "SmartMoneyTools - Free Financial Calculators",

    description:
      "Free online financial calculators for EMI, SIP, FD, RD, GST and investments.",

    images: [
      "https://smartmoneytools.xyz/og-image.png",
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WP3SC5LV');
            `,
          }}
        />
      </head>

      <body className="flex min-h-screen flex-col">
        {/* Google Tag Manager NoScript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WP3SC5LV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ThemeProvider>
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
