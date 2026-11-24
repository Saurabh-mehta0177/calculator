
interface ResultCardProps {
  label: string;
  value: string | number;
  description?: string;
  highlight?: boolean;
}

export default function ResultCard({
  label,
  value,
  description,
  highlight = false,
}: ResultCardProps) {
  return (
    <div className={`
      rounded-xl border p-4
      ${
        highlight
          ? "border-blue-500/40 bg-blue-500/10"
          : "border-slate-800 bg-slate-950/70"
      }
    `}>

      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <p className={`
        mt-2 break-words text-xl font-extrabold
        ${
          highlight
            ? "text-cyan-400"
            : "text-white"
        }
      `}>
        {value}
      </p>

      {description && (
        <p className="mt-2 text-xs leading-5 text-slate-500">
          {description}
        </p>
      )}

    </div>
  );
}
