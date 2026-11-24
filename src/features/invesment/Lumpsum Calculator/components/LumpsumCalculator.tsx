

'use client'

import { useMemo, useState } from 'react'

import LumpsumInputs from './LumpsumInputs'
import LumpsumResult from './LumpsumResult'
import LumpsumChart from './LumpsumChart'
import LumpsumGuide from './LumpsumGuide'

import Sidebar from '@/components/layout/Sidebar'

import { calculateLumpsum } from '../lib/lumpsum-calculation'
import { defaultCurrency } from '@/lib/currency/currencies'

export default function LumpsumCalculator() {
  const [investment, setInvestment] = useState(500000)
  const [interestRate, setInterestRate] = useState(12)
  const [years, setYears] = useState(10)
  const [currency, setCurrency] = useState(defaultCurrency)

  // Sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // Lumpsum calculation
  const result = useMemo(
    () =>
      calculateLumpsum({
        investment,
        interestRate,
        years,
      }),
    [investment, interestRate, years]
  )

  return (
    <main className="lumpsum-page mx-auto w-full max-w-7xl space-y-7 px-4 py-6 text-slate-900 transition-colors duration-300 dark:text-slate-100 sm:px-6 lg:px-8">
      {/* HERO SECTION */}
      <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-Violet-600 via-indigo-600 to-violet-700 px-6 py-8 text-white shadow-xl sm:px-9 sm:py-10">
        <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-blue-100">
            Smart Investment Planner
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Lumpsum Calculator
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-50 sm:text-base">
            Estimate the future value of your one-time investment, total
            invested amount and potential returns. Adjust your investment
            amount, expected annual return and investment period to explore
            different wealth creation scenarios.
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

        {/* RIGHT LUMPSUM CALCULATOR CONTENT */}
        <div className="min-w-0">
          {/* INPUTS + RESULTS GRID */}
          <div className="grid items-start gap-6 lg:grid-cols-[1.05fr_.95fr]">
            {/* LUMPSUM INPUT SECTION */}
            <section className="lumpsum-surface min-w-0 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-7">
              <div className="mb-7 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-2xl dark:bg-blue-950/50">
                  💰
                </span>

                <div>
                  <h2 className="text-xl font-extrabold">
                    Your Lumpsum Details
                  </h2>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Change values to update your calculation instantly.
                  </p>
                </div>
              </div>

              <LumpsumInputs
                investment={investment}
                interestRate={interestRate}
                years={years}
                currency={currency}
                onInvestmentChange={setInvestment}
                onInterestChange={setInterestRate}
                onYearsChange={setYears}
                onCurrencyChange={setCurrency}
              />
            </section>

            {/* LUMPSUM RESULTS SECTION */}
            <section className="min-w-0 space-y-6">
              {/* MATURITY AMOUNT */}
              <div className="lumpsum-highlight rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5 shadow-sm transition-colors duration-300 dark:border-blue-900/60 dark:from-blue-950/40 dark:to-slate-900 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-100 text-xl dark:bg-blue-900/60">
                    📈
                  </span>

                  <p className="text-sm font-bold text-blue-800 dark:text-blue-300">
                    Estimated Lumpsum Maturity Amount
                  </p>
                </div>

                <p className="mt-4 break-words text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                  {result.totalValue.toLocaleString('en-IN', {
                    maximumFractionDigits: 2,
                  })}{' '}
                  <span className="text-lg">{currency}</span>
                </p>

                <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  Estimated future value based on your one-time investment,
                  expected annual return and investment duration. Actual
                  investment returns may vary.
                </p>
              </div>

              {/* LUMPSUM BREAKDOWN */}
              <div className="lumpsum-surface rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-7">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-xl dark:bg-blue-950/50">
                    📊
                  </span>

                  <div>
                    <h2 className="text-lg font-extrabold">
                      Lumpsum Investment Breakdown
                    </h2>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      Your estimated investment returns
                    </p>
                  </div>
                </div>

                <LumpsumResult
                  investedAmount={result.investedAmount}
                  estimatedReturns={result.estimatedReturns}
                  totalValue={result.totalValue}
                  currency={currency}
                />
              </div>

              {/* LUMPSUM CHART */}
              <div className="lumpsum-surface rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-7">
                <h2 className="mb-5 text-lg font-extrabold">
                  Lumpsum Investment Growth
                </h2>

                <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
                  See how your initial investment and estimated returns
                  contribute to the future value.
                </p>

                <LumpsumChart
                  investedAmount={result.investedAmount}
                  estimatedReturns={result.estimatedReturns}
                  currency={currency}
                />
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* COMPLETE LUMPSUM GUIDE */}
      <LumpsumGuide />
    </main>
  )
}