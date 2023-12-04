/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")();
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = withMDX(nextConfig);
