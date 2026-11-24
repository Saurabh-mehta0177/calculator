
import type { Metadata } from 'next'
import RDCalculator from '@/features/banking/rd/components/RDCalculator'

export const metadata: Metadata = {
  title: 'RD Calculator – Recurring Deposit Maturity Calculator',

  description:
    'Calculate your recurring deposit maturity amount, total investment and interest earned with our free online RD calculator.',

  keywords: [
    'RD Calculator',
    'Recurring Deposit Calculator',
    'RD Interest Calculator',
    'RD Maturity Calculator',
    'Monthly Deposit Calculator',
  ],

  alternates: {
    canonical: '/rd-calculator',
  },

  openGraph: {
    title: 'Free RD Calculator | FinanceTools',
    description:
      'Calculate RD maturity amount and interest earned instantly.',
    type: 'website',
  },
}

export default function RDCalculatorPage() {
  return <RDCalculator />
}
