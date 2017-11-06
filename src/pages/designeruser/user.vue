<template>
  <section id="designer-user">
    <div class="container clearfix">
      <div class="sidebar-wrapper fl">
        <sidebar :username="userInfo.username" :headerImg="userInfo.headerImg" :menus="menus"></sidebar>
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
          name: '个人信息',
          to: '/designeruser',
          childMenus: [{
            name: '基础资料',
            to: '/designeruser/account'
          }, {
            name: '个人简介',
            to: '/designeruser/introduce'
          }, {
            name: '账号安全',
            to: '/designeruser/security'
          }, {
            name: '地址管理',
            to: '/designeruser/address'
          }]
        }, {
          name: '交易管理',
          to: '/designeruser/deal'
        }, {
          name: '作品管理',
          to: '/workmanage'
        }]
      }
    },
    computed: {
      ...mapState(['userInfo'])
    },
    mounted() {
    },
    components: {
      sidebar
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #designer-user {
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
    }
  }
</style>
