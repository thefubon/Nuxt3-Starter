<template>
  <main>
    <h1 class="text-2xl font-bold">The page is only available to registered users!</h1>
  </main>
</template>

<script setup>
useHead({
  title: "Secret",
});

definePageMeta({
  middleware: "auth",
});
</script>