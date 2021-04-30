<template>
	<div class="bg-gray-50">
		<div class="relative flex items-center justify-center w-full min-h-screen md:h-screen">
			<div class="absolute top-0 w-full h-3 hover:bg-[#182e50] bg-[#12233c]"></div>
			<div
				class="flex flex-col-reverse justify-between rounded-full sm:flex-row"
			>
				<div
					class="self-center w-full text-4xl font-bold text-center font-poppins sm:w-3/5 sm:text-left"
				>
					<div class="leading-snug">Hello there! I'm Arda.</div>
					<div class="leading-snug text-blue-500">
						Welcome to my <a href="">website</a>.
					</div>
				</div>
				<div class="mb-8 sm:mt-0">
					<Avatar
						class="self-center w-48 ring-4 ring-[#12233c] mx-auto rounded-full md:rounded-[1rem] md:block"
						draggable="false"
					/>
				</div>
			</div>
		</div>
    <div class="relative flex items-center justify-center w-full min-h-screen py-10">
				<div class="flex items-center mx-auto justify-centerh-screen lg:grid">
					<div class="space-y-5">
            <about-me />
						<div class="grid md:grid-cols-2 gap-y-5 md:gap-y-0 justify-items-center">
              <positions />
              <projects />
						</div>
						<div class="w-11/12 mx-auto space-y-2 md:w-1/2 md:block">
							<h5 class="text-3xl font-medium tracking-tight text-center font-poppins">
								My accounts on social media
							</h5>
							<Icons :links="links" />
						</div>
					</div>
				</div>
    </div>
		<Footer :links="links" />
	</div>
</template>

<script>
import AboutMe from '../components/Homepage/AboutMe.vue';
import Positions from '../components/Homepage/Positions.vue';
import Projects from '../components/Homepage/Projects.vue';


export default {
	components: { AboutMe, Positions, Projects },
  data() {
    return {
			links: {
        discord: 'https://discord.com/users/403225819222245377',
        twitter: 'https://twitter.com/soyturkarda_',
        github: 'https://github.com/ardasoyturk',
        spotify: 'https://open.spotify.com/user/zsfhpjxcu5uvcwjnlt5k2vvt9',
        telegram: 'https://t.me/ardasoyturk',
        /* mail: 'mailto:' */
      }
    }
  }
};
</script>