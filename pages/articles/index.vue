<template>
  <main>
    <ContentList path="/articles" :sort="{ title: -1}" v-slot="{ list }">

      <div v-for="article in list" :key="article._path">
        <h2 class="text-2xl font-bold">
          <NuxtLink :to="article._path">
            {{ article.title }}
          </NuxtLink>
          <Icon name="uil:github" />
          <NuxtImg class="rounded-md" provider="cloudinary" format="webp" sizes="sm:480px" quality="80" :src="article.cover" :alt="article.alt" width="250" height="250" />
        </h2>
        <p>{{ article.description }}</p>
      </div>

    </ContentList>
  </main>
</template>

<script>
definePageMeta({
  layout: 'articles'
})
</script>