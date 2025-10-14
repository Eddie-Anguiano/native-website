/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net'], // Allow Contentful image domains
    unoptimized: true, // Required for static export
  },
  output: 'export', // Enable static exports
  trailingSlash: true, // Ensure consistent URL handling
}

module.exports = nextConfig
