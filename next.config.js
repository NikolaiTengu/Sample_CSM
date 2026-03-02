/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wikia.nocookie.net',
        pathname: '/scp-db/images/**',
      },
      {
        protocol: 'https',
        hostname: 'scp-wiki.wdfiles.com',
        pathname: '/local--files/**',
      },
    ],
  },
}

module.exports = nextConfig
