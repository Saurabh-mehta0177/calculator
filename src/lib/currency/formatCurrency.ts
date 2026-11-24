
import { getCurrency } from './currencies'

export function formatCurrency(
  amount: number,
  currencyCode: string
): string {
  const currency = getCurrency(currencyCode)

  return new Intl.NumberFormat(currency.locale, {
    style: 'currency',
    currency: currency.code,
    maximumFractionDigits: 2,
  }).format(amount)
}
