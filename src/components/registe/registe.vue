<template>
  <div id="registe">
    <div class="input-wrapper">
      <input type="tel" v-model="email" placeholder="请输入邮箱">
    </div>
    <div class="input-wrapper check-code clearfix">
      <input type="text" v-model="checkCode" class="fl" placeholder="请输入验证码">
      <button class="check-code-msg fr" :class="{disabled: checkCodeFlag}" @click="getCheckCode">{{checkCodeMsg}}
      </button>
    </div>
    <div class="input-wrapper">
      <input type="password" v-model="password" placeholder="请输入密码">
    </div>
    <div class="input-wrapper">
      <button class="comfirm" @click="registe">注册</button>
    </div>
    <div class="login" @click="TOGGLE_LOGIN_FRAME">登录</div>
  </div>
</template>
<script>
  import {mapState, mapMutations} from 'vuex'
  import {addUser, sendEmailCode} from '@/config/api'

  export default {
    data() {
      return {
        email: '',
        checkCodeMsg: '获取验证码',
        checkCode: '',
        checkCodeFlag: false,
        password: ''
      }
    },
    computed: {
      ...mapState(['registeFlag', 'loginFlag', 'forgetPwdFlag'])
    },
    methods: {
      ...mapMutations(['TOGGLE_FORGETPWD_FRAME', 'TOGGLE_REGISTE_FRAME', 'TOGGLE_LOGIN_FRAME']),
      getCheckCode() {
        if (!this.checkCodeFlag) {
          let emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
          let _this = this
          if (emailReg.test(this.email)) {
            sendEmailCode({
              email: this.email
            }).then(res => {
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
            })
          } else if (this.email === '') {
            this.$message({
              message: '请先输入邮箱',
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
      registe() {
        if (this.email !== '' && this.checkCode !== '' && this.password !== '') {
          addUser({
            email: this.email,
            code: this.checkCode,
            passwd: this.password
          }).then(res => {
            if (res.code === 0) {
              this.TOGGLE_REGISTE_FRAME()
              this.$message({
                message: '注册成功',
                type: 'success'
              })
            } else {
              this.$message({
                message: res.msg,
                type: 'error'
              })
            }
          })
        } else if (this.email === '') {
          this.$message({
            message: '请输入邮箱',
            type: 'warning'
          })
        } else if (this.checkCode === '') {
          this.$message({
            message: '请输入验证码',
            type: 'warning'
          })
        } else {
          this.$message({
            message: '请输入密码',
            type: 'warning'
          })
        }
      }
    },
    mounted() {

    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #registe {
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
    .login {
      text-align: center;
      font-size: 16px;
      cursor: pointer;
      &::before {
        content: '已有账号？';
        color: #999;
      }
    }
  }
</style>
