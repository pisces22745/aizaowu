/**
 * Created by slq on 2018/4/17
 */
const state = {
  frameFlag: false,
  frameType: 0// 0登陆，1注册，2忘记密码，3设计师登陆
}

const getters = {
  frameFlag: state => state.frameFlag,
  frameType: state => state.frameType
}

const mutations = {
  TOGGLE_FRAME(state, frameType) {
    state.frameFlag = true
    state.frameType = frameType
  },
  CLOSE_FRAME(state) {
    state.frameFlag = false
  }
}

export default {
  state,
  getters,
  mutations
}
