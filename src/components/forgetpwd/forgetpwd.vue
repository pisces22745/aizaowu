<template>
  <div id="forgetpwd">
    <div class="input-wrapper">
      <input type="tel" v-model="email" placeholder="请输入邮箱">
    </div>
    <div class="input-wrapper check-code clearfix">
      <input type="text" v-model="checkCode" class="fl" placeholder="请输入验证码">
      <button class="button check-code-msg fr" :class="{disabled: checkCodeFlag}" @click="getCheckCode">{{checkCodeMsg}}
      </button>
    </div>
    <div class="input-wrapper">
      <input type="password" v-model="password" placeholder="请输入新密码">
    </div>
    <div class="input-wrapper">
      <input type="password" v-model="password1" placeholder="请确认新密码">
    </div>
    <div class="input-wrapper">
      <button class="button comfirm" @click="resetPwd">重置密码</button>
    </div>
  </div>
</template>
<script>
  import {modifyLoginPwd, sendEmailCode} from '../../config/api'

  export default {
    data() {
      return {
        email: '',
        checkCodeMsg: '获取验证码',
        checkCode: '',
        checkCodeFlag: false,
        password: '',
        password1: ''
      }
    },
    methods: {
      getCheckCode() {
        let emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
        if (this.checkCodeMsg === '获取验证码' && emailReg.test(this.email)) {
//          let mobileReg = /^(13|14|15|17|18)[0-9]{9}$/
//          if (mobileReg.test(this.mobile)) {
          sendEmailCode({
            email: this.email,
            type: 1
          }).then(res => {
            if (res.code === 0) {
              this.$message({
                message: '发送成功！',
                type: 'success'
              })
              let i = 20
              this.checkCodeMsg = --i + '秒重新获取'
              this.checkCodeFlag = true
              let clock = setInterval(() => {
                if (i > 1) {
                  i--
                  this.checkCodeMsg = i < 10 ? '0' + i + '秒重新获取' : i + '秒重新获取'
                } else {
                  this.checkCodeMsg = '重新获取'
                  this.checkCodeFlag = false
                  clearInterval(clock)
                }
              }, 1000)
            } else {
              this.$message({
                message: res.msg,
                type: 'error'
              })
            }
          })
//          } else if (this.mobile === '') {
//            alert('请先输入手机号')
//          } else {
//            alert('手机号格式不正确')
//          }
        } else if (!emailReg.test(this.email)) {
          if (this.email === '') {
            this.$message({
              message: '请输入邮箱',
              type: 'warning'
            })
          } else {
            this.$message({
              message: '邮箱格式不正确',
              type: 'warning'
            })
          }
        }
      },
      modifyPwd() {
        modifyLoginPwd({
          email: this.email,
          passwd: this.password,
          verifyCode: this.checkCode
        }).then(res => {
          if (res.code === 0) {
            alert('成功')
          } else {
            alert('失败')
          }
        })
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
