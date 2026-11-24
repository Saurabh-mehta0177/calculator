
interface AgeResultData {
  years: number
  months: number
  days: number
  totalMonths: number
  totalWeeks: number
  totalDays: number
  nextBirthdayDays: number
  dayOfBirth: string
  nextBirthdayDate: string
}

interface AgeResultProps {
  result: AgeResultData
}

export default function AgeResult({
  result,
}: AgeResultProps) {

  const results = [
    {
      title: 'Years',
      amount: result.years,
      icon: '🎂',
      color: 'text-blue-700 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-950/40',
      border: 'border-blue-100 dark:border-blue-900',
    },
    {
      title: 'Months',
      amount: result.months,
      icon: '📅',
      color: 'text-orange-700 dark:text-orange-400',
      bg: 'bg-orange-50 dark:bg-orange-950/40',
      border: 'border-orange-100 dark:border-orange-900',
    },
    {
      title: 'Days',
      amount: result.days,
      icon: '☀️',
      color: 'text-green-700 dark:text-green-400',
      bg: 'bg-green-50 dark:bg-green-950/40',
      border: 'border-green-100 dark:border-green-900',
    },
    {
      title: 'Total Months',
      amount: result.totalMonths,
      icon: '📆',
      color: 'text-purple-700 dark:text-purple-400',
      bg: 'bg-purple-50 dark:bg-purple-950/40',
      border: 'border-purple-100 dark:border-purple-900',
    },
    {
      title: 'Total Weeks',
      amount: result.totalWeeks,
      icon: '🗓️',
      color: 'text-indigo-700 dark:text-indigo-400',
      bg: 'bg-indigo-50 dark:bg-indigo-950/40',
      border: 'border-indigo-100 dark:border-indigo-900',
    },
    {
      title: 'Total Days',
      amount: result.totalDays,
      icon: '⏳',
      color: 'text-pink-700 dark:text-pink-400',
      bg: 'bg-pink-50 dark:bg-pink-950/40',
      border: 'border-pink-100 dark:border-pink-900',
    },
  ]

  return (
    <div className="space-y-4">

      {/* Main Age */}
      <div className="rounded-xl border border-blue-100 bg-blue-50 p-5 text-center dark:border-blue-900 dark:bg-blue-950/40">

        <p className="text-sm font-medium text-blue-700 dark:text-blue-300">
          Your Exact Age
        </p>

        <div className="mt-3 flex flex-wrap items-center justify-center gap-3">

          <div>
            <p className="text-3xl font-extrabold text-blue-700 dark:text-blue-400">
              {result.years}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Years
            </p>
          </div>

          <span className="text-xl text-gray-400">:</span>

          <div>
            <p className="text-3xl font-extrabold text-blue-700 dark:text-blue-400">
              {result.months}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Months
            </p>
          </div>

          <span className="text-xl text-gray-400">:</span>

          <div>
            <p className="text-3xl font-extrabold text-blue-700 dark:text-blue-400">
              {result.days}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Days
            </p>
          </div>

        </div>

      </div>

      {/* Other Results */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

        {results.map((item) => (

          <div
            key={item.title}
            className={`${item.bg} ${item.border} rounded-xl border p-3 transition-all duration-300 hover:shadow-md`}
          >

            <div className="mb-2 flex items-center justify-between gap-1">

              <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                {item.title}
              </p>

              <span className="text-lg">
                {item.icon}
              </span>

            </div>

            <p className={`text-xl font-extrabold ${item.color}`}>
              {item.amount.toLocaleString('en-IN')}
            </p>

          </div>

        ))}

      </div>

      {/* Birthday */}
      <div className="rounded-xl border border-orange-100 bg-orange-50 p-4 dark:border-orange-900 dark:bg-orange-950/30">

        <h3 className="font-bold text-orange-800 dark:text-orange-300">
          🎉 Next Birthday
        </h3>

        <p className="mt-2 text-sm text-orange-700 dark:text-orange-200">
          {result.nextBirthdayDays === 0
            ? 'Happy Birthday! Today is your birthday.'
            : `${result.nextBirthdayDays} days remaining until your next birthday.`}
        </p>

        <p className="mt-1 text-xs text-orange-700 dark:text-orange-300">
          Date: {result.nextBirthdayDate}
        </p>

      </div>

      {/* Birth Day */}
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">

        <p className="text-sm text-gray-500 dark:text-gray-400">
          Day of Birth
        </p>

        <p className="mt-1 text-lg font-bold text-gray-900 dark:text-white">
          {result.dayOfBirth}
        </p>

      </div>

    </div>
  )
}
