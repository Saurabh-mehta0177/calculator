
import { formatCurrency } from '@/lib/currency/formatCurrency'

interface CAGRChartProps {
  initialInvestment: number
  totalGrowth: number
  currency: string
}

export default function CAGRChart({
  initialInvestment,
  totalGrowth,
  currency,
}: CAGRChartProps) {

  const safeGrowth = Math.max(0, totalGrowth)
  const total = initialInvestment + safeGrowth

  const investmentPercentage =
    total > 0 ? (initialInvestment / total) * 100 : 0

  const growthPercentage =
    total > 0 ? (safeGrowth / total) * 100 : 0

  const chartStyle = {
    backgroundImage: `conic-gradient(
      #2563eb 0% ${investmentPercentage}%,
      #f97316 ${investmentPercentage}% 100%
    )`,
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900">

      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
        Investment Growth Breakdown
      </h3>

      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        Initial investment vs total growth
      </p>

      {/* Donut Chart */}
      <div className="my-7 flex justify-center">

        <div
          className="flex h-48 w-48 items-center justify-center rounded-full shadow-md"
          style={chartStyle}
          role="img"
          aria-label={`Initial investment ${investmentPercentage.toFixed(1)} percent, growth ${growthPercentage.toFixed(1)} percent`}
        >

          <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full border border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">

            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
              Final Value
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
              Initial Investment
            </span>

          </div>

          <div className="text-right">

            <p className="text-sm font-bold text-gray-900 dark:text-white">
              {formatCurrency(initialInvestment, currency)}
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
              Total Growth
            </span>

          </div>

          <div className="text-right">

            <p className="text-sm font-bold text-gray-900 dark:text-white">
              {formatCurrency(safeGrowth, currency)}
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              {growthPercentage.toFixed(1)}%
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}
