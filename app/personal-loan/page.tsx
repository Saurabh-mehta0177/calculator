
import type { Metadata } from 'next'

import PersonalLoanCalculator from '@/features/loans/personal-loan/components/PersonalLoanCalculator'

export const metadata: Metadata = { title: 'Personal Loan EMI Calculator – Calculate Monthly Loan EMI',

description: 'Calculate your personal loan EMI, monthly repayments, total interest payable and total repayment amount with our free online Personal Loan Calculator.',

keywords: [ 'Personal Loan Calculator', 'Personal Loan EMI Calculator', 'Personal Loan Interest Calculator', 'Monthly Personal Loan EMI', 'Personal Loan Repayment Calculator', 'Loan EMI Calculator', 'Personal Loan Monthly Payment Calculator', 'Personal Loan Amount Calculator', 'Personal Finance Calculator', ],

alternates: { canonical: '/personal-loan-calculator', },

openGraph: { title: 'Free Personal Loan EMI Calculator | FinanceTools', description: 'Calculate personal loan EMI, total interest and monthly repayments instantly with our free online calculator.', type: 'website', }, }

export default function PersonalLoanPage() { return <PersonalLoanCalculator /> }