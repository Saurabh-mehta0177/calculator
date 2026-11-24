
import type { Metadata } from 'next'

import AgeCalculator from '@/features/other-calculation/age-calculation/components/AgeCalculator'

export const metadata: Metadata = {
  title: 'Age Calculator – Calculate Your Exact Age Online',

  description:
    'Calculate your exact age in years, months and days. Find total days lived, next birthday and day of birth with our free online age calculator.',

  keywords: [
    'Age Calculator',
    'Calculate Age Online',
    'Exact Age Calculator',
    'Date of Birth Calculator',
    'Age in Years Months Days',
    'Birthday Calculator',
    'Next Birthday Calculator',
    'Days Lived Calculator',
    'Age Difference Calculator',
    'DOB Calculator',
  ],

  alternates: {
    canonical: '/age-calculator',
  },

  openGraph: {
    title: 'Free Age Calculator Online | FinanceTools',
    description:
      'Calculate your exact age in years, months and days. Find your next birthday and total days lived instantly.',
    type: 'website',
  },
}

export default function AgeCalculatorPage() {
  return <AgeCalculator />
}