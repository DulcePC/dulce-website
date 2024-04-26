<template>
  <section class="bg-secondary bg-opacity-[0.15] md:pt-20 md:pb-14 py-8" id="about">
    <div class="container">
      <h2 class="mx-auto font-semibold">About me</h2>
      <p class="mb-4 text-xl text-center font-medium mt-4">My professional training and skills with which I can help you</p>
      <div class="grid md:grid-cols-2 grid-cols-1 gap-8 mt-20">
        <div>
          <p class="mb-4 text-sm text-justify font-raleway">
            My primary responsibility is to create and maintain the client-facing portion of websites, ensuring they are visually appealing, user-friendly, and responsive.
          </p>
          <atoms-button typeComponent="a" href="/docs/cv.pdf" download class="mt-4 md:ml-0 mx-auto h-10 text-xs">
            Download My CV
          </atoms-button>
          <div class="flex items-center flex-wrap gap-2 mt-8 max-w-[400px] w-full">
            <span v-for="(tec, index) in tecnologies"
              :key="index"
              class="badge"
              :style="{ backgroundColor: `#${tec.color}` }"
            >
              {{ tec.name  }}
            </span>
          </div>
        </div>
        <figure>
          <img src="/img/about.png" alt="Dulce Perez">
        </figure>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const tecnologies = [
  {
    name: 'HTML5',
    color: 'E44C23'
  },
  {
    name: 'CSS3',
    color: '4F00F1'
  },
  {
    name: 'Tailwind CSS',
    color: '3EBFF8'
  },
  {
    name: 'JavaScript',
    color: 'F7E025'
  },
  {
    name: 'Beginner Typescript',
    color: '377CC8'
  },
  {
    name: 'Nuxt',
    color: '1F1F1F'
  },
  {
    name: 'Beginner Angular',
    color: 'DE0837'
  }
];
</script>

<style lang="postcss" scoped>
.badge {
  @apply inline-flex items-center px-2 h-6 rounded-2xl text-sm font-semibold font-raleway text-white mr-2;
}
</style>