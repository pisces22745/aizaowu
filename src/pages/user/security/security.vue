<template>
  <section id="security">
    <div class="content-header">
      <h1>账号安全</h1>
    </div>
    <div class="content-body">
      <div class="input-group">
        <label for="old-pwd">旧密码</label>
        <input type="password" id="old-pwd" v-model="oldPwd">
      </div>
      <div class="input-group">
        <label for="new-pwd">新密码</label>
        <input type="password" id="new-pwd" v-model="newPwd">
      </div>
      <div class="input-group">
        <label for="repeat-pwd">重复新密码</label>
        <input type="password" id="repeat-pwd" v-model="newPwdRepeat">
      </div>
      <button>保存</button>
    </div>
  </section>
</template>
<script>
  import {modifyLoginPwd} from '../../../config/api'
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        oldPwd: '',
        newPwd: '',
        newPwdRepeat: ''
      }
    },
    computed: {
      ...mapState(['userInfo'])
    },
    methods: {
      modifyPwd() {
        modifyLoginPwd({
          email: this.userInfo
        }).then(res => {
          if (res.code === 0) {

          } else {

          }
        })
      }
    },
    mounted() {
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #security {
    padding: 30px 50px;
    button {
      padding: 8px 20px;
      margin-left: 93px;
    }
  }
</style>
