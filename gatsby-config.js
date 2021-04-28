const urljoin = require('url-join')
const path = require('path')
const config = require('./data/SiteConfig')
const autoprefixer = require('autoprefixer')

// Make sure that pathPrefix is not empty
const validatedPathPrefix = config.pathPrefix === '' ? '/' : config.pathPrefix

module.exports = {
  pathPrefix: validatedPathPrefix,
  siteMetadata: {
    siteUrl: urljoin(config.siteUrl, config.pathPrefix),
    rssMetadata: {
      site_url: urljoin(config.siteUrl, config.pathPrefix),
      feed_url: urljoin(config.siteUrl, config.pathPrefix, config.siteRss),
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${urljoin(
        config.siteUrl,
        config.pathPrefix
      )}/logos/android-icon-192x192.png`,
      copyright: config.copyright
    }
  },
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
    DEV_SSR: true,
    FAST_REFRESH: true,
    FAST_DEV: true,
    PARALLEL_SOURCING: true
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-lodash',
    'gatsby-plugin-ramda',
    'gatsby-plugin-eslint',
    'gatsby-plugin-ramda',
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [autoprefixer()]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/`
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: validatedPathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icons: [
          {
            src: '/logos/android-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/logos/android-icon-36x36.png',
            sizes: '36x36',
            type: 'image.png',
            density: '0.75'
          },
          {
            src: '/logos/android-icon-48x48.png',
            sizes: '48x48',
            type: 'image.png',
            density: '1.0'
          },
          {
            src: '/logos/android-icon-72x72.png',
            sizes: '72x72',
            type: 'image.png',
            density: '1.5'
          },
          {
            src: '/logos/android-icon-96x96.png',
            sizes: '96x96',
            type: 'image.png',
            density: '2.0'
          },
          {
            src: '/logos/android-icon-144x144.png',
            sizes: '144x144',
            type: 'image.png',
            density: '3.0'
          },
          {
            src: '/logos/android-icon-192x192.png',
            sizes: '192x192',
            type: 'image.png',
            density: '4.0'
          }
        ]
      }
    }
  ]
}
