// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,

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
        { name: 'application-name', content: 'Nuxt 3' },
        { name: 'msapplication-tooltip', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
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

  components: true,

  css: [
    '~/assets/css/tailwind.css'
  ],

  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxt/image-edge',
    'nuxt-icon',
    '@nuxtjs/supabase',
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
        //p: 'span'
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

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },

  // i18n: {
  //   locales: [
  //     {
  //       iso: 'ru-RU',
  //       code: 'ru',
  //       file: 'ru.json',
  //       name: 'Русский'
  //     },
  //     {
  //       iso: 'en-US',
  //       code: 'en',
  //       file: 'en.json',
  //       name: 'English'
  //     },
  //     {
  //       iso: 'de-De',
  //       code: 'de',
  //       file: 'de.json',
  //       name: 'Deutsch'
  //     }
  //   ],
  //   lazy: true,
  //   langDir: 'lang/',
  //   defaultLocale: 'ru',
  //   strategy: 'prefix_except_default',
  // },

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

  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },

  vite: {
		css: {
			preprocessorOptions: {
				scss: {}
			},
		},
	},

  runtimeConfig: {
    public: {
      appUrl: process.env.APP_URL,
    }
  },
  
})
