
import type { MoneyLeakResult } from '@/data/moneyLeak'
import { getCurrency } from '@/lib/currency/currencies'

type Props = {
  result: MoneyLeakResult
  currency: string
}

export default function MoneyLeakAnalysis({ result, currency }: Props) {
  const symbol = getCurrency(currency).symbol

  const money = (value: number) =>
    `${symbol}${Math.round(value).toLocaleString('en-IN')}`

  const flexibleExpenses = result.expenseAnalysis
    .filter((item) => item.type === 'flexible' && item.amount > 0)
    .sort((a, b) => b.potentialSaving - a.potentialSaving)

  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-blue-50 p-5">
          <p className="text-sm font-semibold text-blue-700">
            Essential Spending
          </p>
          <p className="mt-2 text-2xl font-black text-blue-900">
            {money(result.essentialExpenses)}
          </p>
        </div>

        <div className="rounded-2xl bg-orange-50 p-5">
          <p className="text-sm font-semibold text-orange-700">
            Flexible Spending
          </p>
          <p className="mt-2 text-2xl font-black text-orange-900">
            {money(result.flexibleExpenses)}
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-50 p-5">
          <p className="text-sm font-semibold text-emerald-700">
            Potential Monthly Savings
          </p>
          <p className="mt-2 text-2xl font-black text-emerald-900">
            {money(result.potentialMonthlySaving)}
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 p-5">
        <h3 className="font-extrabold text-slate-900">
          Flexible Expense Opportunities
        </h3>
        <p className="mt-1 text-sm text-slate-500">
          Savings estimates are based on the reduction targets you selected.
        </p>

        {flexibleExpenses.length === 0 ? (
          <p className="mt-5 text-sm text-slate-500">
            No flexible expenses entered yet.
          </p>
        ) : (
          <div className="mt-5 space-y-4">
            {flexibleExpenses.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-3 rounded-xl bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-bold text-slate-800">
                    {item.icon} {item.name}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Current spend: {money(item.amount)} · Target:{' '}
                    {item.reductionPercent}%
                  </p>
                </div>

                <div className="sm:text-right">
                  <p className="text-xs font-semibold text-emerald-700">
                    Potential saving / month
                  </p>
                  <p className="text-lg font-extrabold text-emerald-800">
                    {money(item.potentialSaving)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}