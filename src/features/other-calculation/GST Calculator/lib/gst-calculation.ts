
export interface GSTResult {
  originalAmount: number
  totalGST: number
  finalAmount: number
  cgst: number
  sgst: number
  igst: number
  gstRate: number
  taxType: 'intra' | 'inter'
}

interface GSTInput {
  amount: number
  gstRate: number
  calculationType: 'exclusive' | 'inclusive'
  taxType: 'intra' | 'inter'
}

export function calculateGST({
  amount,
  gstRate,
  calculationType,
  taxType,
}: GSTInput): GSTResult {

  const safeAmount = Math.max(0, amount)
  const safeRate = Math.max(0, gstRate)

  let originalAmount = 0
  let totalGST = 0
  let finalAmount = 0

  if (calculationType === 'exclusive') {

    originalAmount = safeAmount

    totalGST = originalAmount * safeRate / 100

    finalAmount = originalAmount + totalGST

  } else {

    finalAmount = safeAmount

    originalAmount =
      finalAmount / (1 + safeRate / 100)

    totalGST = finalAmount - originalAmount

  }

  const cgst =
    taxType === 'intra' ? totalGST / 2 : 0

  const sgst =
    taxType === 'intra' ? totalGST / 2 : 0

  const igst =
    taxType === 'inter' ? totalGST : 0

  return {
    originalAmount,
    totalGST,
    finalAmount,
    cgst,
    sgst,
    igst,
    gstRate: safeRate,
    taxType,
  }
}
