<template>
  <a :href="information.status === 'finished' ? information.pageLink : '/'"  :target="information.status === 'finished' ? '_blank' : ''" class="card">
    <figure>
      <img :src="information.img" :alt="information.title">
    </figure>
    <div class="px-2">
      <h4>{{ information.title }}</h4>
      <p>{{ information.description }}</p>
      <span v-if="information.status === 'finished'">View more</span>
      <span v-else class="bg-blue-400 text-white p-2 rounded-lg">This page is in progress...</span>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    information: {
      type: [Array, Object]
    }
  }
}
</script>

<style lang="postcss" scoped>
.card {
  @apply w-full;

  figure {
    @apply mb-3 overflow-hidden w-full h-60 bg-white flex items-center justify-center;

    img {
      @apply object-contain object-center duration-300;
    }
  }

  h4 { @apply font-adamia font-semibold text-black mb-2 text-xl; }

  p { @apply text-base font-raleway font-normal text-black mb-4; }

  span { @apply font-raleway text-primary font-semibold; }

  &:hover figure img { @apply scale-110; }
}
</style>
