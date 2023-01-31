<template>
  <div>
    <TheHeader />
    <main class="container py-10">
      <div class="prose max-w-none">
        <slot />
      </div>
    </main>
    <TheFooter />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  @apply transition-all duration-500;
}
.page-enter-from,
.page-leave-to {
  @apply -translate-y-2 opacity-0;
}
</style>