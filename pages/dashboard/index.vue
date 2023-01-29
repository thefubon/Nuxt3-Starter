<template>
  <section>
    <h1 class="text-4xl">Dashboard</h1>

    <div>
      <AppLinkForm @created="refresh" />
    </div>

    <div >
      <AppLinkItem v-for="link in data"
        :key="link.id"
        :link="{
          shortKey: link.key,
          longUrl: link.long_url || '',
          id: link.id,
        }"
        class="mt-5"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Database } from "types/supabase"

useHead({
  title: "Dashboard",
});

definePageMeta({
  middleware: "auth",
});

const client = useSupabaseClient<Database>();

const user = useSupabaseUser();

const { data, refresh } = useAsyncData("links", async () => {
  const { data, error } = await client
    .from("links")
    .select("*")
    .eq("user_id", user.value?.id);
  return data;
});

console.log({ data });
</script>