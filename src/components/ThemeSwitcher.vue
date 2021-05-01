<template>
  <div @click="switchTheme" class="absolute z-10 flex items-center justify-center w-10 h-10 cursor-pointer dark:bg-blueGray-700 bg-blueGray-300 right-10 top-10">
    <div class="switcher" v-if="$colorMode.preference === 'light'">
      <unicon fill="#10b981" name="moon" width="28" height="28" icon-style="line"></unicon>
    </div>
    <div class="switcher" v-else>
      <unicon fill="#10b981" name="sun" width="28" height="28" icon-style="line"></unicon>
    </div>
  </div>
</template>

<style scoped>
.switcher {
  @apply cursor-pointer flex self-center;
}
</style>

<script>
export default {
  methods: {
    switchTheme() {
      if (this.$colorMode.preference === 'dark') this.$colorMode.preference = 'light';
      else this.$colorMode.preference = 'dark';
    }
  }
}
</script>