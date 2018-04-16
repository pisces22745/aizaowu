/**
 * Created by UI150730 on 2017/4/17.
 */
import axios from 'axios/dist/axios.min'

let qs = require('qs')
let base = process.env.API_ROOT
// 添加用户
export const addUser = params => {
  return axios.post(`${base}/user/registe`, qs.stringify(params)).then(res => res.data)
}

// 发送验证码
export const sendEmailCode = params => {
  return axios.post(`${base}/sendEmailCode`, qs.stringify(params)).then(res => res.data)
}

// 登陆
export const login = params => {
  return axios.post(`${base}/user/login`, qs.stringify(params)).then(res => res.data)
}

// 获取基础资料
export const getBaseInfo = params => {
  return axios.get(`${base}/user/getUserInfo`, {params: params}).then(res => res.data)
}
// 设置基础资料
export const setBaseInfo = params => {
  return axios.post(`${base}/user/modifyUserInfo`, qs.stringify(params)).then(res => res.data)
}
// 绑定邮箱
export const bindEmail = params => {
  return axios.post(`${base}/api/user/bindEmail`, params).then(res => res.data)
}

// 修改登录密码
export const modifyLoginPwd = params => {
  return axios.post(`${base}/user/modifyPassWd`, qs.stringify(params)).then(res => res.data)
}
