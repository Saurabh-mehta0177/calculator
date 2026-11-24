
import { formatCurrency } from '@/lib/currency/formatCurrency'

interface RDChartProps {
  totalInvestment: number
  interestEarned: number
  currency: string
}

export default function RDChart({
  totalInvestment,
  interestEarned,
  currency,
}: RDChartProps) {

  const investment = Math.max(0, totalInvestment)
  const interest = Math.max(0, interestEarned)
  const total = investment + interest

  const investmentPercentage =
    total > 0 ? (investment / total) * 100 : 0

  const interestPercentage =
    total > 0 ? (interest / total) * 100 : 0

  return (
    <div>

      <h2 className="text-lg font-extrabold">
        Investment Breakdown
      </h2>

      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        Your total deposits vs interest earned
      </p>

      {/* DONUT CHART */}
      <div className="my-7 flex justify-center">

        <div
          role="img"
          aria-label={`Investment ${investmentPercentage.toFixed(1)}%, interest ${interestPercentage.toFixed(1)}%`}
          className="grid h-48 w-48 place-items-center rounded-full"
          style={{
            background: `conic-gradient(
              #2563eb 0% ${investmentPercentage}%,
              #10b981 ${investmentPercentage}% 100%
            )`,
          }}
        >

          <div className="rd-chart-hole grid h-32 w-32 place-content-center rounded-full bg-white text-center shadow-inner dark:bg-slate-900">

            <span className="text-xs text-slate-500">
              Maturity Value
            </span>

            <strong className="mt-1 max-w-28 break-words text-sm">
              {formatCurrency(total, currency)}
            </strong>

          </div>

        </div>

      </div>

      {/* LEGEND */}
      <div className="space-y-3">

        <div className="flex items-center justify-between gap-3">

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-blue-600" />

            <span className="text-sm text-slate-600 dark:text-slate-300">
              Total Investment
            </span>
          </div>

          <div className="text-right">
            <p className="text-sm font-bold">
              {formatCurrency(investment, currency)}
            </p>

            <p className="text-xs text-slate-500">
              {investmentPercentage.toFixed(1)}%
            </p>
          </div>

        </div>

        <div className="flex items-center justify-between gap-3">

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-emerald-500" />

            <span className="text-sm text-slate-600 dark:text-slate-300">
              Interest Earned
            </span>
          </div>

          <div className="text-right">
            <p className="text-sm font-bold">
              {formatCurrency(interest, currency)}
            </p>

            <p className="text-xs text-slate-500">
              {interestPercentage.toFixed(1)}%
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}
