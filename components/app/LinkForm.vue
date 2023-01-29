<template>
  <div>

    <form @submit.prevent="handleLinkForm">
      <div class="flex flex-col md:flex-row md:items-end gap-4">

        <div class="flex-1">
          <label for="url" class="text-xs">Long URL</label>
          <input
            v-model="form.long_url"
            type="text"
            id="url"
            class="w-full rounded-md"
          >
        </div>

        <div>
          <label for="shortKey" class="text-xs">Short Key</label>
          <input
            v-model="form.key"
            type="text"
            id="shortKey"
            class="w-full rounded-md"
          >
        </div>

        <div>
          <button class="w-full px-8 py-2 text-center bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium">Short</button>
        </div>

      </div>
    </form>

  </div>
</template>


<script lang="ts" setup>
import { nanoid } from 'nanoid';
import { Database } from 'types/supabase'

const client = useSupabaseClient<Database>();
const user = useSupabaseUser();

const form = reactive({
  long_url: "",
  key: "",
});

const handleLinkForm = async () => {

  try {
    const { data, error } = await client.from('links').insert({
      long_url: form.long_url,
      key: form.key,
      user_id: user.value?.id,
    });

    if (error) {
      alert(error.message);
      return;
    }

    createShortKey();
    form.long_url = "";
    alert("Link created successfully");
  } catch (e) {
    console.log(e);
  }

};

const createShortKey = (len:number = 8):void => {
  form.key = nanoid(len);
};

onMounted( () => {
  createShortKey();
});
</script>