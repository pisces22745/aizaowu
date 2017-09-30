import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

// 应用初始状态
const state = {
  login: false,
  registe: false
}

// 定义所需的 mutations
const mutations = {
  TOGGLE_LOGIN_FRAME(state){
    state.registe = false
    state.login = !state.login
  },
  TOGGLE_REGISTE_FRAME(state){
    state.login = false
    state.registe = !state.registe
  }
}
// 创建 store 实例
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})
