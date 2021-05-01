<template>
	<div id="projects" class="w-11/12 mx-auto dark:text-gray-300">
		<h5 class="text-3xl font-medium tracking-tight xl:text-2xl font-poppins">Projects</h5>
		<div
			class="grid w-5/6 grid-flow-row grid-cols-2 mt-2 gap-x-5 md:gap-x-0 gap-y-1"
		>
			<div v-for="project in projects" :key="project.title">
				<smart-link
					:blank="!project.url.startsWith('/')"
					:href="project.url"
					class="block pl-2.5 pr-1.5 border-l-4 rounded-l-sm border-red-500"
				>
					<span
						class="text-lg font-semibold text-gray-800 dark:text-gray-200 font-poppins"
						:title="project.title"
						>{{ project.title }}</span
					>
					<p class="font-roboto" v-html="project.description">
						{{ project.description }}
					</p>
				</smart-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			projects: [
				{
					title: "Bing Wallpaper",
					description:
						"A program that changes your desktop wallpaper with the Bing's image of the day.",
					url: "https://github.com/ardasoyturk/bing-wallpaper",
				},
				{
					title: "Image Uploader",
					description:
						'A basic server boilerplate for auto-uploading images to cloud. Designed for <a href="https://getsharex.com">ShareX</a>-like programs.',
					url: "https://github.com/ardasoyturk/custom-image-uploader",
				},
				{
					title: "Music Downloader",
					description:
						"A simple music downloader for YouTube based on youtube-dl. Built with Node.js",
					url: "https://github.com/ardasoyturk/music-downloader",
				},
				{
					title: "My Personal Blog",
					description:
						"My personal <strong>Turkish</strong> blog that I write about my personal recommendations, opinions etc.",
					url: "/blog",
				},
			],
		};
	},
};
</script>