
import type { Metadata } from "next";

import ComparisonCenter from "@/components/comparison/ComparisonCenter";

export const metadata: Metadata = {
  title: "Financial Comparison Calculator | FinanceTools",

  description:
    "Compare FD vs SIP, SIP vs Lumpsum and PPF vs SIP. Explore investment projections, estimated returns and financial growth with free comparison calculators.",

  alternates: {
    canonical: "/compare",
  },

  openGraph: {
    title: "Financial Comparison Tools | FinanceTools",
    description:
      "Compare financial options and explore hypothetical investment projections.",
    type: "website",
  },
};

export default function ComparePage() {
  return <ComparisonCenter slug="fd-vs-sip" />;
}
