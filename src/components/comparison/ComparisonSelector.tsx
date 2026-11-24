
"use client";

import Link from "next/link";
import { COMPARISONS } from "@/lib/comparison/config";

interface Props {
  selected: string;
}

export default function ComparisonSelector({
  selected,
}: Props) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">
        Choose Your Comparison
      </h2>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {COMPARISONS.map((item) => (
          <Link
            key={item.slug}
            href={`/compare/${item.slug}`}
            className={`rounded-2xl border p-5 transition ${
              selected === item.slug
                ? "border-blue-600 bg-blue-50"
                : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
            }`}
          >
            <h3 className="font-bold text-slate-900">
              {item.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              {item.description}
            </p>

            <span className="mt-4 inline-block text-sm font-bold text-blue-700">
              Compare Now →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
