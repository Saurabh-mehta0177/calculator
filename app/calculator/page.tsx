
import type { Metadata } from "next";

//import CalculatorLayout from "@/components/calculator/CalculatorLayout";
import CalculatorLayout from "@/components/calculators/CalculatorLayout";

export const metadata: Metadata = {
  title: "Ultimate Scientific Calculator Online | FinanceTools",

  description:
    "Free advanced online calculator with scientific functions, geometry, statistics, programmer tools, engineering conversions, financial calculations and graphing.",

  keywords: [
    "Scientific Calculator",
    "Online Calculator",
    "Advanced Calculator",
    "Geometry Calculator",
    "Statistics Calculator",
    "Programmer Calculator",
    "Engineering Calculator",
    "Financial Calculator",
    "Graphing Calculator",
    "Free Calculator Online",
  ],

  alternates: {
    canonical: "/calculator",
  },

  openGraph: {
    title: "Ultimate Calculator | FinanceTools",
    description:
      "Explore scientific, geometry, statistics, programmer and financial calculators.",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function CalculatorPage() {
  return <CalculatorLayout />;
}
