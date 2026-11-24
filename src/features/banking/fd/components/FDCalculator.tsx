

'use client'

import { useMemo, useState } from 'react'

import FDInputs from './FDInputs'
import FDResult from './FDResult'
import FDChart from './FDChart'
import FDGuide from './FDGuide'

import Sidebar from '@/components/layout/Sidebar'

import { calculateFD } from '../lib/fd-calculation'
import { defaultCurrency } from '@/lib/currency/currencies'

export default function FDCalculator() {
  const [amount, setAmount] = useState(100000)
  const [interestRate, setInterestRate] = useState(7)
  const [years, setYears] = useState(5)
  const [currency, setCurrency] = useState(defaultCurrency)

  // Sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // FD Calculation
  const result = useMemo(
    () =>
      calculateFD({
        amount,
        interestRate,
        years,
      }),
    [amount, interestRate, years]
  )

  return (
    <main className="fd-page mx-auto w-full max-w-7xl space-y-7 px-4 py-6 text-slate-900 transition-colors duration-300 dark:text-slate-100 sm:px-6 lg:px-8">

      {/* HERO SECTION */}
      <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 px-6 py-8 text-white shadow-xl sm:px-9 sm:py-10">

        <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10">

          <p className="text-xs font-bold uppercase tracking-[.22em] text-emerald-100">
            Smart Investment Planner
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Fixed Deposit Calculator
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-emerald-50 sm:text-base">
            Calculate your FD maturity amount, total investment
            and interest earned. Adjust the values to explore
            different interest rates and investment periods.
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

        {/* RIGHT FD CALCULATOR CONTENT */}
        <div className="min-w-0">

          {/* INPUTS + RESULTS GRID */}
          <div className="grid items-start gap-6 lg:grid-cols-[1.05fr_.95fr]">

            {/* FD INPUT SECTION */}
            <section className="fd-surface min-w-0 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-7">

              <div className="mb-7 flex items-center gap-3">

                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-50 text-2xl dark:bg-emerald-950/50">
                  🏦
                </span>

                <div>

                  <h2 className="text-xl font-extrabold">
                    Your FD Details
                  </h2>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Change values to update your calculation instantly.
                  </p>

                </div>

              </div>

              <FDInputs
                amount={amount}
                interestRate={interestRate}
                years={years}
                currency={currency}
                onAmountChange={setAmount}
                onInterestChange={setInterestRate}
                onYearsChange={setYears}
                onCurrencyChange={setCurrency}
              />

            </section>

            {/* FD RESULTS SECTION */}
            <section className="min-w-0 space-y-6">

              {/* MATURITY AMOUNT */}
              <div className="fd-highlight rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-5 shadow-sm transition-colors duration-300 dark:border-emerald-900/60 dark:from-emerald-950/40 dark:to-slate-900 sm:p-7">

                <div className="flex items-center gap-3">

                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-100 text-xl dark:bg-emerald-900/60">
                    💰
                  </span>

                  <p className="text-sm font-bold text-emerald-800 dark:text-emerald-300">
                    Estimated FD Maturity Amount
                  </p>

                </div>

                <p className="mt-4 break-words text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                  {result.maturityAmount.toLocaleString('en-IN', {
                    maximumFractionDigits: 2,
                  })}{' '}
                  <span className="text-lg">{currency}</span>
                </p>

                <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  Estimated maturity value based on your deposit
                  amount, interest rate and investment duration.
                  Actual bank calculations may vary.
                </p>

              </div>

              {/* FD BREAKDOWN */}
              <div className="fd-surface rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-7">

                <div className="mb-5 flex items-center gap-3">

                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-50 text-xl dark:bg-emerald-950/50">
                    📊
                  </span>

                  <div>

                    <h2 className="text-lg font-extrabold">
                      FD Maturity Breakdown
                    </h2>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      Your estimated investment returns
                    </p>

                  </div>

                </div>

                <FDResult
                  investedAmount={result.investedAmount}
                  interestEarned={result.interestEarned}
                  maturityAmount={result.maturityAmount}
                  currency={currency}
                />

              </div>

              {/* FD CHART */}
              <div className="fd-surface rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-7">

                <h2 className="mb-5 text-lg font-extrabold">
                  FD Investment Breakdown
                </h2>

                <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
                  Understand the difference between your initial
                  investment and the interest earned.
                </p>

                <FDChart
                  investedAmount={result.investedAmount}
                  interestEarned={result.interestEarned}
                  currency={currency}
                />

              </div>

            </section>

          </div>

        </div>

      </div>

      {/* COMPLETE FD GUIDE */}
      <FDGuide />

    </main>
  )
}

