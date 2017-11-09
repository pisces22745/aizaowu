<template>
  <section id="user">
    <div class="container clearfix">
      <div class="sidebar-wrapper fl">
        <sidebar :username="userInfo.user_name" :headerImg="userInfo.headerImg" :menus="menus"></sidebar>
      </div>
      <div class="content fr">
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>
<script>
  import sidebar from '@/components/sidebar/sidebar'
  import {mapState} from 'vuex'

  export default {
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
      }
    },
    computed: {
      ...mapState(['userInfo'])
    },
    mounted() {
      console.log(this.userInfo)
    },
    components: {
      sidebar
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #user {
    padding: 30px 0;
    background-color: #f5f5f5;
    .sidebar-wrapper {
      width: 235px;
      background-color: #fff;
    }
    .content {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      background-color: #fff;
      width: ~'calc(100% - 245px)';
      /*padding: 30px 50px;*/
    }
  }
</style>
