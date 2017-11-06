<template>
  <section id="account">
    作品管理
  </section>
</template>
<script>

  export default {
    data() {
      return {}
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
    }
  }
</style>
