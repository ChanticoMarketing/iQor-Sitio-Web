/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.qwenlm.ai',
      },
      {
        protocol: 'https',
        hostname: 'play-lh.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'toppng.com',
      }
    ],
  },
  devIndicators: false,
  transpilePackages: ['gsap', 'lenis'],
};

export default nextConfig;
