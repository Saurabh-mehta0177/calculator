




'use client'

type CalculationType =
  | 'of'
  | 'what-percent'
  | 'increase'
  | 'decrease'

interface PercentageInputsProps {
  calculationType: CalculationType
  firstValue: number
  secondValue: number
  onTypeChange: (value: CalculationType) => void
  onFirstValueChange: (value: number) => void
  onSecondValueChange: (value: number) => void
  onReset: () => void
}

interface SliderFieldProps {
  title: string
  value: number
  min: number
  max: number
  step?: number
  display: string
  help: string
  onChange: (value: number) => void
}

function SliderField({
  title,
  value,
  min,
  max,
  step = 1,
  display,
  help,
  onChange,
}: SliderFieldProps) {

  const progress = Math.min(
    100,
    Math.max(0, ((value - min) / (max - min)) * 100)
  )

  return (
    <div className="space-y-3">

      <div className="flex flex-wrap items-center justify-between gap-3">

        <div>
          <label className="text-sm font-semibold text-slate-600 dark:text-slate-300">
            {title}
          </label>

          <p className="mt-1 text-xs text-slate-400">
            {help}
          </p>
        </div>

        <output className="rounded-xl bg-violet-50 px-3 py-2 text-base font-extrabold tabular-nums text-violet-700 dark:bg-violet-950/60 dark:text-violet-300">
          {display}
        </output>

      </div>

      {/* RANGE SLIDER */}
      <input
        aria-label={title}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full accent-violet-600"
        style={{
          background: `linear-gradient(to right, #8b5cf6 0%, #8b5cf6 ${progress}%, #e2e8f0 ${progress}%, #e2e8f0 100%)`,
        }}
      />

      <div className="flex justify-between text-xs font-medium text-slate-400">
        <span>{min.toLocaleString('en-IN')}</span>
        <span>{max.toLocaleString('en-IN')}</span>
      </div>

      {/* MANUAL INPUT */}
      <input
        aria-label={`${title} exact value`}
        type="number"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => {
          if (e.target.value === '') return

          const number = Number(e.target.value)

          if (!Number.isFinite(number)) return

          onChange(Math.min(max, Math.max(min, number)))
        }}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
      />

    </div>
  )
}

export default function PercentageInputs({
  calculationType,
  firstValue,
  secondValue,
  onTypeChange,
  onFirstValueChange,
  onSecondValueChange,
  onReset,
}: PercentageInputsProps) {

  const modes = [
    {
      value: 'of',
      label: 'Percentage Of',
      icon: '%',
      description: 'Find percentage of a number',
    },
    {
      value: 'what-percent',
      label: 'What Percent',
      icon: '÷',
      description: 'Find percentage between values',
    },
    {
      value: 'increase',
      label: 'Increase',
      icon: '↗',
      description: 'Calculate percentage increase',
    },
    {
      value: 'decrease',
      label: 'Decrease',
      icon: '↘',
      description: 'Calculate percentage decrease',
    },
  ] as const

  const firstLabel = {
    of: 'Percentage (%)',
    'what-percent': 'Obtained Value',
    increase: 'Original Value',
    decrease: 'Original Value',
  }[calculationType]

  const secondLabel = {
    of: 'Total Value',
    'what-percent': 'Total Value',
    increase: 'Increase By (%)',
    decrease: 'Decrease By (%)',
  }[calculationType]

  const firstHelp = {
    of: 'Enter the percentage you want to calculate',
    'what-percent': 'Enter the obtained or selected value',
    increase: 'Enter the starting amount',
    decrease: 'Enter the starting amount',
  }[calculationType]

  const secondHelp = {
    of: 'Enter the total number or amount',
    'what-percent': 'Enter the total reference value',
    increase: 'Enter the percentage to increase',
    decrease: 'Enter the percentage to decrease',
  }[calculationType]

  const firstMax =
    calculationType === 'of' ? 100 : 10000000

  const secondMax = 10000000

  return (
    <div className="space-y-8">

      {/* CALCULATION TYPE */}
      <div className="space-y-3">

        <div>
          <label className="text-sm font-semibold text-slate-600 dark:text-slate-300">
            Select Calculation Type
          </label>

          <p className="mt-1 text-xs text-slate-400">
            Choose the calculation you want to perform
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">

          {modes.map((mode) => {

            const active = calculationType === mode.value

            return (
              <button
                key={mode.value}
                type="button"
                aria-pressed={active}
                onClick={() => onTypeChange(mode.value)}
                className={`group rounded-2xl border p-4 text-left transition-all duration-200 hover:-translate-y-0.5 ${
                  active
                    ? 'border-violet-500 bg-violet-50 shadow-md shadow-violet-500/10 dark:border-violet-500 dark:bg-violet-950/50'
                    : 'border-slate-200 bg-white hover:border-violet-300 hover:bg-violet-50/50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-violet-950/20'
                }`}
              >

                <div className="flex items-center justify-between gap-2">

                  <span className={`grid h-9 w-9 place-items-center rounded-xl text-lg font-black ${
                    active
                      ? 'bg-violet-600 text-white'
                      : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
                  }`}>
                    {mode.icon}
                  </span>

                  {active && (
                    <span className="text-xs font-bold text-violet-600 dark:text-violet-400">
                      ✓ Selected
                    </span>
                  )}

                </div>

                <h3 className={`mt-3 text-sm font-extrabold ${
                  active
                    ? 'text-violet-800 dark:text-violet-300'
                    : 'text-slate-700 dark:text-slate-200'
                }`}>
                  {mode.label}
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  {mode.description}
                </p>

              </button>
            )
          })}

        </div>
      </div>

      {/* FIRST VALUE */}
      <SliderField
        title={firstLabel}
        value={firstValue}
        min={0}
        max={firstMax}
        step={calculationType === 'of' ? 0.1 : 1}
        display={
          calculationType === 'of'
            ? `${firstValue}%`
            : firstValue.toLocaleString('en-IN')
        }
        help={firstHelp}
        onChange={onFirstValueChange}
      />

      {/* SECOND VALUE */}
      <SliderField
        title={secondLabel}
        value={secondValue}
        min={0}
        max={secondMax}
        step={calculationType === 'increase' || calculationType === 'decrease' ? 0.1 : 1}
        display={
          calculationType === 'increase' || calculationType === 'decrease'
            ? `${secondValue}%`
            : secondValue.toLocaleString('en-IN')
        }
        help={secondHelp}
        onChange={onSecondValueChange}
      />

      {/* RESET */}
      <button
        type="button"
        onClick={onReset}
        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-600 transition hover:border-violet-500 hover:bg-violet-50 hover:text-violet-700 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-violet-950/40"
      >
        ↺ Reset Calculator
      </button>

    </div>
  )
}
