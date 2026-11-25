

import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ThemeProvider from "./theme-provider";

import "./globals.css";

export const metadata: Metadata = {
  
  metadataBase: new URL("https://YOUR-DOMAIN.com"),

  title: {
    default: "FinanceTools - Free Financial Calculators",
    template: "%s | FinanceTools",
  },

  description:
    "Free online financial calculators for EMI, FD, SIP, RD, GST, loans and investments. Calculate, plan, save and grow with FinanceTools.",

  applicationName: "FinanceTools",

  keywords: [
    "FinanceTools",
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

  authors: [{ name: "FinanceTools" }],
  creator: "FinanceTools",
  publisher: "FinanceTools",

  alternates: {
    canonical: "/",
  },

  // Favicon and Website Icons
  // icons: {
  //   icon: [
  //     {
  //       url: "/icon.png",
  //       type: "image/png",
  //     },
  //   ],
  //   shortcut: "/icon.png",
  //   apple: "/icon.png",
  // },

  icons: {
  icon: [
    {
      url: "/calculator/icon.png",
      type: "image/png",
    },
  ],
  shortcut: "/calculator/icon.png",
  apple: "/calculator/icon.png",
},

  // Google, WhatsApp, Facebook, LinkedIn Preview
  openGraph: {
    title: "FinanceTools - Free Financial Calculators",

    description:
      "Calculate, plan, save and grow with free online financial calculators for EMI, SIP, FD, RD, GST and investments.",

    url: "/",
    siteName: "FinanceTools",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FinanceTools - Smart Financial Calculator",
        type: "image/png",
      },
    ],
  },

  // Twitter / X Preview
  twitter: {
    card: "summary_large_image",

    title: "FinanceTools - Free Financial Calculators",

    description:
      "Calculate, plan, save and grow with free online financial calculators.",

    images: [
      {
        url: "/og-image.png",
        alt: "FinanceTools - Smart Financial Calculator",
      },
    ],
  },

  // Search Engine Indexing
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
      <body className="flex min-h-screen flex-col">
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