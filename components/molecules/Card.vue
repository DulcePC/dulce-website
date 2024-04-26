<template>
  <a :href="information.status === 'finished' ? information.pageLink : '/'"  :target="information.status === 'finished' ? '_blank' : ''" class="card">
    <figure>
      <img :src="information.img" :alt="information.title">
    </figure>
    <div class="px-2">
      <h4>{{ information.title }}</h4>
      <p>{{ information.description }}</p>
      <span :class="{ 'finished': status === 'finished', 'progress': status === 'progress' }">
        {{ status === 'finished' ? 'Finished' : 'In progress'}}
      </span>
    </div>
  </a>
</template>

<script lang="ts" setup>
const props = defineProps({
  information: Object
});

const status = computed(() => {
  return props.information.status === 'finished' ? 'finished' : 'progress';
});

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

  span {
    @apply font-raleway font-semibold;
    &.progress { @apply bg-yellow-600 text-white p-2 rounded-lg; }
    &.finished { @apply text-white bg-green-600 p-2 rounded-lg; }
  }

  &:hover figure img { @apply scale-110; }
}
</style>
