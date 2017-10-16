<template>
  <section id="address">
    <div class="content-header">
      <h1>地址管理</h1>
    </div>
    <div class="content-body">
      <div class="address-list">
        <table>
          <thead>
          <tr>
            <td>收货人</td>
            <td>所在地区</td>
            <td>详细地址</td>
            <td>手机号码</td>
            <td>操作</td>
            <td></td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(address,index) in addresses" @mouseenter="showBtnSetDefault($event)"
              @mouseleave="hideBtnSetDefault($event)">
            <td>{{address.name}}</td>
            <td>{{address.area}}</td>
            <td>{{address.detail}}</td>
            <td>{{address.mobile}}</td>
            <td><span class="operate modify" @click="modifyAddress(item)">修改</span><span class="operate delete"
                                                                                         @click="deleteAddress(address,index)">删除</span>
            </td>
            <td>
              <span class="status" :class="{'default': address.isDefault}" v-if="address.isDefault">默认地址</span>
              <span class="status" :class="{'not-default': !address.isDefault}" v-if="!address.isDefault">设为默认</span>
            </td>
          </tr>
          </tbody>
        </table>
        <button class="hollow btn-add" @click="btnAddFlag = !btnAddFlag"><i class="iconfont icon-add"></i>新增收获地址
        </button>
      </div>
      <transition name="fade">
        <div class="add-address" v-if="btnAddFlag">
          <div class="input-group">
            <label for="receiver-name">收货人</label>
            <input type="text" id="receiver-name" v-model="receiver.name">
          </div>
          <div class="input-group">
            <label for="receiver-area">所在地区</label>
            <input type="text" id="receiver-area" v-model="receiver.area">
          </div>
          <div class="input-group">
            <label for="receiver-detail">详细地址</label>
            <input type="text" id="receiver-detail" v-model="receiver.detail">
          </div>
          <div class="input-group">
            <label for="receiver-mobile">手机号码</label>
            <input type="text" id="receiver-mobile" v-model="receiver.mobile">
          </div>
          <div class="set-default">
            <i class="iconfont" :class="[defaultFlag ? 'icon-checkbox-default' : 'icon-checkbox-active']"
               @click="defaultFlag = !defaultFlag"></i>
            <span>设为默认地址</span>
          </div>
          <button @click="saveAddress">保存</button>
        </div>
      </transition>
    </div>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        defaultFlag: false,
        addresses: [{
          name: '烧录亲',
          area: '浙江省杭州市西湖区',
          detail: '学院路123号',
          mobile: '15896589658',
          isDefault: true
        }, {
          name: '烧录亲1 ',
          area: '浙江省杭州市西湖区',
          detail: '学院路321号',
          mobile: '15896589784',
          isDefault: false
        }],
        btnAddFlag: false,
        receiver:{
          name: '',
          area: '',
          detail: '',
          mobile: '',
          isDefault: true
        }
      }
    },
    methods: {
      showBtnSetDefault(e) {
        e.preventDefault()
        if (e.target.lastChild.lastChild.style) {
          e.target.lastChild.lastChild.style.visibility = 'visible'
        }
      },
      hideBtnSetDefault(e) {
        e.preventDefault()
        if (e.target.lastChild.lastChild.style) {
          e.target.lastChild.lastChild.style.visibility = 'hidden'
        }
      },
      deleteAddress(address, index) {
        this.addresses.splice(index, 1)
      },
      saveAddress(){
        this.receiver.isDefault = !this.defaultFlag
        this.addresses.push(this.receiver)
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #address {
    padding: 30px 50px;
    .content-header {
      margin-bottom: 0;
    }
    .add-address {
      -webkit-transition: all .3s;
      -moz-transition: all .3s;
      -ms-transition: all .3s;
      -o-transition: all .3s;
      transition: all .3s;
      #receiver-detail {
        width: 480px;
      }
      .set-default, button {
        margin-left: 93px;
      }
      .set-default {
        margin-bottom: 30px;
      }
      button {
        padding: 8px 20px;
        margin-left: 93px;
      }
    }
    .address-list {
      table {
        width: 100%;
        tr {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          text-align: center;
          td {
            box-sizing: border-box;
            flex: none;
            padding: 15px 0;
            border-bottom: 1px solid #f2f2f2;
            font-size: 14px;
            &:first-child {
              width: 70px;
            }
            &:nth-child(2) {
              width: 140px;
            }
            &:nth-child(3) {
              width: 140px;
            }
            &:nth-child(4) {
              width: 110px;
            }
            &:nth-child(5) {
              width: 90px;
            }
            .operate {
              padding: 0 3px;
              cursor: pointer;
              &.modify {
                border-right: 1px solid #000;
              }
            }
            .status {
              padding: 2px;
              font-size: 12px;
              &.default {
                background-color: #f2f2f2;
                color: #858585;
              }
              &.not-default {
                visibility: hidden;
                border: 1px solid #000;
                cursor: pointer;
              }
            }
          }
        }
        thead {
          background-color: #f2f2f2;
          td {
            font-size: 16px;
          }
        }
      }
      button {
        margin: 15px 0;
        padding: 12px;
        i {
          margin-right: 12px;
        }
      }
    }
  }
</style>
