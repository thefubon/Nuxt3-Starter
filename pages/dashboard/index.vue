<template>
  <section>
    <h1 class="text-4xl">Dashboard</h1>
  </section>
</template>

<script setup>
useHead({
  title: "Dashboard",
});

definePageMeta({
  middleware: "auth",
});

// const user = useSupabaseUser();
</script>