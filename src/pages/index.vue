<template>
	<div>
		<div class="relative flex items-center justify-center w-full min-h-screen md:h-screen">
			<div
				class="flex flex-col-reverse justify-between rounded-full sm:flex-row"
			>
				<div
					class="self-center w-full text-4xl font-bold text-center font-poppins sm:w-3/5 sm:text-left"
				>
					<div class="leading-snug dark:text-gray-50">Hello there! I'm Arda.</div>
					<div class="leading-snug text-blue-500">
						Welcome to my website.
					</div>
					<lanyard class="py-1" />
				</div>
				<div class="mb-8 sm:mb-0">
					<Avatar
						class="self-center w-48 ring-4 dark:ring-gray-100 ring-[#12233c] mx-auto rounded-full md:rounded-[1rem] md:block"
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
						<journey />
					</div>
				</div>
    </div>
	</div>
</template>

<script>
import AboutMe from '~/components/Homepage/AboutMe.vue';
import Positions from '~/components/Homepage/Positions.vue';
import Projects from '~/components/Homepage/Projects.vue';
import Journey from "~/components/Homepage/Journey.vue";
import Lanyard from "~/components/Homepage/Lanyard.vue";

export default {
	components: { AboutMe, Positions, Projects, Journey, Lanyard },
};
</script>