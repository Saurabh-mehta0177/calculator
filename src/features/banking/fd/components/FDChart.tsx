
import { formatCurrency } from '@/lib/currency/formatCurrency'

interface FDChartProps {
  investedAmount: number
  interestEarned: number
  currency: string
}

export default function FDChart({
  investedAmount,
  interestEarned,
  currency,
}: FDChartProps) {
  const total = investedAmount + interestEarned

  const investmentPercentage =
    total > 0 ? (investedAmount / total) * 100 : 0

  const interestPercentage =
    total > 0 ? (interestEarned / total) * 100 : 0

  const chartStyle = {
    backgroundImage: `conic-gradient(
      #2563eb 0% ${investmentPercentage}%,
      #16a34a ${investmentPercentage}% 100%
    )`,
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900">

      {/* Heading */}
      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
        Investment Breakdown
      </h3>

      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        Principal vs interest earned
      </p>

      {/* Donut Chart */}
      <div className="my-7 flex justify-center">

        <div
          className="flex h-48 w-48 items-center justify-center rounded-full shadow-md"
          style={chartStyle}
          role="img"
          aria-label={`Investment ${investmentPercentage.toFixed(1)} percent, interest ${interestPercentage.toFixed(1)} percent`}
        >

          {/* Inner Circle */}
          <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full border border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">

            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
              Total Value
            </span>

            <span className="mt-1 text-center text-sm font-bold text-gray-900 dark:text-white">
              {formatCurrency(total, currency)}
            </span>

          </div>

        </div>

      </div>

      {/* Chart Legend */}
      <div className="space-y-4">

        {/* Investment */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">

            <span className="h-3 w-3 rounded-full bg-blue-600" />

            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Investment
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

        {/* Interest */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">

            <span className="h-3 w-3 rounded-full bg-green-600" />

            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Interest
            </span>

          </div>

          <div className="text-right">

            <p className="text-sm font-bold text-gray-900 dark:text-white">
              {formatCurrency(interestEarned, currency)}
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              {interestPercentage.toFixed(1)}%
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}
