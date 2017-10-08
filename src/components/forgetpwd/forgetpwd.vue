<template>
  <div id="forgetpwd">
    <div class="input-wrapper">
      <input type="tel" v-model="mobile" placeholder="请输入手机号码">
    </div>
    <div class="input-wrapper check-code clearfix">
      <input type="text" v-model="checkCode" class="fl" placeholder="请输入验证码">
      <button class="check-code-msg fr" :class="{disabled: checkCodeFlag}" @click="getCheckCode">{{checkCodeMsg}}
      </button>
    </div>
    <div class="input-wrapper">
      <input type="password" v-model="password" placeholder="请输入新密码">
    </div>
    <div class="input-wrapper">
      <input type="password" v-model="password1" placeholder="请确认新密码">
    </div>
    <div class="input-wrapper">
      <button class="comfirm" @click="resetPwd">重置密码</button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        mobile: '',
        checkCodeMsg: '获取验证码',
        checkCode: '',
        checkCodeFlag: false,
        password: '',
        password1: ''
      }
    },
    methods: {
      getCheckCode() {
        if (!this.checkCodeFlag) {
          let mobileReg = /^(13|14|15|17|18)[0-9]{9}$/
          let _this = this
          if (mobileReg.test(this.mobile)) {
            let i = 20
            _this.checkCodeMsg = --i + '秒重新获取'
            this.checkCodeFlag = true
            let clock = setInterval(function () {
              if (i > 1) {
                i--
                _this.checkCodeMsg = i < 10 ? '0' + i + '秒重新获取' : i + '秒重新获取'
              } else {
                _this.checkCodeMsg = '重新获取'
                _this.checkCodeFlag = false
                clearInterval(clock)
              }
            }, 1000)
          } else if (this.mobile === '') {
            alert('请先输入手机号')
          } else {
            alert('手机号格式不正确')
          }
        }
      },
      resetPwd() {
        console.log('reset')
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #forgetpwd {
    .input-wrapper {
      input {
        width: 100%;
      }
      &.check-code {
        input {
          width: 150px;
        }
        .check-code-msg {
          width: 120px;
          font-size: 15px;
          height: 50px;
          &.disabled {
            background-color: #aaa;
          }
        }
      }
    }
  }
</style>
