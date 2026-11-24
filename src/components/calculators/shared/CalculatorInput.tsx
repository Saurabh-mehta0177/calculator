
interface CalculatorInputProps {
  label: string;
  value: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
  unit?: string;
  min?: number;
  max?: number;
  step?: number | string;
  type?: "number" | "text";
  error?: string;
}

export default function CalculatorInput({
  label,
  value,
  onChange,
  placeholder = "Enter value",
  unit,
  min,
  max,
  step = "any",
  type = "number",
  error,
}: CalculatorInputProps) {
  return (
    <div className="space-y-2">

      <label className="block text-sm font-semibold text-slate-300">
        {label}
      </label>

      <div className="
        flex items-center overflow-hidden
        rounded-xl border border-slate-700
        bg-slate-950
        transition
        focus-within:border-blue-500
        focus-within:ring-2
        focus-within:ring-blue-500/20
      ">

        <input
          type={type}
          value={value}
          min={min}
          max={max}
          step={step}
          placeholder={placeholder}
          onChange={(event) =>
            onChange(event.target.value)
          }
          className="
            min-w-0 flex-1
            bg-transparent px-4 py-3.5
            text-white outline-none
            placeholder:text-slate-600
          "
        />

        {unit && (
          <span className="
            border-l border-slate-800
            px-4 py-3.5 text-sm
            text-slate-400
          ">
            {unit}
          </span>
        )}

      </div>

      {error && (
        <p className="text-xs text-red-400">
          {error}
        </p>
      )}

    </div>
  );
}
