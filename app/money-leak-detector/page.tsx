
import type { Metadata } from 'next'

import MoneyLeakDetector from '@/components/tools/money-leak-detector/MoneyLeakDetector'

export const metadata: Metadata = {
  title: 'Money Leak Detector – Find Your Hidden Expenses | FinanceTools',

  description:
    'Discover where your money goes every month. Analyze expenses, identify saving opportunities and calculate your potential monthly and yearly savings.',

  keywords: [
    'Money Leak Detector',
    'Expense Analyzer',
    'Monthly Expense Calculator',
    'Money Saving Calculator',
    'Personal Finance Tool',
  ],

  alternates: {
    canonical: '/money-leak-detector',
  },
}

export default function MoneyLeakDetectorPage() {
  return <MoneyLeakDetector />
}
