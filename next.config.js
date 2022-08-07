/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["shop-interview.acrowd.se"],
  },
  env: {
    NEXT_PUBLIC_SITE_URL: "http://localhost:3000",
    WP_BASE_URL: "https://shop-interview.acrowd.se",
    WC_CONSUMER_KEY: "ck_4c0d8a4f83c78831c200e39d1f371e92d419d863",
    WC_CONSUMER_SECRET: "cs_1eb6c96b9a32942b52a868da3ad28698b15873ff",
  },
};

module.exports = nextConfig;
