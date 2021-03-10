<template>
	<div class="transition duration-300 ease-in-out opacity-0" ref="maindiv">
		<full-page ref="fullPage" :options="fullpageOptions">
			<div class="section">
				<div
					class="flex flex-col justify-between w-2/3 mx-auto rounded-full lg:w-1/2 sm:flex-row"
				>
					<div
						class="w-full text-4xl font-bold text-center sm:w-3/5 sm:text-left"
					>
						<div class="leading-snug">Hello there! I'm Arda.</div>
						<div class="leading-snug text-blue-500">
							Welcome to my <a href="">website</a>.
						</div>
					</div>
					<div class="mt-8 sm:mt-0">
						<Avatar class="hidden w-48 rounded-full md:block" draggable="false" />
					</div>
				</div>
				<div class="flex items-center justify-center">
					<a class="absolute cursor-pointer bottom-5 scroll" @click="moveDown"></a>
				</div>
			</div>
			<div class="section">
				<div class="flex items-center justify-center h-screen lg:grid lg:grid-cols-2">
					<div class="my-auto space-y-3">
						<div>
							<h1 class="text-3xl text-center font-quicksand">About Me</h1>
							<p class="w-11/12 mx-auto mt-2 sm:w-2/3">
								I'm a 14-year-old back-end developer who wants to be a software
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
						<div class="hidden sm:block">
							<h1 class="text-3xl text-center font-quicksand">Technologies that I use</h1>
							<ul class="grid items-center w-4/5 grid-cols-5 gap-3 mx-auto mt-2">
								<div v-ripple v-for="tech in technologies" :key="tech.name">
									<li class="flex flex-col items-center justify-center w-full bg-gray-200 rounded-md cursor-pointer select-none lg:h-28 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400">
										<img draggable="false" :src="require(`~/assets/icons/${tech.icon}.svg`)" :alt="`${tech.icon[0].toUpperCase() + tech.icon.slice(1) + ' Icon'}`" class="w-16 h-16 rounded-sm" />
										<span class="hidden lg:block">{{ tech.name }}</span>
									</li>
								</div>
							</ul>
						</div>
						<div>
							<h1 class="text-3xl text-center font-quicksand">My accounts on social media</h1>
							<Icons />
						</div>
					</div>
					<div class="hidden my-auto sm:block">
						<h1 class="text-3xl text-center font-quicksand">My Projects</h1>
						<div class="grid w-11/12 h-auto grid-cols-2 gap-2 mx-auto mt-2 sm:h-3/4">
							<ProjectCard
								title="Emoji Bot"
								url="https://emojibot.xyz"
								description="A Discord bot that does everything about emojis! Supports English and Turkish."
							/>
							<ProjectCard
								title="My Personal Blog"
								url="#"
								class="cursor-not-allowed"
								content="Work in progress, please check back later."
								v-tippy="{ placement : 'top',  arrow: true }"
								description="My personal <strong>Turkish</strong> blog that I write about my personal recommendations, opinions etc."
							/>
							<ProjectCard
								title="Flowey's Time Machine"
								url="https://floweystimemachine.github.io"
								:description="floweydesc"
								class="hidden lg:block"
							/>
							<ProjectCard
								title="Music Downloader"
								url="https://github.com/ardasoyturk/music-downloader"
								description="A simple music downloader for YouTube based on youtube-dl. Built with Node.js"
							/>
							<ProjectCard
								title="Bing Wallpaper"
								url="https://github.com/ardasoyturk/bing-wallpaper"
								description="A program that changes your desktop wallpaper with the Bing's image of the day."
								class="hidden lg:block"
							/>
							<ProjectCard
								title="Custom Image Uploader"
								url="https://github.com/ardasoyturk/custom-image-uploader"
								description='A basic server boilerplate for auto-uploading images to cloud. Designed for <a href="https://getsharex.com">ShareX</a>-like programs.'
							/>
						</div>
					</div>
				</div>
				<div class="flex items-center justify-center">
					<a class="absolute transform cursor-pointer bottom-5 gotop" @click="goTop"></a>
				</div>
			</div>
		</full-page>
	</div>
</template>

<script>
export default {
	data() {
		return {
			repos: [],
			fullpageOptions: { scrollingSpeed: 800, licenseKey: true },
			technologies: [
				{
					name: 'Tailwind CSS',
					icon: 'tailwind'
				},
				{
					name: 'Javascript',
					icon: 'javascript'
				},
				{
					name: 'Node.js',
					icon: 'nodejs'
				},
				{
					name: 'Vue.js',
					icon: 'vuejs'
				},
				{
					name: 'Nuxt.js',
					icon: 'nuxtjs'
				},
			],
			floweydesc:
				'<a href="https://tarikcoskun.xyz" rel="nofollow" target="_blank">Tarık</a> and I made a re-design of crumblingstone\'s "Flowey\'s Time Machine".',
		};
	},
	mounted() {
		this.$refs.maindiv.style.opacity = 100
	},
	methods: {
		changeText() {
			this.rank = this.ranks.filter((rank) => rank !== this.rank)[
				Math.floor(
					Math.random() * this.ranks.filter((rank) => rank !== this.rank).length
				)
			];
		},
		moveDown() {
			this.$refs.fullPage.api.moveSectionDown();
		},
		goTop() {
			this.$refs.fullPage.api.moveTo(1);
		},
	},
	async fetch() {
		/* const { data: repos } = await this.$axios.get(
			"https://api.github.com/users/ardasoyturk/repos"
		);
		this.repos = repos
			.filter((a) => !a.fork)
			.sort((a, b) => b.stargazers_count - a.stargazers_count)
			.slice(0, 5); */
	},
};
</script>


<style>
:root {
	--scroll-color: #333;
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

.gotop {
	width: 40px;
	height: 40px;
	border: 2px solid var(--scroll-color);
	border-radius: 50%;
	animation: up 1.5s infinite;
	-webkit-animation: up 1.5s infinite;
	&::before {
		content: '';
		position: absolute;
		bottom: 10px;
		left: 12px;
		width: 12px;
		height: 12px;
		border-right: 2px solid #333;
  	border-top: 2px solid #333;
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

@keyframes up {
	0% {
		transform: translate(0);
	}
	20% {
		transform: translateY(-15px);
	}
	40% {
		transform: translate(0);
	}
}

@-webkit-keyframes up {
	0% {
		transform: translate(0);
	}
	20% {
		transform: translateY(-15px);
	}
	40% {
		transform: translate(0);
	}
}

.section {
	@apply w-screen h-screen;
}
</style>