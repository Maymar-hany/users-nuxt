export default {
  // Target: https://go.nuxtjs.dev/config-target
   target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-first-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faEnvelope']
        }
      ]
    }],
    ['@nuxtjs/axios'],
    ['@nuxtjs/bulma'],
    ['@nuxtjs/toast']
    
  ],

  toast: {
    position: 'bottom-right',
    register: [ 
      {
        name: 'mytoast',
        message:   (payload) => {
          if(! payload.message) {
            return "Saved"
          }
          return  payload.message
      },
        options: {
          type: 'is-primary',
          duration: 3000,
         
        }
      }
    ]
},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  router: {
    middleware: "navigation"
  }
}
