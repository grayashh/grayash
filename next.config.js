/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ["www.notion.so", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
