<template>
  <section id="account">
    <div class="content-header">
      <h1>个人简介</h1>
    </div>
    <div class="content-body">
      <div class="input-group">
        <label for="type">申请类别</label>
        <div class="type" id="type">
          <div class="type-item photo"><input name="leibie" class="genre" type="radio" value=""/></div>
          <div class="type-item font"><input name="leibie" class="genre" type="radio" value="" checked/></div>
          <div class="type-item art"><input name="leibie" class="genre" type="radio" value=""/></div>
        </div>
      </div>
      <div class="input-textarea">
        <label for="introduce">个人介绍</label>
        <!--<input name="introduction" id="introduce" row="6" class="introduce" type="textarea"/>-->
        <textarea name="introduce" id="introduce" rows="10" class="introduce"></textarea>
      </div>
      <div class="save">
        <button class="button">保存</button>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #account {
    padding: 30px 50px;
    .content-body {
      .input-group {
        .type {
          display: inline-block;
          vertical-align: top;
          .type-item {
            padding: 0 0 10px;
            vertical-align: top;
            &.photo {
              &::after {
                content: '手绘插画';
              }
            }
            &.font {
              &::after {
                content: '字体设计';
              }
            }
            &.art {
              &::after {
                content: '手工艺品';
              }
            }
          }
        }
      }
      .input-group .genre {
        vertical-align: middle;
        height: auto;
      }
      .input-textarea .introduce {
        width: 70%;
        vertical-align: top;
        margin-left: 30px;
        padding: 10px;
      }
      button {
        padding: 10px 15px;
        margin-left: 90px;
        margin-top: 21px;
      }
    }
  }
</style>
