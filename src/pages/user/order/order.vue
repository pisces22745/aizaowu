<template>
  <section id="order">
    <div class="empty" v-if="orderList.length===0">
      <span>暂时还没有订单</span>
    </div>
    <div v-if="orderList.length!==0">
      <div class="content-header">
        <div v-for="(type,index) in orderType">
          <span :class="{active:activeIndex===index}" @click="changeType(index)">{{type}}</span>
        </div>
      </div>
      <div class="content-body">
        <div class="flex-wrapper order-title">
          <span>商品信息</span>
          <span>商品属性</span>
          <span>单价</span>
          <span>数量</span>
          <span>交易状态</span>
        </div>
        <ul class="order-list">
          <li v-for="item in orderList">
            <div class="order-item-top">
              <span>{{item.createTime}}</span>
              <span>订单号：{{item.orderNo}}</span>
              <span class="fr iconfont icon-trash" @click="deleteOrder(item)"></span>
            </div>
            <div class="flex-wrapper order-item-bottom">
              <span>{{item.orderName}}</span>
              <span>
                <span v-for="property in item.orderProperty"
                      class="property">{{property.name}}:{{property.value}}</span>
              </span>
              <span>{{item.unitPrice}}</span>
              <span>{{item.count}}</span>
              <span>{{orderStatuses[item.orderStatus]}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
  import {getOrderList} from '../../../config/api'
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        orderList: [{
          id: 1,
          createTime: '2017-08-17',
          orderNo: '59784130456',
          orderName: '个性定制T恤',
          orderProperty: [{
            name: '颜色',
            value: '白色'
          }, {
            name: '尺码',
            value: 'L'
          }],
          unitPrice: 79,
          count: 1,
          orderStatus: 0
        }, {
          id: 1,
          createTime: '2017-08-17',
          orderNo: '59784130456',
          orderName: '个性定制T恤',
          orderProperty: [{
            name: '颜色',
            value: '黑色'
          }, {
            name: '尺码',
            value: 'M'
          }],
          unitPrice: 79,
          count: 2,
          orderStatus: 0
        }],
        orderStatuses: ['交易成功', '待付款', '待发货', '待收货', '交易取消'],
        orderType: ['所有订单', '待付款', '待发货', '待收货'],
        activeIndex: 0
      }
    },
    computed: {
      ...mapGetters(['id'])
    },
    methods: {
      changeType(index) {
        this.activeIndex = this.activeIndex !== index ? index : this.activeIndex
        // 请求对应类型的订单
        this.getOrderListByType(index)
      },
      deleteOrder(item) {
        console.log(item)
      },
      getOrderListByType(type) {
        // 0:全部 1：待付款 2：待发货 3：待收货
        getOrderList({
          userId: this.id,
          status: type
        }).then(res => {
          if (res.code === 0) {
            this.orderList = res.data
          } else {
            this.$message({
              message: res.msg,
              type: 'error'
            })
          }
        })
      }
    },
    mounted() {
      this.getOrderListByType(0)
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #order {
    padding: 30px 50px;
    .content-header {
      margin-bottom: 30px;
      display: flex;
      flex-flow: row nowrap;
      border-bottom: none;
      & > div {
        flex: auto;
        border-right: 1px solid #000;
        text-align: center;
        &:last-child {
          border-right: none;
        }
        span {
          font-size: 16px;
          color: #000;
          padding: 3px 0;
          cursor: pointer;
          -webkit-transition: all .2s;
          -moz-transition: all .2s;
          -ms-transition: all .2s;
          -o-transition: all .2s;
          transition: all .2s;
          &.active {
            border-bottom: 3px solid #000;
          }
        }
      }
    }
    .content-body {
      .flex-wrapper {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        &.order-title {
          padding: 16px 10px;
          background-color: #f2f2f2;
        }
        span {
          flex: auto;
          text-align: center;
          &:first-child, &:nth-child(2) {
            width: 160px;
          }
          &:nth-child(3), &:nth-child(4) {
            width: 100px;
          }
        }
      }
      .order-list {
        li {
          font-size: 13px;
          color: #101010;
          .order-item-top {
            padding: 10px 0;
            border-bottom: 1px solid #f2f2f2;
            span {
              &:first-child {
                margin-right: 30px;
              }
              &.icon-trash {
                cursor: pointer;
              }
            }
          }
          .order-item-bottom {
            padding: 15px 0;
            border-bottom: 1px solid #d2d2d2;
            .property {
              display: block;
              margin: 0 0 5px;
            }
          }
        }
      }
    }
  }
</style>
