<template>
  <section id="home">
    <y-header></y-header>
    <router-view></router-view>
  </section>
</template>
<script>
  import Yheader from '@/components/header/header'

  export default {
    components: {
      'y-header': Yheader
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
