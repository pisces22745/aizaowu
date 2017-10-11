<template>
  <section id="product">
    <div class="banner" id="test">
      <img :src="bannerImage" alt="广告图">
    </div>
    <div class="container">
      <ul class="product-list clearfix">
        <li v-for="item in products" class="fl" :class="{hot: item.ishot}">
          <div class="img-wrapper">
            <div class="loading">
              <div class="inner ball_ellipse">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <img :src="item.img" alt="产品图片">
          </div>
          <div class="description">
            <p>{{item.name}}</p>
            <p class="currency">{{item.price}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="scroll-top" @click="scrollTop"></div>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        bannerImage: 'http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg',
        products: [{
          img: 'http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jg',
          name: '旅行书1',
          price: 58,
          ishot: true
        }, {
          img: 'http://c11.eoemarket.com/app0/449/449714/screen/2339617.jpg',
          name: '旅行书1',
          price: 56,
          ishot: false
        }, {
          img: 'http://c11.eoemarket.com/app0/449/449714/screen/2339617.jpg',
          name: '旅行书1',
          price: 56,
          ishot: false
        }, {
          img: 'http://c11.eoemarket.com/app0/449/449714/screen/2339617.jpg',
          name: '旅行书1',
          price: 56,
          ishot: false
        }, {
          img: 'http://c11.eoemarket.com/app0/449/449714/screen/2339617.jpg',
          name: '旅行书1',
          price: 56,
          ishot: false
        }, {
          img: 'http://c11.eoemarket.com/app0/449/449714/screen/2339617.jpg',
          name: '旅行书1',
          price: 56,
          ishot: false
        }, {
          img: 'http://c11.eoemarket.com/app0/449/449714/screen/2339617.jpg',
          name: '旅行书1',
          price: 56,
          ishot: false
        }, {
          img: 'http://c11.eoemarket.com/app0/449/449714/screen/2339617.jpg',
          name: '旅行书1',
          price: 56,
          ishot: false
        }]
      }
    },
    methods: {
      scrollTop: function () {
        (function smoothscroll() {
          let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
          if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo(0, Math.floor(currentScroll - (currentScroll / 5)));
          }
        })();
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #product {
    position: relative;
    text-align: center;
    background-color: #fff;
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
        &.hot {
          &::before {
            position: absolute;
            top: 50px;
            left: -8px;
            content: '';
            width: 0;
            height: 0;
            border-top: 14px solid transparent;
            border-right: 8px solid #888;
            border-bottom: 14px solid transparent;
          }
          &::after {
            content: 'HOT';
            display: block;
            position: absolute;
            top: 50px;
            left: 0;
            height: 20px;
            line-height: 20px;
            padding: 4px 10px;
            color: #fff;
            -webkit-box-shadow: 6px 2px 10px rgba(0, 0, 0, 0.5);
            -moz-box-shadow: 6px 2px 10px rgba(0, 0, 0, 0.5);
            box-shadow: 6px 2px 10px rgba(0, 0, 0, 0.5);
            background-color: #888;
          }
        }
        .img-wrapper {
          position: relative;
          width: 200px;
          height: 200px;
          margin: 0 auto;
          background-color: #000;
          .loading {
            position: absolute;
            top: 0;
            left: 0;
            width: 200px;
            height: 200px;
            display: flex;
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        p {
          margin-top: 12px;
          font-size: 16px;
        }
      }
    }
    .scroll-top {
      position: fixed;
      bottom: 40px;
      right: 20px;
      width: 50px;
      height: 50px;
      border-radius: 3px;
      background-color: #dbdcdc;
      cursor: pointer;
      &::before {
        content: '';
        position: fixed;
        bottom: 48px;
        right: 34px;
        display: block;
        width: 20px;
        height: 20px;
        transform: rotate(-45deg);
        border-top: 1px solid #fff;
        border-right: 1px solid #fff;
      }
    }
  }
</style>
