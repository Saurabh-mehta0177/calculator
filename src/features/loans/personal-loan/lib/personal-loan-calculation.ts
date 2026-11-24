
export interface PersonalLoanResult {
  principal: number
  emi: number
  totalPayment: number
  totalInterest: number
}

interface PersonalLoanInput {
  amount: number
  interestRate: number
  years: number
}

export function calculatePersonalLoan({
  amount,
  interestRate,
  years,
}: PersonalLoanInput): PersonalLoanResult {

  const principal = Math.max(0, amount)
  const rate = Math.max(0, interestRate)
  const tenure = Math.max(0, years)

  const monthlyRate = rate / 12 / 100
  const months = tenure * 12

  const emi =
    months <= 0
      ? 0
      : monthlyRate === 0
        ? principal / months
        : (
            principal *
            monthlyRate *
            Math.pow(1 + monthlyRate, months)
          ) /
          (Math.pow(1 + monthlyRate, months) - 1)

  const totalPayment = emi * months

  const totalInterest = Math.max(
    0,
    totalPayment - principal
  )

  return {
    principal,
    emi,
    totalPayment,
    totalInterest,
  }
}
