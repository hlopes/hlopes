/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: [
      'upload.wikimedia.org',
      'uhdtv.io',
      'mango.blender.org',
      'download.blender.org',
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
