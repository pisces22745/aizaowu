<template>
  <section id="product">
    <div class="banner">
      <img :src="bannerImage" alt="广告图">
    </div>
    <div class="container">
      <ul class="product-list clearfix">
        <li v-for="item in products" class="fl" :class="{hot: item.ishot}">
          <div class="img-wrapper">
            <img :src="item.img" alt="产品图片">
          </div>
          <div class="description">
            <p>{{item.name}}</p>
            <p>{{item.price}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="scroll-top"></div>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        bannerImage: 'http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg',
        products: [{
          img: 'http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg',
          name: '旅行书1',
          price: 58,
          ishot: true
        }, {
          img: 'http://pic.pp3.cn/uploads/201508/2015083002.jpg',
          name: '旅行书1',
          price: 56,
          ishot: false
        }, {
          img: 'http://pic.pp3.cn/uploads/201508/2015083002.jpg',
          name: '旅行书1',
          price: 56,
          ishot: false
        }, {
          img: 'http://pic.pp3.cn/uploads/201508/2015083002.jpg',
          name: '旅行书1',
          price: 56,
          ishot: false
        }, {
          img: 'http://pic.pp3.cn/uploads/201508/2015083002.jpg',
          name: '旅行书1',
          price: 56,
          ishot: false
        }, {
          img: 'http://pic.pp3.cn/uploads/201508/2015083002.jpg',
          name: '旅行书1',
          price: 56,
          ishot: false
        }, {
          img: 'http://pic.pp3.cn/uploads/201508/2015083002.jpg',
          name: '旅行书1',
          price: 56,
          ishot: false
        }, {
          img: 'http://pic.pp3.cn/uploads/201508/2015083002.jpg',
          name: '旅行书1',
          price: 56,
          ishot: false
        }]
      }
    },
    methods: {}
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #product {
    position: relative;
    text-align: center;
    .banner {
      height: 620px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .product-list {
      padding: 40px 0;
      li {
        position: relative;
        width: 25%;
        margin: 0 0 30px 0;
        &:nth-child(4n) {
          margin-right: 0;
        }
        &.hot{
          &::before{
            position: absolute;
            top: 50px;
            left: -8px;
            content: '';
            width: 0;
            height: 0;
            border-top: 10px solid transparent;
            border-right: 8px solid #888;
            border-bottom: 10px solid transparent;
          }
          &::after{
            content: 'HOT';
            display: block;
            position: absolute;
            top: 50px;
            left: 0;
            height: 20px;
            line-height: 20px;
            padding: 0 10px;
            color: #fff;
            -webkit-box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
            -moz-box-shadow:  1px 1px 10px rgba(0, 0, 0, 0.5);
            box-shadow:  1px 1px 10px rgba(0, 0, 0, 0.5);
            background-color: #888;
          }
        }
        .img-wrapper {
          width: 200px;
          height: 200px;
          margin:0 auto;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }

    }
  }
</style>
