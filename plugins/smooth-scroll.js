import VueSmoothScroll from 'vue3-smooth-scroll'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueSmoothScroll, {
    offset: -95,
    updateHistory: false
  })
})