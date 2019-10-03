import * as sass from 'sass'
import * as fibers from 'fibers'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://use.fontawesome.com/releases/v5.0.8/css/all.css'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/styles.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/vue-material.js',
    '@/plugins/vue-clickaway.js',
    '@/plugins/v-tooltip.js',
    { src: '@/plugins/vue-carousel.js', mode: 'client' },
    '@/plugins/vue-social-sharing.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  loaders: {
    sass: {
      implementation: sass,
      sassOptions: {
        fiber: fibers
      },
      indentedSyntax: true
    },
    scss: {
      implementation: sass,
      sassOptions: {
        fiber: fibers
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
