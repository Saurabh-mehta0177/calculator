// app/guide/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Guides & Learning | FinanceTools",
  description:
    "Learn important financial concepts with simple explanations. Understand EMI, SIP, Fixed Deposits and more with our free finance guides.",
};

const guides = [
  {
    id: "emi",
    category: "LOAN GUIDE",
    readTime: "5 min read",
    title: "What Is EMI and How Is It Calculated?",
    description:
      "Understand Equated Monthly Instalments, principal amount, interest rate and loan tenure.",
    href: "/guide/emi",
    icon: "🧮",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "sip",
    category: "INVESTMENT GUIDE",
    readTime: "5 min read",
    title: "What Is SIP and How Does It Work?",
    description:
      "Learn how Systematic Investment Plans work and how regular investing can build wealth.",
    href: "/guide/sip",
    icon: "📈",
    color: "bg-green-100 text-green-700",
  },
  {
    id: "fd",
    category: "BANKING GUIDE",
    readTime: "4 min read",
    title: "Fixed Deposit: Interest and Maturity Explained",
    description:
      "Understand fixed deposit interest, investment duration and maturity calculations.",
    href: "/guide/fd",
    icon: "🏦",
    color: "bg-amber-100 text-amber-700",
  },
];

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 via-blue-700 to-blue-800 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Financial Guides & Learning
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Learn important financial concepts with simple explanations.
              Make better financial decisions with knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Guides List */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.id}
              href={guide.href}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${guide.color}`}
                >
                  {guide.category}
                </span>
                <span className="text-sm text-slate-500">{guide.readTime}</span>
              </div>

              <div className="mt-5 text-4xl">{guide.icon}</div>

              <h2 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-blue-700">
                {guide.title}
              </h2>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                {guide.description}
              </p>

              <div className="mt-6 flex items-center text-sm font-semibold text-blue-600">
                Explore Guide
                <span className="ml-2 transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            Ready to Calculate?
          </h2>
          <p className="mt-3 text-slate-600">
            Use our free calculators after reading the guides.
          </p>
          <Link
            href="/tools"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Explore All Calculators →
          </Link>
        </div>
      </section>
    </div>
  );
}