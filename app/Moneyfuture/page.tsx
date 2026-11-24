

import type { Metadata } from 'next'

import MoneyTimeMachine from '@/components/tools/Money\'s Future/MoneyTimeMachine'

export const metadata: Metadata = {
  title: "Your Money's Future – 3 Possible Lives | FinanceTools",
  description:
    'Compare Dream Life, Normal Life and Tough Life financial scenarios. Explore your potential savings and wealth over 5 or 10 years.',
}

export default function MoneyTimeMachinePage() {
  return <MoneyTimeMachine />
}
