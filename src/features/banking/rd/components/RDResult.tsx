
import { formatCurrency } from '@/lib/currency/formatCurrency'

interface RDResultProps {
  monthlyDeposit: number
  totalInvestment: number
  interestEarned: number
  maturityAmount: number
  currency: string
}

export default function RDResult({
  monthlyDeposit,
  totalInvestment,
  interestEarned,
  maturityAmount,
  currency,
}: RDResultProps) {

  const results = [
    {
      title: 'Monthly Deposit',
      amount: monthlyDeposit,
      icon: '💰',
      color: 'text-slate-900 dark:text-white',
    },
    {
      title: 'Total Investment',
      amount: totalInvestment,
      icon: '🏦',
      color: 'text-slate-900 dark:text-white',
    },
    {
      title: 'Interest Earned',
      amount: interestEarned,
      icon: '📈',
      color: 'text-emerald-700 dark:text-emerald-300',
    },
    {
      title: 'Maturity Amount',
      amount: maturityAmount,
      icon: '🏆',
      color: 'text-blue-700 dark:text-blue-300',
    },
  ]

  return (
    <div className="grid gap-3 sm:grid-cols-2">

      {results.map((item) => (

        <div
          key={item.title}
          className="rd-result-card flex min-w-0 items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition hover:shadow-md dark:border-slate-800 dark:bg-slate-800/70"
        >

          <div className="min-w-0">

            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              {item.title}
            </p>

            <p className={`mt-1 break-words text-lg font-extrabold tabular-nums ${item.color}`}>
              {formatCurrency(item.amount, currency)}
            </p>

          </div>

          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-xl shadow-sm dark:bg-slate-700">
            {item.icon}
          </span>

        </div>

      ))}

    </div>
  )
}
