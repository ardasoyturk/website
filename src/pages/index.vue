<template>
	<div class="transition duration-300 ease-in-out opacity-0" ref="maindiv">
		<full-page ref="fullPage" :options="fullpageOptions">
			<div class="section">
				<div
					class="flex flex-col justify-between w-1/2 mx-auto rounded-full sm:flex-row"
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
						<Avatar class="w-48 rounded-full" draggable="false" />
					</div>
				</div>
				<div class="flex items-center justify-center">
					<a class="absolute cursor-pointer bottom-10 scroll" @click="moveDown"></a>
				</div>
			</div>
			<div class="section">
				<div class="grid h-screen grid-cols-2">
					<div class="my-auto space-y-3">
						<div>
							<h1 class="text-3xl text-center font-quicksand">About Me</h1>
							<p class="w-2/3 mx-auto mt-2">
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
						<div>
							<h1 class="text-3xl text-center font-quicksand">Technologies that I use</h1>
							<ul class="grid items-center w-4/5 grid-cols-5 gap-3 mx-auto mt-2">
								<div v-ripple v-for="tech in technologies" :key="tech.name">
									<li class="flex flex-col items-center justify-center w-full space-y-2 bg-gray-200 rounded-md cursor-pointer select-none h-28 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400">
										<img draggable="false" :src="require(`~/assets/icons/${tech.icon}.svg`)" :alt="`${tech.icon[0].toUpperCase() + tech.icon.slice(1) + ' Icon'}`" class="w-16 h-16 rounded-sm" />
										<span>{{ tech.name }}</span>
									</li>
								</div>
							</ul>
						</div>
						<div>
							<h1 class="text-3xl text-center font-quicksand">My accounts on social media</h1>
							<Icons />
						</div>
					</div>
					<div class="my-auto">
						<h1 class="text-3xl text-center font-quicksand">My Projects</h1>
						<div class="grid w-11/12 grid-cols-2 gap-2 mx-auto mt-2">
							<ProjectCard
								title="Emoji Bot"
								url="https://emojibot.xyz"
								color="emerald-500"
								description="A Discord bot that does everything about emojis! Supports English and Turkish."
							/>
							<ProjectCard
								title="My Personal Blog"
								url="#"
								class="cursor-not-allowed"
								content="Work in progress, please check back later."
								v-tippy="{ placement : 'top',  arrow: true }"
								color="emerald-500"
								description="My personal <strong>Turkish</strong> blog that I write about my personal recommendations, opinions etc."
							/>
							<ProjectCard
								title="Flowey's Time Machine"
								url="https://floweystimemachine.github.io"
								color="emerald-500"
								:description="floweydesc"
							/>
							<ProjectCard
								title="Music Downloader"
								url="https://github.com/ardasoyturk/music-downloader"
								color="emerald-500"
								description="A simple music downloader for YouTube based on youtube-dl. Built with Node.js"
							/>
							<ProjectCard
								title="Bing Wallpaper"
								url="https://github.com/ardasoyturk/bing-wallpaper"
								color="emerald-500"
								description="A program that changes your desktop wallpaper with the Bing's image of the day."
							/>
							<ProjectCard
								title="Custom Image Uploader"
								url="https://github.com/ardasoyturk/custom-image-uploader"
								color="emerald-500"
								description='A basic server boilerplate for auto-uploading images to cloud. Designed for <a href="https://getsharex.com">ShareX</a>-like programs.'
							/>
						</div>
					</div>
				</div>
				<div class="flex items-center justify-center">
					<a class="absolute transform cursor-pointer bottom-10 gotop" @click="goTop"></a>
				</div>
			</div>
		</full-page>
	</div>
</template>

	<!-- <div class="w-full min-h-screen bg-gray-100">
		<div class="flex items-center justify-center w-full h-full min-h-screen ">
			<Header />
			<div
				class="flex flex-col justify-between w-1/2 mx-auto rounded-full sm:flex-row"
			>
				<div
					class="w-full text-4xl font-bold text-center sm:w-3/5 sm:text-left"
				>
					<div class="leading-snug">
						Hello there! I'm Arda.
					</div>
					<div class="leading-snug text-blue-500">Welcome to my <a href="">website</a>.</div>
				</div>
				<div class="mt-8 sm:mt-0">
					<Logo class="w-48 rounded-full" draggable="false" />
				</div>
			</div>
			<a class="fixed bottom-10 scroll"></a>
		</div>
	</div> -->

<!-- 	<div class="flex items-center w-full h-full min-h-screen bg-arda">
		<Header />
		 <div v-if="$fetchState.pending" class="flex items-center justify-center mx-auto text-white">
			<div class="flex items-center space-x-2 dark:text-gray-200">
				<fa-icon :icon="['fas', 'sync']" class="animate-spin" />
				<h2 class="text-lg font-semibold">Fetchings songs...</h2>
			</div>
  	</div>
		<div v-else-if="$fetchState.error">
			cekemedik
		</div>
		<div v-else class="flex items-center justify-center w-full h-full">
			<div class="relative left-5 skill-card rounded-xl">
				<div>
					<h1 class="text-xl tracking-wide text-white uppercase">Using</h1>
					<ul>
						<li>nodejs</li>
						<li>vuejs</li>
						<li>tailwindcss</li>
						<li>bok</li>
					</ul>
				</div>
				<div>
					<h1 class="text-xl tracking-wide text-white uppercase">Learning</h1>
					<ul>
						<li>rust</li>
						<li>typescript</li>
						<li>reactjs</li>
						<li>bok</li>
					</ul>
				</div>
			</div>
			<div class="card">
				<Logo class="logo" />
				<h1 class="title">Arda Soytürk</h1>
				<h3 @click="changeText()" class="subtitle">{{ rank }}</h3>
				<Icons class="icons" />
				<div class="grid w-2/3 grid-flow-col gap-5 py-5 mx-auto buttons">
						<nuxt-link to="/blog" class="text-xl font-medium text-center text-gray-100 font-poppins">My Personal Blog</nuxt-link>
						<nuxt-link to="/projects" class="text-xl font-medium text-center text-gray-100 font-poppins">My Projects</nuxt-link>
				</div>
			</div>
			<div class="relative right-5 skill-card rounded-xl">
				<h1 class="text-xl tracking-wide text-center text-white uppercase">GitHub Repositories</h1>
				<div class="grid grid-flow-row grid-cols-1 gap-2 py-3 mr-0 repo">
					<a v-for="repo in repos" :key="repo">
						<a :href="repo.html_url" target="_blank">{{repo.name}}</a>
					</a>
				</div>
			</div>
		</div>
	</div> -->

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
	width: 60px;
	height: 60px;
	border: 2px solid var(--scroll-color);
	border-radius: 50%;
	animation: down 1.5s infinite;
	-webkit-animation: down 1.5s infinite;
	&::before {
		content: "";
		position: absolute;
		top: 15px;
		left: 18px;
		width: 18px;
		height: 18px;
		border-left: 2px solid var(--scroll-color);
		border-bottom: 2px solid var(--scroll-color);
		transform: rotate(-45deg);
	}
}

.gotop {
	width: 60px;
	height: 60px;
	border: 2px solid var(--scroll-color);
	border-radius: 50%;
	animation: up 1.5s infinite;
	-webkit-animation: up 1.5s infinite;
	&::before {
		content: '';
		position: absolute;
		bottom: 15px;
		left: 18px;
		width: 18px;
		height: 18px;
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