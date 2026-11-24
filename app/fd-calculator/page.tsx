
import type { Metadata } from 'next'

import FDCalculator from '@/features/banking/fd/components/FDCalculator'

export const metadata: Metadata = { title: 'FD Calculator – Fixed Deposit Maturity Calculator',

description: 'Calculate your fixed deposit maturity amount, total investment and interest earned with our free online FD calculator.',

keywords: [ 
  'FD Calculator',
  'Fixed Deposit Calculator', 
  'FD Interest Calculator', 
  'FD Maturity Calculator', 
  'Fixed Deposit Interest Calculator', ],

alternates: { canonical: '/fd-calculator', },

openGraph: { title: 'Free FD Calculator | FinanceTools',
  description: 'Calculate FD maturity amount and interest earned instantly.', type: 'website', }, }

export default function FDCalculatorPage() { return <FDCalculator /> }