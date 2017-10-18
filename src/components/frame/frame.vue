<template>
  <div class="frame">
    <i></i>
    <slot>登陆注册忘记密码</slot>
  </div>
</template>
<script>
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .frame {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    padding: 40px 25px;
    background-color: rgba(255, 255, 255, .9);
    -webkit-box-shadow: 0 0 10px rgba(0,0,0,.5);
    -moz-box-shadow:  0 0 10px rgba(0,0,0,.5);
    box-shadow:  0 0 10px rgba(0,0,0,.5);
    & > i {
      display: block;
      width: 129px;
      height: 54px;
      margin: 0 auto 40px;
      background: url("../../../static/image/logo.png") no-repeat center center/100%;
    }
    .input-wrapper {
      width: 280px;
      margin: 0 0 20px;
      input {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        outline: none;
        padding: 14px;
        font-size: 15px;
        height: 50px;
        border: 1px solid #000;
        background-color: transparent;
        &::-webkit-input-placeholder{
          color: #bdbdbd;
          font-size: 15px;
        }
        &::-moz-placeholder{  // 火狐两个冒号
          color: #bdbdbd;
          font-size: 15px;
        }
        &:-ms-input-placeholder{  // ie 一个冒号
          color: #bdbdbd;
          font-size: 15px;
        }
      }
    }
    button {
      padding: 15px 12px;
      font-size: 18px;
      height: 48px;
      &.comfirm {
        width: 100%;
      }
    }
  }
</style>
