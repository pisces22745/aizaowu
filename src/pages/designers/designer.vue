<template>
  <section id="designer">
    <div class="banner">
      <img :src="cover" alt="封面">
    </div>
    <div class="container">
      <div class="header-img">
        <img :src="headerImg" alt="">
      </div>
      <div class="name">
        <span>{{designer.name}}</span>
        <i class="iconfont sex" :class="[designer.sex===0 ? 'icon-male' : 'icon-female']"></i>
      </div>
      <div>
        <span>{{types[designer.type]}}</span>
      </div>
      <div>
        <span>{{designer.signature}}</span>
      </div>
      <div>
        <span class="work-count">{{designer.workCount}}</span>
        <span class="fans-count">{{designer.fansCount}}</span>
      </div>
      <div>
        <div class="btn btn-interested" v-if="designer.isInterested">已关注</div>
        <div class="btn btn-interest" v-if="!designer.isInterested"><i class="iconfont icon-add"></i>关注</div>
      </div>
      <div class="works clearfix">
        <div class="work fl" v-for="work in designer.works">
          <img :src="work" alt="wrok">
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        cover: 'http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg',
        headerImg: 'http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg',
        designer: {},
        types: ['手绘插画', '字体设计', '手工艺品']
      }
    },
    mounted() {
      this.designer = {
        name: '烧录亲',
        sex: 1,
        type: 0,
        signature: '我就是我，是颜色不一样的烟火',
        workCount: 13,
        fansCount: 13,
        isInterested: true,
        works: ['http://dl.bizhi.sogou.com/images/2012/09/25/42692.jpg?f=download', 'http://gb.cri.cn/mmsource/images/2004/11/16/eo041116975.jpg', 'http://gb.cri.cn/mmsource/images/2004/11/16/eo041116975.jpg', 'http://gb.cri.cn/mmsource/images/2004/11/16/eo041116975.jpg', 'http://gb.cri.cn/mmsource/images/2004/11/16/eo041116975.jpg']
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #designer {
    .banner {
      height: 400px;
    }
    .container {
      position: relative;
      padding: 65px 0 0;
      & > div {
        margin-bottom: 15px;
        text-align: center;
      }
      .header-img {
        position: absolute;
        left: 50%;
        top: -50px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 1px solid #000;
        margin: 0 -50px 0;
        overflow: hidden;
      }
      .work-count {
        margin-right: 30px;
        color: #999;
        &::before {
          content: '作品';
        }
      }
      .fans-count {
        color: #999;
        &::before {
          content: '粉丝';
        }
      }
      .name {
        font-size: 18px;
      }
      .works {
        width:1000px;
      }
      .fl{
        width:200px;
        height:200px;
        margin-right:50px;
        margin-bottom:60px;
      }
    }
  }

</style>
