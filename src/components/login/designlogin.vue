<template>
  <div id="login">
    <div class="input-wrapper">
      <input type="tel" v-model="mobile" placeholder="请输入手机号码">
    </div>
    <div class="input-wrapper">
      <input type="password" v-model="password" placeholder="请输入密码">
    </div>
    <div class="input-wrapper">
      <button class="comfirm" @click="login">登录</button>
    </div>
    <div class="input-wrapper clearfix">
      <span @click="TOGGLE_FORGETPWD_FRAME">忘记密码</span>
    </div>
    <div class="input-wrapper">
      <button class="hollow" @click="toBeDesigner">申请成为设计师</button>
    </div>
  </div>
</template>
<script>
  import {mapState, mapMutations} from 'vuex'

  export default {
    data() {
      return {
        mobile: '',
        password: ''
      }
    },
    computed: {
      ...mapState(['forgetPwdFlag'])
    },
    methods: {
      ...mapMutations(['TOGGLE_FORGETPWD_FRAME', 'TOGGLE_DESIGNERREGISTE_FRAME', 'DESIGNLOGIN']),
      login() {
        let mobileFlag = /^(13|14|15|17|18)[0-9]{9}$/
        if (mobileFlag.test(this.mobile) && this.password.length >= 6 && this.password.length <= 20) {
          this.DESIGNLOGIN({
            headerImg: 'http://c11.eoemarket.com/app0/449/449714/screen/2339617.jpg',
            username: '邵卢勤'
          })
          this.TOGGLE_DESIGNERREGISTE_FRAME()
          this.$router.push('/designeruser/account')
        } else if (!mobileFlag.test(this.mobile)) {
          if (this.mobile === '') {
            alert('请输入手机号')
          } else {
            alert('手机号格式错误')
          }
        } else {
          alert('密码必须大于等于6位小于20位')
        }
      },
      toBeDesigner() {
        this.TOGGLE_DESIGNERREGISTE_FRAME()
        this.$router.push('/bedesigner')
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #login {
    .input-wrapper {
      text-align: center;
      input {
        width: 100%;
      }
      h5 {
        position: relative;
        color: #999;
        &::before, &::after {
          content: '';
          position: absolute;
          top: 50%;
          width: 60px;
          height: 1px;
          background-color: #bbb;
        }
        &::before {
          left: 0;
        }
        &::after {
          right: 0;
        }
      }
      &.registe-forget {
        margin: 0 0 40px;
        span {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          display: block;
          width: 50%;
          text-align: center;
          cursor: pointer;
          &:first-child {
            border-right: 1px solid #999;
          }
        }
      }
      .hollow {
        margin: 20px 0 0;
        padding: 14px 30px;
        border: 2px solid #000;
      }
    }
  }
</style>
