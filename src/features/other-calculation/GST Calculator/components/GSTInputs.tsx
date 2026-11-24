

'use client'

interface GSTInputsProps {
  amount: number
  gstRate: number
  calculationType: 'exclusive' | 'inclusive'
  taxType: 'intra' | 'inter'
  onAmountChange: (value: number) => void
  onRateChange: (value: number) => void
  onCalculationTypeChange: (value: 'exclusive' | 'inclusive') => void
  onTaxTypeChange: (value: 'intra' | 'inter') => void
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
  const progress =
    max > min ? ((value - min) / (max - min)) * 100 : 0

  return (
    <div className="gst-field space-y-3">

      <div className="flex flex-wrap items-center justify-between gap-3">

        <div>
          <label className="text-sm font-semibold text-slate-600 dark:text-slate-300">
            {title}
          </label>

          <p className="mt-1 text-xs text-slate-400">
            {help}
          </p>
        </div>

        <output className="rounded-xl bg-indigo-50 px-3 py-2 text-base font-extrabold tabular-nums text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300">
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
        className="gst-range h-2 w-full cursor-pointer appearance-none rounded-full accent-indigo-600"
        style={{
          background: `linear-gradient(to right, #6366f1 0%, #6366f1 ${progress}%, #e2e8f0 ${progress}%, #e2e8f0 100%)`,
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
        className="gst-number w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
      />

    </div>
  )
}

interface OptionCardProps {
  title: string
  description: string
  selected: boolean
  onClick: () => void
}

function OptionCard({
  title,
  description,
  selected,
  onClick,
}: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`rounded-xl border p-4 text-left transition-all duration-200 ${
        selected
          ? 'border-indigo-500 bg-indigo-50 shadow-sm ring-2 ring-indigo-500/10 dark:border-indigo-500 dark:bg-indigo-950/40'
          : 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-indigo-500'
      }`}
    >
      <div className="flex items-center justify-between gap-2">

        <span
          className={`text-sm font-bold ${
            selected
              ? 'text-indigo-700 dark:text-indigo-300'
              : 'text-slate-700 dark:text-slate-200'
          }`}
        >
          {title}
        </span>

        <span
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
            selected
              ? 'border-indigo-600 bg-indigo-600 text-white'
              : 'border-slate-300 dark:border-slate-600'
          }`}
        >
          {selected && (
            <span className="text-xs">✓</span>
          )}
        </span>

      </div>

      <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
        {description}
      </p>

    </button>
  )
}

export default function GSTInputs({
  amount,
  gstRate,
  calculationType,
  taxType,
  onAmountChange,
  onRateChange,
  onCalculationTypeChange,
  onTaxTypeChange,
  onReset,
}: GSTInputsProps) {

  return (
    <div className="space-y-8">

      {/* AMOUNT */}
      <SliderField
        title="Transaction Amount"
        value={amount}
        min={0}
        max={10000000}
        step={1000}
        display={`₹ ${amount.toLocaleString('en-IN')}`}
        help="Enter the amount for GST calculation"
        onChange={onAmountChange}
      />

      {/* GST CALCULATION TYPE */}
      <div className="space-y-3">

        <div>
          <label className="text-sm font-semibold text-slate-600 dark:text-slate-300">
            GST Calculation Type
          </label>

          <p className="mt-1 text-xs text-slate-400">
            Choose whether to add or remove GST
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">

          <OptionCard
            title="Add GST"
            description="Calculate GST on the original amount"
            selected={calculationType === 'exclusive'}
            onClick={() => onCalculationTypeChange('exclusive')}
          />

          <OptionCard
            title="Remove GST"
            description="Extract GST from the inclusive amount"
            selected={calculationType === 'inclusive'}
            onClick={() => onCalculationTypeChange('inclusive')}
          />

        </div>

      </div>

      {/* GST RATE */}
      <div className="space-y-3">

        <div>
          <label className="text-sm font-semibold text-slate-600 dark:text-slate-300">
            GST Rate
          </label>

          <p className="mt-1 text-xs text-slate-400">
            Select the applicable GST percentage
          </p>
        </div>

        <div className="grid grid-cols-4 gap-2">

          {[5, 12, 18, 28].map((rate) => (
            <button
              key={rate}
              type="button"
              onClick={() => onRateChange(rate)}
              aria-pressed={gstRate === rate}
              className={`rounded-xl border px-2 py-3 text-sm font-bold transition-all duration-200 ${
                gstRate === rate
                  ? 'border-indigo-500 bg-indigo-50 text-indigo-700 shadow-sm dark:bg-indigo-950/50 dark:text-indigo-300'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-indigo-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              {rate}%
            </button>
          ))}

        </div>

        <p className="text-xs text-slate-400">
          Available rates: 5%, 12%, 18% and 28%.
        </p>

      </div>

      {/* TAX TYPE */}
      <div className="space-y-3">

        <div>
          <label className="text-sm font-semibold text-slate-600 dark:text-slate-300">
            Tax Type
          </label>

          <p className="mt-1 text-xs text-slate-400">
            Select the type of GST applicable to your transaction
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">

          <OptionCard
            title="CGST + SGST"
            description="For eligible intra-state transactions"
            selected={taxType === 'intra'}
            onClick={() => onTaxTypeChange('intra')}
          />

          <OptionCard
            title="IGST"
            description="For eligible inter-state transactions"
            selected={taxType === 'inter'}
            onClick={() => onTaxTypeChange('inter')}
          />

        </div>

      </div>

      {/* SELECTED SETTINGS SUMMARY */}
      <div className="rounded-xl border border-indigo-100 bg-indigo-50/70 p-4 dark:border-indigo-900 dark:bg-indigo-950/30">

        <h3 className="mb-3 text-sm font-bold text-indigo-800 dark:text-indigo-300">
          Selected Calculation Settings
        </h3>

        <div className="space-y-2 text-sm">

          <div className="flex justify-between gap-3">
            <span className="text-slate-500 dark:text-slate-400">
              GST Rate
            </span>

            <span className="font-bold text-slate-800 dark:text-white">
              {gstRate}%
            </span>
          </div>

          <div className="flex justify-between gap-3">
            <span className="text-slate-500 dark:text-slate-400">
              Calculation
            </span>

            <span className="font-bold text-slate-800 dark:text-white">
              {calculationType === 'exclusive'
                ? 'Add GST'
                : 'Remove GST'}
            </span>
          </div>

          <div className="flex justify-between gap-3">
            <span className="text-slate-500 dark:text-slate-400">
              Tax Type
            </span>

            <span className="font-bold text-slate-800 dark:text-white">
              {taxType === 'intra'
                ? 'CGST + SGST'
                : 'IGST'}
            </span>
          </div>

        </div>

      </div>

      {/* RESET */}
      <button
        type="button"
        onClick={onReset}
        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-600 transition hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-700 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-indigo-950/40"
      >
        ↺ Reset Calculator
      </button>

    </div>
  )
}
