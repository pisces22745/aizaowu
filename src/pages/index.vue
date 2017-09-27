<template>
  <section id="home">
    <y-header></y-header>
    <router-view></router-view>
    <y-frame>
      <login></login>
    </y-frame>
    <!--<registe></registe>-->
  </section>
</template>
<script>
  import Yheader from '@/components/header/header'
  import Yframe from '@/components/frame/frame'
  import login from '@/components/login/login'
//  import registe from '@/components/registe/registe'

  export default {
    components: {
      'y-header': Yheader,
      'y-frame':Yframe,
      login
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
