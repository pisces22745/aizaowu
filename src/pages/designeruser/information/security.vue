<template>
  <section id="account">
    <div class="content-header clearfix">
      <div class="title fl">
        <span>登录密码</span>
      </div>
      <div class="title fr active">
        <span>提现密码</span>
      </div>
    </div>
    <div class="content-body">
      <div class="password">
        <p>旧密码</p>
        <input  type="text"/>
      </div>
      <div class="password">
        <p>新密码</p>
        <input class="" type="text"/>
      </div>
      <div class="password">
        <p>重置新密码</p>
        <input class="" type="text"/>
      </div>
      <div class="save">
        <button>保存</button>
      </div>

    </div>
  </section>
</template>
<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #account {
    padding: 30px 50px;
    .content-header{
      height: 25px;
      border-bottom: none;
      .title{
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        width: 50%;
        height: 25px;
        line-height: 25px;
        text-align: center;
        &:first-child{
          border-right: 2px solid #000;
        }
        &.active{
          span{
            border-bottom: 3px solid #000;
          }
        }
        span{
          padding: 8px 0;
        }
      }
    }
    .content-body {
      font-size: 20px;
      .password{
        width:100%;
        margin-bottom: 35px;
        & p{
          width:85px;
          display: inline-block;
        }
        & input{
          margin-left: 20px;
        }

      }
      & button {
        padding: 8px 25px;
        margin-left: 108px;
        margin-top: 10px;
        font-size: 16px;
      }

    }
  }
</style>
