
import type { MoneyLeakResult } from '@/data/moneyLeak'
import { getCurrency } from '@/lib/currency/currencies'

type Props = {
  result: MoneyLeakResult
  currency: string
}

export default function SavingProjection({ result, currency }: Props) {
  const symbol = getCurrency(currency).symbol
  const monthly = result.potentialMonthlySaving

  const projections = [
    { label: '1 Month', months: 1 },
    { label: '3 Months', months: 3 },
    { label: '6 Months', months: 6 },
    { label: '1 Year', months: 12 },
    { label: '5 Years', months: 60 },
  ]

  const money = (value: number) =>
    `${symbol}${Math.round(value).toLocaleString('en-IN')}`

  const yearly = monthly * 12
  const max = Math.max(monthly * 60, 1)

  return (
    <div>
      <div className="rounded-2xl bg-gradient-to-br from-green-600 to-emerald-700 p-6 text-white">
        <p className="text-sm text-green-100">Potential Yearly Savings</p>
        <h3 className="mt-2 text-4xl font-extrabold">{money(yearly)}</h3>
        <p className="mt-3 text-sm text-green-100">
          {money(monthly)} potential savings every month
        </p>
      </div>

      <div className="mt-7 space-y-5">
        {projections.map((item) => {
          const amount = monthly * item.months

          return (
            <div key={item.label}>
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="text-sm font-semibold text-slate-600">
                  {item.label}
                </span>
                <span className="text-sm font-extrabold text-slate-900">
                  {money(amount)}
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-green-500 transition-all duration-500"
                  style={{ width: `${(amount / max) * 100}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>

      <p className="mt-6 text-xs leading-6 text-slate-500">
        Projection assumes the same monthly savings amount is maintained
        throughout the selected period. No investment returns or inflation
        adjustment are included.
      </p>
    </div>
  )
}