<template>
  <component :is="typeComponent" class="btn">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    typeComponent: {
      type: String,
      default: 'nuxt-link'
    }
  },
}
</script>

<style lang="postcss" scoped>
.btn {
  @apply bg-primary text-white py-2 px-4 rounded-3xl flex items-center justify-center w-max font-raleway uppercase cursor-pointer;
}

.btn-icon {
  @apply rounded-full px-0 w-10 h-10 flex items-center justify-center;
}
</style>
