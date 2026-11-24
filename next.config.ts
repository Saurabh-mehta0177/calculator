
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Static Site Generation
  output: 'export',

  // URLs with trailing slash
  trailingSlash: true,

  // Static image optimization
  images: {
    unoptimized: true,
  },

  // Turbopack project root
  turbopack: {
    root: process.cwd(),
  },
}

export default nextConfig
