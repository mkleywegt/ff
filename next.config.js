// const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const bundleAnalyzer = require('@next/bundle-analyzer');

module.exports = withPlugins(
  [
    [bundleAnalyzer, {
      enabled: process.env.ANALYZE === 'true'
    }],
    [optimizedImages, {
      handleImages: ['jpeg', 'png', 'svg', 'webp']
    }],
  ],{
    images: {
      loader: "imgix",
      path: "https://noop/",
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
  }
);
