/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.marcellvarga.com",
          },
        ],
        destination: "https://marcellvarga.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
