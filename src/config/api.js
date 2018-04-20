/**
 * Created by UI150730 on 2017/4/17.
 */
import axios from 'axios/dist/axios.min'
import request from '../config/request'

// let headers = {'Accept': 'application/json', 'Content-Type': 'application/json'}

let qs = require('qs')
let base = process.env.API_ROOT
// 添加用户
export const addUser = params => {
  return request.post(`${base}/user/registe`, params)
  // return axios.post(`${base}/user/registe`, qs.stringify(params)).then(res => res.data)
}

// 发送验证码
export const sendEmailCode = params => {
  return request.get(`${base}/sendEmailCode`, params)
  // return axios.get(`${base}/sendEmailCode`, {params: params}).then(res => res.data)
}

// 登陆
export const login = params => {
  return request.get(`${base}/user/login`, params)
  // return axios.get(`${base}/user/login`, {params: params}).then(res => res.data)
}

// 获取基础资料
export const getBaseInfo = params => {
  return request.get(`${base}/user/getUserInfo`, params)
  // return axios.get(`${base}/user/getUserInfo`, {params: params}).then(res => res.data)
}
// 设置基础资料
export const setBaseInfo = params => {
  return request.post(`${base}/user/modifyUserInfo`, params)
  // return axios.post(`${base}/user/modifyUserInfo`, qs.stringify(params)).then(res => res.data)
}

// 修改登录密码
export const modifyLoginPwd = params => {
  return request.post(`${base}/user/modifyPassWd`, params)
  // return axios.post(`${base}/user/modifyPassWd`, qs.stringify(params)).then(res => res.data)
}
// 根据旧密码修改密码
export const modifyUserPasswd = params => {
  return request.get(`${base}/modifyUserPasswd`, params)
  // return axios.get(`${base}/modifyUserPasswd`, {params: params}).then(res => res.data)
}
// 获取地址列表
export const getAddrList = params => {
  return request.get(`${base}/getAddrList`, params)
// return axios.get(`${base}/getAddrList`, {params: params}).then(res => res.data)
}

// 添加地址
export const addAddress = params => {
  return request.get(`${base}/addAddrInformation`, params)
  // return axios.get(`${base}/addAddrInformation`, {params: params}).then(res => res.data)
}
// 删除地址
export const delAddress = params => {
  return request.get(`${base}/delAddrInformation`, params)
  // return axios.get(`${base}/delAddrInformation`, {params: params}).then(res => res.data)
}
// 修改地址
export const modifyAddress = params => {
  return request.get(`${base}/modifyAddrInformation`, params)
  // return axios.get(`${base}/modifyAddrInformation`, {params: params}).then(res => res.data)
}
// 获取订单列表
export const getOrderList = params => {
  return request.get(`${base}/getOrderList`, params)
  // return axios.get(`${base}/getOrderList`, {params: params}).then(res => res.data)
}

// 获取产品列表
export const getProductList = params => {
  return request.get(`${base}/getProductList`, params)
  // return axios.get(`${base}/getOrderList`, {params: params}).then(res => res.data)
}
