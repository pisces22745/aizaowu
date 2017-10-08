<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in imgList">
        <img :src="item" alt="轮播图">
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev swiper-button-white"></div>
    <div class="swiper-button-next swiper-button-white"></div>
  </div>
</template>
<script>
  import Swiper from '../../../static/swiper3.4.2/js/swiper.js'

  import '../../../static/swiper3.4.2/css/swiper.min.css'

  export default {
    props: {
      imgList: Array
    },
    data() {
      return {}
    },
    mounted() {
      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        paginationClickable: true
      })
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .swiper-container {
    height: 700px;
    z-index: 0;
    .swiper-slide {
      background-color: #000;
      text-align: center;
      font-size: 18px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .swiper-pagination {
      .swiper-pagination-bullet {
        width: 20px;
        height: 20px;
        background: #fff;
        opacity: 1;
        &.swiper-pagination-bullet-active {
          background: #fff500;
        }
      }
    }
  }

</style>
