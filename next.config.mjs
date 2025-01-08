/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Match any domain with HTTPS
      },
      {
        protocol: "http",
        hostname: "**", // Match any domain with HTTP
      },
    ],
  },
};

export default nextConfig;
