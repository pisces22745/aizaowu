// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './vuex/store'
import {DatePicker, Radio, Message} from 'element-ui'
import router from './config/router'
import 'element-ui/lib/theme-chalk/index.css'

require('@/style/base/reset.css')
require('@/style/base/common.less')
require('../static/iconfont/iconfont.css')
Vue.use(DatePicker)
Vue.use(Radio)
// Vue.use(Message)
Vue.config.productionTip = false
Vue.prototype.$message = Message

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')
