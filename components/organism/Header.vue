<template>
  <header class="w-full lg:h-24 h-14 shadow-md flex items-center fixed top-0 bg-white z-20">
    <div class="container mx-auto flex items-center lg:justify-between px-4">
      <NuxtLink to="/" class="flex-none">
        <img src="/img/logo.png" alt="Dulce Perez" class="lg:w-44 w-24 object-contain">
      </NuxtLink>
      <ul :class="{ open: open }">
        <li v-for="link in links" :key="link.id" class="lg:px-6 py-2">
          <NuxtLink class="lg:text-primary text-white font-semibold text-xs uppercase" :to="link">
            {{ link }}
          </NuxtLink>
        </li>
      </ul>
      <AtomsButton typeComponent="button" class="lg:min-w-[180px] lg:mx-0 ml-auto mr-4">
        FREE CONSULT
      </AtomsButton>
      <AtomsButton typeComponent="button" class="menu-icon btn-rounded" @click="this.open = !this.open">
        <img src="/img/menu.png" alt="icon" class="w-4">
      </AtomsButton>
    </div>
  </header>
</template>

<script>
import {menu} from '~~/assets/helpers/menu';

export default {
  data() {
    return {
      links: menu,
      open: false
    };
  }
}
</script>

<style lang="postcss" scoped>
ul {
  @apply lg:flex lg:items-center lg:w-max lg:static lg:bg-transparent lg:h-auto
  absolute h-screen top-14 right-0 w-64 bg-primary px-4 hidden;

  &.open { @apply block; }
}

.menu-icon { @apply lg:hidden !important; }
</style>
