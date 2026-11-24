
export interface CarLoanResult {
  carPrice: number
  downPayment: number
  principal: number
  emi: number
  totalPayment: number
  totalInterest: number
}

interface CarLoanInput {
  carPrice: number
  downPayment: number
  interestRate: number
  years: number
}

export function calculateCarLoan({
  carPrice,
  downPayment,
  interestRate,
  years,
}: CarLoanInput): CarLoanResult {

  const safeCarPrice = Math.max(0, carPrice)

  const safeDownPayment = Math.min(
    safeCarPrice,
    Math.max(0, downPayment)
  )

  const principal = safeCarPrice - safeDownPayment

  const safeRate = Math.max(0, interestRate)
  const safeYears = Math.max(0, years)

  const monthlyRate = safeRate / 12 / 100
  const months = safeYears * 12

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
    carPrice: safeCarPrice,
    downPayment: safeDownPayment,
    principal,
    emi,
    totalPayment,
    totalInterest,
  }
}
