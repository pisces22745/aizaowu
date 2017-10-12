<template>
  <div class="select">
    <div class="year">
      <span>{{selected}}</span>
      <i></i>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        years: [],
        monthes: [],
        days: [],
      }
    },
    methods: {
      creatDate() {
        //生成1900年-2100年
        for (let i = 2017; i >= 1950; i--) {
          this.years.push(i)
        }
        //生成1月-12月
        for (let i = 1; i <= 12; i++) {
          this.monthes.push(i)
        }
        //生成1日—31日
        for (let i = 1; i <= 31; i++) {
          this.days.push(i)
        }
      },
      computeDay() {
        console.log(this.$refs.month)
        //如果是2月
        if (sel2.value == 2) {
          //判断闰年
          if ((sel1.value % 4 === 0 && sel1.value % 100 !== 0) || sel1.value % 400 === 0) {
            days = 29;
          }
          else {
            days = 28;
          }
          //判断小月
        } else if (sel2.value == 4 || sel2.value == 6 || sel2.value == 9 || sel2.value == 11) {
          days = 30;
        } else {
          days = 31;
        }

        //增加或删除天数
        //如果是28天，则删除29、30、31天(即使他们不存在也不报错)
        if (days == 28) {
          sel3.remove(31);
          sel3.remove(30);
          sel3.remove(29);
        }
        //如果是29天
        if (days == 29) {
          sel3.remove(31);
          sel3.remove(30);
          //如果第29天不存在，则添加第29天
          if (!sel3.options[29]) {
            sel3.add(new Option('29', '29'), null)
          }
        }
        //如果是30天
        if (days == 30) {
          sel3.remove(31);
          //如果第29天不存在，则添加第29天
          if (!sel3.options[29]) {
            sel3.add(new Option('29', '29'), null)
          }
          //如果第30天不存在，则添加第30天
          if (!sel3.options[30]) {
            sel3.add(new Option('30', '30'), null)
          }
        }
        //如果是31天
        if (days == 31) {
          //如果第29天不存在，则添加第29天
          if (!sel3.options[29]) {
            sel3.add(new Option('29', '29'), null)
          }
          //如果第30天不存在，则添加第30天
          if (!sel3.options[30]) {
            sel3.add(new Option('30', '30'), null)
          }
          //如果第31天不存在，则添加第31天
          if (!sel3.options[31]) {
            sel3.add(new Option('31', '31'), null)
          }
        }
      }
    },
    mounted() {
      this.creatDate()
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .select {
    display: inline-block;
  }
</style>
