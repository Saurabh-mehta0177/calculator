import Script from "next/script";

import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ThemeProvider from "./theme-provider";

import "./globals.css";

export const metadata: Metadata = {
  
 // metadataBase: new URL("https://YOUR-DOMAIN.com"),
  metadataBase: new URL("https://smartmoneytools.xyz"),

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
  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

//   icons: {
//   icon: [
//     {
//       url: "/calculator/icon.png",
//       type: "image/png",
//     },
//   ],
//   shortcut: "/calculator/icon.png",
//   apple: "/calculator/icon.png",
// },

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


// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className="flex min-h-screen flex-col">
//         <ThemeProvider>
//           <Navbar />

//           <main className="flex-1">
//             {children}
//           </main>

//           <Footer />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }


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

