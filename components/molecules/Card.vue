<template>
  <a :href="information.pageLink" target="_blank" class="card">
    <figure>
      <img :src="information.img" :alt="information.title">
    </figure>
    <div class="px-2">
      <h4>{{ information.title }}</h4>
      <p>{{ information.description }}</p>
      <span>View more</span>
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
    @apply mb-3 overflow-hidden w-full h-60;

    img {
      @apply w-full h-full object-cover object-center duration-300;
    }
  }

  h4 { @apply font-adamia font-semibold text-black mb-2 text-xl; }

  p { @apply text-base font-raleway font-normal text-black mb-4; }

  span { @apply font-raleway text-primary font-semibold; }

  &:hover figure img { @apply scale-110; }
}
</style>
