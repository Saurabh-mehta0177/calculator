
"use client";

import { useState } from "react";

import {
  Calculator,
  Shapes,
  Code2,
  ChartNoAxesCombined,
  Ruler,
  Wallet,
  ChartLine,
  History,
  Sparkles,
} from "lucide-react";

import type { ComponentType } from "react";

import type {
  CalculatorTab,
} from "@/lib/calculator/types";

import CalculatorHeader from "./CalculatorHeader";
import CalculatorNavigation from "./CalculatorNavigation";

import ScientificCalculator from "./scientific/ScientificCalculator";
import GeometryCalculator from "./geometry/GeometryCalculator";
import ProgrammerCalculator from "./programmer/ProgrammerCalculator";
import StatisticsCalculator from "./statistics/StatisticsCalculator";
import EngineeringCalculator from "./engineering/EngineeringCalculator";
import FinanceCalculator from "./finance/FinanceCalculator";
import GraphingCalculator from "./graphing/GraphingCalculator";
import UnitConverter from "./converter/UnitConverter";
import HistoryManager from "./history/HistoryManager";

interface ModuleInfo {
  title: string;
  description: string;
  icon: ComponentType<{ size?: number }>;
}

const moduleInfo: Record<CalculatorTab, ModuleInfo> = {
  scientific: {
    title: "Scientific Calculator",
    description: "Advanced mathematical calculations",
    icon: Calculator,
  },

  geometry: {
    title: "Geometry Calculator",
    description: "Calculate 2D and 3D shapes",
    icon: Shapes,
  },

  programmer: {
    title: "Programmer Calculator",
    description: "Number systems and bitwise operations",
    icon: Code2,
  },

  statistics: {
    title: "Statistics Calculator",
    description: "Analyze datasets and statistical values",
    icon: ChartNoAxesCombined,
  },

  engineering: {
    title: "Engineering Calculator",
    description: "Convert engineering units",
    icon: Ruler,
  },

  finance: {
    title: "Financial Calculator",
    description: "Calculate interest, EMI and investments",
    icon: Wallet,
  },

  graphing: {
    title: "Graphing Calculator",
    description: "Plot and analyze mathematical functions",
    icon: ChartLine,
  },

  converter: {
    title: "Unit Converter",
    description: "Convert everyday and scientific units",
    icon: Ruler,
  },

  history: {
    title: "Calculation History",
    description: "Review your previous calculations",
    icon: History,
  },
};

// MODULE RENDERER

function renderModule(tab: CalculatorTab) {
  switch (tab) {
    case "scientific":
      return <ScientificCalculator />;

    case "geometry":
      return <GeometryCalculator />;

    case "programmer":
      return <ProgrammerCalculator />;

    case "statistics":
      return <StatisticsCalculator />;

    case "engineering":
      return <EngineeringCalculator />;

    case "finance":
      return <FinanceCalculator />;

    case "graphing":
      return <GraphingCalculator />;

    case "converter":
      return <UnitConverter />;

    case "history":
      return <HistoryManager />;

    default:
      return null;
  }
}

export default function CalculatorLayout() {
  const [activeTab, setActiveTab] =
    useState<CalculatorTab>("scientific");

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const item = moduleInfo[activeTab];

  const Icon = item.icon;

  return (
    <div className="
      min-h-screen
      bg-[#080F1D]
      text-white
    ">

      {/* HEADER */}

      <CalculatorHeader
        onMenuClick={() => setMobileOpen(true)}
        onHistoryClick={() => setActiveTab("history")}
      />

      <div className="
        mx-auto flex max-w-[1600px]
      ">

        {/* NAVIGATION */}

        <CalculatorNavigation
          activeTab={activeTab}
          onTabChange={setActiveTab}
          mobileOpen={mobileOpen}
          onMobileClose={() => setMobileOpen(false)}
        />

        {/* MAIN CONTENT */}

        <main className="
          min-w-0 flex-1
          px-4 py-7
          sm:px-6 lg:px-8
        ">

          {/* PAGE HEADING */}

          <div className="
            mb-8 flex flex-col
            justify-between gap-4
            sm:flex-row sm:items-center
          ">

            <div>

              <div className="
                mb-3 inline-flex items-center
                gap-2 rounded-full
                border border-blue-500/20
                bg-blue-500/10
                px-3 py-1.5
                text-[10px] font-bold
                uppercase tracking-wider
                text-blue-400
              ">

                <Sparkles size={13} />

                Ultimate Calculator Suite

              </div>

              <div className="
                flex items-center gap-3
              ">

                <div className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-xl bg-blue-500/10
                  text-blue-400
                ">
                  <Icon size={23} />
                </div>

                <h1 className="
                  text-2xl font-extrabold
                  tracking-tight text-white
                  sm:text-3xl
                ">
                  {item.title}
                </h1>

              </div>

              <p className="
                mt-3 text-sm
                text-slate-400
              ">
                {item.description}
              </p>

            </div>

            {/* STATUS */}

            <div className="
              flex items-center gap-2
              rounded-xl border
              border-slate-800
              bg-slate-900 px-4 py-3
            ">

              <span className="
                h-2 w-2 rounded-full
                bg-emerald-400
              " />

              <span className="
                text-xs font-semibold
                text-slate-300
              ">
                Calculator Ready
              </span>

            </div>

          </div>

          {/* ACTIVE MODULE */}

          <div key={activeTab}>
            {renderModule(activeTab)}
          </div>

          {/* FOOTER */}

          <footer className="
            mt-10 border-t
            border-slate-800
            pt-6 text-center
          ">

            <p className="
              text-xs leading-6
              text-slate-500
            ">
              FinanceTools Ultimate Calculator.
              Designed for educational and
              general calculation purposes.
            </p>

            <p className="
              mt-2 text-[10px]
              text-slate-600
            ">
              Results should be independently
              verified where accuracy is critical.
            </p>

          </footer>

        </main>

      </div>

    </div>
  );
}
