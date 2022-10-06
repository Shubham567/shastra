/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    config.resolve.fallback = { fs: false };
    // config.experiments = { topLevelAwait: true };
    return config;
  }
}

module.exports = nextConfig
