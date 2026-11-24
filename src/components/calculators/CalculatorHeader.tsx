
"use client";

import { useState } from "react";
import {
  Calculator,
  Search,
  Settings,
  History,
  Menu,
  X,
  Moon,
  Sun,
} from "lucide-react";

interface CalculatorHeaderProps {
  onMenuClick?: () => void;
  onHistoryClick?: () => void;
}

export default function CalculatorHeader({
  onMenuClick,
  onHistoryClick,
}: CalculatorHeaderProps) {
  const [search, setSearch] = useState("");

  const [darkMode, setDarkMode] = useState(true);

  return (
    <header className="
      sticky top-0 z-40
      border-b border-slate-800
      bg-[#080F1D]/95
      backdrop-blur-xl
    ">

      <div className="
        mx-auto flex max-w-[1600px]
        items-center justify-between
        gap-3 px-4 py-4 sm:px-6
      ">

        {/* LEFT */}

        <div className="flex items-center gap-3">

          <button
            type="button"
            onClick={onMenuClick}
            className="
              rounded-xl border border-slate-700
              bg-slate-900 p-2.5 text-slate-300
              hover:border-blue-500 hover:text-white
              lg:hidden
            "
            aria-label="Open navigation"
          >
            <Menu size={20} />
          </button>

          <div className="
            flex h-11 w-11 items-center
            justify-center rounded-xl
            bg-gradient-to-br from-blue-500
            to-cyan-500 text-white shadow-lg
            shadow-blue-500/20
          ">
            <Calculator size={23} />
          </div>

          <div>
            <h1 className="
              text-base font-extrabold
              tracking-tight text-white sm:text-lg
            ">
              FinanceTools
            </h1>

            <p className="text-[10px] text-slate-400 sm:text-xs">
              Ultimate Calculator Suite
            </p>
          </div>

        </div>

        {/* SEARCH */}

        <div className="
          hidden max-w-md flex-1
          lg:flex
        ">

          <div className="
            flex w-full items-center gap-2
            rounded-xl border border-slate-800
            bg-slate-900 px-4 py-3
            focus-within:border-blue-500
          ">

            <Search size={17} className="text-slate-500" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search calculator..."
              className="
                w-full bg-transparent text-sm
                text-white outline-none
                placeholder:text-slate-500
              "
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                <X size={16} className="text-slate-400" />
              </button>
            )}

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-2">

          <button
            type="button"
            onClick={onHistoryClick}
            className="
              rounded-xl border border-slate-800
              bg-slate-900 p-2.5
              text-slate-400 transition
              hover:border-blue-500 hover:text-white
            "
            title="Calculation History"
            aria-label="Calculation history"
          >
            <History size={19} />
          </button>

          <button
            type="button"
            onClick={() => setDarkMode((v) => !v)}
            className="
              rounded-xl border border-slate-800
              bg-slate-900 p-2.5
              text-slate-400 transition
              hover:text-white
            "
            title="Theme preference"
            aria-label="Toggle theme preference"
          >
            {darkMode ? <Moon size={19} /> : <Sun size={19} />}
          </button>

          <button
            type="button"
            className="
              hidden rounded-xl border
              border-slate-800 bg-slate-900
              p-2.5 text-slate-400
              hover:text-white sm:block
            "
            title="Settings"
            aria-label="Settings"
          >
            <Settings size={19} />
          </button>

        </div>

      </div>

    </header>
  );
}
