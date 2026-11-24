
'use client'

import { useMemo, useState } from 'react'
import { currencies, getCurrency } from './currencies'

interface CurrencySelectorProps {
  value: string
  onChange: (value: string) => void
}

export default function CurrencySelector({
  value,
  onChange,
}: CurrencySelectorProps) {
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)

  const selectedCurrency = getCurrency(value)

  const filteredCurrencies = useMemo(() => {
    const query = search.toLowerCase().trim()

    if (!query) return currencies

    return currencies.filter((currency) => {
      return (
  currency.country.toLowerCase().includes(query) ||
  currency.code.toLowerCase().includes(query) ||
  currency.name.toLowerCase().includes(query) ||
  currency.flag.includes(query) ||
  currency.symbol.toLowerCase().includes(query)
)
    })
  }, [search])

  return (
    <div className="relative">

      <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
        Select Country / Currency
      </label>

      {/* Selected Currency */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-xl border border-gray-300 bg-white px-4 py-3 text-left outline-none transition hover:border-blue-500 dark:border-gray-700 dark:bg-gray-800"
      >
        <div className="flex items-center gap-3">

          <span className="text-2xl">
            {selectedCurrency.flag}
          </span>

          <div>
            <p className="font-semibold text-gray-900 dark:text-white">
              {selectedCurrency.code} - {selectedCurrency.name}
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              {selectedCurrency.symbol}
            </p>
          </div>

        </div>

        <span className="text-gray-500">
          {open ? '▲' : '▼'}
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-900">

          {/* Search */}
          <div className="border-b border-gray-200 p-3 dark:border-gray-700">

            <input
              type="text"
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search country, currency or code..."
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />

          </div>

          {/* Currency List */}
          <div className="max-h-64 overflow-y-auto p-2">

            {filteredCurrencies.length > 0 ? (

              filteredCurrencies.map((currency) => (

                <button
                  key={currency.code}
                  type="button"
                  onClick={() => {
                    onChange(currency.code)
                    setSearch('')
                    setOpen(false)
                  }}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-left transition hover:bg-blue-50 dark:hover:bg-blue-950 ${
                    value === currency.code
                      ? 'bg-blue-50 dark:bg-blue-950'
                      : ''
                  }`}
                >

                  <div className="flex items-center gap-3">

                    <span className="text-2xl">
                      {currency.flag}
                    </span>

                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        {currency.name}
                      </p>

                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {currency.code}
                      </p>
                    </div>

                  </div>

                  <div className="flex items-center gap-2">

                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                      {currency.symbol}
                    </span>

                    {value === currency.code && (
                      <span className="text-blue-600 dark:text-blue-400">
                        ✓
                      </span>
                    )}

                  </div>

                </button>

              ))

            ) : (

              <p className="px-3 py-6 text-center text-sm text-gray-500">
                No currency found.
              </p>

            )}

          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 px-3 py-2 dark:border-gray-700">
            <p className="text-xs text-gray-500">
              {filteredCurrencies.length} currencies available
            </p>
          </div>

        </div>
      )}

    </div>
  )
}
