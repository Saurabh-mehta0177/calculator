
"use client";

import type { ComparisonResult } from "@/lib/comparison/types";
import { formatCompactINR, formatINR } from "@/lib/comparison/format";

interface Props {
  result: ComparisonResult;
  colors: [string, string];
}

export default function ComparisonChart({
  result,
  colors,
}: Props) {
  const [first, second] = result.results;

  const maximum = Math.max(
    first.estimatedCorpus,
    second.estimatedCorpus,
    1
  );

  const years = Math.max(0, result.inputs.years);

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">
        Investment Growth Comparison
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        Compare the estimated corpus at the end of each year.
      </p>

      <div className="mt-6 space-y-7">
        {Array.from({ length: years }, (_, index) => {
          const year = index + 1;

          const firstPoint = first.growthData.find(
            (point) => point.year === year
          );

          const secondPoint = second.growthData.find(
            (point) => point.year === year
          );

          if (!firstPoint || !secondPoint) return null;

          return (
            <div key={year}>
              <p className="mb-3 text-sm font-bold text-slate-700">
                Year {year}
              </p>

              {[firstPoint, secondPoint].map(
                (point, optionIndex) => {
                  const percentage = Math.max(
                    0,
                    Math.min(100, (point.corpus / maximum) * 100)
                  );

                  return (
                    <div
                      key={optionIndex}
                      className="mb-3"
                    >
                      <div className="mb-1 flex justify-between gap-2 text-xs text-slate-500">
                        <span>
                          {optionIndex === 0
                            ? first.name
                            : second.name}
                        </span>

                        <strong className="text-slate-800">
                          {formatCompactINR(point.corpus)}
                        </strong>
                      </div>

                      <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${percentage}%`,
                            backgroundColor: colors[optionIndex],
                          }}
                        />
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap gap-5 text-xs text-slate-600">
        <span>
          <span
            className="mr-2 inline-block h-3 w-3 rounded-full"
            style={{ backgroundColor: colors[0] }}
          />
          {first.name}
        </span>

        <span>
          <span
            className="mr-2 inline-block h-3 w-3 rounded-full"
            style={{ backgroundColor: colors[1] }}
          />
          {second.name}
        </span>
      </div>

      <p className="mt-5 text-xs text-slate-500">
        Final corpus: {formatINR(first.estimatedCorpus)} vs{" "}
        {formatINR(second.estimatedCorpus)}
      </p>
    </section>
  );
}
