<template>
  <div id="index">
    <div class="banner">
      <swiper :imgList="imgList"></swiper>
    </div>
    <section class="recommend">
      <div class="recommend-header">
        <span>推荐设计师</span>
        <router-link class="see-more" :to="{path: 'designer'}">查看全部</router-link>
      </div>
      <div class="recommend-content">
        <ul class="list clearfix">
          <li class="fl" v-for="item in desigerList">
            <div class="header-img">
              <img :src="item.headImage" :alt="item.name+'的头像'">
            </div>
            <p class="name">{{item.name}}</p>
            <div class="work" @mouseenter="toggleDesc($event, true)" @mouseleave="toggleDesc($event, false)">
              <div class="work-img">
                <img :src="item.workImage" :alt="item.name+'的作品'">
              </div>
              <div class="work-desc">
                <p>{{item.workName}}</p>
                <p class="currency">{{item.workPrice}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section>
      <div class="section-header">
        <span>服&nbsp;&nbsp;&nbsp;&nbsp;饰</span>
        <router-link class="see-more" :to="{path: 'product'}">MORE</router-link>
      </div>
      <div class="section-content">
        <ul class="list clearfix">
          <li class="fl" v-for="item in dressList">
            <div class="work" @mouseenter="toggleDesc($event, true)" @mouseleave="toggleDesc($event, false)">
              <div class="work-img">
                <img :src="item.workImage" :alt="item.workName">
              </div>
              <div class="work-desc">
                <p>{{item.workName}}</p>
                <p class="currency">{{item.workPrice}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section>
      <div class="section-header">
        <span>箱&nbsp;&nbsp;&nbsp;&nbsp;包</span>
        <router-link class="see-more" :to="{path: 'product'}">MORE</router-link>
      </div>
      <div class="section-content">
        <ul class="list clearfix">
          <li class="fl" v-for="item in lugageList">
            <div class="work" @mouseenter="toggleDesc($event, true)" @mouseleave="toggleDesc($event, false)">
              <div class="work-img">
                <img :src="item.workImage" :alt="item.workName">
              </div>
              <div class="work-desc">
                <p>{{item.workName}}</p>
                <p class="currency">{{item.workPrice}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section>
      <div class="section-header">
        <span>数&nbsp;&nbsp;&nbsp;&nbsp;码</span>
        <router-link class="see-more" :to="{path: 'product'}">MORE</router-link>
      </div>
      <div class="section-content">
        <ul class="list clearfix">
          <li class="fl" v-for="item in digitList">
            <div class="work" @mouseenter="toggleDesc($event, true)" @mouseleave="toggleDesc($event, false)">
              <div class="work-img">
                <img :src="item.workImage" :alt="item.workName">
              </div>
              <div class="work-desc">
                <p>{{item.workName}}</p>
                <p class="currency">{{item.workPrice}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section>
      <div class="section-header">
        <span>影&nbsp;&nbsp;&nbsp;&nbsp;像</span>
        <router-link class="see-more" :to="{path: 'product'}">MORE</router-link>
      </div>
      <div class="section-content">
        <ul class="list clearfix">
          <li class="fl" v-for="item in portraitList">
            <div class="work" @mouseenter="toggleDesc($event, true)" @mouseleave="toggleDesc($event, false)">
              <div class="work-img">
                <img :src="item.workImage" :alt="item.workName">
              </div>
              <div class="work-desc">
                <p>{{item.workName}}</p>
                <p class="currency">{{item.workPrice}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="bottom">
      <p>MAKE LIFE DIFFERENT</p>
      <small>THINGMAKE,THINGLIFE</small>
    </section>
  </div>
</template>
<script>
  import swiper from '@/components/swiper/swiper'

  export default {
    data() {
      return {
        imgList: ['http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg', 'http://c11.eoemarket.com/app0/449/449714/screen/2339617.jpg'],
        desigerList: [{
          headImage: 'http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg',
          name: '呈送',
          workImage: 'http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg',
          workName: '作品1',
          workPrice: '79'
        }, {
          headImage: 'http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg',
          name: '呈送',
          workImage: 'http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg',
          workName: '作品2',
          workPrice: '79'
        }, {
          headImage: 'http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg',
          name: '呈送',
          workImage: 'http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg',
          workName: '作品3',
          workPrice: '79'
        }],
        dressList: [{
          workImage: 'http://pic.58pic.com/58pic/16/18/75/24458PICN9W_1024.jpg',
          workName: '作品1',
          workPrice: '79'
        }, {
          workImage: 'http://pic.58pic.com/58pic/16/18/75/24458PICN9W_1024.jpg',
          workName: '作品2',
          workPrice: '79'
        }, {
          workImage: 'http://pic.58pic.com/58pic/16/18/75/24458PICN9W_1024.jpg',
          workName: '作品3',
          workPrice: '79'
        }, {
          workImage: 'http://pic.58pic.com/58pic/16/18/75/24458PICN9W_1024.jpg',
          workName: '作品3',
          workPrice: '79'
        }, {
          workImage: 'http://pic.58pic.com/58pic/16/18/75/24458PICN9W_1024.jpg',
          workName: '作品3',
          workPrice: '79'
        }, {
          workImage: 'http://pic.58pic.com/58pic/16/18/75/24458PICN9W_1024.jpg',
          workName: '作品3',
          workPrice: '79'
        }],
        lugageList: [{
          workImage: 'http://1079638729.rsc.cdn77.org/pic/v2/gallery/preview/cvety-rasteniya-rozy-29922.jpg',
          workName: '作品1',
          workPrice: '79'
        }, {
          workImage: 'http://1079638729.rsc.cdn77.org/pic/v2/gallery/preview/cvety-rasteniya-rozy-29922.jpg',
          workName: '作品2',
          workPrice: '79'
        }, {
          workImage: 'http://1079638729.rsc.cdn77.org/pic/v2/gallery/preview/cvety-rasteniya-rozy-29922.jpg',
          workName: '作品3',
          workPrice: '79'
        }, {
          workImage: 'http://1079638729.rsc.cdn77.org/pic/v2/gallery/preview/cvety-rasteniya-rozy-29922.jpg',
          workName: '作品3',
          workPrice: '79'
        }, {
          workImage: 'http://1079638729.rsc.cdn77.org/pic/v2/gallery/preview/cvety-rasteniya-rozy-29922.jpg',
          workName: '作品3',
          workPrice: '79'
        }, {
          workImage: 'http://1079638729.rsc.cdn77.org/pic/v2/gallery/preview/cvety-rasteniya-rozy-29922.jpg',
          workName: '作品3',
          workPrice: '79'
        }],
        digitList: [{
          workImage: 'http://img8.cache.hxsd.com/hxsdmy/show/2012/01/64/29/00/11/11/20121111210029.jpg',
          workName: '作品1',
          workPrice: '79'
        }, {
          workImage: 'http://img8.cache.hxsd.com/hxsdmy/show/2012/01/64/29/00/11/11/20121111210029.jpg',
          workName: '作品2',
          workPrice: '79'
        }, {
          workImage: 'http://img8.cache.hxsd.com/hxsdmy/show/2012/01/64/29/00/11/11/20121111210029.jpg',
          workName: '作品3',
          workPrice: '79'
        }, {
          workImage: 'http://img8.cache.hxsd.com/hxsdmy/show/2012/01/64/29/00/11/11/20121111210029.jpg',
          workName: '作品3',
          workPrice: '79'
        }, {
          workImage: 'http://img8.cache.hxsd.com/hxsdmy/show/2012/01/64/29/00/11/11/20121111210029.jpg',
          workName: '作品3',
          workPrice: '79'
        }, {
          workImage: 'http://img8.cache.hxsd.com/hxsdmy/show/2012/01/64/29/00/11/11/20121111210029.jpg',
          workName: '作品3',
          workPrice: '79'
        }],
        portraitList: [{
          workImage: 'http://imgstore.cdn.sogou.com/app/a/100540002/787448.jpg',
          workName: '作品1',
          workPrice: '79'
        }, {
          workImage: 'http://imgstore.cdn.sogou.com/app/a/100540002/787448.jpg',
          workName: '作品2',
          workPrice: '79'
        }, {
          workImage: 'http://imgstore.cdn.sogou.com/app/a/100540002/787448.jpg',
          workName: '作品3',
          workPrice: '79'
        }, {
          workImage: 'http://imgstore.cdn.sogou.com/app/a/100540002/787448.jpg',
          workName: '作品3',
          workPrice: '79'
        }, {
          workImage: 'http://imgstore.cdn.sogou.com/app/a/100540002/787448.jpg',
          workName: '作品3',
          workPrice: '79'
        }, {
          workImage: 'http://imgstore.cdn.sogou.com/app/a/100540002/787448.jpg',
          workName: '作品3',
          workPrice: '79'
        }]
      }
    },
    methods: {
      toggleDesc(e, show) {
        e.target.childNodes[2].style.top = show ? '0' : '100%'
      }
    },
    components: {
      swiper
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .container {
    width: 950px;
    margin: 0 auto;
  }

  #index {
    .banner {
      margin-bottom: 30px;
    }
    section {
      .container();
      margin-bottom: 50px;
      .list {
        li {
          width: 270px;
          margin-bottom: ~'calc((100% - 3 * 270px) / 2)';
          margin-right: ~'calc((100% - 3 * 270px) / 2)';
          text-align: center;
          .header-img {
            width: 80px;
            height: 80px;
            margin: 30px auto 20px;
            border-radius: 50%;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .name {
            margin-bottom: 20px;
            font-size: 18px;
          }
          .work {
            position: relative;
            .work-img {
              width: 270px;
              height: 270px;
              background-color: #f2f2f2;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
            .work-desc {
              position: absolute;
              top: 100%;
              left: 0;
              right: 0;
              bottom: 0;
              display: flex;
              flex-flow: column nowrap;
              justify-content: center;
              align-items: center;
              background-color: rgba(255, 255, 255, .5);
              -webkit-transition: top .2s;
              -moz-transition: top .2s;
              -ms-transition: top .2s;
              -o-transition: top .2s;
              transition: top .2s;
              overflow: hidden;
              p {
                margin-bottom: 20px;
                letter-spacing: 2px;
              }
            }
          }
          &:nth-child(3n) {
            margin-right: 0;
          }
        }
      }
      .recommend-header {
        position: relative;
        text-align: center;
        border-bottom: 1px solid #000;
        span {
          display: inline-block;
          font-size: 18px;
          padding: 8px 5px;
          border-bottom: 2px solid #000;
        }
        .see-more {
          color: #b5b5b5;
        }
      }
      .recommend-content {
        .list {
          li {
            margin-bottom: 0;
          }
        }
      }
      .section-header {
        position: relative;
        margin-bottom: 50px;
        text-align: center;
        span {
          position: relative;
          display: inline-block;
          text-align: center;
          font-size: 18px;
          padding: 0 15px;
          &::before, &::after {
            content: '';
            position: absolute;
            top: 50%;
            display: block;
            width: 80px;
            height: 1px;
            background-color: #000;
          }
          &::before {
            left: 0;
            -webkit-transform: translateX(-100%);
            -moz-transform: translateX(-100%);
            -ms-transform: translateX(-100%);
            -o-transform: translateX(-100%);
            transform: translateX(-100%);
          }
          &::after {
            left: 100%;
          }
        }
      }
      &.bottom{
        padding: 30px 0;
        text-align: center;
        p{
          font-size: 50px;
          margin-bottom: 15px;
        }
        small{
          font-size: 30px;
          font-weight: 100;
        }
      }
    }
  }
</style>
