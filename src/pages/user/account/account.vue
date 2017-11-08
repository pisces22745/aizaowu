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
          <el-radio v-model="sex" label="1">男</el-radio>
          <el-radio v-model="sex" label="0">女</el-radio>
        </div>
      </div>
      <div class="input-group">
        <label>生日</label>
        <el-date-picker
          v-model="birthday"
          type="date"
          placeholder="请选择出生日期"
          :picker-options="pickerOptions">
        </el-date-picker>
      </div>
      <div class="input-group">
        <label for="email">邮箱</label>
        <input type="text" id="email" v-model="email">
        <!--<button class="hollow">绑定</button>-->
      </div>
      <div class="input-group">
        <label for="mobile">手机</label>
        <input type="text" id="mobile" v-model="mobile">
        <!--<button class="hollow">绑定</button>-->
      </div>
      <div class="input-group">
        <label></label>
        <button class="submit" @click="submit">保存</button>
      </div>
    </div>
  </section>
</template>
<script>
  import {getBaseInfo, setBaseInfo} from '@/config/api'
  import {mapState} from 'vuex'

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
      submit() {
        if (this.nick_name !== this.baseInfo.nick_name || this.birthday !== this.baseInfo.birthday || this.sex !== this.baseInfo.sex || this.email !== this.baseInfo.email || this.mobile !== this.baseInfo.mobile) {
          setBaseInfo({
            nick_name: this.nick_name,
            birthday: this.birthday,
            sex: this.sex,
            email: this.email,
            mobile: this.mobile,
            id: this.userInfo.id
          }).then(res => {
            if (res.code === 0) {
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
      }
    },
    mounted() {
      getBaseInfo({id: this.userInfo.id}).then(res => {
        this.baseInfo = res.data
        this.nick_name = this.baseInfo.nick_name
        this.birthday = this.baseInfo.birthday
        this.sex = this.baseInfo.sex
        this.email = this.baseInfo.email
        this.mobile = this.baseInfo.mobile
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
