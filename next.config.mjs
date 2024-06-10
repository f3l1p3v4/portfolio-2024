/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['next-mdx-remote'],
  images: {
    remotePatterns: [
      {
        hostname: 'github.com',
      },
      {
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;