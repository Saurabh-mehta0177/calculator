
import { formatCurrency } from '@/lib/currency/formatCurrency'

interface SIPChartProps {
  investedAmount: number
  estimatedReturns: number
  currency: string
}

export default function SIPChart({
  investedAmount,
  estimatedReturns,
  currency,
}: SIPChartProps) {

  const safeReturns = Math.max(0, estimatedReturns)
  const total = investedAmount + safeReturns

  const investmentPercentage =
    total > 0 ? (investedAmount / total) * 100 : 0

  const returnsPercentage =
    total > 0 ? (safeReturns / total) * 100 : 0

  const chartStyle = {
    backgroundImage: `conic-gradient(
      #2563eb 0% ${investmentPercentage}%,
      #f97316 ${investmentPercentage}% 100%
    )`,
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900">

      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
        Investment Breakdown
      </h3>

      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        Invested amount vs estimated returns
      </p>

      {/* Donut Chart */}
      <div className="my-7 flex justify-center">

        <div
          className="flex h-48 w-48 items-center justify-center rounded-full shadow-md"
          style={chartStyle}
          role="img"
          aria-label={`Investment ${investmentPercentage.toFixed(1)} percent, returns ${returnsPercentage.toFixed(1)} percent`}
        >

          <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full border border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">

            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
              Total Value
            </span>

            <span className="mt-1 px-1 text-center text-sm font-bold text-gray-900 dark:text-white">
              {formatCurrency(total, currency)}
            </span>

          </div>

        </div>

      </div>

      {/* Legend */}
      <div className="space-y-4">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">

            <span className="h-3 w-3 rounded-full bg-blue-600" />

            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Invested Amount
            </span>

          </div>

          <div className="text-right">

            <p className="text-sm font-bold text-gray-900 dark:text-white">
              {formatCurrency(investedAmount, currency)}
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              {investmentPercentage.toFixed(1)}%
            </p>

          </div>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">

            <span className="h-3 w-3 rounded-full bg-orange-500" />

            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Estimated Returns
            </span>

          </div>

          <div className="text-right">

            <p className="text-sm font-bold text-gray-900 dark:text-white">
              {formatCurrency(safeReturns, currency)}
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              {returnsPercentage.toFixed(1)}%
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}
