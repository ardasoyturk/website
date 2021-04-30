import { resolve } from 'path';

export default {
	srcDir: 'src',
	target: 'static',
	ssr: true,
	head: {
		title: 'Arda Soyturk',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
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
		},
		{
			src: '@/plugins/Unicons',
			mode: 'client',
		},
		{
			src: '@/plugins/Typer',
			mode: 'client',
		},
	],
	tailwindcss: {
		configPath: resolve('./tailwind.config.js'),
		jit: true,
	},
	pwa: {
		manifest: {
			name: 'arda.codes',
			short_name: 'arda.codes',
			theme_color: '#1d4ed8',
			lang: 'en',
		},
	},

	components: [{ path: '~/components', global: true }],

	buildModules: [
		'@nuxtjs/color-mode',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/google-fonts',
	],

	modules: [
		'@nuxtjs/axios',
		'@nuxt/postcss8',
		'@nuxtjs/pwa',
		'@nuxtjs/robots',
		'@nuxt/content',
		[
			'nuxt-social-meta',
			{
				url: 'https://arda.codes',
				title: 'Arda Soyturk',
				/* site_name: "Arda Soyturk", */
				description: "I'm Arda, 15-year-old student interested in programming.",
				/* img: "Link to image in static folder", */
				locale: 'en_US',
				twitter: '@soyturkarda_',
				/* twitter_card: "summary_large_image", */
				themeColor: '#12233c',
			},
		],
	],

	colorMode: {
    classSuffix: ""
  },

	axios: {},

	googleFonts: {
		families: {
			Roboto: true,
			Ubuntu: true,
			Poppins: true,
			Inter: true,
			Quicksand: true,
		},
		display: 'swap',
	},

	content: {
		liveEdit: false,
		/* markdown: {
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
		}, */
	},

	build: {},
};
