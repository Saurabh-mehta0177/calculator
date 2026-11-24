
import type { Metadata } from 'next'

import GSTCalculator from '@/features/other-calculation/GST Calculator/components/GSTCalculator'

export const metadata: Metadata = {
  title: 'GST Calculator – Calculate GST Online in India',

  description:
    'Calculate GST online with our free GST calculator. Add or remove GST and calculate CGST, SGST, IGST and total GST amounts instantly.',

  keywords: [
    'GST Calculator',
    'GST Calculator India',
    'GST Calculation Online',
    'GST Inclusive Calculator',
    'GST Exclusive Calculator',
    'CGST Calculator',
    'SGST Calculator',
    'IGST Calculator',
    'GST Add Calculator',
    'GST Remove Calculator',
    'GST Tax Calculator',
  ],

  alternates: {
    canonical: '/gst-calculator',
  },

  openGraph: {
    title: 'Free GST Calculator Online | FinanceTools',
    description:
      'Calculate GST, add or remove GST and find CGST, SGST and IGST instantly with our free online GST calculator.',
    type: 'website',
  },
}

export default function GSTCalculatorPage() {
  return <GSTCalculator />
}