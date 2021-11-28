<template>
  <a
    :href="link"
    target="_blank"
    class="w-full h-full px-3 py-2 transition duration-100 transform rounded-md shadow-md bg-dark-500 hover:-translate-y-1"
  >
    <h1>{{ name }}</h1>
    <p class="text-sm text-warm-gray-300">{{ description }}</p>
  </a>
</template>

<script setup lang="ts">
defineProps(['name', 'description', 'link'])
</script>