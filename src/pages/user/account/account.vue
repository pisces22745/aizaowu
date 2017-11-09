<template>
  <section id="account">
    <div class="content-header">
      <h1>基础资料</h1>
    </div>
    <div class="content-body">
      <div class="input-group">
        <label for="nick_name">昵称</label>
        <input type="text" id="nick_name" v-model="nick_name">
      </div>
      <div class="input-group">
        <label>性别</label>
        <div class="radio-wrapper">
          <el-radio v-model="sex" label="0">男</el-radio>
          <el-radio v-model="sex" label="1">女</el-radio>
        </div>
      </div>
      <div class="input-group">
        <label>生日</label>
        <el-date-picker
          v-model="birthday"
          type="date"
          placeholder="请选择出生日期"
          format="yyyy 年 MM 月 dd 日"
          value-format="yyyy-MM-dd"
          :picker-options="pickerOptions">
        </el-date-picker>
      </div>
      <div class="input-group">
        <label for="email">邮箱</label>
        <input type="text" id="email" v-model="email">
        <button class="hollow" @click="bindEmail">绑定</button>
      </div>
      <!--<div class="input-group">-->
      <!--<label for="mobile">手机</label>-->
      <!--<input type="text" id="mobile" v-model="mobile">-->
      <!--<button class="hollow">绑定</button>-->
      <!--</div>-->
      <div class="input-group">
        <label></label>
        <button class="submit" @click="submit">保存</button>
      </div>
    </div>
  </section>
</template>
<script>
  import {getBaseInfo, setBaseInfo, sendEmailCode, bindEmail} from '@/config/api'
  import {mapState, mapMutations} from 'vuex'

  export default {
    data() {
      return {
        nick_name: '',
        birthday: '',
        sex: '',
        email: '',
        mobile: '',
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        },
        baseInfo: {},
        flag: false
      }
    },
    computed: {
      ...mapState(['userInfo'])
    },
    methods: {
      ...mapMutations(['SET_USERINFO', 'GET_USERINFO']),
      submit() {
        if (this.nick_name !== this.baseInfo.nick_name || this.birthday !== this.baseInfo.birthday || this.sex !== this.baseInfo.sex) {
          setBaseInfo({
            nick_name: this.nick_name,
            birthday: this.birthday,
            sex: this.sex,
            email: this.email,
            mobile: this.mobile,
            id: this.userInfo.id
          }).then(res => {
            if (res.code === 0) {
              this.SET_USERINFO({user_name: this.nick_name})
//              this.GET_USERINFO()
              this.$message({
                message: res.msg,
                type: 'success'
              })
            } else {
              this.$message({
                message: res.msg,
                type: 'error'
              })
            }
          })
        } else {
          this.$message({
            message: '请至少更改一个信息',
            type: 'warning'
          })
        }
      },
      bindEmail() {
        if (this.email && this.email !== '' && this.email !== this.baseInfo.email) {
          sendEmailCode({
            email: this.email
          }).then(res => {
            if (res.code === 0) {
              this.$prompt('请输入验证码', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputPattern: /^[a-zA-Z0-9]{4}$/,
                inputErrorMessage: '验证码格式不正确'
              }).then(({value}) => {
                bindEmail({
                  id: this.userInfo.id,
                  email: this.email,
                  code: value
                }).then(res => {
                  if (res.code === 0) {
                    this.$message({
                      type: 'success',
                      message: '绑定成功'
                    })
                  } else {
                    this.$message({
                      type: 'error',
                      message: res.msg
                    })
                  }
                })
              }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '取消绑定'
                })
              })
            } else {
              this.$message({
                type: 'error',
                message: res.msg
              })
            }
          })
        } else {
          this.$message({
            type: 'warning',
            message: '请更改邮箱'
          })
        }
      }
    },
    mounted() {
      getBaseInfo({id: this.userInfo.id}).then(res => {
        if (res.code === 0) {
          this.baseInfo = res.data
          this.nick_name = this.baseInfo.nick_name
          this.birthday = this.baseInfo.birthday
          this.sex = this.baseInfo.sex + ''
          this.email = this.baseInfo.email
          this.mobile = this.baseInfo.mobile
        } else {
          this.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #account {
    padding: 30px 50px;
    input {
      width: 220px;
    }
    button.submit {
      padding: 8px 10px;
    }
  }
</style>
