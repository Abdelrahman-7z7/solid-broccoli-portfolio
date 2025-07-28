import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://abdelrahman-reyad-elorabi-portfolio.vercel.app/sitemap.xml', // Replace with your actual domain
  }
} 