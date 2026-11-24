
import type { MoneyLeakResult } from '@/data/moneyLeak'
import { getCurrency } from '@/lib/currency/currencies'

type Props = {
  result: MoneyLeakResult
  income: number
  currency: string
}

export default function MoneyFlowChart({ result, income, currency }: Props) {
  const symbol = getCurrency(currency).symbol

  const categories = result.expenseAnalysis
    .filter((item) => item.amount > 0)
    .sort((a, b) => b.amount - a.amount)

  const moneyLeft = Math.max(0, result.remainingMoney)
  const total = Math.max(income, result.totalExpenses, 1)

  const getWidth = (value: number) =>
    `${Math.min(100, Math.max(0, (value / total) * 100))}%`

  const money = (value: number) =>
    `${symbol}${Math.round(value).toLocaleString('en-IN')}`

  const colors: Record<string, string> = {
    rent: '#3B82F6',
    food: '#F97316',
    shopping: '#8B5CF6',
    transport: '#14B8A6',
    subscriptions: '#EAB308',
    bills: '#06B6D4',
    entertainment: '#EC4899',
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-slate-900 p-5 text-white sm:p-6">
        <p className="text-sm text-slate-300">Total Monthly Income</p>
        <h3 className="mt-2 text-3xl font-extrabold">{money(income)}</h3>

        <div className="mt-5 h-4 overflow-hidden rounded-full bg-white/10">
          <div className="flex h-full w-full">
            <div
              className="h-full bg-orange-400"
              style={{ width: getWidth(Math.min(result.totalExpenses, income)) }}
            />
            <div
              className="h-full bg-green-400"
              style={{ width: getWidth(moneyLeft) }}
            />
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-300">
          <span>🟠 Expenses</span>
          <span>🟢 Remaining Money</span>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 p-5">
        <h3 className="mb-5 font-bold text-slate-800">
          Expense Distribution
        </h3>

        {categories.length === 0 ? (
          <p className="text-sm text-slate-500">No expenses entered yet.</p>
        ) : (
          <div className="space-y-5">
            {categories.map((item) => (
              <div key={item.id}>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span>{item.icon}</span>
                    <span className="text-sm font-semibold text-slate-700">
                      {item.name}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-slate-900">
                      {money(item.amount)}
                    </span>
                    <span className="ml-2 text-xs text-slate-400">
                      {item.share.toFixed(1)}%
                    </span>
                  </div>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: getWidth(item.amount),
                      backgroundColor: colors[item.id] || '#64748B',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-orange-50 p-4">
          <p className="text-xs text-orange-700">Essential Expenses</p>
          <p className="mt-2 text-lg font-extrabold text-orange-800">
            {money(result.essentialExpenses)}
          </p>
        </div>
        <div className="rounded-xl bg-purple-50 p-4">
          <p className="text-xs text-purple-700">Flexible Expenses</p>
          <p className="mt-2 text-lg font-extrabold text-purple-800">
            {money(result.flexibleExpenses)}
          </p>
        </div>
      </div>

      {result.remainingMoney < 0 && (
        <div className="rounded-xl bg-red-50 p-4 text-sm text-red-700">
          Your expenses exceed your income by{' '}
          {money(Math.abs(result.remainingMoney))}.
        </div>
      )}
    </div>
  )
}