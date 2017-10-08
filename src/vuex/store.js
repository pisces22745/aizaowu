import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

// 应用初始状态
const state = {
  loginFlag: false,
  registeFlag: false,
  forgetPwdFlag: false
}

// 定义所需的 mutations
const mutations = {
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
  }
}
// 创建 store 实例
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})
