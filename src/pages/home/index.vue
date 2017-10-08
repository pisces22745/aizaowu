<template>
  <section id="index">
    <swiper :imgList="imgList"></swiper>
  </section>
</template>
<script>
  import swiper from '@/components/swiper/swiper'

  export default {
    data() {
      return {
        imgList: ['http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg', 'http://c11.eoemarket.com/app0/449/449714/screen/2339617.jpg']
      }
    },
    components: {
      swiper
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
