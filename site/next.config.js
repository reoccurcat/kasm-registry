/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'reo\'s registry',
    description: 'reo\'s custom kasm registry',
    icon: 'https://reoccurcat.github.io/kasm-registry/1.0/img/logo.svg',
    listUrl: 'https://reoccurcat.github.io/kasm-registry/',
    contactUrl: 'https://github.com/reoccurcat/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
