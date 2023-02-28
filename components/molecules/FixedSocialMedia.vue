<template>
  <nav class="w-[50px] h-auto py-6 flex flex-col items-center bg-primary fixed top-1/2 xl:left-0 right-0">
    <a href="mailto:dulcefrancelispc@gmail.com">
      <img src="img/email.svg" alt="DulcePC" class="w-3">
    </a>
    <a href="https://www.linkedin.com/in/dulceperezsoft" target="blank">
      <img src="img/linkedin.svg" alt="DulcePC" class="w-3">
    </a>
    <a href="https://github.com/DulcePC" target="blank">
      <img src="img/github.svg" alt="DulcePC" class="w-3">
    </a>
  </nav>
</template>

<style lang="postcss" scoped>
  a { @apply w-8 h-8 mb-6 bg-white rounded-full flex items-center justify-center; }
  nav a:last-child { @apply mb-0; }
</style>
