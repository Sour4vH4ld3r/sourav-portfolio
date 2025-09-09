/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'dist',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'projects.souravhalder.in',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'sujoydasmotivation.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'orbitdynamix.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'wingrow.co.in',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig 