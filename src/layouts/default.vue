<template>
  <div class="bg-gray-50 dark:bg-blueGray-900">
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

* {
  @apply transition-colors duration-150 ease-in-out;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}

@mixin scrollbar($isdark) {
  scrollbar-width: thin;

  ::-webkit-scrollbar {
  width: 10px;
  @if $isdark == "false" {
    &-track {
      background: #ccc;
    }
    &-thumb {
      @apply bg-emerald-600;
      &:hover {
        @apply bg-emerald-500;
      }
    }
  } @else {
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
}

html {
  @include scrollbar("false");

  &.dark {
    @include scrollbar("true");
  }
}
</style>