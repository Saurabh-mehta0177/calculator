
export interface HomeLoanResult {
  emi: number
  totalPayment: number
  totalInterest: number
  principal: number
}

interface HomeLoanInput {
  principal: number
  interestRate: number
  years: number
}

export function calculateHomeLoan({
  principal,
  interestRate,
  years,
}: HomeLoanInput): HomeLoanResult {

  const safePrincipal = Math.max(0, principal)
  const safeRate = Math.max(0, interestRate)
  const safeYears = Math.max(0, years)

  const monthlyRate = safeRate / 12 / 100
  const months = safeYears * 12

  const emi =
    months <= 0
      ? 0
      : monthlyRate === 0
        ? safePrincipal / months
        : (
            safePrincipal *
            monthlyRate *
            Math.pow(1 + monthlyRate, months)
          ) /
          (Math.pow(1 + monthlyRate, months) - 1)

  const totalPayment = emi * months

  const totalInterest = Math.max(
    0,
    totalPayment - safePrincipal
  )

  return {
    emi,
    totalPayment,
    totalInterest,
    principal: safePrincipal,
  }
}
