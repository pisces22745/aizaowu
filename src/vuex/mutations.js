import {setStore, getStore, removeStore, setSessionStore, removeSessionStore} from '@/common/storage'

export default {
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
  LOGIN(state, {id, username, headerImg}) {
    state.logined = true
    state.userInfo = {
      headerImg: headerImg,
      username: username,
      id: id
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
