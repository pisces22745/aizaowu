<template>
  <section id="security">
    <div class="content-header">
      <h1>账号安全</h1>
    </div>
    <div class="content-body">
      <div class="input-group">
        <label for="old-pwd">旧密码</label>
        <input type="password" id="old-pwd">
      </div>
      <div class="input-group">
        <label for="new-pwd">旧密码</label>
        <input type="password" id="new-pwd">
      </div>
      <div class="input-group">
        <label for="repeat-pwd">旧密码</label>
        <input type="password" id="repeat-pwd">
      </div>
      <button>保存</button>
    </div>
  </section>
</template>
<script>
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #security{
    button{
      padding: 8px 20px;
      margin-left: 93px;
    }
  }
</style>
