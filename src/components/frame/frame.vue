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
    background-color: rgba(255, 255, 255, .8);
    & > i {
      display: block;
      width: 129px;
      height: 54px;
      margin-bottom: 40px;
      background: url("../../../static/image/logo.png") no-repeat center center/100%;
    }
    .input-wrapper {
      width: 260px;
      margin: 0 0 20px;
      input {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        outline: none;
        padding: 14px;
        border: 1px solid #000;
        background-color: transparent;
        &::-webkit-input-placeholder{
          color: #fff;
          font-size: 16px;
        }
        &:-moz-placeholder{
          color: #fff;
          font-size: 16px;
        }
        &:-ms-input-placeholder{
          color: #fff;
          font-size: 16px;
        }
      }
    }
    button {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      padding: 15px;
      border: none;
      font-size: 20px;
      color: #fff;
      background-color: #000;
      &.comfirm {
        width: 100%;
      }
    }
  }
</style>
