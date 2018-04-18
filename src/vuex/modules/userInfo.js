/**
 * Created by slq on 2018/4/17
 */
const state = {
  headimg: null,
  id: null,
  email: null,
  sex: 0,
  userName: null
}

const getters = {
  headimg: state => state.headimg,
  id: state => state.id,
  email: state => state.email,
  sex: state => state.sex,
  userName: state => state.userName
}

const mutations = {
  SET_USERINFO(state, userInfo) {
    for (let key in userInfo) {
      state[key] = userInfo[key]
    }
  },
  LOGOUT(state) {
    state.headimg = null
    state.id = null
    state.email = null
    state.sex = 0
    state.userName = null
  }
}

export default {
  state,
  getters,
  mutations
}
