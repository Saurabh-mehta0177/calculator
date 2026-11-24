
import Link from "next/link";

const moneyTools = [
  {
    name: "Financial Regret",
    description: "Discover the cost of your past financial decisions.",
    href: "/financial-regret",
    icon: "💸",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "Money Time Machine",
    description: "Explore how your money could grow over time.",
    href: "/money-time-machine",
    icon: "⏳",
    color: "from-purple-500 to-indigo-500",
  },
  {
    name: "Money's Future",
    description: "See what your financial future could look like.",
    href: "/Moneyfuture",
    icon: "🚀",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "One Rupee Challenge",
    description: "Experience the power of small savings.",
    href: "/one-rupee-challenge",
    icon: "₹",
    color: "from-yellow-500 to-orange-500",
  },
];

export default function MoneyToolsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-16 dark:bg-[#0b1120]">
      <div className="mx-auto max-w-6xl">

        <div className="mb-12 text-center">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white">
            Smart Money Tools
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Explore our tools and make smarter financial decisions.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {moneyTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-700 dark:bg-[#111c30]"
            >
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${tool.color} text-3xl text-white shadow-lg`}
              >
                {tool.icon}
              </div>

              <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">
                {tool.name}
              </h2>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {tool.description}
              </p>

              <div className="mt-5 font-bold text-blue-600 transition group-hover:translate-x-2">
                Explore Tool →
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
