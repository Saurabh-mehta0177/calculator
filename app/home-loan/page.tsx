
import type { Metadata } from 'next'

import HomeLoanCalculator from '@/features/loans/home-loan/components/HomeLoanCalculator'

export const metadata: Metadata = { title: 'Home Loan EMI Calculator – Calculate Monthly Home Loan EMI',

description: 'Calculate your home loan EMI, monthly repayments, total interest payable and total loan repayment amount with our free online Home Loan Calculator.',

keywords: [ 'Home Loan Calculator', 'Home Loan EMI Calculator', 'Home EMI Calculator', 'Monthly Home Loan EMI', 'Home Loan Interest Calculator', 'Housing Loan Calculator', 'Home Loan Repayment Calculator', 'Home Loan Monthly Payment Calculator', 'Mortgage EMI Calculator', ],

alternates: { canonical: '/home-loan-calculator', },

openGraph: { title: 'Free Home Loan EMI Calculator | FinanceTools', description: 'Calculate monthly home loan EMI, total interest and repayment amount instantly with our free online calculator.', type: 'website', }, }

export default function HomeLoanPage() { return <HomeLoanCalculator /> }