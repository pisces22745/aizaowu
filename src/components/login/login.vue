<template>
  <div id="login">
    <div class="input-wrapper">
      <input type="tel" v-model="mobile" placeholder="请输入手机号码">
    </div>
    <div class="input-wrapper">
      <input type="password" v-model="password" placeholder="请输入密码">
    </div>
    <div class="input-wrapper">
      <button class="comfirm">登录</button>
    </div>
    <div class="input-wrapper registe-forget clearfix">
      <span class="fl">注册账号</span>
      <span class="fr">忘记密码</span>
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
  export default {
    data() {
      return {
        mobile: '',
        password: ''
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
      h5{
        position: relative;
        color: #999;
        &::before,&::after{
          content: '';
          position: absolute;
          top:50%;
          width: 60px;
          height: 1px;
          background-color: #bbb;
        }
        &::before{
          left:0;
        }
        &::after{
          right:0;
        }
      }
      &.registe-forget{
        margin:0 0 40px;
        span{
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          display: block;
          width:50%;
          text-align: center;
          &:first-child{
            border-right: 1px solid #999;
          }
        }
      }
      &.login-way{
        margin: 0;
        h5{
          margin-bottom: 30px;
        }
        span{
          display: inline-block;
          font-size: 30px;
          width: 45px;
          text-align: center;
        }
      }
    }
  }
</style>
