<template>
  <section id="designer">
    <div class="banner">
      <img :src="cover" alt="封面">
    </div>
    <div class="container">
      <div class="header-img">
        <img :src="headerImg" alt="">
      </div>
      {{designer.name}}
      {{designer.sex}}
      {{designer.signature}}
      {{designer.workCount}}
    </div>
  </section>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        cover: 'http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg',
        headerImg: ''
      }
    },
    computed: {
      designer:function() {
        setTimeout(function () {
          return {
            headerImage: 'http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg',
            name: '烧录亲',
            sex: 1,
            signature:'我就是我，是颜色不一样的烟火',
            workCount: 13,
            fansCount: 13,
            isInterested: true

          }
        })
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
