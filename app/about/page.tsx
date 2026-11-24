// app/about/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | FinanceTools",
  description:
    "Learn about FinanceTools – free online financial calculators for EMI, FD, SIP, loans, investments and more. Make smarter financial decisions with confidence.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About FinanceTools
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Your trusted destination for free financial calculators, finance
              guides and useful tools. Make smarter financial decisions with
              ease.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Make Better Financial Decisions
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              At FinanceTools, we believe that understanding your money should
              be simple and accessible to everyone. Whether you are planning a
              home loan, starting a SIP, calculating fixed deposit returns, or
              just checking GST, our free online calculators help you estimate
              and plan with confidence.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              We provide instant, easy-to-use tools for banking, loans,
              investments and everyday calculations — all without any
              subscription or hidden charges.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">
              Our Mission
            </h3>
            <ul className="mt-6 space-y-4">
              <li className="flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  ✓
                </span>
                <span className="text-slate-600">
                  Offer 100% free financial calculators for everyone
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  ✓
                </span>
                <span className="text-slate-600">
                  Deliver instant and accurate estimates
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  ✓
                </span>
                <span className="text-slate-600">
                  Keep tools simple and easy to understand
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  ✓
                </span>
                <span className="text-slate-600">
                  Protect your privacy — no account required
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Why Choose Us
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Smart tools for better financial planning
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🆓",
                title: "100% Free Calculators",
                desc: "Use our financial calculators without any subscription or hidden charges.",
              },
              {
                icon: "⚡",
                title: "Instant Results",
                desc: "Get quick financial estimates by entering a few simple details.",
              },
              {
                icon: "🎯",
                title: "Easy to Understand",
                desc: "Simple inputs and clear results make financial calculations easier.",
              },
              {
                icon: "📱",
                title: "Mobile Friendly",
                desc: "Access our calculators from mobile, tablet and desktop devices.",
              },
              {
                icon: "🔒",
                title: "Privacy Focused",
                desc: "Perform calculations without creating an account.",
              },
              {
                icon: "📊",
                title: "Multiple Financial Tools",
                desc: "Explore loan, deposit, investment and everyday calculators in one place.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6 transition hover:border-blue-300 hover:shadow-md"
              >
                <div className="text-3xl">{item.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            What We Offer
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            A complete collection of free financial calculators
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Banking & Deposit",
              items: ["FD Calculator", "RD Calculator", "Simple Interest", "Compound Interest"],
              href: "/tools",
            },
            {
              title: "Loan & EMI",
              items: ["EMI Calculator", "Home Loan", "Personal Loan", "Car Loan"],
              href: "/tools",
            },
            {
              title: "Investment",
              items: ["SIP Calculator", "Lumpsum Calculator", "CAGR Calculator", "PPF Calculator"],
              href: "/tools",
            },
            {
              title: "Other Calculators",
              items: ["GST Calculator", "Percentage Calculator", "Age Calculator", "Basic Calculator"],
              href: "/tools",
            },
          ].map((cat) => (
            <div
              key={cat.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-blue-700">
                {cat.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="text-sm text-slate-600">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">
            Ready to Plan Your Financial Future?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Use our free financial calculators to estimate investments, loan
            payments and savings. Make informed financial decisions with
            confidence.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/tools"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 shadow transition hover:bg-blue-50"
            >
              Explore All Calculators
            </Link>
            <Link
              href="/"
              className="rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t border-slate-200 bg-slate-100 py-10">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Important Disclaimer
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            The calculators and information provided on this website are for
            educational and informational purposes only. Results are estimates
            and may differ from actual bank or financial institution
            calculations. Please verify financial details with the relevant
            institution before making financial decisions.
          </p>
        </div>
      </section>
    </div>
  );
}