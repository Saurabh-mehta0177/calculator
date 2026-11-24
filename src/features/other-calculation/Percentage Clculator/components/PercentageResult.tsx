
import type { PercentageResult as PercentageResultType } from '../lib/percentage-calculation'

interface PercentageResultProps {
  result: PercentageResultType
}

export default function PercentageResult({
  result,
}: PercentageResultProps) {

  const results = [
    {
      title: 'Calculated Result',
      amount: result.result,
      color: 'text-blue-700 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-950/40',
      border: 'border-blue-100 dark:border-blue-900',
      icon: '🎯',
    },
    {
      title: 'Percentage',
      amount: result.percentage,
      suffix: '%',
      color: 'text-orange-700 dark:text-orange-400',
      bg: 'bg-orange-50 dark:bg-orange-950/40',
      border: 'border-orange-100 dark:border-orange-900',
      icon: '📈',
    },
    {
      title: 'Final Value',
      amount: result.finalValue,
      color: 'text-green-700 dark:text-green-400',
      bg: 'bg-green-50 dark:bg-green-950/40',
      border: 'border-green-100 dark:border-green-900',
      icon: '💰',
    },
  ]

  return (
    <div className="space-y-3">

      {/* Main Result */}
      <div className="rounded-xl border border-blue-100 bg-blue-50 p-5 text-center dark:border-blue-900 dark:bg-blue-950/40">

        <p className="text-sm font-medium text-blue-700 dark:text-blue-300">
          Your Answer
        </p>

        <p className="mt-3 break-words text-3xl font-extrabold text-blue-700 dark:text-blue-400">
          {result.result.toLocaleString('en-IN', {
            maximumFractionDigits: 4,
          })}
          {result.resultSuffix}
        </p>

        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {result.description}
        </p>

      </div>

      {/* Result Cards */}
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
                {item.amount.toLocaleString('en-IN', {
                  maximumFractionDigits: 4,
                })}
                {item.suffix || ''}
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
