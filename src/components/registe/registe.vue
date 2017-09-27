<template>
  <div id="login">
    <div class="input-wrapper">
      <input type="tel" v-model="mobile" placeholder="请输入手机号码">
    </div>
    <div class="input-wrapper">
      <input type="text" v-model="checkCode" placeholder="请输入验证码">
      <button class="check-code-msg">{{checkCodeMsg}}</button>
    </div>
    <div class="input-wrapper">
      <input type="password" v-model="password" placeholder="请输入密码">
    </div>
    <div class="input-wrapper">
      <button class="comfirm">注册</button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        mobile: '',
        checkCodeMsg: '获取验证码'
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
