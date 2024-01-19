/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  publicRuntimeConfig: {
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  },
};
