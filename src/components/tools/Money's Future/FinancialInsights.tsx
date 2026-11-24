
'use client'

import type { calculateAllScenarios } from '@/data/MoneyFuture'

type Results = ReturnType<typeof calculateAllScenarios>

interface Props {
  results: Results
  monthlyIncome: number
  monthlyExpenses: number
  currentSavings: number
  monthlyInvestment: number
  years: number
}

function money(value: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

function SummaryCard({
  title,
  value,
  description,
  icon,
}: {
  title: string
  value: string
  description: string
  icon: string
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-500">
          {title}
        </p>

        <span className="text-2xl">{icon}</span>
      </div>

      <p className="mt-4 break-words text-2xl font-extrabold text-slate-900 dark:text-white">
        {value}
      </p>

      <p className="mt-2 text-xs leading-5 text-slate-500">
        {description}
      </p>
    </div>
  )
}

export default function FinancialInsights({
  results,
  monthlyIncome,
  monthlyExpenses,
  currentSavings,
  monthlyInvestment,
  years,
}: Props) {
  const monthlySavings = monthlyIncome - monthlyExpenses

  const savingsRate =
    monthlyIncome > 0
      ? (monthlySavings / monthlyIncome) * 100
      : 0

  const totalInvested = monthlyInvestment * years * 12

  return (
    <section className="mt-12">
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
          Your money at a glance
        </span>

        <h2 className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white">
          Financial Insights
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Understand your current financial position.
        </p>
      </div>

      {/* Summary Cards */}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <SummaryCard
          title="Monthly Savings"
          value={money(monthlySavings)}
          description="Income remaining after expenses"
          icon="💰"
        />

        <SummaryCard
          title="Savings Rate"
          value={`${savingsRate.toFixed(1)}%`}
          description="Share of income left after expenses"
          icon="🎯"
        />

        <SummaryCard
          title="Total Investment"
          value={money(totalInvested)}
          description={`Monthly investments over ${years} years`}
          icon="📈"
        />

        <SummaryCard
          title="Current Savings"
          value={money(currentSavings)}
          description="Your starting financial reserve"
          icon="🏦"
        />
      </div>

      {/* Scenario Assumptions */}

      <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
          How These Projections Work
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Understand the assumptions behind your results.
        </p>

        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {results.map((result) => (
            <div
              key={result.scenario.id}
              className="rounded-2xl border border-slate-100 p-5 dark:border-slate-800"
            >
              <h3
                className="font-bold"
                style={{
                  color: result.scenario.color,
                }}
              >
                {result.scenario.name}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {result.scenario.description}
              </p>

              <div className="mt-5 space-y-3">
                <div className="flex justify-between gap-3 text-sm">
                  <span className="text-slate-500">
                    Salary Growth
                  </span>

                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    {/* {result.salaryGrowth}% */}
                    {result.scenario.salaryGrowth}%
                  </span>
                </div>

                <div className="flex justify-between gap-3 text-sm">
                  <span className="text-slate-500">
                    Expense Growth
                  </span>

                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    {/* {result.expenseGrowth}% */}
                    {result.scenario.expenseGrowth}%
                  </span>
                </div>

                <div className="flex justify-between gap-3 text-sm">
                  <span className="text-slate-500">
                    Investment Return
                  </span>

                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    {/* {result.investmentReturn}% */}
                    {result.scenario.investmentReturn}%
                  </span>
                </div>
              </div>

              <div className="mt-5 border-t border-slate-100 pt-4 dark:border-slate-800">
                <p className="text-xs font-semibold text-slate-400">
                  Projected Net Worth
                </p>

                <p className="mt-1 text-xl font-extrabold text-slate-900 dark:text-white">
                  {money(result.finalNetWorth)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}

      <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900/40 dark:bg-amber-950/20">
        <h3 className="font-bold text-amber-900 dark:text-amber-300">
          ⚠️ Financial Disclaimer
        </h3>

        <p className="mt-2 text-xs leading-6 text-amber-800/80 dark:text-amber-200/70">
          These projections are illustrative estimates based on assumed
          salary growth, expense growth and investment returns. Actual
          financial outcomes may vary. Investment returns are not
          guaranteed. This calculator is for educational purposes and
          does not constitute financial advice.
        </p>
      </div>
    </section>
  )
}
