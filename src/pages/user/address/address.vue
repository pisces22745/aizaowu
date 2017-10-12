<template>
  <section id="address">
    <section id="security">
      <div class="content-header">
        <h1>地址管理</h1>
      </div>
      <div class="content-body">
        <div class="input-group">
          <label for="receiver-name">收货人</label>
          <input type="text" id="receiver-name">
        </div>
        <div class="input-group">
          <label for="receiver-area">所在地区</label>
          <input type="text" id="receiver-area">
        </div>
        <div class="input-group">
          <label for="receiver-address">详细地址</label>
          <input type="password" id="receiver-address">
        </div>
        <div class="input-group">
          <label for="receiver-mobile">手机号码</label>
          <input type="password" id="receiver-mobile">
        </div>
        <div class="set-default">
          <i class="iconfont" :class="[defaultFlag ? 'icon-checkbox-default' : 'icon-checkbox-active']" @click="defaultFlag = !defaultFlag"></i>
          <span>设为默认地址</span>
        </div>
        <button>保存</button>
      </div>
    </section>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        defaultFlag: false
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #address {
    #receiver-address {
      width: 480px;
    }
    .set-default, button {
      margin-left: 93px;
    }
    .set-default {
      margin-bottom: 30px;
      i {

      }
    }
    button {
      padding: 8px 20px;
      margin-left: 93px;
    }
  }
</style>
