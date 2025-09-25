/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
    PRINTIFY_API_KEY: process.env.PRINTIFY_API_KEY,
    PRINTIFY_SHOP_ID: process.env.PRINTIFY_SHOP_ID,
  },
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig
