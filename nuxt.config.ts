import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({


  // https://github.com/nuxt/nuxt/issues/22401
  // https://stackoverflow.com/questions/76287288/usefetch-response-value-not-accessible
  ssr: false,

  app: {
    head: {
      title: 'Hong Kong Weather',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Hong Kong Weather',
        },
      ],
      bodyAttrs: {
        class: 'bg-black white h-100 avenir',
      },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }
  },

  /*
   ** Global CSS
   */
  css: ['tachyons/css/tachyons.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://i18n.nuxtjs.org/docs/getting-started
    '@nuxtjs/i18n',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://eslint.nuxt.com/packages/module
    '@nuxt/eslint',
  ],

  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.js',
        name: 'EN',
      },
      {
        code: 'tc',
        file: 'tc.js',
        name: '中文',
      },
    ],
    defaultLocale: 'en',
    strategy: 'prefix',
    lazy: true,
    langDir: 'lang/',
  },

  // https://eslint.nuxt.com/packages/module
  eslint: {
    /* module options */
  },

  stylelint: {
    /* module options */
  },

  compatibilityDate: '2025-03-11',
})