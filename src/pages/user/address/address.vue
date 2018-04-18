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
        <div class="empty empty-addr" v-if="addresses.length===0">暂无收货地址</div>
        <button class="button hollow btn-add" @click="btnAddFlag = !btnAddFlag"><i class="iconfont icon-add"></i>新增收获地址
        </button>
      </div>
      <transition name="fade">
        <el-form ref="addressForm" class="add-address" :rules="rules" :model="receiver" label-width="90px"
                 v-if="btnAddFlag">
          <el-form-item label="收货人" class="input-group" prop="name">
            <el-input v-model="receiver.name"></el-input>
          </el-form-item>
          <el-form-item label="所在地区" class="input-group" prop="area">
            <!--<input type="text" v-model="receiver.area">-->
            <el-cascader
              :options="cityInfo"
              v-model="selectedOptions"
              :change-on-select="true"
              :clearable="true"
              :filterable="true"
              @change="handleChange">
            </el-cascader>
          </el-form-item>
          <el-form-item label="详细地址" class="input-group" prop="addr">
            <el-input v-model="receiver.addr"></el-input>
          </el-form-item>
          <el-form-item label="手机号码" class="input-group" prop="mobile">
            <el-input v-model="receiver.mobile"></el-input>
          </el-form-item>
          <el-form-item class="input-group">
            <i class="iconfont" :class="[defaultFlag ? 'icon-checkbox-default' : 'icon-checkbox-active']"
               @click="defaultFlag = !defaultFlag"></i>
            <span>设为默认地址</span>
          </el-form-item>
          <el-form-item>
            <!--<button @click="saveAddress">保存</button>-->
            <el-button class="button" @click="saveAddress">保存</el-button>
          </el-form-item>
        </el-form>
      </transition>
    </div>
  </section>
</template>
<script>
  import {getAddrList, addAddress} from '../../../config/api'
  import cityData from '../../../config/city-data'
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        defaultFlag: false,
        addresses: [{
          name: '烧录亲',
          area: '浙江省杭州市西湖区',
          addr: '学院路123号',
          mobile: '15896589658',
          isDefault: true
        }, {
          name: '烧录亲1 ',
          area: '浙江省杭州市西湖区',
          addr: '学院路321号',
          mobile: '15896589784',
          isDefault: false
        }],
        btnAddFlag: false,
        receiver: {
          name: '',
          area: '',
          addr: '',
          mobile: '',
          isDefault: true
        },
        selectedOptions: [],
        cityInfo: cityData,
        rules: {
          name: [
            {required: true, message: '请输入收货人姓名', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          area: [
            {required: true, message: '请选择地址', trigger: 'change'}
          ],
          addr: [
            {required: true, message: '请输入详细地址', trigger: 'blur'}
          ],
          mobile: [
            {required: true, message: '请输入手机号', trigger: 'change'}
          ]
        }
      }
    },
    computed: {
      ...mapGetters(['id'])
    },
    methods: {
      handleChange(value) {
        let pro = this.cityInfo.find((item) => {
          return item.value === value[0]
        })
        let city = value[1] ? pro.children.find((item) => {
          return item.value === value[1]
        }) : {}
        let area = value[2] ? city.children.find((item) => {
          return item.value === value[2]
        }) : {}
        this.receiver.area = pro.label + (city.label ? city.label : '') + (area.label ? area.label : '')
      },
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
      saveAddress() {
        this.$refs['addressForm'].validate((valid) => {
          if (valid) {
            this.receiver.userId = this.id
            addAddress(this.receiver).then(res => {
              if (res.code === 0) {
                this.getAddressList()
                this.$message({
                  message: '添加成功',
                  type: 'success'
                })
              } else {
                this.$message({
                  message: res.msg,
                  type: 'error'
                })
              }
            })
          } else {
            return false
          }
        })
      },
      getAddressList() {
        getAddrList({
          userId: this.id
        }).then(res => {
          if (res.code === 0) {
            this.addresses = res.data
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
      this.getAddressList()
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  #address {
    .el-form-item__label {
      text-align: left;
      color: #000;
    }
    .el-input {
      width: 280px;
    }
  }
</style>
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
      .set-default {
        margin-bottom: 30px;
      }
      button {
        padding: 8px 20px;
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
