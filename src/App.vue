<template>
  <div class="flex items-center w-full min-h-screen bg-dark-800 text-light-500">
    <main class="flex flex-col w-11/12 mx-auto md:w-1/2 texts">
      <h1 class="w-full text-3xl font-medium text-light-300">Arda Soyturk</h1>
      <span class="flex items-center mt-1 space-x-2 text-xl font-medium text-light-300">
        <a href="http://twitter.com/soyturkarda_" target="_blank" rel="noopener noreferrer">
          <Icon icon="iconoir:twitter" />
        </a>
        <a href="http://github.com/ardasoyturk" target="_blank" rel="noopener noreferrer">
          <Icon icon="iconoir:github" />
        </a>
      </span>
      <p class="mt-1">
        I'm a back-end developer who wants to be a software engineer in the future. I enjoy playing and making stuff with Node.js. Lately I'm trying to learn
        <a
          href="http://flutter.dev"
          target="_blank"
          rel="noopener noreferrer"
        >Flutter</a> and
        <a href="http://dart.dev" target="_blank" rel="noopener noreferrer">Dart</a> for mobile development.
      </p>
      <p class="mt-6">You can find out about my projects here:</p>
      <div class="grid grid-flow-row grid-cols-2 gap-3 mt-3">
        <template v-for="project in projects">
          <Project :name="project.name" :description="project.description" :link="project.link" />
        </template>
      </div>
    </main>
  </div>
</template>

<style>
.texts > * {
  width: 100%;
}

::selection {
  @apply bg-dark-500;
}
</style>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import Project from './components/Project.vue';

const projects = [
  {
    name: 'Twitter Profile Viewer',
    description: 'A very-detailed profile viewer that I made for Twitter using Vite and Vue 3.',
    link: 'https://github.com/ardasoyturk/twitter-profile-viewer',
  },
  {
    name: 'Cloudflare Worker for Twitter API',
    description: 'A very simple Cloudflare Worker for fetching data from the Twitter API.',
    link: 'https://github.com/ardasoyturk/cloudflare-worker-twitter',

  },
  {
    name: 'This Website',
    description: 'My personal website is also open-sourced on GitHub.',
    link: 'https://ardasoyturk.github.io',
  },
  {
    name: 'Music Downloader',
    description: 'A simple script for downloading multiple music files using youtube-dl.',
    link: 'https://github.com/ardasoyturk/music-downloader',
  },
];
</script>