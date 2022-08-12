/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [`${process.env.WP_DOMAIN}`],
  },
};

module.exports = nextConfig;
