

'use client'

import { useMemo, useState } from 'react'

import {
  calculateMoneyLeak,
  defaultExpenses,
  type ExpenseCategory,
} from '@/data/moneyLeak'
import { getCurrency } from '@/lib/currency/currencies'

import ExpenseInput from './ExpenseInput'
import MoneyFlowChart from './MoneyFlowChart'
import MoneyLeakAnalysis from './MoneyLeakAnalysis'
import SavingProjection from './SavingProjection'

export default function MoneyLeakDetector() {
  const [income, setIncome] = useState(50000)
  const [currency, setCurrency] = useState('INR')

  const [expenses, setExpenses] = useState<ExpenseCategory[]>(() =>
    defaultExpenses.map((item) => ({ ...item }))
  )

  const result = useMemo(
    () =>
      calculateMoneyLeak({
        monthlyIncome: income,
        expenses,
      }),
    [income, expenses]
  )

  const selectedCurrency = getCurrency(currency)

  const money = (value: number) =>
    `${selectedCurrency.symbol}${Math.round(value).toLocaleString('en-IN')}`

  function updateExpense(
    id: string,
    field: 'amount' | 'reductionPercent',
    value: number
  ) {
    setExpenses((previous) =>
      previous.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    )
  }

  function resetCalculator() {
    setIncome(50000)
    setCurrency('INR')
    setExpenses(defaultExpenses.map((item) => ({ ...item })))
  }

  const hasIncome = Number.isFinite(income) && income > 0

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f7fc] px-4 py-8 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-7xl">
        {/* INPUT LEFT + OVERVIEW RIGHT */}
        <section className="grid items-start gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <div className="min-w-0">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-xl">
                ⚙️
              </div>

              <div>
                <h2 className="text-lg font-extrabold text-slate-900">
                  Expense Calculator
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  Customize your monthly spending
                </p>
              </div>
            </div>

            <ExpenseInput
              income={income}
              expenses={expenses}
              currency={currency}
              onIncomeChange={setIncome}
              onExpenseChange={updateExpense}
              onCurrencyChange={setCurrency}
            />

            <button
              type="button"
              onClick={resetCalculator}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
            >
              <span className="text-lg">↻</span>
              Reset Calculator
            </button>
          </div>

          <div className="min-w-0 space-y-6">
            <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 px-6 py-9 text-center shadow-xl shadow-blue-950/10 sm:px-9 sm:py-12">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />

              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-extrabold tracking-[0.16em] text-blue-200">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  EXCLUSIVE FINANCIAL TOOL
                </span>

                <h1 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Money Leak
                  <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                    Detector
                  </span>
                </h1>

                <h2 className="mt-4 text-lg font-bold text-blue-100 sm:text-xl">
                  Where Is Your Money Going?
                </h2>

                <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-300">
                  Discover where your money goes every month. Identify
                  flexible spending, find saving opportunities and take
                  control of your financial future.
                </p>

                <div className="mt-7 flex flex-wrap justify-center gap-2">
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs text-blue-100">
                    💰 Expense Tracking
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs text-blue-100">
                    📊 Money Analysis
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs text-blue-100">
                    🎯 Saving Goals
                  </span>
                </div>
              </div>
            </section>

            <section>
              <div className="mb-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue-600">
                  Live Financial Overview
                </p>
                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">
                  Your Money Snapshot
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Your monthly financial position at a glance.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <SummaryCard label="Monthly Income" value={income} icon="💰" color="blue" money={money} />
                <SummaryCard label="Total Expenses" value={result.totalExpenses} icon="💳" color="orange" money={money} />
                <SummaryCard label="Remaining Money" value={result.remainingMoney} icon="🏦" color="purple" money={money} />
                <SummaryCard label="Potential Monthly Savings" value={result.potentialMonthlySaving} icon="🎯" color="green" money={money} />
              </div>
            </section>

            {result.remainingMoney < 0 && (
              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <h3 className="font-extrabold text-red-800">
                  ⚠️ Expenses Exceed Your Income
                </h3>
                <p className="mt-2 text-sm leading-6 text-red-700">
                  You are spending {money(Math.abs(result.remainingMoney))} more
                  than your monthly income. Review your expenses and prioritize
                  essential needs.
                </p>
              </div>
            )}

            {!hasIncome && (
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
                Please enter a monthly income greater than zero to view your
                financial analysis.
              </div>
            )}
          </div>
        </section>

        {/* FULL-WIDTH RESULTS BELOW */}
        {hasIncome && (
          <section className="mt-10 space-y-8">
            <div className="border-b border-slate-200 pb-5">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-600">
                Detailed Financial Analysis
              </p>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                Understand Your Money Flow
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Explore your expenses, discover potential savings and visualize
                your financial future.
              </p>
            </div>

            <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
              <div className="mb-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
                  01 · MONEY DISTRIBUTION
                </span>
                <h3 className="mt-2 text-xl font-extrabold text-slate-900 sm:text-2xl">
                  Where Does Your Money Go?
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Visualize how your monthly income is distributed.
                </p>
              </div>

              <MoneyFlowChart result={result} income={income} currency={currency} />
            </section>

            <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
              <div className="mb-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-orange-600">
                  02 · SPENDING ANALYSIS
                </span>
                <h3 className="mt-2 text-xl font-extrabold text-slate-900 sm:text-2xl">
                  Identify Your Money Leaks
                </h3>
              </div>

              <MoneyLeakAnalysis result={result} currency={currency} />
            </section>

            <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
              <div className="mb-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600">
                  03 · FUTURE SAVINGS
                </span>
                <h3 className="mt-2 text-xl font-extrabold text-slate-900 sm:text-2xl">
                  Your Saving Potential
                </h3>
              </div>

              <SavingProjection result={result} currency={currency} />
            </section>
          </section>
        )}

        <section className="mt-10 rounded-2xl border border-amber-200/80 bg-amber-50/80 p-5 sm:p-6">
          <h3 className="font-extrabold text-amber-950">
            ⚠️ Important Financial Disclaimer
          </h3>
          <p className="mt-2 text-xs leading-6 text-amber-900/80 sm:text-sm">
            This calculator provides estimated expense analysis and potential
            savings opportunities based on the information entered by the user.
            Suggested reductions are illustrative planning targets, not
            guaranteed savings or personalized financial advice.
          </p>
        </section>

        <footer className="pb-3 pt-8 text-center">
          <p className="text-xs text-slate-400">
            Track Your Money. Reduce Waste. Build Your Future.
          </p>
        </footer>
      </div>
    </main>
  )
}

function SummaryCard({
  label,
  value,
  icon,
  color,
  money,
}: {
  label: string
  value: number
  icon: string
  color: 'blue' | 'orange' | 'purple' | 'green'
  money: (value: number) => string
}) {
  const styles = {
    blue: 'bg-blue-50 text-blue-700 ring-blue-100',
    orange: 'bg-orange-50 text-orange-700 ring-orange-100',
    purple: 'bg-purple-50 text-purple-700 ring-purple-100',
    green: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
  }

  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs font-bold leading-5 text-slate-500">{label}</p>
        <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl ring-1 ${styles[color]}`}>
          {icon}
        </span>
      </div>
      <h3 className="mt-5 break-words text-xl font-black tracking-tight text-slate-900 sm:text-2xl">
        {money(value)}
      </h3>
      <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-slate-100">
        <div className="h-full w-2/3 rounded-full bg-blue-500" />
      </div>
    </div>
  )
}