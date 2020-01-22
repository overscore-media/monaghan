/*
This is the big configuration file. Any setting directly related to Nuxt.js or one of
the loaded Nuxt/Vue modules is probably in here somewhere.

https://pwa.nuxtjs.org/modules/onesignal.html#async-functions might be fun to add at some point
*/

// This part loads in blog posts
import glob from 'glob'
import info from './content/setup/info'
import path from 'path'
import pkg from './package'
const dynamicRoutes = getDynamicPaths({
  '/blog': 'blog/*.json',
  '/page': 'page/*.json'
})

// This is where the fun begins...
export default {
  mode: 'universal', // It's not a Single-Page App
  /*
  The metadata that gets put in the <head></head> of every page
  Uses the vue-meta package
  */
  head: {
    title: 'Monaghan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content: 'A simple-yet-elegant website template made using Nuxt.js and Bulma'
      },
      { property: 'og:url', content: 'https://monaghan.overscore.media' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Monaghan' },
      // { property: 'og:image', content: '' },
      {
        property: 'og:description',
        content: 'A simple-yet-elegant website template made using Nuxt.js and Bulma'
      }
      // { property: 'fb:app_id', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
    ],
    htmlAttrs: {
      lang: 'en-CA'
    }
  },
  /*
  Global CSS/SCSS files (so there's no need to @import them in pages/components)
  */
  css: [
    '~/assets/scss/main.scss',
    'aos/dist/aos.css'
  ],
  /*
  Vue plugins to load before mounting the app
  Unless their mode is client, these are presumed to be compatible with SSR (Server-Side Rendering)
  Hint: Most Vue plugins aren't SSR-compatible
  */
  plugins: [
    '~/plugins/anime.js', // For nifty animations
    { src: '~/plugins/aos.js', mode: 'client' }, // For that nice Animate-on-Scroll effect
    { src: '~plugins/vuex-persistance.js', mode: 'client' }, // For storing Vuex state data in localStorage
    { src: '~plugins/prism.js', mode: 'client' } // For syntax highlighing of code blocks
  ],
  /*
  Nuxt.js Development Modules
  (used by Nuxt while you're in development mode)
  */
  buildModules: [
    '@nuxtjs/eslint-module' // Tells you if you made an obvious style/syntax mistake in your code
    // If you find ESLint to be overbearing, modify the .eslintrc.js file or add files to the ESLint whitelist
  ],
  /*
  Nuxt.js Modules
  (used by Nuxt in any mode)
  */
  modules: [
    '@nuxtjs/style-resources', // Helps load in custom CSS/SCSS/ETC
    '@nuxtjs/axios', // For Async API requests
    'nuxt-rfg-icon', // Generates favicons and other goodies
    '@nuxtjs/sitemap', // Generates a .xml sitemap for static builds
    'nuxt-purgecss', // Gets rid of unused CSS; can be a pain sometimes because it's too good at what it does
    '@nuxtjs/robots', // Generates a robots.txt
    ['nuxt-matomo', { matomoUrl: '#', siteId: 1, doNotTrack: true, debug: false, consentRequired: true, verbose: false }],
    // The Matomo module is for if you have a Matomo instance (like Google Analytics but open-source)
    '@nuxtjs/markdownit', // Used in the blog post compilation process
    '@nuxtjs/pwa' // Helpful Progressive Web App functionality
  ],
  /*
  Nuxt Module Configurations
  */
  purgeCSS: {
    enabled: true, // True means it's always on in dev/build/generate mode
    // The two below options achieve the happy medium between Prism.js and PurgeCSS
    // If you're having trouble with code highlighting, try adding the pertinent clases to the whitelist
    whitelistPatternsChildren: [/token$/],
    whitelist: [
      'pre', 'code', 'prism', 'line-numbers', 'tag', 'toolbar-item', 'toolbar',
      'code-toolbar', 'span', 'button', 'line-numbers-rows', 'url-link', 'attr-name', 'attr-value', 'punctuation',
      'keyword', 'keyword-let', 'operator', 'string'
    ]
  },
  meta: {
    // https://pwa.nuxtjs.org/modules/meta.html#ogurl
  },
  markdownit: {
    injected: true,
    preset: 'default',
    breaks: true,
    html: true
  },
  sitemap: {
    hostname: 'https://monaghan.overscore.media', // Change this to your URL
    exclude: [
      '/admin/**' // Where the Netlify CMS page is
    ],
    gzip: true
  },
  netlify: {
    mergeSecurityHeaders: true,
    redirects: [
      {
        from: '/home',
        to: '/'
      }
    ]
  },
  // Favicon Generation Settings
  // Copy these from https://realfavicongenerator.net/ in the Node.js section
  'rfg-icon': {
    static: true,
    staticPath: 'favicons',
    masterPicture: 'static/icon.png',
    rfg: {
      design: {
        ios: {
          pictureAspect: 'backgroundAndMargin',
          backgroundColor: '#262626',
          margin: '14%',
          assets: {
            ios6AndPriorIcons: false,
            ios7AndLaterIcons: false,
            precomposedIcons: false,
            declareOnlyDefaultIcon: true
          },
          appName: 'Monaghan'
        },
        desktopBrowser: {},
        windows: {
          pictureAspect: 'whiteSilhouette',
          backgroundColor: '#262626',
          onConflict: 'override',
          assets: {
            windows80Ie10Tile: false,
            windows10Ie11EdgeTiles: {
              small: false,
              medium: true,
              big: false,
              rectangle: false
            }
          },
          appName: 'Monaghan'
        },
        androidChrome: {
          pictureAspect: 'noChange',
          themeColor: '#262626',
          manifest: {
            name: 'OverScore Media',
            display: 'standalone',
            orientation: 'notSet',
            onConflict: 'override',
            declared: true
          },
          assets: {
            legacyIcon: false,
            lowResolutionIcons: false
          }
        },
        safariPinnedTab: {
          pictureAspect: 'silhouette',
          themeColor: '#262626'
        }
      },
      settings: {
        scalingAlgorithm: 'Mitchell',
        errorOnImageTooSmall: false,
        readmeFile: false,
        htmlCodeFile: false,
        usePathAsIs: false
      }
    }
  },
  styleResources: {
    scss: [
      '~/assets/scss/main.scss' // The main custom styles file
    ]
  },
  /*
  Build Mode Configuration
  */
  build: {
    extractCSS: true,
    postcss: {
      preset: {
        features: {
          customProperties: false // Without this stuff breaks
        }
      }
    },
    /*
    Webpack config
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    routes: dynamicRoutes,
    fallback: true, // So the 404 page works when the site's live on Netlify
    extractCSS: true,
    postcss: {
      preset: {
        features: {
          customProperties: false // Again, because otherwise things would break
        }
      }
    }
  }
}

/*
 Creates an array of URLs from a list of files for the blog posts
 All credit to https://github.com/tylermercer/nuxt-netlifycms-boilerplate for this
 */

function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map((url) => {
      const filepathGlob = urlFilepathTable[url]
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.json')}`)
    })
  )
}
