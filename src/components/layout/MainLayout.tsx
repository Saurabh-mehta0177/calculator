
'use client'

import { useState } from 'react'
import Sidebar from './Sidebar'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="mx-auto min-h-screen max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

      <div
        className={`grid grid-cols-1 items-start gap-6 ${
          sidebarOpen
            ? 'lg:grid-cols-[260px_minmax(0,1fr)]'
            : 'lg:grid-cols-1'
        }`}
      >

        {/* Sidebar */}
        {sidebarOpen && (
          <Sidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        )}

        {/* Main Content */}
        <main className="w-full min-w-0">

          {/* Show Sidebar Button */}
          {!sidebarOpen && (
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              aria-label="Show sidebar"
              className="mb-4 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-blue-400 hover:text-blue-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
            >
              ☰ Show Tools
            </button>
          )}

          {children}

        </main>

      </div>

    </div>
  )
}
