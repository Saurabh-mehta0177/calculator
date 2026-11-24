
"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Props {
  onPress: (value: string) => void;
  onCalculate: () => void;
  onClear: () => void;
  onMemory: (action: string) => void;
}

const basicKeys = [
  ["AC", "(", ")", "÷"],
  ["7", "8", "9", "×"],
  ["4", "5", "6", "−"],
  ["1", "2", "3", "+"],
  ["%", "0", ".", "="],
];

const scientificKeys = [
  ["sin", "cos", "tan", "π"],
  ["asin", "acos", "atan", "e"],
  ["ln", "log", "sqrt", "cbrt"],
  ["sinh", "cosh", "tanh", "abs"],
  ["x²", "x³", "xʸ", "1/x"],
  ["!", "exp", "floor", "ceil"],
  ["round", "min", "max", "pow"],
];

const colors: Record<string, string> = {
  AC: "bg-rose-500/15 text-rose-400 hover:bg-rose-500/25",
  "=": "bg-emerald-500 text-white hover:bg-emerald-400",
  "÷": "bg-blue-500/15 text-blue-400",
  "×": "bg-blue-500/15 text-blue-400",
  "+": "bg-blue-500/15 text-blue-400",
  "−": "bg-blue-500/15 text-blue-400",
};

export default function CalculatorKeypad({
  onPress,
  onCalculate,
  onClear,
  onMemory,
}: Props) {
  const [scientific, setScientific] = useState(true);

  function handleKey(key: string) {
    if (key === "AC") {
      onClear();
      return;
    }

    if (key === "=") {
      onCalculate();
      return;
    }

    const functions: Record<string, string> = {
      "π": "pi",
      "e": "e",
      "÷": "/",
      "×": "*",
      "−": "-",
      "sqrt": "sqrt(",
      "cbrt": "cbrt(",
      "x²": "^2",
      "x³": "^3",
      "xʸ": "^",
      "1/x": "1/(",
      "x!": "!",
      "ln": "ln(",
      "log": "log(",
      "exp": "exp(",
      "sin": "sin(",
      "cos": "cos(",
      "tan": "tan(",
      "asin": "asin(",
      "acos": "acos(",
      "atan": "atan(",
      "sinh": "sinh(",
      "cosh": "cosh(",
      "tanh": "tanh(",
      "abs": "abs(",
      "floor": "floor(",
      "ceil": "ceil(",
      "round": "round(",
      "min": "min(",
      "max": "max(",
      "pow": "pow(",
    };

    if (key === "!") {
      onPress("!");
      return;
    }

    if (key === "1/x") {
      onPress("1/(");
      return;
    }

    onPress(functions[key] ?? key);
  }

  const keyClass = (key: string) => `
    flex min-h-[58px] items-center
    justify-center rounded-xl
    text-base font-bold transition
    active:scale-95
    ${
      colors[key] ??
      "bg-slate-800 text-slate-200 hover:bg-slate-700"
    }
  `;

  return (
    <div className="
      rounded-3xl border border-slate-800
      bg-[#0B1424] p-4 sm:p-6
    ">

      {/* MEMORY */}

      <div className="
        mb-5 grid grid-cols-4 gap-2
      ">

        {["MC", "MR", "M+", "M−"].map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => onMemory(key)}
            className="
              rounded-lg border border-slate-700
              bg-slate-900 py-3 text-xs
              font-bold text-blue-400
              hover:bg-slate-800
            "
          >
            {key}
          </button>
        ))}

      </div>

      {/* SCIENTIFIC TOGGLE */}

      <button
        type="button"
        onClick={() => setScientific((v) => !v)}
        aria-expanded={scientific}
        className="
          mb-4 flex w-full items-center
          justify-between rounded-xl
          border border-slate-800
          bg-slate-900 px-4 py-3
          text-sm font-bold text-slate-300
          hover:border-blue-500/40
        "
      >

        <span>
          Scientific Functions
        </span>

        {scientific
          ? <ChevronUp size={18} />
          : <ChevronDown size={18} />
        }

      </button>

      {scientific && (
        <div className="
          mb-4 grid grid-cols-4 gap-2
        ">
          {scientificKeys.flat().map((key, index) => (
            <button
              key={`${key}-${index}`}
              type="button"
              onClick={() => handleKey(key)}
              className="
                min-h-[48px] rounded-xl
                border border-blue-500/10
                bg-blue-500/10
                text-xs font-bold text-blue-300
                transition hover:bg-blue-500/20
                active:scale-95 sm:text-sm
              "
            >
              {key}
            </button>
          ))}
        </div>
      )}

      {/* BASIC KEYPAD */}

      <div className="
        grid grid-cols-4 gap-2
      ">

        {basicKeys.flat().map((key, index) => (
          <button
            key={`${key}-${index}`}
            type="button"
            onClick={() => handleKey(key)}
            className={keyClass(key)}
          >
            {key}
          </button>
        ))}

      </div>

      <p className="
        mt-4 text-center text-[10px]
        text-slate-600
      ">
        Use your keyboard or click the buttons
      </p>

    </div>
  );
}
