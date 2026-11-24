
import { formatCurrency } from '@/lib/currency/formatCurrency'

interface PersonalLoanResultProps {
  emi: number
  totalPayment: number
  totalInterest: number
  principal: number
  currency: string
}

export default function PersonalLoanResult({
  emi,
  totalPayment,
  totalInterest,
  principal,
  currency,
}: PersonalLoanResultProps) {

  const results = [
    {
      title: 'Monthly EMI',
      amount: emi,
      color: 'text-blue-700 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-950/40',
      border: 'border-blue-100 dark:border-blue-900',
      icon: '💳',
    },
    {
      title: 'Total Interest',
      amount: totalInterest,
      color: 'text-orange-700 dark:text-orange-400',
      bg: 'bg-orange-50 dark:bg-orange-950/40',
      border: 'border-orange-100 dark:border-orange-900',
      icon: '📈',
    },
    {
      title: 'Total Payment',
      amount: totalPayment,
      color: 'text-green-700 dark:text-green-400',
      bg: 'bg-green-50 dark:bg-green-950/40',
      border: 'border-green-100 dark:border-green-900',
      icon: '💰',
    },
    {
      title: 'Principal Amount',
      amount: principal,
      color: 'text-gray-900 dark:text-white',
      bg: 'bg-gray-50 dark:bg-gray-800',
      border: 'border-gray-200 dark:border-gray-700',
      icon: '🏦',
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
                {formatCurrency(item.amount, currency)}
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
