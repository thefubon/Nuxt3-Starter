<template>

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
  </div>
  
</template>
