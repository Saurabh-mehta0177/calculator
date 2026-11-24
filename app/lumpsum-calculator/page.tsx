
import type { Metadata } from 'next'

import LumpsumCalculator from '@/features/invesment/Lumpsum Calculator/components/LumpsumCalculator'

export const metadata: Metadata = { title: 'Lumpsum Calculator – Calculate Mutual Fund Investment Returns',

description: 'Calculate your lumpsum investment returns, total invested amount, estimated maturity value and potential wealth growth with our free online Lumpsum Calculator.',

keywords: [ 'Lumpsum Calculator', 'Lumpsum Returns Calculator', 'Mutual Fund Lumpsum Calculator', 'Lumpsum Investment Calculator', 'Lumpsum Interest Calculator', 'Lumpsum Maturity Calculator', 'Investment Growth Calculator', 'Mutual Fund Returns Calculator', 'Lumpsum Wealth Calculator', ],

alternates: { canonical: '/lumpsum-calculator', },

openGraph: { title: 'Free Lumpsum Calculator | FinanceTools', description: 'Calculate lumpsum investment returns, estimated maturity amount and future wealth instantly with our free online calculator.', type: 'website', }, }

export default function LumpsumPage() { return <LumpsumCalculator /> }