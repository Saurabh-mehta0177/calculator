
import { formatCurrency } from '@/lib/currency/formatCurrency'

interface CAGRResultProps {
  initialInvestment: number
  finalValue: number
  totalGrowth: number
  cagr: number
  currency: string
}

export default function CAGRResult({
  initialInvestment,
  finalValue,
  totalGrowth,
  cagr,
  currency,
}: CAGRResultProps) {

  const results = [
    {
      title: 'Initial Investment',
      amount: initialInvestment,
      color: 'text-blue-700 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-950/40',
      border: 'border-blue-100 dark:border-blue-900',
      icon: '💳',
      isPercentage: false,
    },
    {
      title: 'Total Growth',
      amount: totalGrowth,
      color: 'text-orange-700 dark:text-orange-400',
      bg: 'bg-orange-50 dark:bg-orange-950/40',
      border: 'border-orange-100 dark:border-orange-900',
      icon: '📈',
      isPercentage: false,
    },
    {
      title: 'Final Investment Value',
      amount: finalValue,
      color: 'text-green-700 dark:text-green-400',
      bg: 'bg-green-50 dark:bg-green-950/40',
      border: 'border-green-100 dark:border-green-900',
      icon: '💰',
      isPercentage: false,
    },
    {
      title: 'Annual CAGR',
      amount: cagr,
      color: 'text-purple-700 dark:text-purple-400',
      bg: 'bg-purple-50 dark:bg-purple-950/40',
      border: 'border-purple-100 dark:border-purple-900',
      icon: '📊',
      isPercentage: true,
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
                {item.isPercentage
                  ? `${item.amount.toFixed(2)}%`
                  : formatCurrency(item.amount, currency)}
              </p>

            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/70 text-xl dark:bg-gray-800/70">
              {item.icon}
            </div>

          </div>

        </div>

      ))}

    </div>
  )
}
