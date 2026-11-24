
import type { ComparisonConfig } from "./types";

export const COMPARISONS: ComparisonConfig[] = [
  {
    slug: "fd-vs-sip",
    title: "FD vs SIP Calculator",
    description:
      "Compare hypothetical fixed-rate monthly deposits with market-linked SIP investments.",

    options: [
      {
        id: "fd",
        name: "FD-style Deposit",
        shortName: "FD",
        description: "Illustrative fixed-rate deposit projection",
        annualReturn: 7,
        mode: "monthly",
        color: "#2563eb",
        icon: "🏦",
      },
      {
        id: "sip",
        name: "SIP Mutual Fund",
        shortName: "SIP",
        description: "Illustrative market-linked investment projection",
        annualReturn: 12,
        mode: "monthly",
        color: "#16a34a",
        icon: "📈",
      },
    ],
  },

  {
    slug: "sip-vs-lumpsum",
    title: "SIP vs Lumpsum Calculator",
    description:
      "Compare investing your total planned amount monthly versus investing it all at the beginning.",

    options: [
      {
        id: "sip",
        name: "SIP Investment",
        shortName: "SIP",
        description: "Invest the amount every month",
        annualReturn: 12,
        mode: "monthly",
        color: "#2563eb",
        icon: "📈",
      },
      {
        id: "lumpsum",
        name: "Lumpsum Investment",
        shortName: "Lumpsum",
        description: "Invest the equivalent total amount upfront",
        annualReturn: 12,
        mode: "lumpsum",
        color: "#16a34a",
        icon: "💰",
      },
    ],
  },

  {
    slug: "ppf-vs-sip",
    title: "PPF vs SIP Calculator",
    description:
      "Compare an illustrative PPF-style savings projection with a market-linked SIP projection.",

    options: [
      {
        id: "ppf",
        name: "PPF",
        shortName: "PPF",
        description: "Illustrative fixed-rate PPF-style projection",
        annualReturn: 7.1,
        mode: "monthly",
        color: "#2563eb",
        icon: "🏛️",
      },
      {
        id: "sip",
        name: "SIP Mutual Fund",
        shortName: "SIP",
        description: "Illustrative market-linked investment projection",
        annualReturn: 12,
        mode: "monthly",
        color: "#16a34a",
        icon: "📈",
      },
    ],
  },
];

export function getComparison(
  slug: string
): ComparisonConfig | undefined {
  return COMPARISONS.find(
    (item) => item.slug === slug
  );
}
