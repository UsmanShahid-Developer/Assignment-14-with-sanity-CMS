/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['cdn.sanity.io'], // Add the hostname(s) here
      },
}

module.exports = nextConfig
