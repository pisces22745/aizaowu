import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import {setStore, getStore, removeStore,setSessionStore,removeSessionStore} from '@/common/storage'

Vue.use(Vuex)

// 应用初始状态
const state = {
  logined: false,
  designlogined: false,
  userInfo: {
    headerImg: '',
    username: ''
  },
  designInfo:{
    headerImg: '',
    username: ''
  },
  headerImg: '',
  loginFlag: false,
  registeFlag: false,
  forgetPwdFlag: false,
  designerLoginFlag: false
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
    state.designerLoginFlag = false
    state.loginFlag = !state.loginFlag
  },
  TOGGLE_REGISTE_FRAME(state) {
    state.loginFlag = false
    state.forgetPwdFlag = false
    state.designerLoginFlag = false
    state.registeFlag = !state.registeFlag
  },
  TOGGLE_FORGETPWD_FRAME(state) {
    state.registeFlag = false
    state.loginFlag = false
    state.designerLoginFlag = false
    state.forgetPwdFlag = !state.forgetPwdFlag
  },
  TOGGLE_DESIGNERREGISTE_FRAME(state) {
    state.registeFlag = false
    state.loginFlag = false
    state.forgetPwdFlag = false
    state.designerLoginFlag = !state.designerLoginFlag
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
  },
  DESIGNLOGIN(state, {headerImg, username}) {
    state.designlogined = true
    state.designInfo = {
      headerImg: headerImg,
      username: username
    }
    setSessionStore('designInfo', state.designInfo)
  },
  DESIGNLOGINOUT(state) {
    state.designInfo = null
    state.designlogined = false
    removeSessionStore('designInfo')
  }
}
// 创建 store 实例
export default new Vuex.Store({
  state,
  mutations
})
