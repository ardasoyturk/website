<template>
	<div class="w-11/12 mx-auto">
		<h5 class="text-3xl font-medium tracking-tight font-poppins">Positions</h5>
		<div class="grid grid-flow-row grid-cols-2 mt-2 gap-x-10 gap-y-1">
			<div v-for="position in positions" :key="position.title">
				<a
					:href="position.url ? position.url : '#'"
					:class="`text-lg block ${
						!position.url ? 'cursor-not-allowed ' : ''
					} pl-2.5 pr-1.5 border-l-4 rounded-l-sm border-lightBlue-400`"
				>
					<span
						class="font-semibold text-gray-800 font-poppins"
						:title="position.title"
						>{{ position.title }}</span
					>
					<div class="font-roboto" :title="position.role">
						{{ position.role }}
					</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
			positions: [
				{
					title: "Emoji Bot",
					role: "Developer",
					url: "https://emojibot.xyz",
				},
				{
					title: "Kahve Bot",
					role: "Co-founder",
					url: null,
				},
				{
					title: "PreMiD",
					role: "Translator",
					url: "https://premid.app",
				},
				{
					title: "Dogehouse",
					role: "Translator",
					url: "https://dogehouse.xyz",
				},
				{
					title: "Discord Templates",
					role: "Moderator",
					url: "https://discordtemplates.com",
				},
			],
    }
  }
}
</script>