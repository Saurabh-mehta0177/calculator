

'use client'

interface AgeInputsProps {
  dateOfBirth: string
  onDateChange: (value: string) => void
  onCalculate: () => void
  onReset: () => void
}

export default function AgeInputs({
  dateOfBirth,
  onDateChange,
  onCalculate,
  onReset,
}: AgeInputsProps) {

  const inputClass =
    'w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-base font-semibold text-slate-800 outline-none transition-all duration-200 hover:border-violet-300 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:border-violet-500 dark:focus:border-violet-500 dark:focus:bg-slate-800'

  const labelClass =
    'mb-3 block text-sm font-bold text-slate-700 dark:text-slate-300'

  // Today's date in local timezone
  const today = new Date()

  const maxDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, '0'),
    String(today.getDate()).padStart(2, '0'),
  ].join('-')

  return (
    <div className="space-y-6">

      {/* DATE OF BIRTH */}
      <div>

        <label className={labelClass}>
          <span className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-violet-100 text-lg dark:bg-violet-950/60">
              🎂
            </span>

            Date of Birth
          </span>
        </label>

        <div className="relative">

          <input
            type="date"
            max={maxDate}
            value={dateOfBirth}
            onChange={(e) => onDateChange(e.target.value)}
            className={inputClass}
            aria-label="Enter your date of birth"
          />

        </div>

        <p className="mt-3 flex items-center gap-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
          <span>📅</span>
          Select your birthday to calculate your exact age.
        </p>

      </div>

      {/* SELECTED DATE PREVIEW */}
      <div className="rounded-2xl border border-violet-100 bg-gradient-to-r from-violet-50 to-pink-50 p-4 dark:border-violet-900/60 dark:from-violet-950/40 dark:to-pink-950/30">

        <div className="flex items-center gap-3">

          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-xl shadow-sm dark:bg-slate-800">
            🎈
          </div>

          <div className="min-w-0">

            <p className="text-xs font-semibold text-violet-600 dark:text-violet-400">
              Selected Birthday
            </p>

            <p className="mt-1 break-words text-sm font-bold text-slate-800 dark:text-white">
              {dateOfBirth
                ? new Date(`${dateOfBirth}T12:00:00`).toLocaleDateString(
                    'en-IN',
                    {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    }
                  )
                : 'No date selected yet'}
            </p>

          </div>

        </div>

      </div>

      {/* CALCULATE BUTTON */}
      <button
        type="button"
        onClick={onCalculate}
        className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 px-5 py-4 font-bold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/30 active:translate-y-0 active:scale-[0.99]"
      >

        <span className="text-xl transition-transform duration-300 group-hover:rotate-12">
          ✨
        </span>

        Calculate My Age

        <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>

      </button>

      {/* RESET BUTTON */}
      <button
        type="button"
        onClick={onReset}
        className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3.5 font-semibold text-slate-600 transition-all duration-200 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-violet-700 dark:hover:bg-violet-950/40 dark:hover:text-violet-300"
      >
        <span className="text-lg">↺</span>
        Reset Calculator
      </button>

      {/* HELPFUL NOTE */}
      <div className="flex items-start gap-3 border-t border-slate-100 pt-5 dark:border-slate-800">

        <span className="text-lg">💡</span>

        <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">
          You can calculate your own age or enter another person's
          date of birth. Reset the calculator whenever you want
          to start a new calculation.
        </p>

      </div>

    </div>
  )
}
