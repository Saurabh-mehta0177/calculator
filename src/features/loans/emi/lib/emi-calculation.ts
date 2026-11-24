
export interface EMIResultData {
  principal: number
  emi: number
  totalPayment: number
  totalInterest: number
}

export function calculateEMI(
  principal: number,
  annualRate: number,
  years: number
): EMIResultData {

  const safePrincipal = Math.max(0, principal)
  const safeRate = Math.max(0, annualRate)
  const safeYears = Math.max(0, years)

  const months = Math.round(safeYears * 12)
  const monthlyRate = safeRate / 12 / 100

  if (months <= 0 || safePrincipal <= 0) {
    return {
      principal: safePrincipal,
      emi: 0,
      totalPayment: 0,
      totalInterest: 0,
    }
  }

  const emi =
    monthlyRate === 0
      ? safePrincipal / months
      : (
          safePrincipal *
          monthlyRate *
          Math.pow(1 + monthlyRate, months)
        ) /
        (Math.pow(1 + monthlyRate, months) - 1)

  const totalPayment = emi * months
  const totalInterest = totalPayment - safePrincipal

  return {
    principal: safePrincipal,
    emi,
    totalPayment,
    totalInterest,
  }
}
