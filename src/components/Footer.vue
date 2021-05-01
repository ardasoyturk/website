<template>
  <footer class="text-gray-600 dark:text-gray-200">
  <div class="bg-gray-200 dark:bg-blueGray-800">
    <div class="container flex flex-col flex-wrap px-5 py-3 mx-auto sm:flex-row">
      <p class="self-center text-sm text-center text-gray-500 dark:text-gray-200 sm:text-left">© {{ new Date().getFullYear() }} Arda Soyturk —
        <span class="text-gray-600 dark:text-gray-400">This website's source code is on <a href="https://github.com/ardasoyturk/website" rel="noopener noreferrer" class="underline">GitHub</a>.</span> 
      </p>
      <span class="inline-flex items-center justify-center mt-2 space-x-0.5 sm:ml-auto sm:mt-0 sm:justify-start">
      <a :href="this.links.discord"><unicon name="discord" fill="currentColor" width="24" height="24" icon-style="monochrome"></unicon></a>
		  <a :href="this.links.twitter"><unicon name="twitter" fill="currentColor" width="24" height="24" icon-style="line"></unicon></a>
		  <a :href="this.links.github"><unicon name="github" fill="currentColor" width="24" height="24" icon-style="line"></unicon></a>
		  <a :href="this.links.spotify"><unicon name="spotify" fill="currentColor" width="21" height="21" icon-style="line"></unicon></a>
      </span>
    </div>
  </div>
  <div class="w-full h-3 hover:bg-emerald-500 bg-emerald-600"></div>
</footer>
</template>

<script>
export default {
  props: ['links']
}
</script>