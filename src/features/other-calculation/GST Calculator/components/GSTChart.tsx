
import { formatCurrency } from '@/lib/currency/formatCurrency'

interface GSTChartProps {
  amount: number
  gstAmount: number
  finalAmount: number
  cgst: number
  sgst: number
  igst: number
  taxType: 'intra' | 'inter'
  currency?: string
}

export default function GSTChart({
  amount,
  gstAmount,
  finalAmount,
  cgst,
  sgst,
  igst,
  taxType,
  currency = 'INR',
}: GSTChartProps) {

  const safeAmount = Math.max(0, amount)
  const safeGST = Math.max(0, gstAmount)
  const safeTotal = safeAmount + safeGST

  const amountPercentage =
    safeTotal > 0 ? (safeAmount / safeTotal) * 100 : 0

  const gstPercentage =
    safeTotal > 0 ? (safeGST / safeTotal) * 100 : 0

  const chartStyle = {
    backgroundImage: `conic-gradient(
      #2563eb 0% ${amountPercentage}%,
      #f97316 ${amountPercentage}% 100%
    )`,
  }

  const format = (value: number) =>
    formatCurrency(Math.max(0, value), currency)

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900">

      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
        GST Breakdown Chart
      </h3>

      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        Original amount vs GST amount
      </p>

      {/* DONUT CHART */}
      <div className="my-7 flex justify-center">

        <div
          className="flex h-48 w-48 items-center justify-center rounded-full shadow-md"
          style={chartStyle}
          role="img"
          aria-label={`Original amount ${amountPercentage.toFixed(1)} percent, GST ${gstPercentage.toFixed(1)} percent`}
        >

          <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full border border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">

            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
              Final Amount
            </span>

            <span className="mt-1 px-1 text-center text-sm font-bold text-gray-900 dark:text-white">
              {format(finalAmount)}
            </span>

          </div>

        </div>

      </div>

      {/* LEGEND */}
      <div className="space-y-4">

        {/* ORIGINAL AMOUNT */}
        <div className="flex items-center justify-between gap-3">

          <div className="flex items-center gap-2">

            <span className="h-3 w-3 rounded-full bg-blue-600" />

            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Original Amount
            </span>

          </div>

          <div className="text-right">

            <p className="text-sm font-bold text-gray-900 dark:text-white">
              {format(safeAmount)}
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              {amountPercentage.toFixed(1)}%
            </p>

          </div>

        </div>

        {/* GST AMOUNT */}
        <div className="flex items-center justify-between gap-3">

          <div className="flex items-center gap-2">

            <span className="h-3 w-3 rounded-full bg-orange-500" />

            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              GST Amount
            </span>

          </div>

          <div className="text-right">

            <p className="text-sm font-bold text-gray-900 dark:text-white">
              {format(safeGST)}
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              {gstPercentage.toFixed(1)}%
            </p>

          </div>

        </div>

      </div>

      {/* TAX BREAKDOWN */}
      <div className="mt-6 border-t border-gray-100 pt-5 dark:border-gray-700">

        <h4 className="mb-4 text-sm font-bold text-gray-900 dark:text-white">
          Tax Components
        </h4>

        {taxType === 'intra' ? (
          <div className="space-y-3">

            <div className="flex justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">
                CGST
              </span>

              <span className="font-semibold text-gray-900 dark:text-white">
                {format(cgst)}
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">
                SGST
              </span>

              <span className="font-semibold text-gray-900 dark:text-white">
                {format(sgst)}
              </span>
            </div>

          </div>
        ) : (
          <div className="flex justify-between text-sm">

            <span className="text-gray-500 dark:text-gray-400">
              IGST
            </span>

            <span className="font-semibold text-gray-900 dark:text-white">
              {format(igst)}
            </span>

          </div>
        )}

      </div>

    </div>
  )
}
