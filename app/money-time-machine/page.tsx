
import type { Metadata } from 'next'
import MoneyTimeMachine from '@/components/tools/money-time-machine/MoneyTimeMachine'

export const metadata: Metadata = {
  title: 'Money Time Machine - Predict Your Future Savings & Wealth',

  description:
    'See how your savings could grow in 5, 10 or 20 years. Use our Money Time Machine to simulate salary growth, daily savings and future wealth.',

  alternates: {
    canonical: '/money-time-machine',
  },

  openGraph: {
    title: 'Money Time Machine - Explore Your Financial Future',
    description:
      'Simulate your future savings and compare different financial decisions with our interactive money calculator.',
    type: 'website',
  },
}

export default function MoneyTimeMachinePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:py-12">

      <MoneyTimeMachine />

      <section className="mt-12 space-y-5">

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          How Does the Money Time Machine Work?
        </h2>

        <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
          The Money Time Machine uses your current income, monthly
          expenses, savings and estimated investment returns to
          project your potential future financial position.
        </p>

        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          How Much Can You Save in 10 Years?
        </h2>

        <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
          Your potential savings depend on how much you save,
          how regularly you invest and the returns you earn.
          Use different assumptions to understand how your
          financial future could change.
        </p>

        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Why Is Financial Planning Important?
        </h2>

        <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
          Financial planning helps you understand your income,
          expenses, savings goals and long-term financial needs.
          Comparing different scenarios can help you make
          more informed decisions.
        </p>

      </section>

    </main>
  )
}
