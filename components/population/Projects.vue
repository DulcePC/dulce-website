<template>
  <section class="bg-secondary bg-opacity-[0.15] md:pt-20 md:pb-48 py-8" id="projects">
    <div class="container">
      <h2 class="mx-auto">
        My Projects
      </h2>
      <p class="mt-3 lg:mb-12 mb-6 text-xl text-center">
        My professional training and skills with which I can help you
      </p>
      <div class="grid md:grid-cols-3 grid-cols-1 gap-4 justify-center">
        <molecules-card
          v-for="card in cards"
          :key="card.id"
          :information="card"
        />
      </div>
    </div>
  </section>
</template>

<script>
import projects from '~~/assets/helpers/projects';

export default {
  data() {
    return {
      cards: projects
    }
  }
}
</script>