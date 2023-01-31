<template>
  <section class="grid place-content-center">
    <div class="text-center">
      <h1 class="text-2xl md:text-5xl">Nuxt 3 Starter</h1>

      <NuxtLink v-if="!user" class="py-2 px-6 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white no-underline duration-150" :to="{name: 'dashboard'}">Dashboard</NuxtLink>
      
      <div>
        <h4 class="text-xl font-bold mb-1">Project Pack</h4>
        <div v-for="item in pack" :key="item">
          <p class="m-0" v-text="item.title" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const user = useSupabaseUser();

const pack = [
  {title: 'Nuxt 3.1.1'},
  {title: 'Nuxt Content 2.3.0'},
  {title: 'Nuxt Image-Edge 1.0.0'},
  {title: 'Nuxt Supabase 0.3.0'},
  {title: 'Nuxt Color-Mode 3.2.0'},
  {title: 'Tailwind CSS Forms 0.5.3'},
  {title: 'Tailwind CSS Typograph 0.5.9'},
  {title: 'Nuxt Icon 0.2.7'},
  {title: 'Autoprefixer 10.4.13'},
  {title: 'Post CSS 8.4.21'},
  {title: 'Sitemap 7.1.1'},
  {title: 'Supabase 1.35.0'},
  {title: 'Tailwind CSS 3.2.4'},
  {title: 'Nano ID 4.0.0'},
  {title: 'Preline 1.7.0'},

  {title: '---'},
  {title: 'Nuxt I18n 7.3.1 (Soon)'},
  {title: 'Nuxt Image-Edge / Cloudinary (Soon)'},
  {title: 'Nuxt Cookie Control 4.0.3 (Soon)'},
]
</script>