/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['placehold.co'],
    },
    // Add performance optimizations
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    optimizeFonts: true,
    poweredByHeader: false,
    compress: true,
    productionBrowserSourceMaps: false,
}

module.exports = nextConfig 