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
        <div class="radio-wrapper male">
          <input type="radio" name="sex" value="0" selected>
        </div>
        <div class="radio-wrapper female">
          <input type="radio" name="sex" value="1">
        </div>
      </div>
      <div class="input-group">
        <label for="nickname">生日</label>
        <div class="select-wrapper year">
          <input type="text">
        </div>
        <div class="select-wrapper month">
          <input type="text">
        </div>
        <div class="select-wrapper day">
          <input type="text">
        </div>
      </div>
      <div class="input-group">
        <label for="email">邮箱</label>
        <input type="text" id="email">
        <button class="button hollow">绑定</button>
      </div>
      <div class="input-group">
        <label for="mobile">手机</label>
        <input type="text" id="mobile">
        <button class="button hollow">绑定</button>
      </div>
      <button class="button submit">保存</button>
    </div>
  </section>
</template>
<script>
  import y_date from '@/components/select/select'

  export default {
    data() {
      return {
        years: [1900, 1901]
      }
    },
    components: {
      'y-date': y_date
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #account {
    padding: 30px 50px;
    .content-body {
      .input-group {
        .radio-wrapper {
          &::before {
            margin-right: 5px;
            font-size: 16px;
          }
          &.female {
            &::before {
              content: '女';
            }
          }
          &.male {
            &::before {
              content: '男';
            }
          }
        }
        .select-wrapper {
          display: inline-block;
          &::after {
            margin-right: 15px;
          }
          &.year {
            &::after {
              content: '年';
            }
          }
          &.month {
            &::after {
              content: '月';
            }
          }
          &.day {
            &::after {
              content: '日';
            }
          }
          input {
            width: 100px;
            margin-right: 15px;
          }
        }
      }
      .submit{
        margin-left: 93px;
        padding: 10px 15px;
      }
    }
  }
</style>
