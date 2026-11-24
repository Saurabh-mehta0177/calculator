
import type { Metadata } from 'next'

import EMICalculator from '@/features/loans/emi/components/EMICalculator'

export const metadata: Metadata = { title: 'EMI Calculator – Free Loan EMI & Interest Calculator',

description: 'Calculate your monthly loan EMI, total interest payable and total repayment amount with our free online EMI Calculator. Get instant loan repayment estimates.',

keywords: [ 'EMI Calculator', 'Loan EMI Calculator', 'Monthly EMI Calculator', 'EMI Calculation', 'Loan Interest Calculator', 'Home Loan EMI Calculator', 'Personal Loan EMI Calculator', 'Car Loan EMI Calculator', 'Loan Repayment Calculator', ],

alternates: { canonical: '/emi-calculator', },

openGraph: { title: 'Free EMI Calculator | FinanceTools', description: 'Calculate monthly loan EMI, total interest and total repayment amount instantly with our free online EMI Calculator.', type: 'website', }, }

export default function EMIPage() { return <EMICalculator /> }