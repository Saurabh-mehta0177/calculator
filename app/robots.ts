
import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://smartmoneytools.xyz/sitemap.xml',
    host: 'https://smartmoneytools.xyz',
  }
}
