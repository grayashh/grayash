/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  images: {
    domains: ["www.notion.so", "images.unsplash.com"],
  },
  webpack: (config, { dev }) => {
    // Perform customizations to config

    //Importan: return the modified config
    return config;
  },
};

module.exports = nextConfig;
