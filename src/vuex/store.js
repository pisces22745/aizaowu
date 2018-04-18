import 'babel-polyfill'
import createPersisted from 'vuex-persistedstate'

import Vue from 'vue'
import Vuex from 'vuex'
import frame from './modules/frame'
import userInfo from './modules/userInfo'

Vue.use(Vuex)

// 创建 store 实例
export default new Vuex.Store({
  modules: {
    frame, userInfo
  },
  plugins: [createPersisted({
    key: 'vuex',
    paths: ['frame', 'userInfo']
  })]
})
