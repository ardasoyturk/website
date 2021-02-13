<template>
      <a
        v-ripple
        :target="url.startsWith('http') ? '_blank' : ''"
        rel="nofollow"
        :href="url"
        :class="`bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 rounded-lg shadow-lg ${truncate?'truncate':''} mx-auto select-none cursor-pointer transition duration-200 hover:translate-y-1 transform `"
      >
        <div class="relative rounded-lg">
          <div class="p-4 leading-tight">
            <h2
              :class="`text-gray-100 font-semibold font-poppins ${truncate?'truncate':''} text-center sm:text-left text-lg sm:text-xl`"
              v-html="title"
            >
            {{ title }}
            </h2>
            <p
              class="hidden text-opacity-75 text-gray-50 sm:block text-medium"
              v-html="description"
            >
              {{ description }}
            </p>
          </div>
        </div>
      </a>
</template>

<script>
export default {
    props: ['title', 'color', 'description', 'truncate', 'url']
}
</script>