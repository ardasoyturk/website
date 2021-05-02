<template>
<!-- component -->
<div class="container w-full h-full mx-auto">
  <div class="relative h-full p-10 overflow-hidden">
  <h1 class="pb-3 text-2xl text-center font-poppins dark:text-white">My Journey</h1>
    <div class="absolute h-full border border-gray-700 dark:border-blueGray-600 border-2-2 border-opacity-70 left-14 sm:left-1/2"></div>
    <div v-for="(item, index) in items" :key="item.title">
      <div :class="`flex ${!(index % 2) ? 'sm:flex-row-reverse ' : ''}items-center justify-between w-full mb-8 right-timeline`">
        <div class="order-1 w-5/12"></div>
        <div class="sm:static absolute z-20 flex items-center order-1 bg-gray-800 rounded-full shadow-xl left-[42px] w-7 h-7 dark:bg-blueGray-700"></div>
        <div class="order-1 w-full px-6 py-4 space-y-1 bg-gray-400 rounded-lg shadow-xl sm:w-5/12 dark:bg-blueGray-800">
          <h3 class="text-xl text-gray-800 dark:text-gray-100 font-poppins">{{ item.title }}</h3>
          <p class="text-sm leading-snug tracking-wide text-gray-900 dark:text-gray-200">{{ item.desc }}</p>
          <div class="flex justify-end w-full py-1 space-x-1 text-sm text-blue-600">
            <unicon fill="currentColor" width="20" height="20" name="clock" icon-style="line"></unicon>
            <span>{{ item.time }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'I started using Discord',
          desc: 'I started Discord with an advice from my friend. Using Discord was a milestone for me, because that\'s how I started coding. I\'ve created some Minecraft Skripts before but I think I shouldn\'t count in that to this journey.',
          time: 'July 2017',
        },
        {
          title: 'I created my first Discord bot',
          desc: 'That friend made a Discord bot after a while, I also wanted to make a Discord bot too, it was a multipurpose like the big bots but it helped me to get into actual stuff.',
          time: 'August 2017'
        },
        {
          title: 'I started learning Javascript',
          desc: 'Yes, I created my bot with Javascript but I was just copy-pasting code from tutorials. I loved Javascript\'s syntax and I started learning Javascript and Nodejs.',
          time: 'February 2018'
        },
        {
          title: 'I tried to learn Web Development',
          desc: 'I loved Javascript and back-end development but I wanted to do more. I already have known HTML and JS, all I needed to do was learn CSS. I tried every tutorial, every documentation but I couldn\'t learn CSS. So I used Colorlib templates to make websites.',
          time: 'March 2019'
        },
        {
          title: 'I found Vue and Nuxt',
          desc: 'I\'ve heard of Vue a while ago but I didn\'t do a single thing to figure out how it works. I tried learning Vue with Nuxt and I realised it\'s super easy to use.',
          time: 'July 2020'
        },
        {
          title: 'Vuetify, Bulma, Tailwind... My UI adventure',
          desc: 'A friend was using Vuetify with Nuxt and I loved the design. I tried using Vuetify but I couldn\'t even center an element. I also tried Bulma and I failed it too. But, Tailwind rescued me and now I\'m creating websites without writing a single line of CSS.',
          time: 'October 2020'
        },
        {
          title: 'This portfolio',
          desc: 'As I talked about Tailwind above, I tried so many designs for my portfolio but I loved this one most. I\'m planning to stick on this one. ',
          time: 'March 2021'
        },
      ]
    }
  }
}
</script>