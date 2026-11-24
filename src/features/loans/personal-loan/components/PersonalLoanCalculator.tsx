
'use client'

import { useMemo, useState } from 'react'

import PersonalLoanInputs from './PersonalLoanInputs'
import PersonalLoanResult from './PersonalLoanResult'
import PersonalLoanChart from './PersonalLoanChart'
import PersonalLoanGuide from './PersonalLoanGuide'

import Sidebar from '@/components/layout/Sidebar'

import { calculatePersonalLoan } from '../lib/personal-loan-calculation'
import { defaultCurrency } from '@/lib/currency/currencies'

export default function PersonalLoanCalculator() {
  const [amount, setAmount] = useState(500000)
  const [interestRate, setInterestRate] = useState(12)
  const [years, setYears] = useState(5)
  const [currency, setCurrency] = useState(defaultCurrency)

  // Sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // Personal Loan Calculation
  const result = useMemo(
    () =>
      calculatePersonalLoan({
        amount,
        interestRate,
        years,
      }),
    [amount, interestRate, years]
  )

  return (
    <main className="personal-loan-page mx-auto w-full max-w-7xl space-y-7 px-4 py-6 text-slate-900 transition-colors duration-300 dark:text-slate-100 sm:px-6 lg:px-8">

      {/* HERO SECTION */}
      <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-700 via-purple-600 to-fuchsia-700 px-6 py-8 text-white shadow-xl sm:px-9 sm:py-10">

        <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10">

          <p className="text-xs font-bold uppercase tracking-[.22em] text-violet-100">
            Smart Personal Finance
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Personal Loan Calculator
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-violet-50 sm:text-base">
            Calculate your monthly personal loan EMI, total interest and overall repayment.
            Adjust loan amount, rate and tenure to plan your borrowing.
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

        {/* RIGHT PERSONAL LOAN CALCULATOR CONTENT */}
        <div className="min-w-0">

          {/* INPUTS + RESULTS GRID */}
          <div className="grid items-start gap-6 lg:grid-cols-[1.05fr_.95fr]">

            {/* INPUT SECTION */}
            <section className="personal-loan-surface min-w-0 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-7">

              <div className="mb-7 flex items-center gap-3">

                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-violet-50 text-2xl dark:bg-violet-950/50">
                  💳
                </span>

                <div>

                  <h2 className="text-xl font-extrabold">
                    Your Personal Loan Details
                  </h2>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Change values to update your EMI instantly.
                  </p>

                </div>

              </div>

              <PersonalLoanInputs
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

            {/* RESULTS SECTION */}
            <section className="min-w-0 space-y-6">

              {/* EMI HIGHLIGHT */}
              <div className="personal-loan-highlight rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-5 shadow-sm transition-colors duration-300 dark:border-violet-900/60 dark:from-violet-950/40 dark:to-slate-900 sm:p-7">

                <div className="flex items-center gap-3">

                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-100 text-xl dark:bg-violet-900/60">
                    💰
                  </span>

                  <p className="text-sm font-bold text-violet-800 dark:text-violet-300">
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
                  Estimated monthly installment based on your loan amount,
                  interest rate and loan tenure.
                </p>

              </div>

              {/* LOAN BREAKDOWN */}
              <div className="personal-loan-surface rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-7">

                <div className="mb-5 flex items-center gap-3">

                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-violet-50 text-xl dark:bg-violet-950/50">
                    📊
                  </span>

                  <div>

                    <h2 className="text-lg font-extrabold">
                      Personal Loan Breakdown
                    </h2>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      Your estimated repayment summary
                    </p>

                  </div>

                </div>

                <PersonalLoanResult
                  emi={result.emi}
                  totalPayment={result.totalPayment}
                  totalInterest={result.totalInterest}
                  principal={result.principal}
                  currency={currency}
                />

              </div>

              {/* CHART */}
              <div className="personal-loan-surface rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-7">

                <h2 className="mb-5 text-lg font-extrabold">
                  Loan Breakdown
                </h2>

                <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
                  Understand the split between principal and total interest.
                </p>

                <PersonalLoanChart
                  principal={result.principal}
                  totalInterest={result.totalInterest}
                  currency={currency}
                />

              </div>

            </section>

          </div>

        </div>

      </div>

      {/* GUIDE */}
      <PersonalLoanGuide />
    </main>
  )
}