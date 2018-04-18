<template>
  <transition name="fade">
    <div class="frame">
      <i class="iconfont icon-chacha" @click="CLOSE_FRAME"></i>
      <i class="logo"></i>
      <login v-if="frameType===0"></login>
      <registe v-if="frameType===1"></registe>
      <forgetpwd v-if="frameType===2"></forgetpwd>
      <design-login v-if="frameType===3"></design-login>
    </div>
  </transition>
</template>
<script>
  import {mapGetters, mapMutations} from 'vuex'
  import login from '@/components/login/login'
  import registe from '@/components/registe/registe'
  import forgetpwd from '@/components/forgetpwd/forgetpwd'

  export default {
    data() {
      return {}
    },
    computed: {
      ...mapGetters(['frameFlag', 'frameType'])
    },
    methods: {
      ...mapMutations(['TOGGLE_FRAME', 'CLOSE_FRAME'])
    },
    mounted() {},
    components: {
      login,
      registe,
      forgetpwd
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .frame {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 10;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    padding: 40px 25px;
    background-color: rgba(255, 255, 255, .9);
    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, .5);
    -moz-box-shadow: 0 0 10px rgba(0, 0, 0, .5);
    box-shadow: 0 0 10px rgba(0, 0, 0, .5);
    .logo {
      display: block;
      width: 129px;
      height: 54px;
      margin: 0 auto 40px;
      background: url("../../../static/image/logo.png") no-repeat center center/100%;
    }
    .icon-chacha {
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
    }
    .input-wrapper {
      width: 280px;
      margin: 0 0 20px;
      input {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        outline: none;
        padding: 14px;
        font-size: 15px;
        height: 50px;
        border: 1px solid #000;
        background-color: transparent;
        &::-webkit-input-placeholder {
          color: #bdbdbd;
          font-size: 15px;
        }
        &::-moz-placeholder { // 火狐两个冒号
          color: #bdbdbd;
          font-size: 15px;
        }
        &:-ms-input-placeholder { // ie 一个冒号
          color: #bdbdbd;
          font-size: 15px;
        }
      }
    }
    button {
      padding: 15px 12px;
      font-size: 18px;
      height: 48px;
      &.comfirm {
        width: 100%;
      }
    }
  }
</style>
