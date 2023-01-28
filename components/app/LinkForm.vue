<template>
  <div>

    <form>
      <div class="flex gap-5 items-end">

        <div class="w-5/12">
          <label for="url" class="mr-4">Long URL</label>
          <input type="text" id="url">
        </div>

        <div class="w-5/12">
          <label for="shortKey" class="mr-4">Short Key</label>
          <input type="text" id="shortKey">
        </div>

        <div class="w-2/12">
          <button class="w-full p-2 text-center bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium">Short</button>
        </div>

      </div>
    </form>

  </div>
</template>