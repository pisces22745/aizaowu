<template>
  <section id="home">
    <y-header></y-header>
    <router-view></router-view>
  </section>
</template>
<script>
  import Yheader from '@/components/header/header'
  import designLogin from '@/components/login/designlogin'

  export default {
    data() {
      return {}
    },
    mounted() {
    },
    components: {
      'y-header': Yheader,
      'design-login': designLogin
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
