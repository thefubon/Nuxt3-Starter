<template>
  <section>
    <h1 class="text-4xl">Dashboard</h1>

    <div>
      <AppLinkForm />
    </div>

    <div >
      <AppLinkItem v-for="i in 10" :key="i" :link="{
        shortKey: 'Short Key',
        longUrl: 'Long Url',
        id: 'id'
      }" class="mt-5" />
    </div>
  </section>
</template>

<script lang="ts" setup>
  useHead({
    title: "Dashboard",
  });

  definePageMeta({
    middleware: "auth",
  });

  // const { data, refresh } = await useLinks().getAllLinks();

  // const handleRefresh = (newLink: any) => {
  //   refresh();
  // };
</script>