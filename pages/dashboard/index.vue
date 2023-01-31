<template>
  <section>
    <h1 class="text-4xl">Dashboard</h1>
    <p>Only User</p>
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