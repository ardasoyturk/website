<template>
	<div>
		<div class="flex items-center justify-center w-full min-h-screen md:h-screen">
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
        <a
          class="absolute cursor-pointer bottom-8 scroll"
        ></a>
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
							<Icons />
						</div>
					</div>
				</div>
        <div class="absolute bottom-0 w-full h-3 bg-[#12233c]"></div>
    </div>
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

    }
  }
};
</script>


<style>
:root {
	--scroll-color: #333;
}
.scroll {
	width: 40px;
	height: 40px;
	border: 3px solid var(--scroll-color);
	border-radius: 50%;
	animation: down 1.5s infinite;
	-webkit-animation: down 1.5s infinite;
	&::before {
		content: "";
		position: absolute;
		top: 8px;
		left: 12px;
		width: 12px;
		height: 12px;
		border-bottom: 3px solid var(--scroll-color);
		border-left: 3px solid var(--scroll-color);
		transform: rotate(-45deg);
	}
}
.gotop {
	width: 40px;
	height: 40px;
	border: 3px solid var(--scroll-color);
	border-radius: 50%;
	animation: up 1.5s infinite;
	-webkit-animation: up 1.5s infinite;
	&::before {
		content: "";
		position: absolute;
		bottom: 8px;
		left: 12px;
		width: 12px;
		height: 12px;
		border-right: 3px solid #333;
		border-top: 3px solid #333;
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