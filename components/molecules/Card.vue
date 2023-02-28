<template>
  <nuxt-link to="/detail" class="card" v-bind="$attrs">
    <figure>
      <img :src="information.attributes.image" :alt="information.title">
    </figure>
    <h4>{{ information.attributes.title }}</h4>
    <p>{{ information.attributes.description }}</p>
    <span>View more</span>
  </nuxt-link>
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
    @apply mb-3 overflow-hidden w-full;

    img {
      @apply w-full h-60 object-cover object-center duration-300;
    }
  }

  h4 { @apply font-adamia text-black mb-2 text-xl; }

  p { @apply text-base font-raleway text-black mb-4; }

  span { @apply font-raleway text-primary; }

  &:hover figure img { @apply scale-110; }
  &:hover span { @apply font-bold; }

}
</style>
