
'use client'

import { useMemo, useState } from 'react'

import CAGRInputs from './CAGRInputs'
import CAGRResult from './CAGRResult'
import CAGRChart from './CAGRChart'
import CAGRGuide from './CAGRGuide'

import Sidebar from '@/components/layout/Sidebar'

import { calculateCAGR } from '../lib/cagr-calculation'
import { defaultCurrency } from '@/lib/currency/currencies'

export default function CAGRCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(100000)
  const [finalValue, setFinalValue] = useState(200000)
  const [years, setYears] = useState(5)
  const [currency, setCurrency] = useState(defaultCurrency)

  // Sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // CAGR calculation
  const result = useMemo(
    () =>
      calculateCAGR({
        initialInvestment,
        finalValue,
        years,
      }),
    [initialInvestment, finalValue, years]
  )

  return (
    <main className="cagr-page mx-auto w-full max-w-7xl space-y-7 px-4 py-6 text-slate-900 transition-colors duration-300 dark:text-slate-100 sm:px-6 lg:px-8">
      {/* HERO SECTION */}
      <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 via-violet-700 to-fuchsia-800 px-6 py-8 text-white shadow-xl sm:px-9 sm:py-10">
        <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-indigo-100">
            Smart Investment Planner
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            CAGR Calculator
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-indigo-50 sm:text-base">
            Calculate the annualized growth rate of your investment. Enter
            your initial investment, final value and investment period to
            understand how your investment has grown over time.
          </p>
        </div>
      </header>

      {/* MAIN LAYOUT WITH SIDEBAR */}
      <div
        className={`grid items-start gap-6 transition-all duration-300 ${
          sidebarOpen
            ? 'lg:grid-cols-[240px_minmax(0,1fr)]'
            : 'lg:grid-cols-1'
        }`}
      >
        {/* LEFT SIDEBAR */}
        <div className="min-w-0">
          <Sidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        </div>

        {/* RIGHT CAGR CALCULATOR CONTENT */}
        <div className="min-w-0">
          {/* INPUTS + RESULTS GRID */}
          <div className="grid items-start gap-6 lg:grid-cols-[1.05fr_.95fr]">
            {/* CAGR INPUT SECTION */}
            <section className="cagr-surface min-w-0 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-7">
              <div className="mb-7 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-indigo-50 text-2xl dark:bg-indigo-950/50">
                  📈
                </span>

                <div>
                  <h2 className="text-xl font-extrabold">
                    Your CAGR Details
                  </h2>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Change values to update your calculation instantly.
                  </p>
                </div>
              </div>

              <CAGRInputs
                initialInvestment={initialInvestment}
                finalValue={finalValue}
                years={years}
                currency={currency}
                onInitialChange={setInitialInvestment}
                onFinalChange={setFinalValue}
                onYearsChange={setYears}
                onCurrencyChange={setCurrency}
              />
            </section>

            {/* CAGR RESULTS SECTION */}
            <section className="min-w-0 space-y-6">
              {/* CAGR RESULT */}
              <div className="cagr-highlight rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-5 shadow-sm transition-colors duration-300 dark:border-indigo-900/60 dark:from-indigo-950/40 dark:to-slate-900 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-100 text-xl dark:bg-indigo-900/60">
                    💹
                  </span>

                  <p className="text-sm font-bold text-indigo-800 dark:text-indigo-300">
                    Compound Annual Growth Rate
                  </p>
                </div>

                <p className="mt-4 break-words text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                  {result.cagr.toFixed(2)}%
                  <span className="ml-2 text-base font-semibold text-slate-500 dark:text-slate-400">
                    per year
                  </span>
                </p>

                <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  Estimated annualized compounded growth based on the initial
                  value, final value and investment duration. Past performance
                  does not guarantee future returns.
                </p>
              </div>

              {/* CAGR BREAKDOWN */}
              <div className="cagr-surface rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-7">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-indigo-50 text-xl dark:bg-indigo-950/50">
                    📊
                  </span>

                  <div>
                    <h2 className="text-lg font-extrabold">
                      CAGR Investment Breakdown
                    </h2>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      Initial value, total growth and annualized return
                    </p>
                  </div>
                </div>

                <CAGRResult
                  initialInvestment={result.initialInvestment}
                  finalValue={result.finalValue}
                  totalGrowth={result.totalGrowth}
                  cagr={result.cagr}
                  currency={currency}
                />
              </div>

              {/* CAGR CHART */}
              <div className="cagr-surface rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-7">
                <h2 className="mb-5 text-lg font-extrabold">
                  Investment Growth Breakdown
                </h2>

                <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
                  Compare your initial investment with the total growth over
                  the selected period.
                </p>

                <CAGRChart
                  initialInvestment={result.initialInvestment}
                  totalGrowth={result.totalGrowth}
                  currency={currency}
                />
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* COMPLETE CAGR GUIDE */}
      <CAGRGuide />
    </main>
  )
}