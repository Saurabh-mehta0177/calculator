
import type { Metadata } from 'next'

import FinancialRegretCalculator from
  '@/components/tools/financial-regret/FinancialRegretCalculator'

export const metadata: Metadata = {
  title: 'Financial Regret Calculator - What If You Started Saving Earlier?',

  description:
    'Calculate how much wealth you could have built by saving monthly in the past. Estimate hypothetical investment contributions, returns and future corpus.',

  keywords: [
    'Financial Regret Calculator',
    'Investment Calculator',
    'Monthly Savings Calculator',
    'Hypothetical Investment Calculator',
    'Wealth Growth Calculator',
    'SIP Calculator',
    'Investment Returns Calculator',
  ],

  alternates: {
    canonical: '/financial-regret',
  },

  openGraph: {
    title: 'Financial Regret Calculator | FinanceTools',
    description:
      'Discover how your hypothetical monthly savings could have grown over time.',
    type: 'website',
  },
}

export default function FinancialRegretPage() {
  return <FinancialRegretCalculator />
}
