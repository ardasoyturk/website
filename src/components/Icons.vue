<template>
    <div class="flex justify-center space-x-1.5 text-xl text-center select-none">
		<a content="Discord" v-tippy="{ placement : 'bottom',  arrow: true }" :href="getURL('discord')"><unicon name="discord" fill="#7289DA" width="24" height="24" icon-style="monochrome"></unicon></a>
		<a content="Twitter" v-tippy="{ placement : 'bottom',  arrow: true }" :href="getURL('twitter')"><unicon name="twitter" fill="#06B6D4" width="24" height="24" icon-style="line"></unicon></a>
		<a content="GitHub" v-tippy="{ placement : 'bottom',  arrow: true }" :href="getURL('github')"><unicon name="github" fill="#111827" width="24" height="24" icon-style="line"></unicon></a>
		<a content="Spotify" class="self-center" v-tippy="{ placement : 'bottom',  arrow: true }" :href="getURL('spotify')"><unicon name="spotify" width="21" height="21" icon-style="line"></unicon></a>
    <!-- <a content="E-Mail" v-tippy="{ placement : 'bottom',  arrow: true }" :href="getURL('mail')"><unicon name="envelope" fill="#DC2626" width="32" height="32" icon-style="line"></unicon></a> -->
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
        /* mail: 'mailto:' */
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
