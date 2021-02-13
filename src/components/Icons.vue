<template>
    <div class="mx-auto space-x-2 text-4xl text-center select-none">
		<a class="text-blurple hover:text-opacity-80" content="Discord" v-tippy="{ placement : 'top',  arrow: true }" :href="getURL('discord')"><fa-icon :icon="['fab', 'discord']" class="-my-0.5" /></a>
		<a class="text-telegram hover:text-opacity-80" content="Twitter" v-tippy="{ placement : 'top',  arrow: true }" :href="getURL('twitter')"><fa-icon :icon="['fab', 'twitter']" /></a>
		<a class="text-gray-900 hover:text-opacity-80" content="GitHub" v-tippy="{ placement : 'top',  arrow: true }" :href="getURL('github')"><fa-icon :icon="['fab', 'github']" /></a>
		<a class="text-green-500 hover:text-opacity-80" content="Spotify" v-tippy="{ placement : 'top',  arrow: true }" :href="getURL('spotify')"><fa-icon :icon="['fab', 'spotify']" /></a>
    <a class="text-red-600 hover:text-opacity-80" content="E-Mail" v-tippy="{ placement : 'top',  arrow: true }" :href="getURL('mail')"><fa-icon :icon="['far', 'envelope']" /></a>
   </div>
</template>

<script>
export default {
  data() {
    return {
      links: {
        discord: 'https://discord.com/users/403225819222245377',
        twitter: 'https://twitter.com/soyturkarda_',
        github: 'https://github.com/ardasoyturk',
        spotify: 'https://open.spotify.com/user/zsfhpjxcu5uvcwjnlt5k2vvt9',
        telegram: 'https://t.me/ardasoyturk',
        mail: 'mailto:mail@ardasoyturk.com'
      },
    };
  },
  methods: {
    getURL(name) {
      return this.links[name];
    },
  },
};
</script>
