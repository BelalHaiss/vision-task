/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.vision2030.gov.sa',
        port: ''
      }
    ]
  }
};

module.exports = nextConfig;
