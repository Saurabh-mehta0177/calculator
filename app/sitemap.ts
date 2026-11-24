
import type { MetadataRoute } from 'next'

const baseUrl = 'https://example.com'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    '',
    '/emi-calculator',
    '/fd-calculator',
    '/about',
    '/contact',
    '/privacy-policy',
    '/disclaimer',
    '/terms',
  ]

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: page === '' ? 1 : 0.8,
  }))
}
