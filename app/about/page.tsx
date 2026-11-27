
// app/about/page.tsx

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About FinanceTools | Free Financial Calculators & Money Tools",
  description:
    "Discover FinanceTools, an online collection of financial calculators for loans, savings, investments and everyday money calculations. Learn about our tools, approach and purpose.",
  keywords: [
    "about FinanceTools",
    "free financial calculators",
    "online financial tools",
    "EMI calculator",
    "SIP calculator",
    "FD calculator",
    "financial planning tools",
  ],
  openGraph: {
    title: "About FinanceTools | Financial Calculators for Everyday Planning",
    description:
      "Learn how FinanceTools helps people explore loan payments, savings, investments and everyday financial calculations.",
    type: "website",
  },
};

const principles = [
  {
    number: "01",
    title: "Clarity before complexity",
    description:
      "Financial calculations can involve unfamiliar terms and formulas. We aim to explain the numbers in a way that helps people understand what they are calculating and why the result matters.",
  },
  {
    number: "02",
    title: "Tools for practical questions",
    description:
      "From estimating a monthly loan payment to exploring the potential growth of an investment, our calculators are designed around everyday financial questions.",
  },
  {
    number: "03",
    title: "Useful information, not financial promises",
    description:
      "A calculator can help explain a possible outcome, but it cannot predict the future. We believe that clear assumptions and realistic expectations are an important part of financial education.",
  },
];

const categories = [
  {
    number: "01",
    title: "Loans and EMI",
    description:
      "Explore monthly loan repayments, total interest and repayment estimates for different borrowing scenarios.",
    examples: [
      "EMI Calculator",
      "Home Loan Calculator",
      "Personal Loan Calculator",
      "Car Loan Calculator",
    ],
  },
  {
    number: "02",
    title: "Banking and Deposits",
    description:
      "Understand how deposit amounts, interest rates and investment periods affect your savings.",
    examples: [
      "Fixed Deposit Calculator",
      "Recurring Deposit Calculator",
      "Simple Interest Calculator",
      "Compound Interest Calculator",
    ],
  },
  {
    number: "03",
    title: "Investments and Savings",
    description:
      "Explore hypothetical investment growth and estimate how regular contributions may develop over time.",
    examples: [
      "SIP Calculator",
      "Lumpsum Calculator",
      "CAGR Calculator",
      "PPF Calculator",
    ],
  },
  {
    number: "04",
    title: "Everyday Calculations",
    description:
      "Find practical tools for common numerical calculations that come up in personal and financial planning.",
    examples: [
      "GST Calculator",
      "Percentage Calculator",
      "Age Calculator",
      "Basic Calculator",
    ],
  },
];

const faqs = [
  {
    question: "What is FinanceTools?",
    answer:
      "FinanceTools is an online platform that brings together financial calculators and practical calculation tools. It helps users explore loan repayments, savings, investments and everyday financial calculations through simple inputs and understandable results.",
  },
  {
    question: "Who can use FinanceTools?",
    answer:
      "FinanceTools is designed for anyone who wants to understand a financial calculation. Students, salaried professionals, families, borrowers and people planning their savings may find the tools useful for exploring different financial scenarios.",
  },
  {
    question: "Are the financial calculators free to use?",
    answer:
      "The calculators available on FinanceTools are intended to be accessible without a paid subscription. Individual tools may have their own features and limitations, which should be checked on the relevant calculator page.",
  },
  {
    question: "How accurate are the calculator results?",
    answer:
      "Results are mathematical estimates based on the information entered and the assumptions used by each calculator. Actual bank charges, tax treatment, investment returns and other financial outcomes may differ. Check the relevant calculator page for its formula and assumptions.",
  },
  {
    question: "Does FinanceTools provide financial advice?",
    answer:
      "No. FinanceTools provides educational information and calculation tools. The results are not personalised financial, investment, tax or legal advice and should not be treated as a recommendation to make a particular financial decision.",
  },
  {
    question: "How can I report a calculation error?",
    answer:
      "If you notice a possible error or have a suggestion, please contact us through our Contact page. Include the calculator name, the values you entered and the result you expected so the issue can be investigated.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-800">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.35),_transparent_50%)]"
        />

        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-blue-200">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              About SmartMoneyTools
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Making financial calculations easier to understand
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              FinanceTools brings together practical online calculators that
              help you explore the numbers behind loans, savings, investments
              and everyday financial decisions.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/tools"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/20 transition hover:bg-blue-500"
              >
                Explore Financial Calculators  
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>

              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Visit Homepage
              </Link>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
        />
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Our purpose
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Better understanding starts with better calculations
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                Money decisions often begin with a simple question. How much
                will a loan cost every month? What could a regular savings
                contribution grow into? How much interest might a deposit
                generate over a certain period?
              </p>

              <p>
                Answering these questions can involve formulas, percentages,
                interest rates and calculations that are not always easy to
                work through manually. FinanceTools brings these calculations
                into one place so that users can explore different possibilities
                without starting from scratch.
              </p>

              <p>
                Our focus is on making financial mathematics approachable.
                Whether you are comparing borrowing scenarios, estimating
                savings growth or checking a percentage, the aim is to help you
                understand the numbers behind your decision.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-blue-50" />

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/50 sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-2xl text-blue-700">
                <span aria-hidden="true">∑</span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                A clearer way to explore your numbers
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Change an amount, adjust an interest rate or compare a different
                time period to see how the calculation changes.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Enter the details of your calculation",
                  "Explore the estimated result",
                  "Compare different possibilities",
                  "Understand the assumptions behind the numbers",
                ].map((step, index) => (
                  <div key={step} className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-700">
                      {index + 1}
                    </span>

                    <p className="pt-0.5 text-sm leading-6 text-slate-600">
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/tools"
                className="mt-7 inline-flex items-center text-sm font-semibold text-blue-700 transition hover:text-blue-900"
              >
                Browse all calculators
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Our approach
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
               SmartMoneyTools built around real questions 
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We want financial calculations to feel less complicated and
              more useful. Our approach focuses on clarity, practical use and
              helping people understand the assumptions behind their results.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {principles.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/60"
              >
                <span className="text-sm font-bold tracking-widest text-blue-600">
                  {item.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Explore our tools
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Financial calculators for different stages of life
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            From planning a loan to estimating the growth of savings, our
            collection covers a range of financial calculations. Choose a
            category based on the question you want to answer.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {categories.map((category) => (
            <article
              key={category.number}
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold tracking-widest text-blue-600">
                    CATEGORY {category.number}
                  </p>

                  <h3 className="mt-3 text-xl font-bold text-slate-900">
                    {category.title}
                  </h3>
                </div>

                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-lg text-blue-700 transition group-hover:bg-blue-100"
                >
                  →
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {category.description}
              </p>

              <ul className="mt-5 space-y-2">
                {category.examples.map((example) => (
                  <li
                    key={example}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <span
                      aria-hidden="true"
                      className="text-blue-600"
                    >
                      ✓
                    </span>
                    {example}
                  </li>
                ))}
              </ul>

              <Link
                href="/tools"
                className="mt-7 inline-flex items-center text-sm font-semibold text-blue-700 transition hover:text-blue-900"
              >
                Explore this collection
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/tools"
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            View All SmartMoneyTools Calculators
          </Link>
        </div>
      </section>

      {/* How We Approach Calculations */}
      <section className="bg-slate-950 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
              Understanding the numbers
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Every financial result depends on its assumptions
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-300">
              A calculation is only useful when you understand what goes into
              it. Interest rates, loan duration, contribution frequency and
              calculation methods can all affect the final result.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-300">
              FinanceTools aims to present financial estimates in a way that
              helps users understand the relationship between their inputs and
              the numbers they see.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-300">
              For details about a particular calculation, refer to the
              explanation and assumptions provided on its calculator page.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-9">
            <h3 className="text-xl font-bold">
              What can change a calculation?
            </h3>

            <div className="mt-7 space-y-5">
              {[
                {
                  title: "The amount",
                  description:
                    "The principal, deposit or regular contribution entered into the calculator.",
                },
                {
                  title: "The interest or return rate",
                  description:
                    "The rate used to estimate borrowing costs, savings interest or investment growth.",
                },
                {
                  title: "The time period",
                  description:
                    "The loan tenure, deposit duration or number of years used in the calculation.",
                },
                {
                  title: "The calculation method",
                  description:
                    "Compounding frequency, repayment structure and other assumptions used by the tool.",
                },
              ].map((item, index) => (
                <div key={item.title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-sm font-semibold text-blue-300">
                    {index + 1}
                  </span>

                  <div>
                    <h4 className="font-semibold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Use FinanceTools */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Who we serve
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Useful for everyday money questions
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Different people approach financial calculations for different
            reasons. FinanceTools provides a starting point for exploring
            numbers that matter in everyday life.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Students",
              description:
                "Learn about interest, percentages and the mathematics behind financial decisions.",
            },
            {
              title: "Working professionals",
              description:
                "Explore loan repayments, savings goals and possible investment outcomes.",
            },
            {
              title: "Families",
              description:
                "Compare financial scenarios while planning for household needs and future expenses.",
            },
            {
              title: "Business owners",
              description:
                "Use everyday numerical tools for percentage calculations, GST estimates and other basic financial questions.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <h3 className="text-lg font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Frequently asked questions
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              About FinanceTools
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Find answers to common questions about our financial calculators,
              their purpose and how to understand the results.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 bg-white p-5 open:border-blue-200 sm:p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                  <span>{faq.question}</span>

                  <span
                    aria-hidden="true"
                    className="shrink-0 text-xl text-blue-600 transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 px-6 py-12 text-center text-white shadow-xl shadow-blue-200/50 sm:px-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
            Start exploring
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Find the right calculator for your next financial question
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-blue-100">
            Explore our collection of online financial calculators and see how
            different amounts, interest rates and time periods can affect your
            results.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/tools"
              className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-blue-800 transition hover:bg-blue-50"
            >
              Explore All Tools
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t border-slate-200 bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700">
            Important financial information
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            SmartMoneyTools provides financial calculators and educational
            information for general informational purposes. Calculator results
            are estimates based on the values and assumptions used. They are
            not guaranteed outcomes or personalised financial, investment, tax
            or legal advice. Actual results may vary depending on applicable
            rates, financial institution policies, market conditions, taxes and
            individual circumstances. Please verify relevant details with the
            appropriate financial institution or qualified professional before
            making an important financial decision.
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            For information about how the website handles personal information,
            please review our{" "}
            <Link
              href="/privacy-policy"
              className="font-medium text-blue-700 underline underline-offset-4 hover:text-blue-900"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}