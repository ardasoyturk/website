import Vue from 'vue'
import Unicon from 'vue-unicons/dist/vue-unicons-vue2.umd'
import { 
  uniDiscordMonochrome,
  uniTwitter,
  uniTelegram,
  uniGithub,
  uniEnvelope,
  uniBars,
  uniMultiply,
  uniMoon,
  uniSun
 } from 'vue-unicons/dist/icons'

const spotifyIcon = {
  name: 'spotify',
  style: 'line',
  path: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 427.7 427.7"><path d="M213.8 0C95.7 0 0 95.7 0 213.8s95.7 213.8 213.8 213.8 213.8-95.7 213.8-213.8S331.9 0 213.8 0zM306.9 310.3c-2.7 4.7-7.6 7.2-12.6 7.2 -2.5 0-5-0.6-7.4-2 -38.4-22.5-82.8-26.1-113.3-25.1 -33.8 1-58.5 7.7-58.8 7.8 -7.8 2.1-15.8-2.5-18-10.2 -2.1-7.8 2.4-15.8 10.2-18 1.1-0.3 27.8-7.5 64.8-8.8 21.8-0.7 42.8 0.8 62.4 4.5 24.8 4.7 47.5 13 67.3 24.6C308.6 294.4 311 303.3 306.9 310.3zM334.1 253.9c-3.2 5.5-9 8.6-15 8.6 -3 0-6-0.8-8.7-2.4 -45.5-26.6-98.1-30.9-134.2-29.8 -40 1.2-69.3 9.1-69.6 9.2 -9.2 2.5-18.7-2.9-21.3-12.1 -2.5-9.2 2.9-18.7 12.1-21.3 1.3-0.4 32.9-8.9 76.8-10.4 25.9-0.9 50.7 0.9 74 5.4 29.4 5.6 56.2 15.4 79.7 29.1C336.1 235 338.9 245.6 334.1 253.9zM350.8 202.5c-3.6 0-7.3-0.9-10.7-2.9 -108.2-63.2-248.6-25.6-250-25.3 -11.3 3.1-23-3.5-26.1-14.8 -3.1-11.3 3.5-23 14.8-26.1 1.6-0.4 40.3-11 94.2-12.7 31.7-1 62.2 1.2 90.7 6.6 36.1 6.8 69 18.9 97.8 35.7 10.1 5.9 13.5 18.9 7.6 29.1C365.2 198.8 358.1 202.5 350.8 202.5z"/></svg>'
}

Unicon.add([
  uniDiscordMonochrome,
  uniTwitter,
  uniTelegram,
  uniGithub,
  uniEnvelope,
  uniBars,
  uniMultiply,
  uniMoon,
  uniSun,
  spotifyIcon
])
Vue.use(Unicon)