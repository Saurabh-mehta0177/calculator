
"use client";

import {
  Calculator,
  Shapes,
  Code2,
  ChartNoAxesCombined,
  Ruler,
  Wallet,
  ChartLine,
  History,
  X,
} from "lucide-react";

import type {
  CalculatorTab,
} from "@/lib/calculator/types";

const navigation = [
  {
    id: "scientific",
    label: "Scientific",
    description: "Advanced calculations",
    icon: Calculator,
  },
  {
    id: "geometry",
    label: "Geometry",
    description: "2D and 3D shapes",
    icon: Shapes,
  },
  {
    id: "programmer",
    label: "Programmer",
    description: "Binary and hexadecimal",
    icon: Code2,
  },
  {
    id: "statistics",
    label: "Statistics",
    description: "Statistical analysis",
    icon: ChartNoAxesCombined,
  },
  {
    id: "engineering",
    label: "Engineering",
    description: "Unit conversions",
    icon: Ruler,
  },
  {
    id: "finance",
    label: "Finance",
    description: "Interest and EMI",
    icon: Wallet,
  },
  {
    id: "graphing",
    label: "Graphing",
    description: "Function plotting",
    icon: ChartLine,
  },
  {
    id: "history",
    label: "History",
    description: "Previous calculations",
    icon: History,
  },
] as const;

interface NavigationProps {
  activeTab: CalculatorTab;
  onTabChange: (tab: CalculatorTab) => void;
  mobileOpen: boolean;
  onMobileClose: () => void;
}

export default function CalculatorNavigation({
  activeTab,
  onTabChange,
  mobileOpen,
  onMobileClose,
}: NavigationProps) {

  function handleNavigation(tab: CalculatorTab) {
    onTabChange(tab);
    onMobileClose();
  }

  return (
    <>
      {mobileOpen && (
        <button
          type="button"
          onClick={onMobileClose}
          className="
            fixed inset-0 z-40
            bg-black/70 lg:hidden
          "
          aria-label="Close navigation"
        />
      )}

      <aside className={`
        fixed inset-y-0 left-0 z-50
        w-[280px] overflow-y-auto
        border-r border-slate-800
        bg-[#0B1424] p-4
        transition-transform duration-300
        lg:sticky lg:top-[73px]
        lg:z-10 lg:block
        lg:h-[calc(100vh-73px)]
        lg:translate-x-0
        ${
          mobileOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }
      `}>

        <div className="mb-7 flex items-center justify-between">

          <div>
            <h2 className="text-sm font-bold text-white">
              Calculator Menu
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Select a tool
            </p>
          </div>

          <button
            type="button"
            onClick={onMobileClose}
            className="rounded-lg p-2 text-slate-400 lg:hidden"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>

        </div>

        <div className="space-y-2">

          {navigation.map((item) => {
            const Icon = item.icon;
            const active = activeTab === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() =>
                  handleNavigation(item.id as CalculatorTab)
                }
                aria-current={active ? "page" : undefined}
                className={`
                  group flex w-full items-center
                  gap-3 rounded-xl p-3
                  text-left transition-all
                  ${
                    active
                      ? "border border-blue-500/30 bg-blue-500/10 text-blue-400"
                      : "border border-transparent text-slate-400 hover:bg-slate-800 hover:text-white"
                  }
                `}
              >

                <div className={`
                  flex h-10 w-10 shrink-0
                  items-center justify-center
                  rounded-xl transition
                  ${
                    active
                      ? "bg-blue-500/20 text-blue-400"
                      : "bg-slate-800 text-slate-400 group-hover:text-white"
                  }
                `}>
                  <Icon size={20} />
                </div>

                <div className="min-w-0 flex-1">

                  <p className="text-sm font-bold">
                    {item.label}
                  </p>

                  <p className="mt-1 truncate text-[11px] text-slate-500">
                    {item.description}
                  </p>

                </div>

                {active && (
                  <span className="
                    h-2 w-2 rounded-full
                    bg-blue-400
                  " />
                )}

              </button>
            );
          })}

        </div>

        <div className="
          mt-8 rounded-2xl
          border border-blue-500/20
          bg-gradient-to-br
          from-blue-500/10 to-cyan-500/5
          p-4
        ">

          <p className="text-sm font-bold text-blue-300">
            Smart Calculations
          </p>

          <p className="
            mt-2 text-xs leading-5
            text-slate-400
          ">
            Calculate smarter with our collection
            of advanced mathematical and
            financial tools.
          </p>

        </div>

        <p className="
          mt-7 text-center text-[10px]
          text-slate-600
        ">
          FinanceTools Ultimate Suite
        </p>

      </aside>
    </>
  );
}
