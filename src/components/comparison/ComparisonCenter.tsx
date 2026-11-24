
"use client";

import { useMemo, useState } from "react";

import { getComparison } from "@/lib/comparison/config";
import { calculateComparison } from "@/lib/comparison/calculations";

import type { ComparisonInputs } from "@/lib/comparison/types";

import ComparisonSelector from "./ComparisonSelector";
import ComparisonInputsComponent from "./ComparisonInputs";
import ComparisonResults from "./ComparisonResults";
import ComparisonChart from "./ComparisonChart";
import ComparisonTable from "./ComparisonTable";

interface Props {
  slug?: string;
}

export default function ComparisonCenter({
  slug = "fd-vs-sip",
}: Props) {
  const config = getComparison(slug);

  const [values, setValues] = useState<ComparisonInputs>({
    amount: 5000,
    years: 10,
  });

  const result = useMemo(() => {
    if (!config) return null;

    return calculateComparison(config, values);
  }, [config, values]);

  function handleChange(
    field: keyof ComparisonInputs,
    value: number
  ) {
    setValues((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  function resetValues() {
    setValues({
      amount: 5000,
      years: 10,
    });
  }

  if (!config || !result) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-20">
        <div className="mx-auto max-w-xl rounded-3xl bg-white p-10 text-center shadow-sm">
          <div className="text-5xl">🔍</div>

          <h1 className="mt-5 text-2xl font-bold text-slate-900">
            Comparison Not Found
          </h1>

          <p className="mt-3 text-slate-500">
            The requested financial comparison does not exist.
          </p>

          <a
            href="/compare"
            className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-bold text-white"
          >
            Explore Comparisons
          </a>
        </div>
      </main>
    );
  }

  const colors: [string, string] = [
    config.options[0].color,
    config.options[1].color,
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">

        {/* HERO */}

        <header className="mb-10 text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold text-blue-700">
            ✨ FINANCIAL COMPARISON TOOL
          </span>

          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            {config.title}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
            {config.description}
            {" "}
            Compare estimated investment growth and
            financial outcomes using your own assumptions.
          </p>
        </header>

        <div className="space-y-8">

          {/* SELECT COMPARISON */}

          <ComparisonSelector selected={slug} />

          {/* INPUTS */}

          <ComparisonInputsComponent
            values={values}
            onChange={handleChange}
            onReset={resetValues}
          />

          {/* RESULTS */}

          <section>
            <div className="mb-5">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Your Comparison Results
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Estimated results based on your selected inputs.
              </p>
            </div>

            <ComparisonResults
              result={result}
              colors={colors}
            />
          </section>

          {/* GROWTH CHART */}

          <ComparisonChart
            result={result}
            colors={colors}
          />

          {/* TABLE */}

          <ComparisonTable result={result} />

          {/* EXPLANATION */}

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">
              Understanding Your Comparison
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
              <p>
                <strong className="text-slate-900">
                  {config.options[0].name}:
                </strong>
                {" "}
                {config.options[0].description}.
                The assumed annual return is{" "}
                {config.options[0].annualReturn}%.
              </p>

              <p>
                <strong className="text-slate-900">
                  {config.options[1].name}:
                </strong>
                {" "}
                {config.options[1].description}.
                The assumed annual return is{" "}
                {config.options[1].annualReturn}%.
              </p>

              <p>
                The comparison uses the same total planned
                contribution amount for both options.
                Monthly investment options receive end-of-month
                contributions, while a lumpsum option receives
                the equivalent total amount at the beginning.
              </p>
            </div>
          </section>

          {/* DISCLAIMER */}

          <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h3 className="font-bold text-amber-900">
              Important Financial Disclaimer
            </h3>

            <p className="mt-2 text-xs leading-6 text-amber-800">
              This calculator provides hypothetical mathematical
              projections based on assumed annual returns.
              Returns are not guaranteed. Mutual fund investments
              are subject to market risks. Actual FD, RD and PPF
              calculations depend on their respective product
              rules, compounding methods, applicable rates and
              taxes. This tool does not calculate actual bank
              product maturity values, PPF statutory interest,
              tax benefits or investment fees. It is not
              financial advice.
            </p>
          </section>

          {/* RESET */}

          <div className="flex justify-center">
            <button
              type="button"
              onClick={resetValues}
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 hover:bg-slate-100"
            >
              ↻ Reset Comparison
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}
