<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <div class="header-img">
        <img :src="headerImg" alt="头像">
        <i class="iconfont icon-camera"></i>
      </div>
      <span>{{username}}</span>
    </div>
    <div class="sidebar-content">
      <ul class="menu">
        <li v-for="menu in menus">
          <router-link :to="{path: menu.to}" active-class="active">{{menu.name}}</router-link>
          <ul class="account-menu" v-if="menu.childMenus">
            <li v-for="childMenu in menu.childMenus">
              <router-link :to="childMenu.to" active-class="active">{{childMenu.name}}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      headerImg: String,
      username: String
    },
    data() {
      return {
        menus: [{
          name: '我的账户',
          to: '/user/account',
          childMenus: [{
            name: '基础资料',
            to: '/user/account'
          }, {
            name: '账号安全',
            to: '/user/security'
          }, {
            name: '地址管理',
            to: '/user/address'
          }]
        }, {
          name: '我的订单',
          to: '/user/order'
        }, {
          name: '我的关注',
          to: '/user/interest'
        }, {
          name: '我的收藏',
          to: '/user/collection'
        }]
        //    , {
//        name: '消息中心',
//          to: '/user/message'
//      }
      }
    },
    methods: {
      showChild() {
        console.log(44)
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .sidebar {
    padding: 0 5px;
    text-align: center;
    .sidebar-header {
      padding: 25px 0;
      border-bottom: 1px solid #f1f1f1;
      .header-img {
        position: relative;
        width: 80px;
        height: 80px;
        border: 1px solid #000;
        border-radius: 50%;
        margin: 0 auto 15px;
        overflow: hidden;
        i {
          position: absolute;
          top: 50%;
          left: 50%;
          -webkit-transform: translate(-50%, -50%);
          -moz-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          -o-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          font-size: 20px;
          color: rgba(0, 0, 0, .5);
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      & > span {
        font-size: 18px;
      }
    }
    .sidebar-content {
      padding: 30px 0;
      .menu {
        & > li {
          padding: 8px 0;
          margin: 8px 0;
          a {
            padding: 8px 0;
            color: #000;
            font-size: 16px;
            &.active {
              border-bottom: 2px solid #000;
            }
          }
          .account-menu {
            li {
              padding: 2px 0;
              margin: 2px 0;
              a {
                font-size: 14px;
                padding: 2px 0;
                &.active {
                  color: #999;
                  border-bottom: none;
                }
              }
              &:first-child {
                margin-top: 15px;
              }
            }
          }
        }
      }
    }
  }
</style>
