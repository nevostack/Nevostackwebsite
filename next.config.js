/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'nevostack.com', 'images.unsplash.com', 'randomuser.me'],
  },
  // Configure webpack to handle specific file imports
  webpack: (config) => {
    return config;
  },
}

module.exports = nextConfig 