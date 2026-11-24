
'use client'

import { useMemo, useState } from 'react'

import SIInputs from './SIInputs'
import SIResult from './SIResult'
import SIChart from './SIChart'
import SIGuide from './SIGuide'

import Sidebar from '@/components/layout/Sidebar'

import { calculateSimpleInterest } from '../lib/simple-interest-calculation'
import { defaultCurrency } from '@/lib/currency/currencies'

export default function SimpleInterestCalculator() {
  const [principal, setPrincipal] = useState(100000)
  const [interestRate, setInterestRate] = useState(7)
  const [years, setYears] = useState(5)
  const [currency, setCurrency] = useState(defaultCurrency)

  // Sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // Simple Interest Calculation
  const result = useMemo(
    () =>
      calculateSimpleInterest({
        principal,
        interestRate,
        years,
      }),
    [principal, interestRate, years]
  )

  return (
    <main className="si-page mx-auto w-full max-w-7xl space-y-7 px-4 py-6 text-slate-900 transition-colors duration-300 dark:text-slate-100 sm:px-6 lg:px-8">

      {/* HERO SECTION */}
      <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-600 via-teal-600 to-red-700 px-6 py-8 text-white shadow-xl sm:px-9 sm:py-10">

        <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10">

          <p className="text-xs font-bold uppercase tracking-[.22em] text-emerald-100">
            Smart Interest Planner
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Simple Interest Calculator
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-emerald-50 sm:text-base">
            Calculate simple interest, total maturity amount and interest earned.
            Adjust principal, rate and tenure to instantly see your returns.
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

        {/* RIGHT SI CALCULATOR CONTENT */}
        <div className="min-w-0">

          {/* INPUTS + RESULTS GRID */}
          <div className="grid items-start gap-6 lg:grid-cols-[1.05fr_.95fr]">

            {/* SI INPUT SECTION */}
            <section className="si-surface min-w-0 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-7">

              <div className="mb-7 flex items-center gap-3">

                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-50 text-2xl dark:bg-emerald-950/50">
                  🎯
                </span>

                <div>

                  <h2 className="text-xl font-extrabold">
                    Your Investment Details
                  </h2>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Change values to update your calculation instantly.
                  </p>

                </div>

              </div>

              <SIInputs
                principal={principal}
                interestRate={interestRate}
                years={years}
                currency={currency}
                onPrincipalChange={setPrincipal}
                onInterestChange={setInterestRate}
                onYearsChange={setYears}
                onCurrencyChange={setCurrency}
              />

            </section>

            {/* SI RESULTS SECTION */}
            <section className="min-w-0 space-y-6">

              {/* MATURITY / TOTAL AMOUNT */}
              <div className="si-highlight rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-5 shadow-sm transition-colors duration-300 dark:border-emerald-900/60 dark:from-emerald-950/40 dark:to-slate-900 sm:p-7">

                <div className="flex items-center gap-3">

                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-100 text-xl dark:bg-emerald-900/60">
                    💰
                  </span>

                  <p className="text-sm font-bold text-emerald-800 dark:text-emerald-300">
                    Estimated Total Amount
                  </p>

                </div>

                <p className="mt-4 break-words text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                  {result.totalAmount.toLocaleString('en-IN', {
                    maximumFractionDigits: 2,
                  })}{' '}
                  <span className="text-lg">{currency}</span>
                </p>

                <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  Estimated total amount based on your principal, interest rate
                  and investment duration using Simple Interest formula.
                </p>

              </div>

              {/* SI BREAKDOWN */}
              <div className="si-surface rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-7">

                <div className="mb-5 flex items-center gap-3">

                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-50 text-xl dark:bg-emerald-950/50">
                    📊
                  </span>

                  <div>

                    <h2 className="text-lg font-extrabold">
                      Simple Interest Breakdown
                    </h2>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      Your estimated investment returns
                    </p>

                  </div>

                </div>

                <SIResult
                  principal={result.principal}
                  simpleInterest={result.simpleInterest}
                  totalAmount={result.totalAmount}
                  currency={currency}
                />

              </div>

              {/* SI CHART */}
              <div className="si-surface rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-7">

                <h2 className="mb-5 text-lg font-extrabold">
                  Investment Breakdown
                </h2>

                <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
                  Understand the difference between your principal
                  and the simple interest earned.
                </p>

                <SIChart
                  principal={result.principal}
                  simpleInterest={result.simpleInterest}
                  currency={currency}
                />

              </div>

            </section>

          </div>

        </div>

      </div>

      {/* COMPLETE SIMPLE INTEREST GUIDE */}
      <SIGuide />

    </main>
  )
}