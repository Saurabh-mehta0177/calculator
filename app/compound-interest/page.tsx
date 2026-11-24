
import type { Metadata } from 'next'

import CompoundInterestCalculator from '@/features/banking/compound-interest/components/CompoundInterestCalculator'

export const metadata: Metadata = { title: 'Compound Interest Calculator – Calculate Compound Interest & Returns',

description: 'Calculate compound interest, total interest earned and maturity amount with our free online Compound Interest Calculator. Estimate your investment growth instantly.',

keywords: [ 'Compound Interest Calculator', 'Compound Interest Formula', 'Compound Interest Calculator Online', 'Compound Interest Calculation', 'Monthly Compound Interest Calculator', 'Annual Compound Interest Calculator', 'Investment Growth Calculator', 'Compound Interest Rate Calculator', ],

alternates: { canonical: '/compound-interest-calculator', },

openGraph: { title: 'Free Compound Interest Calculator | FinanceTools', description: 'Calculate compound interest, investment growth and final maturity amount instantly with our free online calculator.', type: 'website', }, }

export default function CompoundInterestPage() { return <CompoundInterestCalculator /> }