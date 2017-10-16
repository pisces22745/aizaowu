<template>
  <section id="interest">
    <div class="empty" v-if="interestList.length===0">
      <span>暂时还没有关注</span>
    </div>
    <ul class="interest-list" v-if="interestList.length!==0">
      <li v-for="item in interestList">
        <div class="interest-top">
          <div class="head-img">
            <img :src="item.headerImage" alt="头像">
          </div>
          <div class="desc">
            <div>
              <span class="name">
                {{item.name}}
                <i class="iconfont" :class="[item.sex===0 ? 'icon-male' : 'icon-female']"></i>
              </span>
              <span class="signature">{{item.signature}}</span>
            </div>
            <div>
              <span class="work">{{item.workCount}}</span>
              <span class="fans">{{item.fansCount}}</span>
            </div>
          </div>
          <div class="interested">已关注</div>
        </div>
        <div class="interest-bottom">
          <div class="work-wrapper" v-for="work in item.works">
            <img :src="work" alt="作品">
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        interestList: [{
          headerImage: 'http://wx.qlogo.cn/mmopen/PiajxSqBRaELoYejTIYymHT5Tfg4zm4ia2LqMA5j3UvUsTqkW8gXvC4zjBAMnIpEibyKISndDXSAbQj3ULfaCnONA/0',
          name: '烧录亲',
          sex: 1,
          signature:'我就是我，是颜色不一样的烟火',
          workCount: 13,
          fansCount: 13,
          works: ['http://dl.bizhi.sogou.com/images/2012/09/25/42692.jpg?f=download','http://dl.bizhi.sogou.com/images/2012/09/25/42692.jpg?f=download','http://dl.bizhi.sogou.com/images/2012/09/25/42692.jpg?f=download','http://dl.bizhi.sogou.com/images/2012/09/25/42692.jpg?f=download','http://dl.bizhi.sogou.com/images/2012/09/25/42692.jpg?f=download','http://dl.bizhi.sogou.com/images/2012/09/25/42692.jpg?f=download','http://dl.bizhi.sogou.com/images/2012/09/25/42692.jpg?f=download','http://dl.bizhi.sogou.com/images/2012/09/25/42692.jpg?f=download','http://www.pp3.cn/uploads/201512/2015121803.jpg','http://gb.cri.cn/mmsource/images/2004/11/16/eo041116975.jpg']
        }, {
          headerImage: 'http://wx.qlogo.cn/mmopen/PiajxSqBRaELoYejTIYymHT5Tfg4zm4ia2LqMA5j3UvUsTqkW8gXvC4zjBAMnIpEibyKISndDXSAbQj3ULfaCnONA/0',
          name: '烧录亲1',
          sex: 1,
          signature:'我就是我，是颜色不一样的烟火',
          workCount: 13,
          fansCount: 13,
          works: ['http://dl.bizhi.sogou.com/images/2012/09/25/42692.jpg?f=download','http://www.pp3.cn/uploads/201512/2015121803.jpg','http://gb.cri.cn/mmsource/images/2004/11/16/eo041116975.jpg']
        }, {
          headerImage: 'http://wx.qlogo.cn/mmopen/PiajxSqBRaELoYejTIYymHT5Tfg4zm4ia2LqMA5j3UvUsTqkW8gXvC4zjBAMnIpEibyKISndDXSAbQj3ULfaCnONA/0',
          name: '烧录亲2',
          sex: 1,
          signature:'我就是我，是颜色不一样的烟火',
          workCount: 13,
          fansCount: 13,
          works: ['http://dl.bizhi.sogou.com/images/2012/09/25/42692.jpg?f=download','http://www.pp3.cn/uploads/201512/2015121803.jpg','http://gb.cri.cn/mmsource/images/2004/11/16/eo041116975.jpg']
        }]
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #interest{
    padding: 0 30px;
    .interest-list{
      li{
        padding: 20px 0;
        border-bottom: 1px solid #f2f2f2;
        .interest-top{
          margin-bottom: 20px;
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          .head-img{
            flex: 0 0 auto;
            width: 50px;
            height: 50px;
            margin-right: 30px;
            overflow: hidden;
            border-radius: 50%;
            img{
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .desc{
            flex: auto;
            &>div{
              margin: 5px 0;
              .name{
                margin-right: 20px;
                font-size: 16px;
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
            }
          }
          .interested{
            flex: none;
            padding: 5px 8px;
            border:1px solid #000;
            &::before{
              content: '';
              display: inline-block;
              vertical-align: middle;
              width: 8px;
              height: 4px;
              margin-right: 5px;
              margin-top: -3px;
              border-left: 1px solid #000;
              border-bottom: 1px solid #000;
              -webkit-transform: rotate(-45deg);
              -moz-transform: rotate(-45deg);
              -ms-transform: rotate(-45deg);
              -o-transform: rotate(-45deg);
              transform: rotate(-45deg);
            }
          }
        }
        .interest-bottom{
          display: flex;
          flex-flow: row wrap;
          .work-wrapper{
            width: 100px;
            height: 100px;
            background-color: #f2f2f2;
            margin: 0 7px 7px 0;
            img{
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
      }
    }
  }
</style>
