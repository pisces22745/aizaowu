import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// () => import('vue的文件文职');
export default new Router({
  routes: [
    {
      path: '/',   // 首页
      name: 'Home',
      component: () => import('@/pages/index'),
      redirect: '/index',
      children: [{
        path: 'index',   // 首页
        name: 'Index',
        component: () => import('@/pages/home/index')
      },{
        path: 'product',   // 产品列表页面
        name: 'Product',
        component: () => import('@/pages/product/index')
      },{
        path: 'designer',   // 首页
        name: 'Designer',
        component: () => import('@/pages/designer/index')
      }]
    }, {
      path: '/diy',   // 首页
      name: 'Diy',
      component: () => import('@/pages/diy')
    }
  ]
})

