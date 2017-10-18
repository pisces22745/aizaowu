<template>
  <section id="designer">
    <div class="banner"></div>
    <div class="designer-list-wrapper">
      <div class="designer-header">
        <span>手绘插画</span>
        <span>字体设计</span>
        <span>手工艺品</span>
      </div>
      <div class="designer-content">
        <ul>
          <li v-for="designer in designers">
            <div class="designer-info">
              <div class="head-img">
                <img :src="designer.headerImage" alt="头像">
              </div>
              <div class="desc">
                <div>
                  <span class="name">
                    {{designer.name}}
                    <i class="iconfont" :class="[designer.sex===0 ? 'icon-male' : 'icon-female']"></i>
                  </span>
                  <span class="signature">{{designer.signature}}</span>
                </div>
                <div>
                  <span class="work">{{designer.workCount}}</span>
                  <span class="fans">{{designer.fansCount}}</span>
                </div>
              </div>
              <div class="interested">已关注</div>
            </div>
            <div class="designer-work">
                <div class="work-wrapper" v-for="work in designer.works">
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
          headerImage: 'http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg',
          name: '烧录亲',
          sex: 1,
          workNumber: 13,
          fansNumber: 13,
          isInterested: false,
          works: ['http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg','http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg','http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg','http://pic1.win4000.com/wallpaper/4/53d70ec55fcf8.jpg']
        }]
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
