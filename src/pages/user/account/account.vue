<template>
  <section id="account">
    <div class="content-header">
      <h1>基础资料</h1>
    </div>
    <div class="content-body">
      <div class="input-group">
        <label for="nickname">昵称</label>
        <input type="text" id="nickname">
      </div>
      <div class="input-group">
        <label>性别</label>
        <div class="radio-wrapper">
          <el-radio v-model="sex" label="1">男</el-radio>
          <el-radio v-model="sex" label="0">女</el-radio>
        </div>
      </div>
      <div class="input-group">
        <label for="nickname">生日</label>
        <el-date-picker
          v-model="birthday"
          type="date"
          placeholder="请选择出生日期"
          :picker-options="pickerOptions">
        </el-date-picker>
      </div>
      <div class="input-group">
        <label for="email">邮箱</label>
        <input type="text" id="email">
        <button class="hollow">绑定</button>
      </div>
      <div class="input-group">
        <label for="mobile">手机</label>
        <input type="text" id="mobile">
        <button class="hollow">绑定</button>
      </div>
      <div class="input-group">
        <label></label>
        <button class="submit">保存</button>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        birthday: '',
        sex: '',
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        }
      }
    },
    mounted() {

    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #account {
    padding: 30px 50px;
    button.submit {
      padding: 8px 10px;
    }
  }
</style>
