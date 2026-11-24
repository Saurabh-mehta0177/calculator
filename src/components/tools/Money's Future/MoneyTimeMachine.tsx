

"use client";

import { useMemo, useState } from "react";
import type { MoneyInputs } from "@/data/MoneyFuture";
import { calculateAllScenarios } from "@/data/MoneyFuture";

import FinancialInputs from "./FinancialInputs";
import ScenarioResults from "./ScenarioResults";
import FinancialInsights from "./FinancialInsights";
//import MoneyGrowthGraph from "./MoneyGrowthGraph";

const DEFAULT_INPUTS: MoneyInputs = {
  monthlyIncome: 50000,
  monthlyExpenses: 30000,
  currentSavings: 200000,
  monthlyInvestment: 5000,
  years: 10,
};

export default function MoneyTimeMachine() {
  const [inputs, setInputs] = useState<MoneyInputs>(DEFAULT_INPUTS);

  const results = useMemo(() => {
    return calculateAllScenarios(inputs);
  }, [inputs]);

  const updateInput = <K extends keyof MoneyInputs>(
    key: K,
    value: MoneyInputs[K]
  ) => {
    setInputs((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const resetInputs = () => {
    setInputs(DEFAULT_INPUTS);
  };

  return (
    <section className="mx-auto w-full max-w-[1600px] space-y-6 px-4 py-6 sm:px-6 lg:px-8">

      {/* Heading */}
      <div className="space-y-3 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
          Money Time Machine
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          See Your Money’s Future
        </h1>

        <p className="mx-auto max-w-2xl text-slate-600">
          Adjust your financial details and compare how your money could grow over time.
        </p>
      </div>

      {/* Top Section: Input Left + Results Right */}
      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[360px_minmax(0,1fr)]">

        {/* Left: Financial Inputs */}
        <aside className="min-w-0">
          <div className="lg:sticky lg:top-6">
            <FinancialInputs
              inputs={inputs}
              onChange={updateInput}
              onReset={resetInputs}
            />
          </div>
        </aside>

        {/* Right: Scenario Results */}
        <div className="min-w-0">
          <ScenarioResults
            results={results}
            years={inputs.years}
          />
        </div>

      </div>



    </section>
  );
}
