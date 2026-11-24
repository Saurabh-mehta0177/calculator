
import type { Metadata } from 'next'

import MainLayout from '@/components/layout/MainLayout'

import Hero from '@/components/home/Hero'
import SearchTools from '@/components/home/SearchTools'
import Categories from '@/components/home/Categories'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import LatestGuides from '@/components/home/LatestGuides'
import FAQ from '@/components/home/FAQ'

import MoneyFuturePreview from '@/components/home/Money\'s Future'
//import MoneyFuturePreview from '@/components/home/MoneyFuturePreview'
import MoneyLeakDetectorPreview from '@/components/home/MoneyLeakDetectorPreview'

import FinancialRegretPreview from '@/components/home/FinancialRegretPreview'
import OneRupeeChallengePreview from '@/components/home/OneRupeeChallengePreview'

export const metadata: Metadata = {
  title: 'Free Financial Calculators - EMI, FD, SIP, RD & GST Calculator',

  description:
    'Use free online financial calculators to calculate EMI, fixed deposit interest, recurring deposits, SIP returns, GST and loan payments. Make smarter financial decisions.',

  keywords: [
    'financial calculators',
    'EMI calculator',
    'FD calculator',
    'RD calculator',
    'SIP calculator',
    'GST calculator',
    'loan calculator',
    'free online calculators',
  ],

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'Free Financial Calculators',
    description:
      'Calculate EMI, FD, RD, SIP, GST and loan payments using free online financial tools.',
    type: 'website',
  },
}

export default function Home() {
  return (
    <MainLayout>

      <div className="space-y-12">

        {/* HERO SECTION */}
        <Hero />

        {/* SEARCH CALCULATORS */}
        <SearchTools />

        {/* CALCULATOR CATEGORIES */}
        <Categories />

        {/* WHY CHOOSE US */}
        <WhyChooseUs />

        {/* FINANCIAL GUIDES */}
        <LatestGuides />

        {/* FREQUENTLY ASKED QUESTIONS */}
        <FAQ />

        {/* MONEY'S FUTURE PREVIEW */}
        <MoneyFuturePreview />

        {/* MONEY LEAK DETECTOR PREVIEW */}
        <MoneyLeakDetectorPreview />

        {/* FINANCIAL REGRET */}
        <FinancialRegretPreview />

        {/* ONE RUPEE CHALLENGE */}
        <OneRupeeChallengePreview />

        {/* BOTTOM CTA */}
        <section className="rounded-2xl border border-gray-200 bg-gray-100 px-6 py-10 text-center dark:border-gray-800 dark:bg-gray-900 sm:px-10">

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Plan Your Financial Future
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-600 dark:text-gray-400">
            Use our free financial calculators to estimate
            investments, loan payments and savings.
            Make informed financial decisions with confidence.
          </p>

          <a
            href="/tools"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 hover:bg-blue-700"
          >
            Explore All Calculators →
          </a>

        </section>

      </div>

    </MainLayout>
  )
}
