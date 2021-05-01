<template>
  <footer class="text-gray-600 dark:text-gray-200">
  <div class="bg-gray-200 dark:bg-blueGray-800">
    <div class="container flex flex-col flex-wrap px-5 py-3 mx-auto sm:flex-row">
      <p class="self-center text-sm text-center text-gray-500 dark:text-gray-200 sm:text-left">© {{ new Date().getFullYear() }} Arda Soyturk <br class="sm:hidden"> — <br class="sm:hidden">
        <span class="text-gray-600 dark:text-gray-400">This website's source code is on <a href="https://github.com/ardasoyturk/website" rel="noopener noreferrer" class="underline">GitHub</a>.</span> 
      </p>
      <span class="inline-flex items-center justify-center mt-2 space-x-0.5 sm:ml-auto sm:mt-0 sm:justify-start">
        <div v-for="icon in icons" :key="icon.name">
          <a :aria-label="icon.name" :href="icon.link" target="_blank" rel="noopener noreferrer">
            <unicon fill="currentColor" :name="icon.name.toLowerCase()" :width="icon.name === 'Spotify' ? 24 : 21" :height="icon.name === 'spotify' ? 24 : 21" :icon-style="icon.style"></unicon>
          </a>
        </div>
      </span>
    </div>
  </div>
  <div class="w-full h-3 hover:bg-emerald-500 bg-emerald-600"></div>
</footer>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        {
          name: 'Discord',
          link: 'https://discord.com/users/403225819222245377',
          style: 'monochrome'
        },
        {
          name: 'Twitter',
          link: 'https://twitter.com/soyturkarda_',
          style: 'line'
        },
        {
          name: 'GitHub',
          link: 'https://github.com/ardasoyturk',
          style: 'line'
        },
        {
          name: 'Spotify',
          link: 'https://open.spotify.com/user/zsfhpjxcu5uvcwjnlt5k2vvt9',
          style: 'line'
        }
        /* mail: 'mailto:' */
      ]
    }
  }
}
</script>