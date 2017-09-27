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
    <div class="input-wrapper">
      <span>注册账号</span>
      <span>忘记密码</span>
    </div>
    <div class="input-wrapper">
      <h5>使用第三放账号登陆</h5>
      <div class="login-way">
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
      input {
        width: 100%;
      }
    }
  }
</style>
