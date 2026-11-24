
"use client";

import { useCallback, useEffect, useState } from "react";
import { Calculator, RotateCcw } from "lucide-react";

import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorKeypad from "./CalculatorKeypad";
import CalculatorHistory from "./CalculatorHistory";

import { calculateScientific } from "@/lib/calculator/scientific";
import { toPlainNumber } from "@/lib/calculator/formatter";

import type {
  AngleMode,
  CalculationHistoryItem,
} from "@/lib/calculator/types";

const STORAGE_KEY = "financetools-scientific-v1";

export default function ScientificCalculator() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [angleMode, setAngleMode] = useState<AngleMode>("DEG");

  const [memory, setMemory] = useState(0);
  const [answer, setAnswer] = useState(0);

  const [history, setHistory] = useState<
    CalculationHistoryItem[]
  >([]);

  const [hydrated, setHydrated] = useState(false);

  // Restore history and memory.

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (saved) {
        const data = JSON.parse(saved);

        if (Array.isArray(data.history)) {
          setHistory(
            data.history
              .filter(
                (item: CalculationHistoryItem) =>
                  typeof item.expression === "string" &&
                  typeof item.result === "string" &&
                  typeof item.timestamp === "number"
              )
              .slice(0, 100)
          );
        }

        if (Number.isFinite(data.memory)) {
          setMemory(data.memory);
        }

        if (
          Number.isFinite(data.answer)
        ) {
          setAnswer(data.answer);
        }

        if (
          data.angleMode === "DEG" ||
          data.angleMode === "RAD"
        ) {
          setAngleMode(data.angleMode);
        }
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }

    setHydrated(true);
  }, []);

  // Save data only after restoration.

  useEffect(() => {
    if (!hydrated) return;

    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          history,
          memory,
          answer,
          angleMode,
        })
      );
    } catch {
      // Storage may be unavailable or full.
    }
  }, [history, memory, answer, angleMode, hydrated]);

  const clearError = useCallback(() => {
    setError("");
  }, []);

  const handleExpressionChange = useCallback(
    (value: string) => {
      setExpression(value);
      setResult("");
      clearError();
    },
    [clearError]
  );

  const insertValue = useCallback(
    (value: string) => {
      setExpression((previous) => previous + value);
      setResult("");
      clearError();
    },
    [clearError]
  );

  const clearAll = useCallback(() => {
    setExpression("");
    setResult("");
    setError("");
  }, []);

  const backspace = useCallback(() => {
    setExpression((previous) => previous.slice(0, -1));
    setResult("");
    clearError();
  }, [clearError]);

  // Main calculation.

  const calculate = useCallback(() => {
    if (!expression.trim()) return;

    try {
      const calculation = calculateScientific(
        expression,
        angleMode,
        answer
      );

      const formatted = calculation.formatted;

      setResult(formatted);
      setAnswer(calculation.value);
      setError("");

      const item: CalculationHistoryItem = {
        id: `${Date.now()}-${Math.random()}`,
        expression,
        result: formatted,
        timestamp: Date.now(),
      };

      setHistory((previous) =>
        [item, ...previous].slice(0, 100)
      );
    } catch (err) {
      setResult("");
      setError(
        err instanceof Error
          ? err.message
          : "Invalid calculation"
      );
    }
  }, [expression, angleMode, answer]);

  // Memory operations.

  const handleMemory = useCallback(
    (action: string) => {
      let current = answer;

      if (expression.trim()) {
        try {
          current = calculateScientific(
            expression,
            angleMode,
            answer
          ).value;
        } catch {
          // Use previous answer if expression is invalid.
        }
      }

      switch (action) {
        case "MC":
          setMemory(0);
          break;

        case "MR":
          insertValue(toPlainNumber(memory));
          break;

        case "M+":
          setMemory((previous) => previous + current);
          break;

        case "M-":
          setMemory((previous) => previous - current);
          break;
      }
    },
    [answer, expression, angleMode, memory, insertValue]
  );

  const reuseHistory = useCallback(
    (value: string) => {
      setExpression(value);
      setResult("");
      setError("");
    },
    []
  );

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  const toggleAngleMode = () => {
    setAngleMode((previous) =>
      previous === "DEG" ? "RAD" : "DEG"
    );

    setResult("");
    setError("");
  };

  // Keyboard support.

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;

      if (
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable
      ) {
        if (event.key === "Enter") {
          event.preventDefault();
          calculate();
        }

        return;
      }

      if (/^[0-9.]$/.test(event.key)) {
        insertValue(event.key);
      } else if (
        ["+", "-", "*", "/", "%", "^", "(", ")"].includes(event.key)
      ) {
        insertValue(event.key);
      } else if (event.key === "Enter" || event.key === "=") {
        event.preventDefault();
        calculate();
      } else if (event.key === "Backspace") {
        backspace();
      } else if (event.key === "Escape") {
        clearAll();
      } else if (event.key === "!") {
        insertValue("!");
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    calculate,
    insertValue,
    backspace,
    clearAll,
  ]);

  return (
    <div className="space-y-6">

      {/* CALCULATOR TOOLBAR */}

      <div className="
        flex flex-wrap items-center
        justify-between gap-3
      ">

        <div>
          <p className="
            text-xs font-bold uppercase
            tracking-widest text-slate-500
          ">
            Scientific Mode
          </p>

          <p className="
            mt-1 text-xs text-slate-400
          ">
            Advanced mathematical operations
          </p>
        </div>

        <div className="flex items-center gap-2">

          <button
            type="button"
            onClick={toggleAngleMode}
            className="
              rounded-xl border
              border-blue-500/30
              bg-blue-500/10
              px-4 py-2.5 text-xs
              font-extrabold text-blue-400
              hover:bg-blue-500/20
            "
          >
            {angleMode}
          </button>

          <button
            type="button"
            onClick={clearAll}
            className="
              flex items-center gap-2
              rounded-xl border
              border-slate-700
              bg-slate-900 px-4 py-2.5
              text-xs font-bold text-slate-300
              hover:bg-slate-800
            "
          >
            <RotateCcw size={14} />
            Reset
          </button>

        </div>

      </div>

      {/* MAIN CALCULATOR */}

      <div className="
        grid grid-cols-1 gap-6
        xl:grid-cols-[minmax(0,1.5fr)_minmax(300px,1fr)]
      ">

        <div className="space-y-5">

          <CalculatorDisplay
            expression={expression}
            result={result}
            error={error}
            onExpressionChange={handleExpressionChange}
            onBackspace={backspace}
          />

          <CalculatorKeypad
            onPress={insertValue}
            onCalculate={calculate}
            onClear={clearAll}
            onMemory={handleMemory}
          />

          {/* MEMORY STATUS */}

          <div className="
            flex flex-wrap items-center
            justify-between gap-2
            rounded-xl border
            border-slate-800
            bg-slate-900/70 px-4 py-3
          ">

            <span className="text-xs text-slate-500">
              Memory: <span className="font-bold text-blue-400">
                {toPlainNumber(memory)}
              </span>
            </span>

            <span className="text-xs text-slate-500">
              Previous answer: <span className="font-bold text-emerald-400">
                {toPlainNumber(answer)}
              </span>
            </span>

          </div>

        </div>

        {/* HISTORY */}

        <div>
          <CalculatorHistory
            history={history}
            onSelect={reuseHistory}
            onClear={clearHistory}
          />
        </div>

      </div>

      {/* HELP SECTION */}

      <section className="
        rounded-2xl border
        border-slate-800
        bg-slate-900/50 p-5
      ">

        <h3 className="
          text-sm font-extrabold text-white
        ">
          Scientific Calculator Guide
        </h3>

        <div className="
          mt-4 grid grid-cols-1
          gap-4 sm:grid-cols-2
        ">

          <div>
            <p className="text-xs font-bold text-blue-400">
              Trigonometry
            </p>

            <p className="
              mt-1 text-xs leading-6
              text-slate-400
            ">
              sin(30), cos(60), tan(45), asin(0.5)
            </p>
          </div>

          <div>
            <p className="text-xs font-bold text-blue-400">
              Powers and Roots
            </p>

            <p className="
              mt-1 text-xs leading-6
              text-slate-400
            ">
              sqrt(144), cbrt(27), 2^10, 5!
            </p>
          </div>

          <div>
            <p className="text-xs font-bold text-blue-400">
              Logarithms
            </p>

            <p className="
              mt-1 text-xs leading-6
              text-slate-400
            ">
              log(100), ln(10), exp(2)
            </p>
          </div>

          <div>
            <p className="text-xs font-bold text-blue-400">
              Constants
            </p>

            <p className="
              mt-1 text-xs leading-6
              text-slate-400
            ">
              pi, e, ans
            </p>
          </div>

        </div>

      </section>

      <p className="
        text-center text-[10px]
        leading-5 text-slate-600
      ">
        Calculations are performed locally in your browser.
        History and memory are stored in browser local storage.
      </p>

    </div>
  );
}
