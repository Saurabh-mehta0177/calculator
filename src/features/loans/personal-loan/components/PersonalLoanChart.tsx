
import { formatCurrency } from '@/lib/currency/formatCurrency'

interface PersonalLoanChartProps {
  principal: number
  totalInterest: number
  currency: string
}

export default function PersonalLoanChart({
  principal,
  totalInterest,
  currency,
}: PersonalLoanChartProps) {

  const safeInterest = Math.max(0, totalInterest)
  const total = principal + safeInterest

  const principalPercentage =
    total > 0 ? (principal / total) * 100 : 0

  const interestPercentage =
    total > 0 ? (safeInterest / total) * 100 : 0

  const chartStyle = {
    backgroundImage: `conic-gradient(
      #2563eb 0% ${principalPercentage}%,
      #f97316 ${principalPercentage}% 100%
    )`,
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900">

      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
        Loan Breakdown
      </h3>

      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        Principal vs interest payable
      </p>

      {/* Donut Chart */}
      <div className="my-7 flex justify-center">

        <div
          className="flex h-48 w-48 items-center justify-center rounded-full shadow-md"
          style={chartStyle}
          role="img"
          aria-label={`Principal ${principalPercentage.toFixed(1)} percent, interest ${interestPercentage.toFixed(1)} percent`}
        >

          <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full border border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">

            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
              Total Payment
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
              Principal
            </span>

          </div>

          <div className="text-right">

            <p className="text-sm font-bold text-gray-900 dark:text-white">
              {formatCurrency(principal, currency)}
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              {principalPercentage.toFixed(1)}%
            </p>

          </div>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">

            <span className="h-3 w-3 rounded-full bg-orange-500" />

            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Interest
            </span>

          </div>

          <div className="text-right">

            <p className="text-sm font-bold text-gray-900 dark:text-white">
              {formatCurrency(safeInterest, currency)}
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
