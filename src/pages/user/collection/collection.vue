<template>
  <section id="collection">
    <ul class="clearfix">
      <li v-for="collection in collectionList" class="fl">
        <img :src="collection" alt="收藏">
        <i class="iconfont icon-trash"></i>
      </li>
    </ul>
  </section>
</template>
<script>
    export default {
      data() {
        return {
          collectionList: ['http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg', 'http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg', 'http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg', 'http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg', 'http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg']
        }
      }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #collection{
    padding: 30px;
  }
  #collection ul li{
    width: 136px;
    height: 145px;
    overflow: hidden;
    margin: 0 25px 25px 0;
    position: relative;
  }
  #collection ul li img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  #collection ul li i{
    position: absolute;
    right: 15px;
    bottom:15px;
    color: #fff;
  }
</style>
