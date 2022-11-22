/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.notion.so", "images.unsplash.com"],
  },
  webpack(config) {
    console.log(config);
    const prod = process.env.MODE_ENV === "production";
    return {
      ...config,
      mode: prod ? "production" : "development",
      devtool: prod ? "hidden-source-map" : "eval",
      // 소스코드 숨기면서 에러 시 소스맵 제공 : 빠르게 웹팩 적용
    };
  },
};

module.exports = nextConfig;
