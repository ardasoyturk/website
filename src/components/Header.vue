<template>
	<header class="absolute top-0 z-10 w-full text-gray-600 dark:text-gray-200">
    <div class="w-full h-3 hover:bg-emerald-500 bg-emerald-600"></div>
		<div
			class="container flex flex-row flex-wrap items-center justify-between w-11/12 px-2 py-5 mx-auto sm:w-full sm:space-x-0 sm:px-5"
		>
			<a
				class="flex items-center font-medium text-gray-900 dark:text-gray-400 md:mb-0"
			>
				<Avatar class="rounded-full ring-2 ring-gray-200" />
				<span class="ml-3 text-xl">Arda.codes</span>
			</a>
			<nav
				class="flex-wrap items-center justify-center hidden text-base sm:flex md:ml-auto md:mr-auto"
			>
				<nuxt-link :to="{ path: '/' }" class="mr-5 hover:text-gray-900 dark:hover:text-gray-600">Homepage</nuxt-link>
				<nuxt-link :to="{ path: '/blog' }" class="mr-5 hover:text-gray-900 dark:hover:text-gray-600">Blog</nuxt-link>
				<nuxt-link :to="{ path: '/', hash: '#projects' }" class="mr-5 hover:text-gray-900 dark:hover:text-gray-600">Projects</nuxt-link>
				<nuxt-link :to="{ path: '/', hash:'#positions'}" class="mr-5 hover:text-gray-900 dark:hover:text-gray-600">Positions</nuxt-link>
			</nav>
			<ThemeSwitcher
				class="rounded focus:outline-none"
			/>
		</div>
	</header>
</template>