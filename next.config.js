/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'assets.thefashionenthusiast.uk',
          },
        ],
      },
}

module.exports = nextConfig
