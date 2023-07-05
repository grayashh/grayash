/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ["www.notion.so", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
