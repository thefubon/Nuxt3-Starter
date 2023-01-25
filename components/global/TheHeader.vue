<template>
  <header class="sticky top-0 z-10 backdrop-blur-xl bg-white/75 dark:backdrop-blur-xl dark:bg-indigo-600">
    <div class="container flex h-16 md:h-20 items-center justify-between font-medium">
      <div>
        <NuxtLink class="inline-block" to="/">
          <h1 class="sr-only">Fubon</h1>
          <img class="h-[28px] w-[113px] min-w-fit logo-dark" src="/img/logo-white.svg" alt="Fubon" width="113" height="28" aria-hidden="true" />
          <img class="h-[28px] w-[113px] min-w-fit logo-white" src="/img/logo-dark.svg" alt="Fubon" width="113" height="28" aria-hidden="true" />
        </NuxtLink>
      </div>

      <div class="flex items-center gap-10">
        <div class="flex items-center gap-3 text-sm text-gray-300">
          <a class="text-black dark:text-white hover:text-black block dark:hover:text-primary duration-150" href="https://vk.com/thefubon" target="_blank"><Icon name="mdi:vk" size="24"/></a>
          <a class="text-black dark:text-white hover:text-black block dark:hover:text-primary duration-150" href="https://t.me/fubon_ru" target="_blank"><Icon name="akar-icons:telegram-fill" size="21"/></a>
        </div>

        <AppColorMode/>
      </div>
    </div>

    <nav class="container">
      <div class="flex gap-4">
        <div v-for="(item,index) in nav" :key="index">
          <NuxtLink class="dark:text-white" activeClass="font-bold" :to="item.slug">{{item.title}}</NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
  const nav = [
    {
      title: 'About',
      slug: '/about'
    },
    {
      title: 'Articles',
      slug: '/articles'
    },
    {
      title: 'Data',
      slug: '/data'
    }
  ];
</script>

<style scoped>
.light img.logo-dark {
  @apply hidden;
}

.dark img.logo-white {
  @apply hidden;
}
</style>