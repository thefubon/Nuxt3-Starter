<template>

<div>
  <div class="flex items-center">
    <!-- <h1>Color mode: {{ $colorMode.value }}</h1> -->
    <select class="inline-block w-[110px] py-1 px-4 border-2 font-medium focus:outline-none focus:ring-0 border-indigo-600 bg-indigo-600 text-white rounded-full dark:bg-white dark:text-indigo-600" v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="sepia">Sepia</option>
    </select>
  </div>

  <!-- <ColorScheme placeholder="..." tag="span">
    Color mode: <b>{{ $colorMode.preference }}</b>
    <span v-if="$colorMode.preference === 'system'">(<i>{{ $colorMode.value }}</i> mode detected)</span>
  </ColorScheme>

  <div class="hs-dropdown relative inline-flex [--placement:top-right]">
    <button id="hs-dropup" type="button" class="hs-dropdown-toggle inline-flex gap-x-2">
      <span v-if="$colorMode.preference === 'system'">
        <Icon class="text-black dark:text-white hover:text-black block dark:hover:text-primary duration-150" name="uil:desktop" size="25" />
      </span>

      <span v-else-if="$colorMode.preference === 'light'">
        <Icon class="text-black dark:text-white hover:text-black block dark:hover:text-primary duration-150" name="uil:sun" size="25" />
      </span>

      <span v-else-if="$colorMode.preference === 'dark'">
        <Icon class="text-black dark:text-white hover:text-black block dark:hover:text-primary duration-150" name="uil:moon" size="25" />
      </span>
    </button>

    <div class="hs-dropdown-menu hidden opacity-0 transition-[opacity,margin] hs-dropdown-open:opacity-100" aria-labelledby="hs-dropup">
      <div class="duration z-10 flex flex-col gap-3 rounded-lg bg-white p-4 text-sm shadow-md dark:bg-gray-30">
        <button class="flex items-center gap-x-2" @click="$colorMode.preference = 'system'">
          <Icon name="uil:desktop" size="20" />
          <span>Системная тема</span>
        </button>
        <button class="flex items-center gap-x-2" @click="$colorMode.preference = 'light'">
          <Icon name="uil:sun" size="20" />
          <span>Светлая тема</span>
        </button>
        <button class="flex items-center gap-x-2" @click="$colorMode.preference = 'dark'">
          <Icon name="uil:moon" size="20" />
          <span>Тёмная тема</span>
        </button>
      </div>
    </div>
  </div> -->

</div>
  
</template>

<script setup>
const colorMode = useColorMode()
console.log(colorMode.preference)

// definePageMeta({
//   colorMode: 'light',
// })
</script>
<style>
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
