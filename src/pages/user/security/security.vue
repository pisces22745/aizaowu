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
      <button class="button" @click="modifyPwd">保存</button>
    </div>
  </section>
</template>
<script>
  import {modifyUserPasswd} from '../../../config/api'
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        oldPwd: '',
        newPwd: '',
        newPwdRepeat: ''
      }
    },
    computed: {
      ...mapGetters(['id'])
    },
    methods: {
      modifyPwd() {
        if (this.oldPwd !== '' && this.newPwd !== '' && this.newPwdRepeat === this.newPwd) {
          modifyUserPasswd({
            userId: this.id,
            oldPasswd: this.oldPwd,
            newPasswd: this.newPwd
          }).then(res => {
            if (res.code === 0) {
              this.$message({
                message: '修改密码成功',
                type: 'success'
              })
              this.oldPwd = ''
              this.newPwd = ''
              this.newPwdRepeat = ''
            } else {
              this.$message({
                message: res.msg,
                type: 'error'
              })
            }
          })
        } else if (this.oldPwd === '') {
          this.$message({
            message: '请输入旧密码',
            type: 'error'
          })
        } else if (this.newPwd === '') {
          this.$message({
            message: '请输入新密码',
            type: 'error'
          })
        } else {
          this.$message({
            message: '两次密码输入不一致',
            type: 'error'
          })
        }
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
