<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  transition: {
    name: 'page',
    mode: 'out-in'
  }
}
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}


::-webkit-scrollbar {
  width: 10px;
  &-track {
    background: #ccc;
  }
  &-thumb {
    @apply bg-emerald-600;
    &:hover {
      @apply bg-emerald-500;
    }
  }
}

.dark {
  ::-webkit-scrollbar {
    width: 10px;
    &-track {
      background: #182e50;
    }
    &-thumb {
      @apply bg-emerald-600;
      &:hover {
        @apply bg-emerald-500;
      }
    }
  }
}

/* ::-webkit-scrollbar-track, .dark {
  background: #182e50;
}


::-webkit-scrollbar-thumb, .dark {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb:hover, .dark {
  background: rgb(161, 161, 170);
} */
</style>