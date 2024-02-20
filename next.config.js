/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'github.com',
          port: '',
          pathname: `/Hoccyy/FitPick/blob/main/fit-pick/src/app/favicon.ico`,
        },
      ],
    },
  }
