
import Link from "next/link";
const tools = [
  {
    name: "EMI Calculator",
    href: "/emi-calculator",
    icon: "📊",
    color: "from-blue-500 to-cyan-500",
    description: "Calculate monthly loan installments.",
  },
  {
    name: "SIP Calculator",
    href: "/sip-calculator",
    icon: "📈",
    color: "from-purple-500 to-indigo-500",
    description: "Estimate your monthly SIP investment returns.",
  },
  {
    name: "FD Calculator",
    href: "/fd-calculator",
    icon: "🏦",
    color: "from-emerald-500 to-teal-500",
    description: "Calculate fixed deposit maturity returns.",
  },
  {
    name: "GST Calculator",
    href: "/gst-calculator",
    icon: "🧾",
    color: "from-yellow-500 to-orange-500",
    description: "Calculate GST amounts and tax breakdowns.",
  },
  {
    name: "Compound Interest Calculator",
    href: "/compound-interest",
    icon: "💹",
    color: "from-purple-500 to-pink-500",
    description: "Discover the power of compound interest.",
  },
  {
    name: "Home Loan Calculator",
    href: "/home-loan",
    icon: "🏠",
    color: "from-teal-500 to-green-500",
    description: "Plan your home loan EMI and repayment.",
  },
  {
    name: "Personal Loan Calculator",
    href: "/personal-loan",
    icon: "💳",
    color: "from-cyan-500 to-blue-500",
    description: "Calculate personal loan EMI and interest.",
  },
  {
    name: "Car Loan Calculator",
    href: "/car-loan",
    icon: "🚗",
    color: "from-orange-500 to-amber-500",
    description: "Calculate your car loan EMI and interest.",
  },
  {
    name: "RD Calculator",
    href: "/rd-calculator",
    icon: "💵",
    color: "from-pink-500 to-rose-500",
    description: "Calculate recurring deposit maturity.",
  },
  {
    name: "PPF Calculator",
    href: "/ppf-calculator",
    icon: "🏛️",
    color: "from-green-500 to-lime-500",
    description: "Estimate your PPF investment maturity.",
  },
  {
    name: "Lumpsum Calculator",
    href: "/lumpsum-calculator",
    icon: "💰",
    color: "from-violet-500 to-purple-500",
    description: "Estimate returns on a one-time investment.",
  },
  {
    name: "Percentage Calculator",
    href: "/percentage-calculator",
    icon: "％",
    color: "from-red-500 to-pink-500",
    description: "Calculate percentages quickly and easily.",
  },
  {
    name: "Simple Interest Calculator",
    href: "/simple-interest",
    icon: "📝",
    color: "from-amber-500 to-orange-500",
    description: "Calculate simple interest on your money.",
  },
  {
    name: "CAGR Calculator",
    href: "/cagr-calculator",
    icon: "📈",
    color: "from-green-500 to-emerald-500",
    description: "Calculate compound annual growth rate.",
  },
  {
    name: "Age Calculator",
    href: "/age-calculator",
    icon: "🎂",
    color: "from-pink-500 to-rose-500",
    description: "Calculate your exact age in years, months and days.",
  },
  {
    name: "Loan Comparison",
    href: "/compare",
    icon: "⚖️",
    color: "from-indigo-500 to-blue-500",
    description: "Compare different loans and their costs.",
  },
  {
    name: "Calculator",
    href: "/calculator",
    icon: "🧮",
    color: "from-blue-500 to-cyan-500",
    description: "Perform everyday mathematical calculations.",
  },
];

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-16 dark:bg-[#0b1120]">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
            SMART FINANCIAL CALCULATORS
          </span>

          <h1 className="text-4xl font-black text-gray-900 dark:text-white sm:text-5xl">
            Explore All Tools
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
            All your financial calculators in one place.
            Calculate, compare and make smarter financial decisions.
          </p>

          <p className="mt-4 font-bold text-blue-600 dark:text-blue-400">
            {tools.length} Useful Calculators Available
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl dark:border-gray-700 dark:bg-[#111c30] dark:hover:border-blue-500"
            >
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${tool.color} text-3xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
              >
                {tool.icon}
              </div>

              <h2 className="text-lg font-extrabold text-gray-900 dark:text-white">
                {tool.name}
              </h2>

              <p className="mt-2 min-h-12 text-sm leading-6 text-gray-600 dark:text-gray-400">
                {tool.description}
              </p>

              <div className="mt-5 font-bold text-blue-600 transition-transform group-hover:translate-x-2 dark:text-blue-400">
                Open Calculator →
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
