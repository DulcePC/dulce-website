<template>
  <section class="bg-secondary bg-opacity-[0.15] md:pt-20 md:pb-48 py-8" id="projects">
    <div class="container">
      <h2 class="mx-auto lg:mb-12 mb-6">
        My Projects
      </h2>
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
import projects from '~~/assets/mocks/projects';

export default {
  data() {
    return {
      cards: projects
    }
  }
}
</script>