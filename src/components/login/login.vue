<template>
  <div id="login">
    <div class="input-wrapper">
      <input type="tel" v-model="email" placeholder="请输入邮箱">
    </div>
    <div class="input-wrapper">
      <input type="password" v-model="password" @keyup.enter="login" placeholder="请输入密码">
    </div>
    <div class="input-wrapper">
      <button class="button comfirm" @click="login">登录</button>
    </div>
    <div class="input-wrapper registe-forget clearfix">
      <span class="fl" @click="TOGGLE_FRAME(1)">注册账号</span>
      <span class="fr" @click="TOGGLE_FRAME(2)">忘记密码</span>
    </div>
    <div class="input-wrapper login-way">
      <h5>使用第三放账号登陆</h5>
      <div class="login-way-wrapper">
        <span class="iconfont icon-weixin"></span>
        <span class="iconfont icon-weibo"></span>
        <span class="iconfont icon-qq"></span>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapMutations} from 'vuex'
  import {login} from '@/config/api'

  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      ...mapMutations(['TOGGLE_FRAME', 'CLOSE_FRAME', 'SET_USERINFO']),
      login() {
        let emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
        if (emailReg.test(this.email) && this.password.length >= 6 && this.password.length <= 20) {
          login({
            email: this.email,
            password: this.password
          }).then(res => {
            if (res.code === 0) {
              this.$message({
                message: res.msg,
                type: 'success'
              })
              let data = res.data
              // this.SET_USERINFO(res.data)
              this.SET_USERINFO({
                headimg: data.heading,
                id: data.id,
                email: data.email,
                sex: data.sex,
                userName: data.nickName
              })
              this.CLOSE_FRAME()
            } else {
              this.$message({
                message: res.msg,
                type: 'warning'
              })
            }
          })

        } else if (!emailReg.test(this.email)) {
          if (this.email === '') {
            this.$message({
              message: '请输入邮箱',
              type: 'warning'
            })
          } else {
            this.$message({
              message: '邮箱格式错误',
              type: 'warning'
            })
          }
        } else {
          this.$message({
            message: '密码必须大于等于6位小于20位',
            type: 'warning'
          })
        }
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
      &.login-way {
        margin: 0;
        h5 {
          margin-bottom: 30px;
        }
        span {
          display: inline-block;
          font-size: 30px;
          width: 45px;
          text-align: center;
          cursor: pointer;
        }
      }
    }
  }
</style>
