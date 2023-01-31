<template>
  <header class="dark:backdrop-blur-xl dark:bg-indigo-600">
    <div class="container flex h-16 md:h-20 items-center justify-between font-medium">
      <div class="flex items-center">
        <NuxtLink class="inline-block" :to="{ name: 'index',}">
          <h1 class="sr-only">Fubon</h1>
          <img class="h-[28px] w-[113px] min-w-fit logo-dark" src="/img/logo-white.svg" alt="Fubon" width="113" height="28" aria-hidden="true" />
          <img class="h-[28px] w-[113px] min-w-fit logo-white" src="/img/logo-dark.svg" alt="Fubon" width="113" height="28" aria-hidden="true" />
        </NuxtLink>
      </div>

      <div class="flex items-center gap-6">
        <div v-if="!user">
          <NuxtLink
            class="inline-flex items-center py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md dark:bg-white dark:text-indigo-600 text-sm"
            to="/auth"
          >
            Sign In
          </NuxtLink>
        </div>
         <div v-else class="flex gap-4 items-center">
          <NuxtLink to="/dashboard">Dashboard</NuxtLink>
          <button
            class="inline-flex items-center py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-md dark:bg-white dark:text-indigo-600 text-sm"
            @click="handleLogout"
          >
            Logout
          </button>
        </div>
      </div>
    </div>

    <nav class="container flex flex-col md:flex-row justify-between items-center gap-4 py-4 border-t border-black/10 dark:border-white/10 dark:text-white">
      <div class="flex flex-wrap items-center gap-4">
        <div v-for="(item,index) in nav" :key="index">
          <NuxtLink activeClass="font-bold" :to="item.slug">{{item.title}}</NuxtLink>
        </div>
      </div>

      <div class="flex flex-wrap items-center gap-4">
        <div v-for="link in navLinks" :key="link.to">
          <NuxtLink activeClass="font-bold" :to="link.to">{{ link.label }}</NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const user = useSupabaseUser();

const auth = useSupabaseAuthClient();

const navLinks = [
  {
    to: '/content',
    label: 'Content'
  }
]

const handleLogout = async () => {
  await auth.auth.signOut();
  useRouter().push({
    name: '/',
  });
};

const nav = [
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