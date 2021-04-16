<template>
	<div class="w-full min-h-screen">
		<div class="w-full h-screen">
			<section
				class="grid w-full h-full grid-cols-1 place-items-center place-content-center lg:h-1/2"
			>
				<div class="-mt-5 lg:mt-10 space-y-1.5">
					<Avatar class="w-40 mx-auto rounded-full 2xl:w-96" />
					<div class="text-center">
						<h1 class="2xl:text-6xl text-2xl text-[#12233c] font-poppins">Arda Soyturk</h1>
						<vue-typer
							:text="ranks"
							class="2xl:text-4xl text-lg mb-1.5 font-poppins"
						></vue-typer>
						<Icons class="mt-1.5" />
					</div>
				</div>
				<div class="flex items-center justify-center lg:hidden">
					<a class="absolute cursor-pointer bottom-5 scroll"></a>
				</div>
			</section>
			<section class="grid w-full grid-cols-1 lg:grid-cols-2 h-1/2">
				<div class="w-11/12 px-5 py-1.5 space-y-9 lg:space-y-1">
					<div class="mt-3">
						<h5 class="text-xl font-semibold 2xl:text-5xl font-poppins">About me</h5>
						<p
							class="text-sm 2xl:text-3xl w-full lg:w-5/6 pl-2.5 pr-1.5 font-roboto border-l-4 rounded-l-sm border-purple-700"
						>
							I'm a 15-year-old back-end developer who wants to be a software
							engineer in the future. I enjoy playing and making stuff with
							<a
								href="https://nodejs.org"
								rel="nofollow"
								target="_blank"
								class="text-blue-800 hover:text-blue-900"
								>Node.js</a
							>. Recently I learned about
							<a
								href="https://vuejs.org"
								rel="nofollow"
								target="_blank"
								class="text-blue-800 hover:text-blue-900"
								>Vue.js</a
							>
							and this is the first project I made with it.
						</p>
					</div>
					<div>
						<h5 class="text-xl font-semibold 2xl:text-5xl font-poppins">Positions</h5>
						<div
							class="grid grid-flow-col grid-rows-2 gap-x-3 lg:gap-x-0 gap-y-1 lg:gap-y-3"
						>
							<div v-for="position in positions" :key="position.title">
								<a
									:href="position.url ? position.url : '#'"
									:class="`block ${!position.url ? 'cursor-not-allowed ' : ''}2xl:text-3xl pl-2.5 pr-1.5 border-l-4 rounded-l-sm border-lightBlue-400`"
								>
									<span
										class="font-semibold text-gray-800 font-poppins"
										:title="position.title"
										>{{ position.title }}</span
									>
									<div class="text-sm font-roboto" :title="position.role">
										{{ position.role }}
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="w-11/12 px-5 py-5 space-y-1.5">
					<h5 class="text-xl font-semibold 2xl:text-5xl font-poppins">Projects</h5>
					<div class="grid grid-rows-2 lg:grid-flow-col lg:gap-y-1.5 gap-y-3">
						<div v-for="project in projects" :key="project.title">
							<a
								:href="project.url"
								class="block 2xl:text-3xl pl-2.5 pr-1.5 border-l-4 rounded-l-sm border-red-500"
							>
								<span
									class="font-semibold text-gray-800 font-poppins"
									:title="project.title"
									>{{ project.title }}</span
								>
								<p
									class="text-sm font-roboto"
									v-html="project.description"
								>
									{{ project.description }}
								</p>
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			ranks: [
				"Gamer",
				"Student",
				"Turkish",
				"Vue Lover",
				"Programmer",
				"Professional Javascript Player",
				"Netflix Lover",
				"Back-end Developer",
				"Stack Overflow FTW!",
				"Website Developer",
				"Prefers Spotify to YT Music",
			],
			projects: [
				{
					title: "Bing Wallpaper",
					description:
						"A program that changes your desktop wallpaper with the Bing's image of the day.",
					url: 'https://github.com/ardasoyturk/bing-wallpaper'
				},
				{
					title: "Image Uploader",
					description:
						'A basic server boilerplate for auto-uploading images to cloud. Designed for <a href="https://getsharex.com">ShareX</a>-like programs.',
					url: 'https://github.com/ardasoyturk/custom-image-uploader'
				},
				{
					title: "Music Downloader",
					description:
						"A simple music downloader for YouTube based on youtube-dl. Built with Node.js",
					url: 'https://github.com/ardasoyturk/music-downloader'
				},
				{
					title: "My Personal Blog",
					description:
						"My personal <strong>Turkish</strong> blog that I write about my personal recommendations, opinions etc.",
					url: '/blog'
				},
			],
			positions: [
				{
					title: "Emoji Bot",
					role: "Developer",
					url: 'https://emojibot.xyz'
				},
				{
					title: "Kahve Bot",
					role: "Co-founder & Developer",
					url: null
				},
				{
					title: "PreMiD",
					role: "Translator",
					url: 'https://premid.app'
				},
				// {
				// 	title: "Discord Templates",
				// 	role: "Moderator",
				// 	url: 'https://discordtemplates.com'
				// },
			],
		};
	},
};
</script>

<style>
:root {
	--scroll-color: #333;
	@apply bg-gray-50;
}

.vue-typer .custom.char {
	@apply text-amber-600;
}

.scroll {
	width: 40px;
	height: 40px;
	border: 2px solid var(--scroll-color);
	border-radius: 50%;
	animation: down 1.5s infinite;
	-webkit-animation: down 1.5s infinite;
	&::before {
		content: "";
		position: absolute;
		top: 10px;
		left: 12px;
		width: 12px;
		height: 12px;
		border-left: 2px solid var(--scroll-color);
		border-bottom: 2px solid var(--scroll-color);
		transform: rotate(-45deg);
	}
}

@keyframes down {
	0% {
		transform: translate(0);
	}
	20% {
		transform: translateY(15px);
	}
	40% {
		transform: translate(0);
	}
}

@-webkit-keyframes down {
	0% {
		transform: translate(0);
	}
	20% {
		transform: translateY(15px);
	}
	40% {
		transform: translate(0);
	}
}
</style>