
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ComparisonCenter from "@/components/comparison/ComparisonCenter";

import {
  COMPARISONS,
  getComparison,
} from "@/lib/comparison/config";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return COMPARISONS.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const config = getComparison(slug);

  if (!config) {
    return {
      title: "Comparison Not Found | FinanceTools",
    };
  }

  return {
    title: `${config.title} | FinanceTools`,

    description: config.description,

    alternates: {
      canonical: `/compare/${config.slug}`,
    },

    openGraph: {
      title: `${config.title} | FinanceTools`,
      description: config.description,
      type: "website",
    },
  };
}

export default async function ComparisonPage({
  params,
}: Props) {
  const { slug } = await params;

  const config = getComparison(slug);

  if (!config) {
    notFound();
  }

  return <ComparisonCenter slug={slug} />;
}
