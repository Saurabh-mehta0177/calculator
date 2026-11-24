
"use client";

import type { ComparisonResult } from "@/lib/comparison/types";
import { formatINR } from "@/lib/comparison/format";

interface Props {
  result: ComparisonResult;
  colors: [string, string];
}

export default function ComparisonResults({
  result,
  colors,
}: Props) {
  const [first, second] = result.results;

  return (
    <section className="space-y-6">
      <div className="grid gap-5 md:grid-cols-2">
        {[first, second].map((item, index) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
          >
            <div
              className="h-2"
              style={{ backgroundColor: colors[index] }}
            />

            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-900">
                {item.name}
              </h3>

              <p className="mt-4 text-sm text-slate-500">
                Estimated Corpus
              </p>

              <p className="mt-2 text-3xl font-extrabold text-slate-900">
                {formatINR(item.estimatedCorpus)}
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between gap-3 text-sm">
                  <span className="text-slate-500">
                    Total Invested
                  </span>
                  <strong>
                    {formatINR(item.totalInvested)}
                  </strong>
                </div>

                <div className="flex justify-between gap-3 text-sm">
                  <span className="text-slate-500">
                    Estimated Returns
                  </span>
                  <strong className="text-green-700">
                    {formatINR(item.estimatedReturns)}
                  </strong>
                </div>

                <div className="flex justify-between gap-3 text-sm">
                  <span className="text-slate-500">
                    Assumed Annual Return
                  </span>
                  <strong>{item.annualReturn}%</strong>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
        <p className="text-sm font-semibold text-blue-900">
          Difference in Estimated Corpus
        </p>

        <p className="mt-2 text-3xl font-extrabold text-blue-800">
          {formatINR(result.difference)}
        </p>

        <p className="mt-2 text-sm text-blue-800">
          {result.winner === "Equal"
            ? "Both options have the same estimated corpus."
            : `${result.winner} has the higher estimated corpus under these assumptions.`}
        </p>
      </div>
    </section>
  );
}
