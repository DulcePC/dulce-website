<template>
  <main class="lg:pt-24 pt-14 border-n border-b-[30px] border-primary">
    <molecules-fixed-social-media />
    <PopulationHeroSection></PopulationHeroSection>
    <PopulationAbout></PopulationAbout>
    <PopulationServices></PopulationServices>
    <PopulationProjects></PopulationProjects>
    <PopulationBlog></PopulationBlog>
    <PopulationContact></PopulationContact>
  </main>
</template>

<script>

export default {
  name: 'HomePage',
  // async asyncData ({ $axios }) {
  //   const { data } = await $axios.get('/blogs')
  //   return { posts: data.data }
  // },
  data () {
    return {
      card: {}
    }
  }
}
</script>
