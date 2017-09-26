import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',   // 首页
      name: 'Home',
      component: resolve => require(['@/pages/index'], resolve),
      redirect: '/index',
      children: [{
        path: 'index',   // 首页
        name: 'Index',
        component: resolve => require(['@/pages/home/index'], resolve)
      },{
        path: 'product',   // 产品列表页面
        name: 'Product',
        component: resolve => require(['@/pages/product/index'], resolve)
      },{
        path: 'designer',   // 首页
        name: 'Designer',
        component: resolve => require(['@/pages/designer/index'], resolve)
      }]
    }, {
      path: '/diy',   // 首页
      name: 'Diy',
      component: resolve => require(['@/pages/diy'], resolve)
    }
  ]
})
