<template>
  <section id="home">
    <y-header></y-header>
    <div @click="close" style="min-height: 800px;">
      <router-view></router-view>
    </div>
    <transition name='fade'>
      <y-frame v-if="loginFlag">
        <login></login>
      </y-frame>
    </transition>
    <transition name='fade'>
      <y-frame v-if="registeFlag">
        <registe></registe>
      </y-frame>
    </transition>
    <transition name='fade'>
      <y-frame v-if="forgetPwdFlag">
        <forgetpwd></forgetpwd>
      </y-frame>
    </transition>
  </section>
</template>
<script>
  import Yheader from '@/components/header/header'
  import Yframe from '@/components/frame/frame'
  import login from '@/components/login/login'
  import registe from '@/components/registe/registe'
  import forgetpwd from '@/components/forgetpwd/forgetpwd'
  import {mapState, mapMutations} from 'vuex'

  export default {
    data() {
      return {}
    },
    computed: {
      ...mapState(['loginFlag', 'registeFlag', 'forgetPwdFlag'])
    },
    methods: {
      ...mapMutations(['TOGGLE_LOGIN_FRAME', 'TOGGLE_REGISTE_FRAME', 'TOGGLE_FORGETPWD_FRAME']),
      close() {
        if (this.loginFlag) {
          this.TOGGLE_LOGIN_FRAME()
        }
        if (this.registeFlag) {
          this.TOGGLE_REGISTE_FRAME()
        }
        if (this.forgetPwdFlag) {
          this.TOGGLE_FORGETPWD_FRAME()
        }
      }
    },
    mounted() {
    },
    components: {
      'y-header': Yheader,
      'y-frame': Yframe,
      login,
      registe,
      forgetpwd
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
