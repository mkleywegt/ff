// const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  images: {
    domains: ['pbs.twimg.com']
  },
  future: {
    webpack5: true
  },
  env: {
    'ROOT_NOTION_PAGE_ID': process.env.ROOT_NOTION_PAGE_ID,
    'SITE_NAME': process.env.SITE_NAME,
    'SITE_URL': process.env.SITE_URL,
    'SITE_AUTHOR': process.env.SITE_AUTHOR,
  }
});
