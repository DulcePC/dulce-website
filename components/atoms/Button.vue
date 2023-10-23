<template>
  <component :is="typeComponent" class="btn">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    typeComponent: {
      type: String,
      default: 'NuxtLink'
    }
  },
}
</script>

<style lang="postcss" scoped>
.btn {
  @apply bg-primary text-white py-2 px-4 rounded-3xl flex items-center justify-center w-max font-raleway font-semibold uppercase cursor-pointer;
}

.btn-icon {
  @apply rounded-full px-0 w-10 h-10 flex items-center justify-center;
}
</style>
