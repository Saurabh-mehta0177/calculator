
import type { MetadataRoute } from "next";

const BASE_URL = "https://smartmoneytools.xyz";

export const dynamic = "force-static";

const pages = [
  // Homepage
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },

  // Main Categories
  { path: "/money-tools/", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/tools/", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/calculator/", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/guide/", priority: 0.9, changeFrequency: "weekly" as const },

  // Important Pages
  { path: "/about/", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/contact/", priority: 0.5, changeFrequency: "monthly" as const },

  // Unique Money Tools
  { path: "/financial-regret/", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/money-leak-detector/", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/money-time-machine/", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/Moneyfuture/", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/one-rupee-challenge/", priority: 0.8, changeFrequency: "monthly" as const },

  // Savings & Investment Calculators
  { path: "/fd-calculator/", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/rd-calculator/", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/simple-interest/", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/compound-interest/", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/sip-calculator/", priority: 1.0, changeFrequency: "monthly" as const },
  { path: "/lumpsum-calculator/", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/cagr-calculator/", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/ppf-calculator/", priority: 0.9, changeFrequency: "monthly" as const },

  // Loan Calculators
  { path: "/emi-calculator/", priority: 1.0, changeFrequency: "monthly" as const },
  { path: "/home-loan/", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/personal-loan/", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/car-loan/", priority: 0.9, changeFrequency: "monthly" as const },

  // Other Calculators
  { path: "/gst-calculator/", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/percentage-calculator/", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/age-calculator/", priority: 0.7, changeFrequency: "monthly" as const },

  // Comparison Pages
  { path: "/compare/", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/compare/fd-vs-sip/", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/compare/sip-vs-lumpsum/", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/compare/ppf-vs-sip/", priority: 0.9, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}





// import type { MetadataRoute } from "next";

// const baseUrl = "https://smartmoneytools.xyz";

// export const dynamic = "force-static";

// export default function sitemap(): MetadataRoute.Sitemap {
//   const pages = [
//     "",
//     "/emi-calculator",
//     "/fd-calculator",
//     "/about",
//     "/contact",
//     "/privacy-policy",
//     "/disclaimer",
//     "/terms",
//   ];

//   return pages.map((page) => ({
//     url: `${baseUrl}${page}`,
//     lastModified: new Date(),
//     changeFrequency: "weekly",
//     priority: page === "" ? 1 : 0.8,
//   }));
// }
