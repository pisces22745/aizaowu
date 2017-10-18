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
        path: 'designers',   // 设计师列表
        name: 'Designers',
        component: () => import('@/pages/designers/index')
      }, {
        path: 'designer',   // 设计师主页
        name: 'Designer',
        component: () => import('@/pages/designers/designer')
      }, {
        path: 'designeruser',   // 设计师列表
        name: 'Designeruser',
        component: () => import('@/pages/designeruser/user'),
        children: [{
          path: 'account',   // 基础资料
          name: 'DAccount',
          component: () => import('@/pages/designeruser/information/account')
        }, {
          path: 'introduce',   // 基础资料
          name: 'Introduce',
          component: () => import('@/pages/designeruser/information/introduce')
        }, {
          path: 'security',   // 基础资料
          name: 'DSecurity',
          component: () => import('@/pages/designeruser/information/security')
        }]
      }, {
        path: 'bedesigner',   // 设计师列表
        name: 'Bedesigner',
        component: () => import('@/pages/designers/bedesigner')
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
        }, {
          path: 'interest',   // 关注
          name: 'Interest',
          component: () => import('@/pages/user/interest/interest')
        }]
      }]
    }, {
      path: '/diy',   // 首页
      name: 'Diy',
      component: () => import('@/pages/diy')
    }
  ]
})

