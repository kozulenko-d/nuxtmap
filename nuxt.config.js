const dot = process.env.NODE_ENV === 'development' ? '/' : './';
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
	router: {
		base: '/nuxtmap/'
	}
} : {
	router: {
		base: dot
	}
};
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxtmap',
		htmlAttrs: {
    	lang: 'en'
		},
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project landing with maps' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: dot + 'favicon.ico' },
			{ rel: 'preload', href: dot + 'assets/fonts/SuisseIntl.woff' },
			{ rel: 'preload', href: dot + 'assets/fonts/SuisseIntl.woff2' },
			{ rel: 'preload', href: dot + 'assets/fonts/SuisseIntl-Light.woff' },
			{ rel: 'preload', href: dot + 'assets/fonts/SuisseIntl-Light.woff2' },
			{ rel: 'preload', href: dot + 'assets/fonts/SuisseIntl-SemiBold.woff' },
			{ rel: 'preload', href: dot + 'assets/fonts/SuisseIntl-SemiBold.woff2' },
		],
		script: [
			{ src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCqt_TVfx_pUNaymfSB84bQk5eG8fdRpmU' }
		]
  },
	...routerBase,
	render: {
  	http2: {
  		push: true, pushAssets: null
		},
		resourceHints: false
	},
	plugins: [
		{ src: '~/plugins/axios.js' }
	],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
	env: {
  	baseUrl: process.env.BASE_URL || 'localhost:3000'
	},
  /*
  ** Build configuration
  */
  build: {
  	analyze: false,
  	vendor: [
  		'axios'
		],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
};