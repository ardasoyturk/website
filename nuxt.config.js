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
		},
		{
			src: '@/plugins/Unicons',
			mode: 'client',
		},
		{
			src: '@/plugins/Typer',
			mode: 'client',
		}
	],
	tailwindcss: {
		configPath: resolve('./tailwind.config.js'),
		jit: true
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

	buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],

	modules: [
		'@nuxtjs/axios',
		'@nuxt/postcss8',
		'@nuxtjs/pwa',
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

	build: {},
};
