// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

  app: {
    head: {
      htmlAttrs: {
        lang: 'ru'
      },
      title: 'Fubon',
      titleTemplate: '%s',
      meta: [
        { name: 'description', content: '' },
        { name: 'keywords', content: '' },
        { name: 'author', content: '' },
        { name: 'copyright', content: '' },
        { name: 'viewport', content: 'width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0' },
        { name: 'application-name', content: '' },
        { name: 'msapplication-tooltip', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'format-detection', content: 'address=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-startup-image', href: '/startup.png' },
        { rel: 'apple-touch-icon', href: '/touch-icon-iphone.png' },
        { rel: 'apple-touch-icon', sizes: '72x72', href: '/touch-icon-ipad.png' },
        { rel: 'apple-touch-icon', sizes: '114x114', href: '/touch-icon-iphone-retina.png' },
        { rel: 'apple-touch-icon', sizes: '144x144', href: '/touch-icon-ipad-retina.png' },
      ],
      bodyAttrs: {
        class: 'antialiased'
      },
      // script: [
      //   { src: '/' }
      // ],
    }
  },

  css: [
    '~/assets/css/tailwind.css'
  ],

  modules: [
    '@nuxt/content',
    '@nuxt/image-edge',
    'nuxt-icon',
    '@nuxtjs/color-mode',
  ],

  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'material-palenight',
        // Theme used if `html.dark`
        dark: 'github-dark',
      }
    },
    markdown: {
      tags: {
        p: 'span'
      },
      
      toc: {
        depth: 5,
        searchDepth: 5
      },
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/drjdwwxf7/image/upload/v1667079274/',
    },
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
  },

  colorMode: {
    classSuffix: '',
    fallback: 'system',
    storageKey: 'color-mode',
  },

  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },

  nuxtIcon: {
    size: '24px', // default <Icon> size applied
    class: 'icon', // default <Icon> class applied
    aliases: {
      'nuxt': 'logos:nuxt-icon',
    }
  },
  
})
