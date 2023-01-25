<template>
  <header class="sticky top-0 z-10 backdrop-blur-xl bg-white/75 dark:backdrop-blur-xl dark:bg-default/50">
    <div class="container flex h-16 md:h-20 items-center justify-between font-medium">
      <div>
        <a class="inline-block" href="/">
          <h1 class="sr-only">Fubon</h1>
          <img class="h-[28px] w-[113px] min-w-fit logo-dark" src="/img/logo-white.svg" alt="Fubon" width="113" height="28" aria-hidden="true" />
          <img class="h-[28px] w-[113px] min-w-fit logo-white" src="/img/logo-dark.svg" alt="Fubon" width="113" height="28" aria-hidden="true" />
        </a>
      </div>

      <ContentNavigation v-slot="{ navigation }">
        <ul class="flex justify-center items-center gap-4 h-20 bg-gray-200">
          <li active-class="font-bold" v-for="link of navigation" :key="link._path">
            <NuxtLink :to="link._path">{{ link.title }} {{ link.icon }}</NuxtLink>
          </li>
        </ul>
      </ContentNavigation>

      <div class="flex items-center gap-10">
        <div class="flex items-center gap-3 text-sm text-gray-300">
          <a class="text-black dark:text-gray-300 hover:text-black/75 block dark:hover:text-primary duration-150" href="https://vk.com/thefubon" target="_blank"><Icon name="mdi:vk" size="24"/></a>
          <a class="text-black dark:text-gray-300 hover:text-black/75 block dark:hover:text-primary duration-150" href="https://t.me/fubon_ru" target="_blank"><Icon name="akar-icons:telegram-fill" size="21"/></a>
        </div>

        <AppColorMode/>
      </div>
    </div>
  </header>
</template>


<style scoped>
.light img.logo-dark {
  @apply hidden;
}

.dark img.logo-white {
  @apply hidden;
}
</style>