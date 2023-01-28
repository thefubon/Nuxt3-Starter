<template>
  <div class="flex justify-between items-center p-4 border rounded-md">
    <div>
      {{ link.longUrl }}
    </div>
    <div>
      {{ link.shortKey }}
    </div>
    <div>
      {{ link.id }}
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  link: {
    shortKey: string;
    longUrl: string;
    id: string;
  };
}>();
</script>