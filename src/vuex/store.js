import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import {setStore, getStore, removeStore} from '@/common/storage'

Vue.use(Vuex)

// 应用初始状态
const state = {
  logined: false,
  userInfo: null,
  headerImg: '',
  loginFlag: false,
  registeFlag: false,
  forgetPwdFlag: false
}

// 定义所需的 mutations
const mutations = {
  INIT_USER(state) {
    let userInfo = getStore('userInfo')
    if (userInfo) {
      state.userInfo = JSON.parse(userInfo)
      state.logined = true
    }
  },
  TOGGLE_LOGIN_FRAME(state) {
    state.registeFlag = false
    state.forgetPwdFlag = false
    state.loginFlag = !state.loginFlag
  },
  TOGGLE_REGISTE_FRAME(state) {
    state.loginFlag = false
    state.forgetPwdFlag = false
    state.registeFlag = !state.registeFlag
  },
  TOGGLE_FORGETPWD_FRAME(state) {
    state.registeFlag = false
    state.loginFlag = false
    state.forgetPwdFlag = !state.forgetPwdFlag
  },
  LOGIN(state, {headerImg, username}) {
    state.logined = true
    state.userInfo = {
      headerImg: headerImg,
      username: username
    }
    setStore('userInfo', state.userInfo)
  },
  LOGOUT(state) {
    state.userInfo = null
    state.logined = false
    removeStore('userInfo')
  }
}
// 创建 store 实例
export default new Vuex.Store({
  state,
  mutations
})
