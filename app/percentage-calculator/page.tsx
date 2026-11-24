
import type { Metadata } from 'next'

import PercentageCalculator from '@/features/other-calculation/Percentage Clculator/components/PercentageCalculator'

export const metadata: Metadata = {
  title: 'Percentage Calculator – Calculate Percentage Online',

  description:
    'Calculate percentages, percentage increase, percentage decrease and percentage difference instantly with our free online percentage calculator.',

  keywords: [
    'Percentage Calculator',
    'Percentage Calculator Online',
    'Calculate Percentage',
    'Percentage Increase Calculator',
    'Percentage Decrease Calculator',
    'Percentage Difference Calculator',
    'Percent Calculator',
    'Percentage Change Calculator',
    'Percentage Formula',
  ],

  alternates: {
    canonical: '/percentage-calculator',
  },

  openGraph: {
    title: 'Free Percentage Calculator Online | FinanceTools',
    description:
      'Calculate percentages, percentage increase, decrease and percentage difference instantly with our free online calculator.',
    type: 'website',
  },
}

export default function PercentageCalculatorPage() {
  return <PercentageCalculator />
}