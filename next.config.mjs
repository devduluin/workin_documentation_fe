/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost.guide_be:5503/api/:path*", // proxy ke backend
      },
    ];
  },
};

export default nextConfig;
