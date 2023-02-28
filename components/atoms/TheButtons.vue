<template>
  <a v-if="as === 'a'" class="btn" v-bind="$attrs">
    <slot />
  </a>
  <button v-else-if="as === 'button'" class="btn" v-bind="$attrs">
    <slot />
  </button>
  <nuxt-link v-else to="" class="btn" v-bind="$attrs">
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    as: {
      type: String,
      default: 'a',
      validator (value) {
        return ['a', 'button', 'nuxt-link']
      }
    }
  }
}
</script>

<style lang="postcss">
.btn {
  @apply bg-primary text-white py-2 px-4 rounded-3xl flex items-center justify-center w-max font-raleway uppercase;

  &.btn-rounded { @apply rounded-full px-0 w-10 h-10; }
}
</style>
