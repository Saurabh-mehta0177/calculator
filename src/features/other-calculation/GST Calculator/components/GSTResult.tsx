
import { formatCurrency } from '@/lib/currency/formatCurrency'
import type { GSTResult as GSTResultType } from '../lib/gst-calculation'

interface GSTResultProps {
  result: GSTResultType
}

export default function GSTResult({
  result,
}: GSTResultProps) {

  const results = [
    {
      title: 'Original Amount',
      amount: result.originalAmount,
      color: 'text-blue-700 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-950/40',
      border: 'border-blue-100 dark:border-blue-900',
      icon: '💰',
    },
    {
      title: 'Total GST',
      amount: result.totalGST,
      color: 'text-orange-700 dark:text-orange-400',
      bg: 'bg-orange-50 dark:bg-orange-950/40',
      border: 'border-orange-100 dark:border-orange-900',
      icon: '📈',
    },
    {
      title: 'Final Amount',
      amount: result.finalAmount,
      color: 'text-green-700 dark:text-green-400',
      bg: 'bg-green-50 dark:bg-green-950/40',
      border: 'border-green-100 dark:border-green-900',
      icon: '🧾',
    },
  ]

  return (
    <div className="space-y-3">

      {results.map((item) => (

        <div
          key={item.title}
          className={`${item.bg} ${item.border} rounded-xl border p-4 transition-all duration-300 hover:shadow-md`}
        >

          <div className="flex items-center justify-between gap-3">

            <div>

              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {item.title}
              </p>

              <p className={`mt-2 text-xl font-extrabold ${item.color}`}>
                {formatCurrency(item.amount, 'INR')}
              </p>

            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/70 text-xl dark:bg-gray-800/70">
              {item.icon}
            </div>

          </div>

        </div>

      ))}

      {/* GST Breakdown */}
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">

        <h3 className="mb-4 font-bold text-gray-900 dark:text-white">
          GST Breakdown
        </h3>

        {result.taxType === 'intra' ? (

          <div className="space-y-3">

            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-300">
                CGST ({result.gstRate / 2}%)
              </span>

              <span className="font-bold text-gray-900 dark:text-white">
                {formatCurrency(result.cgst, 'INR')}
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-300">
                SGST ({result.gstRate / 2}%)
              </span>

              <span className="font-bold text-gray-900 dark:text-white">
                {formatCurrency(result.sgst, 'INR')}
              </span>
            </div>

          </div>

        ) : (

          <div className="flex justify-between text-sm">

            <span className="text-gray-600 dark:text-gray-300">
              IGST ({result.gstRate}%)
            </span>

            <span className="font-bold text-gray-900 dark:text-white">
              {formatCurrency(result.igst, 'INR')}
            </span>

          </div>

        )}

        <div className="mt-4 border-t border-gray-200 pt-3 dark:border-gray-700">

          <div className="flex justify-between">

            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Total GST
            </span>

            <span className="font-extrabold text-orange-600 dark:text-orange-400">
              {formatCurrency(result.totalGST, 'INR')}
            </span>

          </div>

        </div>

      </div>

    </div>
  )
}
