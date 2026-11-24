
export interface Currency {
  code: string
  name: string
  symbol: string
  flag: string
  locale: string
  country: string
}


export const currencies: Currency[] = [
  {
    code: 'INR',
    name: 'Indian Rupee',
    symbol: '₹',
    flag: '🇮🇳',
    locale: 'en-IN',
    country: 'India',
  },
  {
    code: 'USD',
    name: 'US Dollar',
    symbol: '$',
    flag: '🇺🇸',
    locale: 'en-US',
    country: 'United States',
  },
  {
    code: 'GBP',
    name: 'British Pound',
    symbol: '£',
    flag: '🇬🇧',
    locale: 'en-GB',
    country: 'United Kingdom',
  },
  {
    code: 'EUR',
    name: 'Euro',
    symbol: '€',
    flag: '🇪🇺',
    locale: 'de-DE',
    country: 'Eurozone',
  },
  {
    code: 'AED',
    name: 'UAE Dirham',
    symbol: 'د.إ',
    flag: '🇦🇪',
    locale: 'en-AE',
    country: 'United Arab Emirates',
  },
  {
    code: 'SAR',
    name: 'Saudi Riyal',
    symbol: 'ر.س',
    flag: '🇸🇦',
    locale: 'en-SA',
    country: 'Saudi Arabia',
  },
  {
    code: 'CAD',
    name: 'Canadian Dollar',
    symbol: 'C$',
    flag: '🇨🇦',
    locale: 'en-CA',
    country: 'Canada',
  },
  {
    code: 'AUD',
    name: 'Australian Dollar',
    symbol: 'A$',
    flag: '🇦🇺',
    locale: 'en-AU',
    country: 'Australia',
  },
  {
    code: 'NZD',
    name: 'New Zealand Dollar',
    symbol: 'NZ$',
    flag: '🇳🇿',
    locale: 'en-NZ',
    country: 'New Zealand',
  },
  {
    code: 'SGD',
    name: 'Singapore Dollar',
    symbol: 'S$',
    flag: '🇸🇬',
    locale: 'en-SG',
    country: 'Singapore',
  },
  {
    code: 'MYR',
    name: 'Malaysian Ringgit',
    symbol: 'RM',
    flag: '🇲🇾',
    locale: 'ms-MY',
    country: 'Malaysia',
  },
  {
    code: 'PKR',
    name: 'Pakistani Rupee',
    symbol: 'Rs',
    flag: '🇵🇰',
    locale: 'en-PK',
    country: 'Pakistan',
  },
  {
    code: 'BDT',
    name: 'Bangladeshi Taka',
    symbol: '৳',
    flag: '🇧🇩',
    locale: 'en-BD',
    country: 'Bangladesh',
  },
  {
    code: 'NPR',
    name: 'Nepalese Rupee',
    symbol: 'रू',
    flag: '🇳🇵',
    locale: 'ne-NP',
    country: 'Nepal',
  },
  {
    code: 'LKR',
    name: 'Sri Lankan Rupee',
    symbol: 'Rs',
    flag: '🇱🇰',
    locale: 'en-LK',
    country: 'Sri Lanka',
  },
  {
    code: 'JPY',
    name: 'Japanese Yen',
    symbol: '¥',
    flag: '🇯🇵',
    locale: 'ja-JP',
    country: 'Japan',
  },
  {
    code: 'CNY',
    name: 'Chinese Yuan',
    symbol: '¥',
    flag: '🇨🇳',
    locale: 'zh-CN',
    country: 'China',
  },
  {
    code: 'CHF',
    name: 'Swiss Franc',
    symbol: 'CHF',
    flag: '🇨🇭',
    locale: 'de-CH',
    country: 'Switzerland',
  },
  {
    code: 'ZAR',
    name: 'South African Rand',
    symbol: 'R',
    flag: '🇿🇦',
    locale: 'en-ZA',
    country: 'South Africa',
  },
  {
    code: 'BRL',
    name: 'Brazilian Real',
    symbol: 'R$',
    flag: '🇧🇷',
    locale: 'pt-BR',
    country: 'Brazil',
  },
]

export const defaultCurrency = 'INR'

export function getCurrency(code: string): Currency {
  return (
    currencies.find((currency) => currency.code === code) ??
    currencies[0]
  )
}