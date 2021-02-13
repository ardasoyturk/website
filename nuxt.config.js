import { resolve } from 'path';

export default {
	srcDir: 'src',
	target: 'static',
	ssr: true,
	head: {
		title: 'ardasoyturk.com',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},

	css: [],

	plugins: [
		{
			src: '@/plugins/Ripple',
			mode: 'client',
		},
		{
			src: '@/plugins/Tippy',
			mode: 'client',
		}
	],
	tailwindcss: {
		configPath: resolve('./tailwind.config.js'),
	},
	pwa: {
		manifest: {
			name: 'ardasoyturk.com',
			short_name: 'ardasoyturk.com',
			theme_color: '#1d4ed8',
			lang: 'en',
		},
	},

	components: [{ path: '~/components', global: true }],

	buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],

	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		'@nuxtjs/fontawesome',
		'nuxt-fullpage.js',
		'@nuxt/content',
	],

	axios: {},

	googleFonts: {
		families: {
			Roboto: true,
			Ubuntu: true,
			Poppins: true,
			Inter: true,
			Quicksand: true,
		},
	},

	content: {
		liveEdit: false,
		markdown: {
			remarkPlugins: [
				'remark-emoji',
				'remark-images',
				[
					'remark-autolink-headings',
					{
						behavior: 'wrap',
					},
				],
			],
		},
	},

	fontawesome: {
		component: 'fa',
		suffix: true,
		icons: {
			solid: ['faCalendar', 'faLink', 'faSync'],
			regular: ['faClock', 'faEnvelope'],
			light: [],
			duotone: [],
			brands: ['faTwitter', 'faDiscord', 'faGithub', 'faSpotify', 'faTelegram'],
		},
	},

	build: {},
};
