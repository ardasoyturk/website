import { defineConfig } from 'vite';

// Import Vue
import Vue from '@vitejs/plugin-vue';

// Import Windi CSS
import WindiCSS from 'vite-plugin-windicss';

// Import WebFont Loader
import ViteFonts from 'vite-plugin-fonts';

// Define config
export default defineConfig({
	base: './',
	plugins: [
		Vue(),
		WindiCSS(),
		ViteFonts({
			google: {
				families: [
					{
						name: 'Inter',
						styles:
							'ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900',
					},
				],
			},
		}),
	],
});
