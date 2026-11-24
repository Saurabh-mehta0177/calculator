
'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'What is a Financial Regret Calculator?',
    answer:
      'A Financial Regret Calculator estimates how much wealth you could potentially have accumulated if you had started saving and investing earlier.',
  },
  {
    question: 'Are the estimated returns guaranteed?',
    answer:
      'No. The calculator uses an assumed annual return for illustration. Actual investment returns depend on market conditions and are never guaranteed.',
  },
  {
    question: 'How does starting early help?',
    answer:
      'Starting early gives your investments more time to compound. Even small regular contributions may grow significantly over a longer period.',
  },
  {
    question: 'Can I change the investment currency?',
    answer:
      'Yes. You can select a supported currency in the calculator. Changing the currency symbol does not automatically convert the investment amount using exchange rates.',
  },
  {
    question: 'Does this calculator use historical market data?',
    answer:
      'No. It provides hypothetical projections based on your selected monthly savings, investment duration and assumed annual return.',
  },
]

const steps = [
  {
    number: '01',
    icon: '💰',
    title: 'Enter Monthly Savings',
    description:
      'Choose the amount you could have saved and invested every month.',
  },
  {
    number: '02',
    icon: '⏳',
    title: 'Select Investment Duration',
    description:
      'Decide how many years earlier you could have started your investment journey.',
  },
  {
    number: '03',
    icon: '📈',
    title: 'Choose Annual Return',
    description:
      'Enter a hypothetical annual return to explore different investment scenarios.',
  },
  {
    number: '04',
    icon: '🏆',
    title: 'Explore Your Results',
    description:
      'See your total contributions, estimated returns and potential investment corpus.',
  },
]

export default function RegretGuide() {
  const [activeFaq, setActiveFaq] = useState(0)

  return (
    <section className="mt-12 space-y-8">

      {/* INTRODUCTION */}

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
          📚 Investment Learning Guide
        </div>

        <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
          Understanding Financial Regret
        </h2>

        <p className="mt-4 text-sm leading-7 text-slate-600">
          Have you ever wondered how much wealth you could have
          accumulated if you had started saving and investing
          earlier? Financial regret is the feeling of wishing
          you had made better financial decisions in the past.
        </p>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          The Financial Regret Calculator helps you explore
          hypothetical investment scenarios and understand
          how regular savings, time and compounding can
          influence long-term wealth creation.
        </p>

      </div>

      {/* WHY START EARLY */}

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 p-6 text-white sm:p-9">

        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative">

          <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
            The Power Of Time
          </span>

          <h2 className="mt-3 text-2xl font-black sm:text-3xl">
            Why Starting Early Matters
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-100">
            Time is an important factor in long-term investing.
            Starting earlier can give your contributions more
            time to potentially grow through compounding.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-3">

            {[
              {
                icon: '⏳',
                title: 'More Time',
                text: 'Give investments a longer period to grow.',
              },
              {
                icon: '📈',
                title: 'Compounding',
                text: 'Potentially earn returns on accumulated returns.',
              },
              {
                icon: '🎯',
                title: 'Consistency',
                text: 'Build a regular saving and investing habit.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm"
              >
                <span className="text-3xl">{item.icon}</span>

                <h3 className="mt-4 font-extrabold">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-blue-100">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>

      {/* HOW TO USE */}

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
          Simple Process
        </span>

        <h2 className="mt-2 text-2xl font-black text-slate-900">
          How To Use This Calculator
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Follow these four simple steps to explore your
          hypothetical wealth projection.
        </p>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">

          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-2xl border border-slate-100 bg-slate-50/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-md"
            >

              <div className="flex items-center justify-between">

                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
                  {step.icon}
                </span>

                <span className="text-2xl font-black text-slate-200 transition group-hover:text-blue-200">
                  {step.number}
                </span>

              </div>

              <h3 className="mt-5 font-extrabold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-2 text-xs leading-6 text-slate-500">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </div>

      {/* COMPOUNDING EXPLANATION */}

      <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-6 sm:p-8">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
            📊
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              Investment Concept
            </span>

            <h2 className="text-xl font-black text-slate-900 sm:text-2xl">
              Understanding Compound Growth
            </h2>
          </div>

        </div>

        <p className="mt-5 text-sm leading-7 text-slate-600">
          Compounding occurs when investment returns remain
          invested and can generate additional returns over
          time. This can create a snowball effect, especially
          over longer investment periods.
        </p>

        <div className="mt-6 rounded-2xl border border-emerald-100 bg-white p-5">

          <h3 className="font-bold text-slate-800">
            Compound Interest Formula
          </h3>

          <div className="mt-4 overflow-x-auto rounded-xl bg-slate-50 p-5 text-center">
            <p className="whitespace-nowrap text-xl font-black text-emerald-700 sm:text-2xl">
              A = P (1 + r/n)ⁿᵗ
            </p>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">

            {[
              ['A', 'Final amount'],
              ['P', 'Initial principal'],
              ['r', 'Annual interest rate'],
              ['n', 'Compounding frequency per year'],
              ['t', 'Time in years'],
            ].map(([symbol, description]) => (
              <div
                key={symbol}
                className="flex items-center gap-3"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 font-black text-emerald-700">
                  {symbol}
                </span>

                <span className="text-xs text-slate-600">
                  {description}
                </span>
              </div>
            ))}

          </div>

          <p className="mt-4 text-xs leading-6 text-slate-400">
            Note: This is the general compound interest
            formula. Actual calculator results depend on
            the contribution and compounding method used
            by the calculator.
          </p>

        </div>

      </div>

      {/* IMPORTANT BENEFITS */}

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
          Smart Financial Habits
        </span>

        <h2 className="mt-2 text-2xl font-black text-slate-900">
          Benefits Of Starting Your Savings Journey Early
        </h2>

        <div className="mt-7 space-y-5">

          {[
            'Develop a disciplined monthly saving habit.',
            'Give your investments more time to potentially compound.',
            'Build long-term financial awareness and confidence.',
            'Explore different investment scenarios before making decisions.',
            'Work towards your long-term financial goals.',
          ].map((item, index) => (
            <div
              key={item}
              className="flex items-start gap-3"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-sm font-bold text-emerald-600">
                {index + 1}
              </span>

              <p className="pt-1 text-sm leading-6 text-slate-600">
                {item}
              </p>
            </div>
          ))}

        </div>

      </div>

      {/* FAQ */}

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
          Frequently Asked Questions
        </span>

        <h2 className="mt-2 text-2xl font-black text-slate-900">
          Financial Regret Calculator FAQs
        </h2>

        <div className="mt-7 space-y-3">

          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-blue-200 bg-blue-50/50'
                    : 'border-slate-200 bg-white'
                }`}
              >

                <button
                  type="button"
                  onClick={() =>
                    setActiveFaq(isOpen ? -1 : index)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >

                  <span className="text-sm font-bold leading-6 text-slate-800">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-lg transition ${
                      isOpen
                        ? 'rotate-45 bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    +
                  </span>

                </button>

                {isOpen && (
                  <div className="px-5 pb-5">
                    <p className="border-t border-blue-100 pt-4 text-sm leading-7 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                )}

              </div>
            )
          })}

        </div>

      </div>

      {/* FINAL CTA */}

      <div className="rounded-3xl bg-gradient-to-br from-blue-700 via-indigo-800 to-slate-950 p-7 text-center text-white sm:p-10">

        <div className="text-4xl">🚀</div>

        <h2 className="mt-4 text-2xl font-black sm:text-3xl">
          The Best Time To Start Is Today
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-blue-100">
          You cannot change your financial past, but you can
          take meaningful steps towards a better financial
          future. Start building consistent saving habits today.
        </p>

      </div>

    </section>
  )
}
