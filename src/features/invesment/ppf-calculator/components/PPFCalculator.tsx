



'use client'

import { useMemo, useState } from 'react'

import PPFInputs from './PPFInputs'
import PPFResult from './PPFResult'
import PPFChart from './PPFChart'
import PPFGuide from './PPFGuide'

import Sidebar from '@/components/layout/Sidebar'

import { calculatePPF } from '../lib/ppf-calculation'
import { defaultCurrency } from '@/lib/currency/currencies'

export default function PPFCalculator() {
  const [yearlyInvestment, setYearlyInvestment] = useState(50000)
  const [interestRate, setInterestRate] = useState(7.1)
  const [years, setYears] = useState(15)
  const [currency, setCurrency] = useState(defaultCurrency)

  // Sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // PPF Calculation
  const result = useMemo(
    () =>
      calculatePPF({
        yearlyInvestment,
        interestRate,
        years,
      }),
    [yearlyInvestment, interestRate, years]
  )

  return (
    <main className="ppf-page mx-auto w-full max-w-7xl space-y-7 px-4 py-6 text-slate-900 transition-colors duration-300 dark:text-slate-100 sm:px-6 lg:px-8">

      {/* HERO SECTION */}
      <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 px-6 py-8 text-white shadow-xl sm:px-9 sm:py-10">

        <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-20 -left-12 h-64 w-64 rounded-full bg-indigo-300/10 blur-3xl" />

        <div className="relative z-10">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-blue-100">
            Smart Investment Planner
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            PPF Calculator
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-50 sm:text-base">
            Calculate your Public Provident Fund maturity amount,
            total investment and estimated interest earnings.
            Adjust your yearly contribution, expected interest rate
            and investment duration to explore your long-term
            savings growth.
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

        {/* RIGHT PPF CALCULATOR CONTENT */}
        <div className="min-w-0">

          {/* INPUTS + RESULTS GRID */}
          <div className="grid items-start gap-6 lg:grid-cols-[1.05fr_.95fr]">

            {/* PPF INPUT SECTION */}
            <section className="ppf-surface min-w-0 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-7">

              <div className="mb-7 flex items-center gap-3">

                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-2xl dark:bg-blue-950/50">
                  🏦
                </span>

                <div>
                  <h2 className="text-xl font-extrabold">
                    Your PPF Investment Details
                  </h2>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Change values to update your calculation instantly.
                  </p>
                </div>

              </div>

              <PPFInputs
                yearlyInvestment={yearlyInvestment}
                interestRate={interestRate}
                years={years}
                currency={currency}
                onInvestmentChange={setYearlyInvestment}
                onInterestChange={setInterestRate}
                onYearsChange={setYears}
                onCurrencyChange={setCurrency}
              />

            </section>

            {/* PPF RESULTS SECTION */}
            <section className="min-w-0 space-y-6">

              {/* MATURITY AMOUNT */}
              <div className="ppf-highlight rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5 shadow-sm transition-colors duration-300 dark:border-blue-900/60 dark:from-blue-950/40 dark:to-slate-900 sm:p-7">

                <div className="flex items-center gap-3">

                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-100 text-xl dark:bg-blue-900/60">
                    📈
                  </span>

                  <p className="text-sm font-bold text-blue-800 dark:text-blue-300">
                    Estimated PPF Maturity Amount
                  </p>

                </div>

                <p className="mt-4 break-words text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                  {result.maturityAmount.toLocaleString('en-IN', {
                    maximumFractionDigits: 2,
                  })}{' '}
                  <span className="text-lg">{currency}</span>
                </p>

                <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  Estimated maturity value based on your yearly
                  contribution, assumed annual interest rate and
                  investment duration. Actual PPF interest rates
                  may change as notified by the government.
                </p>

              </div>

              {/* PPF BREAKDOWN */}
              <div className="ppf-surface rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-7">

                <div className="mb-5 flex items-center gap-3">

                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-xl dark:bg-blue-950/50">
                    📊
                  </span>

                  <div>
                    <h2 className="text-lg font-extrabold">
                      PPF Investment Breakdown
                    </h2>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      Your estimated investment returns
                    </p>
                  </div>

                </div>

                <PPFResult
                  investedAmount={result.investedAmount}
                  estimatedInterest={result.estimatedInterest}
                  maturityAmount={result.maturityAmount}
                  currency={currency}
                />

              </div>

              {/* PPF CHART */}
              <div className="ppf-surface rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-7">

                <h2 className="mb-5 text-lg font-extrabold">
                  PPF Investment Growth
                </h2>

                <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
                  Visualize how your yearly contributions and
                  accumulated interest contribute to your
                  estimated maturity amount.
                </p>

                <PPFChart
                  investedAmount={result.investedAmount}
                  estimatedInterest={result.estimatedInterest}
                  currency={currency}
                />

              </div>

            </section>

          </div>

        </div>

      </div>

      {/* COMPLETE PPF GUIDE */}
      <PPFGuide />

    </main>
  )
}
