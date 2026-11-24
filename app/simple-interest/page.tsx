
import type { Metadata } from 'next'

import SimpleInterestCalculator from '@/features/banking/simple-interest/components/SimpleInterestCalculator'

export const metadata: Metadata = { title: 'Simple Interest Calculator – Calculate Interest & Returns',

description: 'Calculate simple interest, total interest earned and maturity amount using our free online Simple Interest Calculator. Get instant and accurate investment estimates.',

keywords: [ 'Simple Interest Calculator', 'Simple Interest Formula', 'Simple Interest Calculation', 'Simple Interest Calculator Online', 'Interest Calculator', 'Principal Interest Calculator', 'Simple Interest Rate Calculator', 'Investment Interest Calculator', ],

alternates: { canonical: '/simple-interest-calculator', },

openGraph: { title: 'Free Simple Interest Calculator | FinanceTools', description: 'Calculate simple interest, total investment value and interest earned instantly with our free online calculator.', type: 'website', }, }

export default function SimpleInterestPage() { return <SimpleInterestCalculator /> }