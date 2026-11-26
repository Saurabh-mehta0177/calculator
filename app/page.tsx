
import type { Metadata } from 'next'

import MainLayout from '@/components/layout/MainLayout'

import Hero from '@/components/home/Hero'
import SearchTools from '@/components/home/SearchTools'
import Categories from '@/components/home/Categories'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import LatestGuides from '@/components/home/LatestGuides'
import FAQ from '@/components/home/FAQ'

import MoneyFuturePreview from "@/components/home/Money's Future"
import MoneyLeakDetectorPreview from '@/components/home/MoneyLeakDetectorPreview'

import FinancialRegretPreview from '@/components/home/FinancialRegretPreview'
import OneRupeeChallengePreview from '@/components/home/OneRupeeChallengePreview'

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://smartmoneytools.xyz'),

  title: {
    default: 'FinanceTools - Free Financial Calculators',
    template: '%s | FinanceTools',
  },

  description:
    'Calculate EMI, SIP, FD, RD, GST, loan payments and investment returns with free online financial calculators. Plan your money, track expenses and make smarter financial decisions.',

  applicationName: 'FinanceTools',

  keywords: [
    'financial calculators',
    'free financial calculators',
    'online financial calculator',
    'EMI calculator',
    'SIP calculator',
    'FD calculator',
    'RD calculator',
    'GST calculator',
    'loan calculator',
    'investment calculator',
    'savings calculator',
    'money management tools',
    'financial planning',
    'money saving calculator',
  ],

  authors: [
    {
      name: 'FinanceTools',
    },
  ],

  creator: 'FinanceTools',
  publisher: 'FinanceTools',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'FinanceTools - Free Financial Calculators',

    description:
      'Calculate, plan, save and grow. Explore free financial calculators for EMI, SIP, FD, RD, GST, investments and savings.',

    url: '/',

    siteName: 'FinanceTools',

    locale: 'en_IN',

    type: 'website',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FinanceTools - Smart Financial Calculator',
        type: 'image/png',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'FinanceTools - Free Financial Calculators',

    description:
      'Calculate, plan, save and grow with free online financial calculators.',

    images: {
      url: '/og-image.png',
      alt: 'FinanceTools - Smart Financial Calculator',
    },
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  category: 'finance',
}

// Home Page
export default function Home() {
  return (
    <MainLayout>
      <main className="space-y-12">

        {/* HERO SECTION */}
        <section aria-label="Welcome to FinanceTools">
          <Hero />
        </section>

        {/* SEARCH CALCULATORS */}
        <section aria-label="Search financial calculators">
          <SearchTools />
        </section>

        {/* CALCULATOR CATEGORIES */}
        <section aria-label="Financial calculator categories">
          <Categories />
        </section>

        {/* WHY CHOOSE US */}
        <section aria-label="Why choose FinanceTools">
          <WhyChooseUs />
        </section>

        {/* FINANCIAL GUIDES */}
        <section aria-label="Financial guides and articles">
          <LatestGuides />
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section aria-label="Frequently asked questions">
          <FAQ />
        </section>

        {/* MONEY'S FUTURE PREVIEW */}
        <section aria-label="Plan your financial future">
          <MoneyFuturePreview />
        </section>

        {/* MONEY LEAK DETECTOR PREVIEW */}
        <section aria-label="Money Leak Detector">
          <MoneyLeakDetectorPreview />
        </section>

        {/* FINANCIAL REGRET */}
        <section aria-label="Financial Regret Calculator">
          <FinancialRegretPreview />
        </section>

        {/* ONE RUPEE CHALLENGE */}
        <section aria-label="One Rupee Challenge">
          <OneRupeeChallengePreview />
        </section>

        {/* BOTTOM CTA */}
        <section
          aria-labelledby="financial-cta-title"
          className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-6 py-12 text-center shadow-sm dark:border-gray-800 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 sm:px-10 sm:py-16"
        >
          {/* Decorative Background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-500/10"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-500/10"
          />

          <div className="relative mx-auto max-w-3xl">

            <span className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:border-blue-900 dark:bg-gray-900/80 dark:text-blue-300">
              Your Personal Finance Partner
            </span>

            <h2
              id="financial-cta-title"
              className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl"
            >
              Plan Your Financial Future
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
              Use our free financial calculators to estimate investments,
              loan payments, savings and monthly expenses. Make informed
              financial decisions with confidence.
            </p>

            <a
              href="/tools"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition duration-300 hover:-translate-y-1 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Explore All Calculators
              <span aria-hidden="true">→</span>
            </a>

            <p className="mt-4 text-xs text-gray-500 dark:text-gray-500">
              Free tools. Smarter planning. Better financial decisions.
            </p>

          </div>
        </section>

      </main>
    </MainLayout>
  )
}