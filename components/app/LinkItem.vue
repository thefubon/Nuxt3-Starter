<template>
  <div class="flex justify-between items-center p-4 gap-4 border rounded-md">
    <div class="flex-1 text-xl font-bold">
      {{ link.shortKey }}
    </div>
    <div class="flex-1">
      {{ link.longUrl.slice(0, 20) + "..." }}
    </div>
    <div>
      <button
        class="w-10 h-10 border rounded-md"
        @click="handleCopy"
      >
        <Icon name="material-symbols:content-copy" size="24" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  link: {
    shortKey: string;
    longUrl: string;
    id: number;
  };
}>();

const config = useRuntimeConfig();

const handleCopy = () => {
  navigator.clipboard.writeText(
    `${config.public.appUrl}/${props.link.shortKey}`
  );

  alert("Copied to Clipboard");
};
</script>