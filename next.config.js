/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net'], // Allow Contentful image domains
    unoptimized: true, // Required for static export
  },
  output: 'export', // Enable static exports
  trailingSlash: true, // Ensure consistent URL handling
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT || 'master',
  },
  // Disable server-side features for static export
  experimental: {
    appDir: false
  }
}

module.exports = nextConfig
