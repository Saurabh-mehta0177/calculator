
import type { Metadata } from 'next'

import CAGRCalculator from '@/features/invesment/cagr-calculator/components/CAGRCalculator'

export const metadata: Metadata = {
  title: 'CAGR Calculator – Compound Annual Growth Rate Calculator',

  description:
    'Calculate compound annual growth rate (CAGR), investment growth and annualized returns with our free online CAGR calculator.',

  keywords: [
    'CAGR Calculator',
    'Compound Annual Growth Rate Calculator',
    'CAGR Formula',
    'Investment Growth Calculator',
    'Annualized Return Calculator',
    'CAGR Investment Calculator',
  ],

  alternates: {
    canonical: '/cagr-calculator',
  },

  openGraph: {
    title: 'Free CAGR Calculator | FinanceTools',
    description:
      'Calculate CAGR, annualized investment returns and compound annual growth rate instantly with our free online calculator.',
    type: 'website',
  },
}

export default function CAGRCalculatorPage() {
  return <CAGRCalculator />
}