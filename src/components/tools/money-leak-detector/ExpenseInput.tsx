
'use client'

import { getCurrency } from '@/lib/currency/currencies'
import CurrencySelector from '@/lib/currency/CurrencySelector'
import type { ExpenseCategory } from '@/data/moneyLeak'

type Props = {
  income: number
  expenses: ExpenseCategory[]
  currency: string
  onIncomeChange: (value: number) => void
  onExpenseChange: (
    id: string,
    field: 'amount' | 'reductionPercent',
    value: number
  ) => void
  onCurrencyChange: (value: string) => void
}

function formatAmount(value: number) {
  return value.toLocaleString('en-IN', {
    maximumFractionDigits: 0,
  })
}

export default function ExpenseInput({
  income,
  expenses,
  currency,
  onIncomeChange,
  onExpenseChange,
  onCurrencyChange,
}: Props) {
  const selectedCurrency = getCurrency(currency)

  const symbol = selectedCurrency.symbol

  const money = (value: number) =>
    `${symbol} ${formatAmount(value)}`

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900">

      {/* HEADER */}

      <div className="mb-8">

        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-extrabold tracking-wider text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
          <span className="h-2 w-2 rounded-full bg-blue-500" />
          STEP 01 · YOUR EXPENSES
        </div>

        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          Track Your Monthly Expenses
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
          Enter your monthly income and spending to discover
          where your money goes every month.
        </p>

      </div>

      <div className="space-y-8">

        {/* CURRENCY SELECTOR */}

        <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-800/50">

          <CurrencySelector
            value={currency}
            onChange={onCurrencyChange}
          />

        </div>

        {/* MONTHLY INCOME */}

        <div className="space-y-4">

          <div>
            <label className="text-sm font-bold text-slate-700 dark:text-slate-200">
              Your Monthly Income
            </label>

            <p className="mt-1 text-xs text-slate-400">
              Enter your total monthly take-home income.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4 dark:border-emerald-900/50 dark:bg-emerald-950/20">

            <div className="flex items-center justify-between gap-3">

              <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                Monthly Income
              </span>

              <span className="text-xs font-bold text-emerald-600">
                💰 Income
              </span>

            </div>

            <div className="mt-3 flex items-center rounded-xl border border-emerald-200 bg-white px-4 dark:border-emerald-900 dark:bg-slate-900">

              <span className="text-xl font-extrabold text-emerald-600">
                {symbol}
              </span>

              <input
                type="number"
                min="0"
                max="100000000"
                value={income}
                onChange={(e) =>
                  onIncomeChange(
                    Math.min(
                      100000000,
                      Math.max(0, Number(e.target.value) || 0)
                    )
                  )
                }
                className="w-full bg-transparent px-3 py-4 text-xl font-extrabold text-slate-900 outline-none dark:text-white"
              />

            </div>

            <p className="mt-3 text-right text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              {money(income)}
            </p>

          </div>

        </div>

        {/* EXPENSE CATEGORY HEADER */}

        <div>

          <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
            Monthly Spending Categories
          </h3>

          <p className="mt-1 text-xs leading-5 text-slate-400">
            Add the amount you spend in each category.
            Adjust flexible expenses to explore potential savings.
          </p>

        </div>

        {/* EXPENSE CATEGORIES */}

        <div className="space-y-5">

          {expenses.map((expense) => {

            const isFlexible = expense.type === 'flexible'

            const potentialSaving =
              expense.amount * expense.reductionPercent / 100

            const progress = Math.min(
              100,
              (expense.reductionPercent / 80) * 100
            )

            return (

              <div
                key={expense.id}
                className="group rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-blue-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-900 sm:p-5"
              >

                {/* CATEGORY HEADER */}

                <div className="flex flex-wrap items-center justify-between gap-3">

                  <div className="flex min-w-0 items-center gap-3">

                    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl ${
                      isFlexible
                        ? 'bg-orange-50 dark:bg-orange-950/30'
                        : 'bg-blue-50 dark:bg-blue-950/30'
                    }`}>
                      {expense.icon}
                    </span>

                    <div className="min-w-0">

                      <h4 className="font-extrabold text-slate-800 dark:text-white">
                        {expense.name}
                      </h4>

                      <span className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold ${
                        isFlexible
                          ? 'bg-orange-50 text-orange-700 dark:bg-orange-950/40 dark:text-orange-300'
                          : 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300'
                      }`}>
                        {isFlexible
                          ? 'Flexible Expense'
                          : 'Essential Expense'}
                      </span>

                    </div>

                  </div>

                  <span className="text-xs font-bold text-slate-400">
                    {money(expense.amount)}
                  </span>

                </div>

                {/* AMOUNT INPUT */}

                <div className="mt-5">

                  <label className="mb-2 block text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Monthly Spending Amount
                  </label>

                  <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-3 transition focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-800">

                    <span className="font-bold text-slate-500">
                      {symbol}
                    </span>

                    <input
                      type="number"
                      min="0"
                      max="100000000"
                      value={expense.amount}
                      onChange={(e) =>
                        onExpenseChange(
                          expense.id,
                          'amount',
                          Math.min(
                            100000000,
                            Math.max(0, Number(e.target.value) || 0)
                          )
                        )
                      }
                      className="w-full bg-transparent px-3 py-3 text-base font-extrabold text-slate-900 outline-none dark:text-white"
                    />

                  </div>

                </div>

                {/* FLEXIBLE EXPENSE REDUCTION */}

                {isFlexible && (

                  <div className="mt-5 border-t border-slate-100 pt-5 dark:border-slate-800">

                    <div className="flex flex-wrap items-center justify-between gap-2">

                      <div>
                        <h5 className="text-sm font-bold text-slate-700 dark:text-slate-200">
                          Savings Reduction Target
                        </h5>

                        <p className="mt-1 text-xs text-slate-400">
                          How much would you like to reduce?
                        </p>
                      </div>

                      <span className="rounded-xl bg-emerald-50 px-3 py-2 text-lg font-extrabold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400">
                        {expense.reductionPercent}%
                      </span>

                    </div>

                    {/* RANGE SLIDER */}

                    <input
                      type="range"
                      min="0"
                      max="80"
                      step="5"
                      value={expense.reductionPercent}
                      onChange={(e) =>
                        onExpenseChange(
                          expense.id,
                          'reductionPercent',
                          Number(e.target.value)
                        )
                      }
                      className="mt-5 h-2 w-full cursor-pointer appearance-none rounded-full accent-emerald-600"
                      style={{
                        background: `linear-gradient(to right, #10b981 0%, #10b981 ${progress}%, #e2e8f0 ${progress}%, #e2e8f0 100%)`,
                      }}
                    />

                    <div className="mt-2 flex justify-between text-xs font-medium text-slate-400">
                      <span>0%</span>
                      <span>80%</span>
                    </div>

                    {/* SAVING RESULT */}

                    <div className="mt-5 rounded-xl border border-emerald-100 bg-emerald-50/70 p-4 dark:border-emerald-900/40 dark:bg-emerald-950/20">

                      <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                        Potential Monthly Savings
                      </p>

                      <div className="mt-2 flex flex-wrap items-center justify-between gap-2">

                        <h4 className="text-2xl font-black text-emerald-700 dark:text-emerald-300">
                          {money(potentialSaving)}
                        </h4>

                        <span className="rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
                          {expense.reductionPercent}% Reduction
                        </span>

                      </div>

                    </div>

                  </div>

                )}

              </div>

            )
          })}

        </div>

        {/* TIP */}

        <div className="flex gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 p-4 dark:border-blue-900/40 dark:bg-blue-950/20">

          <span className="text-xl">💡</span>

          <p className="text-xs leading-6 text-blue-800 dark:text-blue-300">
            <strong>Smart Money Tip:</strong> Enter approximate
            monthly spending amounts. Essential expenses are
            kept separate from flexible expenses. Reduction
            targets are planning assumptions, not guaranteed
            savings.
          </p>

        </div>

      </div>

    </section>
  )
}
