<template>
  <header>
    <nav>
      <div class="logo">
        <router-link :to="{path: '/index'}">
          <img src="../../../static/image/logo.png" alt="logo">
        </router-link>
      </div>
      <ul class="menu clearfix">
        <li v-for="(item,index) in menu">
          <span @mouseenter="childMenuShow(item,$event)" @click="changeType(item,$event)" ref="nav"
                :class="{active:index===0}">{{item.name}}</span>
        </li>
      </ul>
      <div class="tool">
        <div class="search clearfix">
          <transition name='slide'>
            <input v-if='keyWordFlag' type="text" placeholder="搜索" v-model="keyWord">
          </transition>
          <i class="fr iconfont icon-magnifier" @click="keyWordFlag = !keyWordFlag"></i>
        </div>
        <div class="user" v-if="logined" @mouseenter="userMenuFlag=true">
          <img :src="userInfo.headerImg" alt="头像">
        </div>
        <div class="login-registe" v-if="!logined">
          <span @click="TOGGLE_LOGIN_FRAME">登陆</span>
          <span @click="TOGGLE_REGISTE_FRAME">注册</span>
        </div>
      </div>
    </nav>
    <div class="menu-children-wrapper" v-if="childMenuFlag">
      <ul class="menu-children" @mouseleave="childMenuFlag=false">
        <li v-for="item in childMenu">
          <span @click="changeType(item)">{{item.name}}</span>
        </li>
      </ul>
    </div>
    <transition name='fade'>
      <div class="user-menu-wrapper" v-if="userMenuFlag" @mouseleave="userMenuFlag=false">
        <ul class="user-menu">
          <li>{{userInfo.username}}</li>
          <li>
            <router-link :to="{path: '/user/account'}">个人中心</router-link>
          </li>
          <li>
            <router-link :to="{path: '/user/order'}">我的订单</router-link>
          </li>
          <li>
            <router-link :to="{path: '/user/collection'}">我的收藏</router-link>
          </li>
          <!--<li>消息中心</li>-->
          <li @click="logout">退出登陆</li>
        </ul>
      </div>
    </transition>
  </header>
</template>
<script>
  import {mapState, mapMutations} from 'vuex'

  export default {
    data() {
      return {
        menu: [{
          name: '服饰',
          search: 'dress',
          path: '/product',
          children: [{
            name: '短袖T恤',
            path: '/product',
            search: 'type1'
          }, {
            name: '长袖T恤',
            path: '/product',
            search: 'type2'
          }, {
            name: '连帽卫衣',
            path: '/product',
            search: 'type3'
          }, {
            name: '套头卫衣',
            path: '/product',
            search: 'type4'
          }]
        }, {
          name: '箱包',
          search: 'luggage',
          path: '/product',
          children: [{
            name: '帆布包',
            path: '/product',
            search: 'type5'
          }, {
            name: '单肩包',
            path: '/product',
            search: 'type6'
          }, {
            name: 'mini挎包',
            path: '/product',
            search: 'type7'
          }, {
            name: '钱包',
            path: '/product',
            search: 'type8'
          }]
        }, {
          name: '数码',
          search: 'digit',
          path: '/product',
          children: [{
            name: '手机壳',
            path: '/product',
            search: 'type9'
          }]
        }, {
          name: '影像',
          search: 'portrait',
          path: '/product',
          children: [{
            name: '照片书',
            path: '/product',
            search: 'type10'
          }, {
            name: '明信片',
            path: '/product',
            search: 'type11'
          }, {
            name: '照片冲印',
            path: '/product',
            search: 'type12'
          }]
        }, {
          name: '设计师中心',
          search: 'designer',
          path: 'designer'
        }],
        keyWord: '',
        keyWordFlag: false,
        childMenu: [],
        childMenuFlag: false,
        userMenuFlag: false
      }
    },
    computed: {
      ...mapState(['loginFlag', 'registeFlag', 'userInfo', 'logined'])
    },
    methods: {
      ...mapMutations(['TOGGLE_LOGIN_FRAME', 'TOGGLE_REGISTE_FRAME', 'LOGOUT', 'INIT_USER']),
      changeType(item, e) {
        this.$router.push(item.path)
      },
      childMenuShow(item, e) {
        if (e) {
          for (let item of this.$refs.nav) {
            item.className = ''
          }
          e.target.className = 'active'
        }
        this.childMenuFlag = true
        this.childMenu = item.children
      },
      logout() {
        this.LOGOUT()
        this.userMenuFlag = false
        this.$router.push('/index')
      }
    },
    mounted() {
      this.INIT_USER()
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  header {
    position: relative;
    padding: 25px 48px 25px 25px;
    border-bottom: 1px solid #e5e5e5;
    background-color: #fff;
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        a {
          display: block;
          height: 100%;
          img {
            width: 150px;
          }
        }
      }
      .menu {
        & > li {
          position: relative;
          float: left;
          padding: 0 30px;
          cursor: pointer;
          span {
            font-size: 20px;
            color: #000;
            padding: 0 0 15px;
            &.active {
              border-bottom: 3px solid #000;
            }
          }
          &:last-child {
            border-left: 1px solid #000;
          }
        }
      }
      .tool {
        & > div {
          display: inline-block;
          vertical-align: middle;
          &.login-registe {
            span {
              padding: 0 8px;
              font-size: 17px;
              cursor: pointer;
              &:first-child {
                border-right: 1px solid #000;
                margin-right: -3px;
              }
            }
          }
          &.search {
            position: relative;
            cursor: pointer;
            i {
              font-size: 20px;
            }
            input {
              position: absolute;
              right: 25px;
              top: 0;
              width: 120px;
              padding-bottom: 4px;
              border: none;
              border-bottom: 1px solid #000;
              -webkit-transition: all .2s;
              -moz-transition: all .2s;
              -ms-transition: all .2s;
              -o-transition: all .2s;
              transition: all .2s;
              &::-webkit-input-placeholder {
                color: #999;
              }
              &.slide-enter, &.slide-leave-to {
                width: 0;
              }
              &.slide-enter-to, &.slide-leave {
                width: 120px;
              }
            }
          }
        }
      }
      .user {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        overflow: hidden;
        cursor: pointer;
        margin-left: 50px;
        border: 2px solid #000;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: .8;
        }
      }
    }
    .menu-children-wrapper {
      position: absolute;
      top: ~'calc(100% + 1px)';
      left: 0;
      z-index: 1;
      width: 100%;
      background-color: rgba(255, 255, 255, .5);
      .menu-children {
        text-align: center;
        li {
          padding: 30px 15px;
          text-align: center;
          display: inline-block;
          span {
            font-size: 16px;
            cursor: pointer;
          }
        }
      }
    }
    .user-menu-wrapper {
      position: absolute;
      top: 100%;
      right: 20px;
      z-index: 2;
      text-align: center;
      background-color: #fff;
      -webkit-transition: all .3s;
      -moz-transition: all .3s;
      -ms-transition: all .3s;
      -o-transition: all .3s;
      transition: all .3s;
      overflow: hidden;
      .user-menu {
        padding: 15px 5px;
        li {
          padding: 0 6px;
          font-size: 16px;
          margin-bottom: 12px;
          cursor: pointer;
          a {
            font-size: 16px;
            letter-spacing: 1px;
            color: #000;
          }
          &:first-child {
            font-size: 18px;
            border-bottom: 1px solid #aaa;
            padding: 0 6px 12px;
          }
          &:last-child {
            margin-bottom: 0;
          }
          &:hover {
            color: #666;
          }
        }
      }
    }
  }
</style>
