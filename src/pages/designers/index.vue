<template>
  <section id="designer-all">
    <div class="banner">
      <img :src="designers[0].headerImage" alt="">
    </div>
    <div class="container">
      <div class="designer-header">
        <span class="active">手绘插画</span>
        <span>字体设计</span>
        <span>手工艺品</span>
      </div>
      <div class="designer-content">
        <ul>
          <li v-for="designer in activeType">
            <div class="designer-info">
              <div class="head-img">
                <router-link :to="{path: 'designer',query: {designer: designer}}"><img :src="designer.headerImage" alt="头像"></router-link>
              </div>
              <div class="desc">
                <div>
                  <router-link :to="{path: 'designer',query: {id: designer.id}}">
                    <span class="name">
                    {{designer.name}}
                    <i class="iconfont" :class="[designer.sex===0 ? 'icon-male' : 'icon-female']"></i>
                  </span>
                  </router-link>
                  <span class="signature">{{designer.signature}}</span>
                </div>
                <div>
                  <span class="work">{{designer.workCount}}</span>
                  <span class="fans">{{designer.fansCount}}</span>
                </div>
              </div>
              <div class="btn btn-interested" v-if="designer.isInterested">已关注</div>
              <div class="btn btn-interest" v-if="!designer.isInterested"><i class="iconfont icon-add"></i>关注</div>
            </div>
            <div class="designer-work clearfix">
                <div class="work-wrapper fl" v-for="work in designer.works">
                  <img :src="work" alt="作品">
                </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        designers: [{
          id: 1,
          headerImage: 'http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg',
          name: '烧录亲',
          sex: 1,
          signature:'我就是我，是颜色不一样的烟火',
          workCount: 13,
          fansCount: 13,
          isInterested: true,
          works: ['http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg','http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg','http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg','http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg']
        }, {
          id: 2,
          headerImage: 'http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg',
          name: '烧录亲',
          sex: 1,
          signature:'我就是我，是颜色不一样的烟火',
          workCount: 13,
          fansCount: 13,
          isInterested: false,
          works: ['http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg','http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg','http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg','http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg']
        }]
      }
    },
    computed: {
      activeType: function() {
        return this.designers
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #designer-all{
    background-color: #fff;
    .banner{
      height: 400px;
      margin-bottom: 10px;
    }
    .designer-header{
      margin-bottom: 30px;
      border-bottom: 1px solid #000;
      span{
        display: inline-block;
        margin-right: 100px;
        font-size: 18px;
        padding: 8px;
        cursor: pointer;
        &.active{
          border-bottom: 2px solid #000;
        }
      }
    }
    .designer-content{
      ul{
        overflow: hidden;
        li{
          border-bottom: 1px solid #f2f2f2;
          margin-bottom: 30px;
          .designer-info{
            margin-bottom: 30px;
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            .head-img{
              flex: 0 0 auto;
              width: 100px;
              height: 100px;
              margin-right: 30px;
              overflow: hidden;
              border-radius: 50%;
            }
            .desc{
              flex: auto;
              &>div{
                margin: 5px 0;
                .name{
                  margin-right: 20px;
                  font-size: 16px;
                  color: #000;
                  i{
                    font-size: 18px;
                    &.icon-male{
                      color: #59b9ff;
                    }
                    &.icon-female{
                      color: #ff78a0;
                    }
                  }
                }
                .signature{
                  color: #999;
                  font-size: 12px;
                }
                .work,.fans{
                  margin-right: 5px;
                  &::before{
                    margin-right: 2px;
                  }
                }
                .work{
                  &::before{
                    content: '作品';
                  }
                }
                .fans{
                  &::before{
                    content: '粉丝';
                  }
                }
              }
            }
            .btn{
              flex: 0 0 95px;
              padding: 4px 8px;
              height: 30px;
              line-height: 30px;
              border:1px solid #000;
              text-align: center;
              font-size: 16px;
              cursor: pointer;
              &.btn-interested{
                &::before{
                  content: '';
                  display: inline-block;
                  vertical-align: middle;
                  margin-right: 5px;
                  margin-top: -5px;
                  width: 12px;
                  height: 6px;
                  border-left: 1px solid #000;
                  border-bottom: 1px solid #000;
                  -webkit-transform: rotate(-45deg);
                  -moz-transform: rotate(-45deg);
                  -ms-transform: rotate(-45deg);
                  -o-transform: rotate(-45deg);
                  transform: rotate(-45deg);
                }
              }
              &.btn-interest{
                background-color: #000;
                color: #fff;
                i{
                  margin-right: 5px;
                }
              }
            }
          }
          .designer-work{
            .work-wrapper{
              width: 200px;
              height: 200px;
              margin-right: ~'calc((100% - 4 * 200px) / 3)';
              margin-bottom: ~'calc((100% - 4 * 200px) / 3)';
              &:nth-child(4n){
                margin-right: 0;
              }
            }
          }
          &:last-child{
            border-bottom: none;
          }
        }
      }
    }
  }
</style>
