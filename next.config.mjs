/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows all remote images (or use specific hostnames)
      },
    ],
  },
};

export default nextConfig;
