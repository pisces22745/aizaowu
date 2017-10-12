<template>
  <section id="user">
    <div class="container clearfix">
      <div class="sidebar-wrapper fl">
        <sidebar :username="userInfo.username" :headerImg="userInfo.headerImg"></sidebar>
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
      return {}
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
      padding: 30px 50px;
    }
  }
</style>
