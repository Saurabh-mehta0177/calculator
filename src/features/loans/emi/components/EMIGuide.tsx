import Link from 'next/link'

const faqs = [
  {
    q: 'What is EMI?',
    a: 'EMI (Equated Monthly Installment) is a fixed amount you pay to a lender every month until your loan is fully repaid. It includes both principal and interest.',
  },
  {
    q: 'How is EMI calculated?',
    a: 'EMI is calculated using the standard reducing-balance formula based on loan amount, annual interest rate and tenure in months.',
  },
  {
    q: 'What is the EMI formula?',
    a: 'EMI = [P × R × (1+R)^N] / [(1+R)^N − 1], where P is principal (loan amount), R is monthly interest rate, and N is number of months.',
  },
  {
    q: 'What is the difference between flat rate and reducing balance rate?',
    a: 'In a flat rate, interest is charged on the full original loan amount for the whole tenure. In a reducing balance rate, interest is charged only on the outstanding principal, so it is usually cheaper for the same quoted rate.',
  },
  {
    q: 'What are the components of an EMI?',
    a: 'Every EMI has two parts: principal repayment and interest. In the early months the interest share is higher, and over time the principal share increases.',
  },
  {
    q: 'How does tenure affect EMI?',
    a: 'A longer tenure lowers your monthly EMI but increases total interest paid. A shorter tenure means a higher EMI but lower total interest.',
  },
  {
    q: 'How does interest rate affect EMI?',
    a: 'A higher interest rate increases both your EMI and the total interest paid. Even a small difference of 0.5% can change the total cost noticeably on long loans.',
  },
  {
    q: 'Can I prepay my loan and reduce EMI?',
    a: 'Most lenders allow part-prepayment. You can usually choose to reduce either your EMI or your tenure after prepayment. Some lenders may charge a prepayment fee, especially on fixed-rate loans.',
  },
  {
    q: 'What happens if I miss an EMI?',
    a: 'Missing an EMI can lead to late payment charges, a drop in your credit score and, if it continues, legal action by the lender. Contact your lender early if you expect difficulty.',
  },
  {
    q: 'What is an EMI amortization schedule?',
    a: 'An amortization schedule is a month-by-month table showing how much of each EMI goes towards principal and interest, and the remaining balance after each payment.',
  },
  {
    q: 'Is EMI the same for all types of loans?',
    a: 'The formula is the same for home, car, personal and education loans. The EMI differs because loan amount, interest rate and tenure differ for each loan type.',
  },
  {
    q: 'What is a good EMI-to-income ratio?',
    a: 'Many financial planners suggest keeping total EMIs within about 40% of your monthly income so you still have room for expenses and savings. Lenders also check this ratio (FOIR) before approving a loan.',
  },
  {
    q: 'Do floating rate loans change my EMI?',
    a: 'With floating rate loans, the interest rate changes with market benchmarks. Lenders may adjust either your EMI or your tenure when the rate changes.',
  },
  {
    q: 'Are there extra charges apart from EMI?',
    a: 'Yes. Processing fees, documentation charges, insurance premiums, late fees and prepayment or foreclosure charges may apply. Compare the total cost, not just the EMI.',
  },
  {
    q: 'How can I calculate my EMI quickly?',
    a: 'Enter loan amount, interest rate and tenure in our EMI Calculator to get your monthly EMI, total interest and overall repayment instantly.',
  },
]

const advantages = [
  'Fixed monthly payments make budgeting easier.',
  'Lets you afford big purchases without paying the full amount upfront.',
  'Flexible tenure options to match your monthly cash flow.',
  'Easy to plan and compare loans using an EMI calculator.',
  'Timely EMI payments build a strong credit history.',
  'Works the same way across home, car, personal and education loans.',
]

const disadvantages = [
  'Interest increases the total cost of what you buy.',
  'Longer tenure lowers EMI but increases total interest paid.',
  'Missed or late EMIs attract penalties and hurt your credit score.',
  'Processing fees and other charges may apply.',
  'A high EMI burden can strain your monthly budget.',
]

const sections = [
  ['What is EMI?', '#what-is-emi'],
  ['How It Works', '#how-it-works'],
  ['EMI Formula', '#emi-formula'],
  ['Calculation Example', '#example'],
  ['Benefits', '#benefits'],
  ['Limitations', '#limitations'],
  ['Tips to Reduce EMI', '#tips'],
  ['Who Should Use It?', '#who-should-use'],
  ['FAQs', '#faqs'],
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

function GuideSection({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className="emi-guide-card scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8"
    >
      <p className="text-xs font-extrabold uppercase tracking-[.18em] text-indigo-600 dark:text-indigo-400">
        {eyebrow}
      </p>

      <h2 className="mt-2 text-2xl font-black text-slate-900 dark:text-white sm:text-3xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          {description}
        </p>
      )}

      <div className="mt-6">{children}</div>
    </section>
  )
}

export default function EMIGuide() {
  return (
    <main className="emi-guide mx-auto max-w-7xl space-y-7 px-4 py-7 text-slate-900 dark:text-white sm:px-6 lg:px-8">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
        }}
      />

      {/* HERO */}
      <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 via-blue-600 to-cyan-700 p-7 text-white shadow-xl sm:p-11">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="relative max-w-3xl">
          <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold">
            FINANCE KNOWLEDGE CENTER
          </span>

          <h1 className="mt-6 text-3xl font-black leading-tight sm:text-5xl">
            EMI Complete Guide
          </h1>

          <p className="mt-5 text-sm leading-7 text-indigo-50 sm:text-base">
            Learn everything about EMI — formula, how it is calculated, how
            interest rate and tenure affect it, tips to reduce cost and
            frequently asked questions.
          </p>

          <Link
            href="/emi-calculator"
            className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-extrabold text-indigo-800 shadow-lg transition hover:-translate-y-1"
          >
            Calculate EMI →
          </Link>
        </div>
      </header>

      {/* CONTENT NAVIGATION */}
      <nav className="emi-guide-card rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-7">
        <h2 className="text-lg font-extrabold">On This Page</h2>

        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-indigo-950"
            >
              → {label}
            </a>
          ))}
        </div>
      </nav>

      {/* WHAT IS EMI */}
      <GuideSection
        id="what-is-emi"
        eyebrow="Introduction"
        title="What is EMI?"
        description="EMI stands for Equated Monthly Installment. It is a fixed amount you pay to your lender every month to repay a loan along with the interest charged on it."
      >
        <p className="text-sm leading-8 text-slate-600 dark:text-slate-300">
          Each EMI is made up of a principal part and an interest part. In the
          early months a larger share goes towards interest, and as the loan
          reduces, a larger share goes towards the principal. The total amount
          you pay stays the same every month until the loan is closed.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            ['💰', 'Loan Amount', 'The principal amount you borrow from the lender.'],
            ['📅', 'Fixed Tenure', 'Choose a repayment period that fits your budget.'],
            ['💳', 'Monthly Payment', 'Repay through predictable monthly installments.'],
          ].map(([icon, title, desc]) => (
            <div key={title} className="rounded-2xl bg-indigo-50 p-5 dark:bg-indigo-950/30">
              <span className="text-3xl">{icon}</span>
              <h3 className="mt-3 font-extrabold text-indigo-800 dark:text-indigo-300">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </GuideSection>

      {/* HOW IT WORKS */}
      <GuideSection
        id="how-it-works"
        eyebrow="Working Process"
        title="How Does EMI Work?"
        description="An EMI-based loan follows a simple process from borrowing to final repayment."
      >
        <div className="space-y-4">
          {[
            ['01', 'Borrow the Loan', 'Get the loan amount approved at an agreed interest rate and tenure.'],
            ['02', 'EMI Gets Fixed', 'The lender calculates a fixed monthly EMI using the standard formula.'],
            ['03', 'Pay Every Month', 'Pay the EMI on the due date through auto-debit or other methods.'],
            ['04', 'Interest Reduces', 'As principal reduces, the interest part of each EMI becomes smaller.'],
            ['05', 'Loan Closes', 'After the last EMI, the loan is fully repaid and closed.'],
          ].map(([number, title, desc]) => (
            <div key={number} className="flex gap-4 rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-indigo-100 font-black text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                {number}
              </span>
              <div>
                <h3 className="font-extrabold">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </GuideSection>

      {/* EMI FORMULA */}
      <GuideSection
        id="emi-formula"
        eyebrow="Mathematics"
        title="EMI Formula"
        description="EMI is calculated using the standard reducing-balance formula."
      >
        <div className="rounded-2xl bg-slate-950 p-5 text-white sm:p-7">
          <p className="text-xs font-bold uppercase tracking-wider text-indigo-400">
            Standard EMI Formula
          </p>

          <div className="mt-5 overflow-x-auto">
            <p className="min-w-max font-mono text-xl leading-10 sm:text-2xl">
              EMI = [P × R × (1+R)<sup>N</sup>] / [(1+R)<sup>N</sup> − 1]
            </p>
          </div>
        </div>

        <h3 className="mt-7 text-lg font-extrabold">Formula Variables</h3>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[300px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="px-3 py-3">Symbol</th>
                <th className="px-3 py-3">Meaning</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['P', 'Principal (Loan Amount)'],
                ['R', 'Monthly interest rate (Annual rate ÷ 12 ÷ 100)'],
                ['N', 'Loan tenure in months (Years × 12)'],
                ['EMI', 'Equated Monthly Installment'],
              ].map(([symbol, meaning]) => (
                <tr key={symbol} className="border-b border-slate-100 dark:border-slate-800">
                  <td className="px-3 py-3 font-bold text-indigo-700 dark:text-indigo-300">{symbol}</td>
                  <td className="px-3 py-3 text-slate-600 dark:text-slate-300">{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/30">
          <h3 className="font-extrabold text-amber-800 dark:text-amber-300">
            Important Note
          </h3>
          <p className="mt-2 text-sm leading-7 text-amber-900 dark:text-amber-200">
            Actual EMI may differ slightly due to bank rounding, processing fees,
            insurance or other charges. Always confirm the final offer with the lender.
          </p>
        </div>
      </GuideSection>

      {/* EXAMPLE */}
      <GuideSection
        id="example"
        eyebrow="Practical Example"
        title="EMI Calculation Example"
        description="Suppose the loan amount is ₹10,00,000, interest rate is 10% p.a. and tenure is 5 years."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Loan Amount', '₹10,00,000'],
            ['Interest Rate', '10% p.a.'],
            ['Tenure', '5 Years (60 months)'],
            ['Monthly Rate (R)', '0.8333%'],
          ].map(([title, value]) => (
            <div key={title} className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">{title}</p>
              <p className="mt-2 text-xl font-black">{value}</p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
          Monthly rate R = 10 ÷ 12 ÷ 100 = 0.008333 and N = 5 × 12 = 60 months.
          Using the formula, the approximate EMI is around ₹21,250 per month
          (exact value depends on rounding). Total payment is roughly
          ₹12.75 lakh, which means about ₹2.75 lakh goes towards interest.
          Use the calculator to check exact figures.
        </p>

        <Link
          href="/emi-calculator"
          className="mt-5 inline-flex rounded-xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white hover:bg-indigo-700"
        >
          Calculate Your EMI →
        </Link>
      </GuideSection>

      {/* BENEFITS */}
      <GuideSection
        id="benefits"
        eyebrow="Advantages"
        title="Benefits of EMI"
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {advantages.map((item) => (
            <div key={item} className="flex gap-3 rounded-xl bg-indigo-50 p-4 dark:bg-indigo-950/30">
              <span className="font-black text-indigo-600">✓</span>
              <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </GuideSection>

      {/* LIMITATIONS */}
      <GuideSection
        id="limitations"
        eyebrow="Things To Consider"
        title="Limitations of EMI"
      >
        <div className="space-y-3">
          {disadvantages.map((item) => (
            <div key={item} className="flex gap-3 rounded-xl bg-rose-50 p-4 dark:bg-rose-950/20">
              <span className="font-bold text-rose-600">!</span>
              <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </GuideSection>

      {/* TIPS */}
      <GuideSection
        id="tips"
        eyebrow="Money Saving"
        title="Tips to Reduce EMI and Total Interest"
      >
        <div className="space-y-3">
          {[
            'Make a higher down payment to lower the loan principal.',
            'Choose a shorter tenure if your budget allows — total interest drops.',
            'Compare interest rates and processing fees across lenders.',
            'Maintain a good credit score to get better rate offers.',
            'Use part-prepayments whenever you have extra funds.',
            'Consider a balance transfer if another lender offers a much lower rate.',
          ].map((item) => (
            <div key={item} className="flex gap-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
              <span className="font-black text-indigo-600">→</span>
              <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </GuideSection>

      {/* WHO SHOULD USE */}
      <GuideSection
        id="who-should-use"
        eyebrow="Suitability"
        title="Who Should Use an EMI Calculator?"
      >
        <p className="text-sm leading-8 text-slate-600 dark:text-slate-300">
          Anyone planning to take a home loan, car loan, personal loan or
          education loan should calculate EMI beforehand. It helps you check
          whether the monthly payment fits comfortably within your income,
          compare different tenures and interest rates, and choose the loan
          that costs you the least overall.
        </p>
      </GuideSection>

      {/* FAQ */}
      <GuideSection
        id="faqs"
        eyebrow="Help Center"
        title="Frequently Asked Questions About EMI"
        description="Find answers to common questions about EMI calculation, interest rate, tenure, prepayment and more."
      >
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.q}
              className="emi-guide-faq group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/70"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 text-sm font-bold text-slate-800 dark:text-slate-100 sm:p-5">
                <span>{faq.q}</span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-indigo-700 shadow-sm transition group-open:rotate-45 dark:bg-slate-700 dark:text-indigo-300">
                  +
                </span>
              </summary>

              <div className="border-t border-slate-200 px-4 py-4 text-sm leading-7 text-slate-600 dark:border-slate-700 dark:text-slate-300 sm:px-5">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </GuideSection>

      {/* CTA */}
      <section className="rounded-3xl bg-gradient-to-br from-indigo-700 to-blue-600 p-7 text-center text-white shadow-xl sm:p-10">
        <h2 className="text-2xl font-black sm:text-3xl">
          Ready to Calculate Your EMI?
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-indigo-50">
          Enter loan amount, interest rate and tenure to get your monthly
          EMI, total interest and overall repayment instantly.
        </p>

        <Link
          href="/emi-calculator"
          className="mt-6 inline-flex rounded-xl bg-white px-7 py-3.5 text-sm font-extrabold text-indigo-800 shadow-lg transition hover:-translate-y-1"
        >
          Open EMI Calculator →
        </Link>
      </section>

    </main>
  )
}