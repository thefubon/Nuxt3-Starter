<template>
  <section class="md:h-64 lg:h-80 xl:h-96 2xl:h-128 grid place-content-center">
    <div class="text-center">
      <div v-if="!user" class="grid">
        <h1 class="text-2xl md:text-5xl">Hello World</h1>
        <NuxtLink class="py-2 px-6 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white no-underline duration-150" :to="{name: 'dashboard'}">Dashboard</NuxtLink>
      </div>
      <h1 v-else class="text-2xl md:text-5xl">Hello World</h1>
    </div>
  </section>
</template>

<script setup>
const user = useSupabaseUser();
</script>