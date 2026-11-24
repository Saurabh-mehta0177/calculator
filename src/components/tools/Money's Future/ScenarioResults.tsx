
'use client'

import type { calculateAllScenarios } from '@/data/MoneyFuture'

type Results = ReturnType<typeof calculateAllScenarios>

interface Props {
  results: Results
  years: number
}

function money(value: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

export default function ScenarioResults({
  results,
  years,
}: Props) {
  const maxWorth = Math.max(
    ...results.map((item) => item.finalNetWorth),
    1,
  )

  return (
    <section className="mt-12">
      <div className="mb-7">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
          Your financial journey
        </span>

        <h2 className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white">
          Three Possible Futures
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Compare your projected wealth in {years} years.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {results.map((result, index) => (
          <div
            key={result.scenario.id}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
          >
            <div
              className="h-2"
              style={{
                backgroundColor: result.scenario.color,
              }}
            />

            <div className="p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Scenario {index + 1}
              </span>

              <h3
                className="mt-2 text-xl font-extrabold"
                style={{
                  color: result.scenario.color,
                }}
              >
                {result.scenario.name}
              </h3>

              <p className="mt-3 min-h-10 text-sm leading-6 text-slate-500">
                {result.scenario.description}
              </p>

              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Projected Net Worth
              </p>

              <p className="mt-2 break-words text-3xl font-black text-slate-900 dark:text-white">
                {money(result.finalNetWorth)}
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between gap-3 text-sm">
                  <span className="text-slate-500">
                    Total Savings
                  </span>

                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    {money(result.totalSavings)}
                  </span>
                </div>

                <div className="flex justify-between gap-3 text-sm">
                  <span className="text-slate-500">
                    Investment Value
                  </span>

                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    {money(result.totalInvestment)}
                  </span>
                </div>
              </div>

              <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${
                      (result.finalNetWorth / maxWorth) * 100
                    }%`,
                    backgroundColor: result.scenario.color,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Wealth Timeline */}

      <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
          Wealth Growth Timeline
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          See how your projected wealth changes every year.
        </p>

        <div className="mt-8 space-y-8">
          {results.map((result) => (
            <div key={result.scenario.id}>
              <h3
                className="mb-4 font-bold"
                style={{
                  color: result.scenario.color,
                }}
              >
                {result.scenario.name}
              </h3>

              <div className="space-y-4">
                {result.yearlyData.map((year) => (
                  <div key={year.year}>
                    <div className="mb-2 flex justify-between gap-3 text-sm">
                      <span className="text-slate-500">
                        Year {year.year}
                      </span>

                      <span className="font-bold text-slate-900 dark:text-white">
                        {money(year.netWorth)}
                      </span>
                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${
                            (year.netWorth / maxWorth) * 100
                          }%`,
                          backgroundColor: result.scenario.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
