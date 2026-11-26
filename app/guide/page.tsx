
// app/guide/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Guides & Learning | FinanceTools",
  description:
    "Learn how EMI, SIP and fixed deposits work with simple financial guides. Understand loan payments, regular investing and FD interest before using free financial calculators.",
  alternates: {
    canonical: "https://smartmoneytools.xyz/guide/",
  },
  openGraph: {
    title: "Financial Guides & Learning | FinanceTools",
    description:
      "Understand EMI, SIP and fixed deposits with simple financial guides, then explore the numbers with free financial calculators.",
    url: "https://smartmoneytools.xyz/guide/",
    siteName: "FinanceTools",
    type: "website",
  },
};

const guides = [
  {
    id: "emi",
    category: "LOAN GUIDE",
    readTime: "5 min read",
    title: "What Is EMI and How Is It Calculated?",
    description:
      "Understand Equated Monthly Instalments, loan principal, interest rate and tenure. Learn what affects your monthly payment and total repayment.",
    href: "/guide/emi",
    icon: "🧮",
    badgeStyle:
      "bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300",
    iconStyle:
      "bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    id: "sip",
    category: "INVESTMENT GUIDE",
    readTime: "5 min read",
    title: "What Is SIP and How Does It Work?",
    description:
      "Learn how a Systematic Investment Plan works and how regular contributions may grow over time. Understand the role of investment duration and returns.",
    href: "/guide/sip",
    icon: "📈",
    badgeStyle:
      "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300",
    iconStyle:
      "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    id: "fd",
    category: "BANKING GUIDE",
    readTime: "4 min read",
    title: "Fixed Deposit: Interest and Maturity Explained",
    description:
      "Explore how fixed deposit interest, investment duration and compounding affect the maturity amount. Learn the key terms used in FD calculations.",
    href: "/guide/fd",
    icon: "🏦",
    badgeStyle:
      "bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300",
    iconStyle:
      "bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300",
    accent: "from-orange-500 to-amber-500",
  },
];

const faqs = [
  {
    question: "What can I learn from these financial guides?",
    answer:
      "These guides introduce common financial concepts such as loan EMIs, Systematic Investment Plans and fixed deposits. They explain key terms and help you understand the inputs used by financial calculators.",
  },
  {
    question: "Are the financial guides free to read?",
    answer:
      "Yes. The guides on this page are available to read without a paid subscription. You can also explore the financial calculators linked from this page.",
  },
  {
    question: "Are calculator results guaranteed?",
    answer:
      "No. Calculator results are estimates based on the values and assumptions entered. Actual loan terms, deposit rates, taxes and investment returns may differ.",
  },
];

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 transition-colors dark:bg-gray-950 dark:text-gray-100">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:border-gray-800 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/30">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-700/10"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-28 -left-20 -z-10 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-700/10"
        />

        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 text-sm text-slate-500 dark:text-gray-400"
          >
            <ol className="flex flex-wrap items-center justify-center gap-2">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-blue-700 dark:hover:text-blue-300"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li
                aria-current="page"
                className="font-semibold text-slate-700 dark:text-gray-200"
              >
                Financial Guides
              </li>
            </ol>
          </nav>

          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-blue-700 shadow-sm dark:border-blue-900/60 dark:bg-gray-900/80 dark:text-blue-300">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-blue-500"
              />
              Learn. Understand. Plan.
            </div>

            <h1 className="text-3xl font-black tracking-tight text-slate-950 sm:text-5xl dark:text-white">
              Financial Guides{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                &amp; Learning
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-gray-300">
              Understand everyday financial concepts with clear, practical
              explanations. Learn how loans, investments and deposits work,
              then use a calculator to explore your own numbers.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/tools"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-950"
              >
                Explore Financial Calculators
                <span aria-hidden="true">→</span>
              </Link>

              <span className="text-sm text-slate-500 dark:text-gray-400">
                Simple explanations · Free tools
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section
        aria-labelledby="guide-list-heading"
        className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-xs font-extrabold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Financial Learning
            </p>

            <h2
              id="guide-list-heading"
              className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl dark:text-white"
            >
              Explore Our Financial Guides
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base dark:text-gray-400">
              Choose a topic to learn its key concepts. After reading, use the
              related calculator to estimate figures based on your own inputs.
            </p>
          </div>

          <Link
            href="/tools"
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm font-bold text-blue-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:text-blue-300 dark:hover:border-blue-800"
          >
            View All Tools
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={guide.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-900"
            >
              <div
                aria-hidden="true"
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${guide.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />

              <div className="flex items-center justify-between gap-3">
                <span
                  className={`rounded-full px-3 py-1.5 text-[11px] font-extrabold tracking-wide ${guide.badgeStyle}`}
                >
                  {guide.category}
                </span>

                <span className="shrink-0 text-xs font-medium text-slate-500 dark:text-gray-400">
                  {guide.readTime}
                </span>
              </div>

              <div
                aria-hidden="true"
                className={`mt-6 flex h-14 w-14 items-center justify-center rounded-2xl text-3xl ${guide.iconStyle}`}
              >
                {guide.icon}
              </div>

              <h3 className="mt-5 text-xl font-extrabold leading-snug text-slate-950 transition-colors group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300">
                <Link
                  href={guide.href}
                  className="rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {guide.title}
                </Link>
              </h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-gray-400">
                {guide.description}
              </p>

              <div className="mt-6 border-t border-slate-100 pt-5 dark:border-gray-800">
                <Link
                  href={guide.href}
                  className="inline-flex min-h-10 w-full items-center justify-between gap-3 rounded-lg text-sm font-bold text-blue-700 transition hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-blue-300 dark:hover:text-blue-200"
                >
                  Read the Guide
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Helpful information */}
      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="flex gap-4 rounded-2xl border border-blue-100 bg-blue-50/70 p-5 sm:p-6 dark:border-blue-900/50 dark:bg-blue-950/20">
          <div
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm dark:bg-gray-900"
          >
            💡
          </div>

          <div>
            <h2 className="font-bold text-slate-900 dark:text-white">
              Use guides as a starting point
            </h2>

            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-gray-400">
              Calculator outputs are estimates based on the values and
              assumptions entered. Actual loan terms, deposit rates, taxes and
              investment returns may differ. Review the relevant terms before
              making financial decisions.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="guide-faq-heading"
        className="border-t border-slate-200 bg-white py-14 sm:py-16 dark:border-gray-800 dark:bg-gray-900/40"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Common Questions
            </p>

            <h2
              id="guide-faq-heading"
              className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl dark:text-white"
            >
              Financial Guides FAQ
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-gray-400">
              A few quick answers about our learning guides and calculators.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 bg-slate-50 p-5 open:border-blue-200 open:bg-blue-50/50 dark:border-gray-800 dark:bg-gray-900 dark:open:border-blue-900 dark:open:bg-blue-950/20"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900 marker:hidden dark:text-white">
                  <span>{faq.question}</span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-xl text-blue-600 transition-transform group-open:rotate-45 dark:text-blue-400"
                  >
                    +
                  </span>
                </summary>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-white py-14 sm:py-16 dark:border-gray-800 dark:bg-gray-900/60">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-extrabold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Put Your Knowledge to Work
          </p>

          <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl dark:text-white">
            Ready to Calculate?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base dark:text-gray-400">
            Explore our financial calculators to estimate loan payments,
            deposit maturity amounts and potential investment growth.
          </p>

          <Link
            href="/tools"
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-950"
          >
            Explore All Calculators
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}