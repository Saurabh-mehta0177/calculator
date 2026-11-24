
import type { Metadata } from 'next'

import CarLoanCalculator from '@/features/loans/car-loan/components/CarLoanCalculator'

export const metadata: Metadata = { title: 'Car Loan EMI Calculator – Calculate Monthly Car Loan EMI',

description: 'Calculate your car loan EMI, monthly repayments, down payment, total interest and loan repayment amount with our free online Car Loan Calculator.',

keywords: [ 'Car Loan Calculator', 'Car Loan EMI Calculator', 'Car EMI Calculator', 'Car Loan Interest Calculator', 'Monthly Car Loan Calculator', 'Car Loan Repayment Calculator', 'Car Down Payment Calculator', 'Vehicle Loan Calculator', ],

alternates: { canonical: '/car-loan-calculator', },

openGraph: { title: 'Free Car Loan EMI Calculator | FinanceTools', description: 'Calculate monthly car loan EMI, total interest and repayment amount instantly with our free online calculator.', type: 'website', }, }

export default function CarLoanPage() { return <CarLoanCalculator /> }