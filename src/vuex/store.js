import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

// 应用初始状态
const state = {
  logined: false,
  designlogined: false,
  userInfo: {
    headerImg: '',
    username: ''
  },
  designInfo: {
    headerImg: '',
    username: ''
  },
  headerImg: '',
  loginFlag: false,
  registeFlag: false,
  forgetPwdFlag: false,
  designerLoginFlag: false
}

// 创建 store 实例
export default new Vuex.Store({
  state,
  mutations
})
