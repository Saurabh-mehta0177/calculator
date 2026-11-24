
"use client";

import type { ComparisonResult } from "@/lib/comparison/types";
import { formatINR } from "@/lib/comparison/format";

export default function ComparisonTable({
  result,
}: {
  result: ComparisonResult;
}) {
  const [first, second] = result.results;

  const rows = [
    {
      label: "Total Investment",
      a: formatINR(first.totalInvested),
      b: formatINR(second.totalInvested),
    },
    {
      label: "Annual Return Assumption",
      a: `${first.annualReturn}%`,
      b: `${second.annualReturn}%`,
    },
    {
      label: "Estimated Returns",
      a: formatINR(first.estimatedReturns),
      b: formatINR(second.estimatedReturns),
    },
    {
      label: "Estimated Final Corpus",
      a: formatINR(first.estimatedCorpus),
      b: formatINR(second.estimatedCorpus),
    },
  ];

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="p-6">
        <h2 className="text-xl font-bold text-slate-900">
          Detailed Comparison
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[500px] text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="p-4 text-left font-bold">
                Particulars
              </th>

              <th className="p-4 text-right font-bold">
                {first.name}
              </th>

              <th className="p-4 text-right font-bold">
                {second.name}
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr
                key={row.label}
                className="border-t border-slate-100"
              >
                <td className="p-4 text-slate-600">
                  {row.label}
                </td>

                <td className="p-4 text-right font-semibold">
                  {row.a}
                </td>

                <td className="p-4 text-right font-semibold">
                  {row.b}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
