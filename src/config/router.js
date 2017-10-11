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
      }, {
        path: 'product',   // 产品列表页面
        name: 'Product',
        component: () => import('@/pages/product/index')
      }, {
        path: 'designer',   // 设计师
        name: 'Designer',
        component: () => import('@/pages/designer/index')
      }, {
        path: 'user',   // 个人中心
        name: 'User',
        component: () => import('@/pages/user/user'),
        children: [{
          path: 'account',   // 基础资料
          name: 'Account',
          component: () => import('@/pages/user/account/account')
        }, {
          path: 'security',   // 账号安全
          name: 'Security',
          component: () => import('@/pages/user/security/security')
        }, {
          path: 'order',   // 订单
          name: 'Order',
          component: () => import('@/pages/user/order/order')
        }, {
          path: 'address',   // 关注
          name: 'Address',
          component: () => import('@/pages/user/address/address')
        }, {
          path: 'collection',   // 收藏
          name: 'Collection',
          component: () => import('@/pages/user/collection/collection')
        }, {
          path: 'message',   // 消息
          name: 'Message',
          component: () => import('@/pages/user/message/message')
        }]
      }]
    }, {
      path: '/diy',   // 首页
      name: 'Diy',
      component: () => import('@/pages/diy')
    }
  ]
})

