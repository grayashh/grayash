/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  images: {
    domains: ["www.notion.so", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
