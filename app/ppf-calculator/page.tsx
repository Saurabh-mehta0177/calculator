
import type { Metadata } from 'next'

import PPFCalculator from '@/features/invesment/ppf-calculator/components/PPFCalculator'

export const metadata: Metadata = {
  title: 'PPF Calculator – Public Provident Fund Maturity Calculator',

  description:
    'Calculate PPF maturity amount, total investment, estimated interest earned and tax-free returns with our free online Public Provident Fund calculator.',

  keywords: [
    'PPF Calculator',
    'Public Provident Fund Calculator',
    'PPF Maturity Calculator',
    'PPF Interest Calculator',
    'PPF Returns Calculator',
    'PPF Investment Calculator',
    'PPF Interest Rate Calculator',
    'PPF Tax Saving Calculator',
  ],

  alternates: {
    canonical: '/ppf-calculator',
  },

  openGraph: {
    title: 'Free PPF Calculator | FinanceTools',
    description:
      'Calculate PPF maturity amount, investment returns and estimated interest earned instantly with our free online PPF calculator.',
    type: 'website',
  },
}

export default function PPFCalculatorPage() {
  return <PPFCalculator />
}