
import type { ReactNode } from "react";

interface CalculatorCardProps {
  title: string;
  description?: string;
  icon?: string;
  children: ReactNode;
  className?: string;
}

export default function CalculatorCard({
  title,
  description,
  icon,
  children,
  className = "",
}: CalculatorCardProps) {
  return (
    <section
      className={`
        rounded-2xl
        border border-slate-800
        bg-slate-900/80
        p-5
        shadow-xl shadow-black/10
        sm:p-6
        ${className}
      `}
    >
      <div className="mb-5 flex items-start gap-3">

        {icon && (
          <div className="
            flex h-11 w-11 shrink-0
            items-center justify-center
            rounded-xl bg-blue-500/10
            text-xl
          ">
            {icon}
          </div>
        )}

        <div>
          <h2 className="text-lg font-bold text-white">
            {title}
          </h2>

          {description && (
            <p className="mt-1 text-sm text-slate-400">
              {description}
            </p>
          )}
        </div>

      </div>

      {children}
    </section>
  );
}
