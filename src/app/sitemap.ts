import { MetadataRoute } from 'next';
import { PRODUCTS } from '@/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mehraab.in';

  const productUrls = PRODUCTS.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: new Date(p.updatedAt || Date.now()),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const staticUrls = [
    '',
    '/shop',
    '/attar',
    '/perfumes',
    '/oud',
    '/gifting',
    '/discovery-sets',
    '/personal-care',
    '/our-story',
    '/craftsmanship',
    '/journal',
    '/wedding-gifting',
    '/corporate-gifting',
    '/faq',
    '/contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.7,
  }));

  return [...staticUrls, ...productUrls];
}
