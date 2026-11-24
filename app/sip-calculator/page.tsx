
import type { Metadata } from 'next'

import SIPCalculator from '@/features/invesment/sip/components/SIPCalculator'

export const metadata: Metadata = { title: 'SIP Calculator – Calculate SIP Returns & Mutual Fund Growth',

description: 'Calculate your monthly SIP returns, total invested amount, estimated wealth and potential investment growth with our free online SIP Calculator.',

keywords: [ 'SIP Calculator', 'SIP Returns Calculator', 'Mutual Fund SIP Calculator', 'Monthly SIP Calculator', 'SIP Investment Calculator', 'SIP Interest Calculator', 'SIP Maturity Calculator', 'SIP Wealth Calculator', 'Systematic Investment Plan Calculator', ],

alternates: { canonical: '/sip-calculator', },

openGraph: { title: 'Free SIP Calculator | FinanceTools', description: 'Calculate SIP returns, total investment and estimated future wealth instantly with our free online SIP Calculator.', type: 'website', }, }

export default function SIPPage() { return <SIPCalculator /> }