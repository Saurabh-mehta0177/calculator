

'use client'

import { useMemo, useState } from 'react'

import EMIInputs from './EMIInputs'
import EMIResult from './EMIResult'
import EMIChart from './EMIChart'
import EMIGuide from './EMIGuide'

import Sidebar from '@/components/layout/Sidebar'

import { calculateEMI } from '../lib/emi-calculation'
import { defaultCurrency } from '@/lib/currency/currencies'

export default function EMICalculator() {
  const [principal, setPrincipal] = useState(500000)
  const [rate, setRate] = useState(8.5)
  const [years, setYears] = useState(5)
  const [currency, setCurrency] = useState(defaultCurrency)

  // Sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // EMI Calculation
  const result = useMemo(
    () => calculateEMI(principal, rate, years),
    [principal, rate, years]
  )

  return (
    <main className="emi-page mx-auto w-full max-w-7xl space-y-7 px-4 py-6 text-slate-900 transition-colors duration-300 dark:text-slate-100 sm:px-6 lg:px-8">

      {/* HERO SECTION */}
      <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-indigo-600 to-violet-700 px-6 py-8 text-white shadow-xl sm:px-9 sm:py-10">

        <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10">

          <p className="text-xs font-bold uppercase tracking-[.22em] text-blue-100">
            Smart Loan Finance
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            EMI Calculator
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-50 sm:text-base">
            Calculate your monthly loan EMI, total interest payable
            and overall repayment instantly. Adjust your loan amount,
            interest rate and repayment tenure to plan your finances
            with confidence.
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

        {/* RIGHT EMI CALCULATOR CONTENT */}
        <div className="min-w-0">

          {/* INPUTS + RESULTS GRID */}
          <div className="grid items-start gap-6 lg:grid-cols-[1.05fr_.95fr]">

            {/* INPUT SECTION */}
            <section
              aria-labelledby="emi-input-heading"
              className="emi-surface min-w-0 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-7"
            >

              <div className="mb-7 flex items-center gap-3">

                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-2xl dark:bg-blue-950/50">
                  🏦
                </span>

                <div>

                  <h2
                    id="emi-input-heading"
                    className="text-xl font-extrabold"
                  >
                    Your Loan Details
                  </h2>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Change your loan details to calculate EMI instantly.
                  </p>

                </div>

              </div>

              <EMIInputs
                amount={principal}
                interestRate={rate}
                years={years}
                currency={currency}
                onAmountChange={setPrincipal}
                onInterestChange={setRate}
                onYearsChange={setYears}
                onCurrencyChange={setCurrency}
              />

            </section>

            {/* RESULTS SECTION */}
            <section
              aria-label="EMI calculation results"
              className="min-w-0 space-y-6"
            >

              {/* EMI HIGHLIGHT */}
              <div className="emi-highlight rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5 shadow-sm transition-colors duration-300 dark:border-blue-900/60 dark:from-blue-950/40 dark:to-slate-900 sm:p-7">

                <div className="flex items-center gap-3">

                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-100 text-xl dark:bg-blue-900/60">
                    💰
                  </span>

                  <p className="text-sm font-bold text-blue-800 dark:text-blue-300">
                    Estimated Monthly EMI
                  </p>

                </div>

                <p className="mt-4 break-words text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                  {result.emi.toLocaleString('en-IN', {
                    maximumFractionDigits: 0,
                  })}{' '}
                  <span className="text-lg">{currency}</span>
                </p>

                <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  Your estimated monthly loan installment based on
                  the loan amount, annual interest rate and tenure.
                </p>

              </div>

              {/* LOAN BREAKDOWN */}
              <div className="emi-surface rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-7">

                <div className="mb-5 flex items-center gap-3">

                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-xl dark:bg-blue-950/50">
                    📊
                  </span>

                  <div>

                    <h2 className="text-lg font-extrabold">
                      Loan EMI Breakdown
                    </h2>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      Your estimated loan repayment summary
                    </p>

                  </div>

                </div>

                <EMIResult
                  emi={result.emi}
                  totalPayment={result.totalPayment}
                  totalInterest={result.totalInterest}
                  principal={result.principal}
                  currency={currency}
                />

              </div>

              {/* EMI CHART */}
              <div className="emi-surface rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-7">

                <h2 className="mb-5 text-lg font-extrabold">
                  Loan Repayment Chart
                </h2>

                <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
                  Understand the difference between your loan
                  principal and total interest payable.
                </p>

                <EMIChart
                  principal={result.principal}
                  totalInterest={result.totalInterest}
                  currency={currency}
                />

              </div>

            </section>

          </div>

        </div>

      </div>

      {/* EMI GUIDE */}
      <EMIGuide />

    </main>
  )
}
