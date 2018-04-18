/**
 * Created by slq on 2018/4/18
 */
import 'whatwg-fetch'
import store from '../vuex/store'
import {Loading, Notification} from 'element-ui'

export default {
  /**
   * 基于 fetch 封装的 GET请求
   * @param url
   * @param params {}
   * @param headers
   * @returns {Promise}
   */
  get(url, params, headers) {
    if (params) {
      let paramsArray = []
      // encodeURIComponent
      Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
      if (url.search(/\?/) === -1) {
        url += '?' + paramsArray.join('&')
      } else {
        url += '&' + paramsArray.join('&')
      }
    }
    if (!headers) {
      headers = {}
    }
    if (store.getters.token && store.getters.expire > new Date()) {
      // headers.Authorization = 'Bearer ' + store.getters.token
      headers['Authorization'] = 'Bearer ' + store.getters.token
    }
    var loading = Loading.service({fullscreen: true, text: '玩命加载中...'})
    return new Promise(function (resolve, reject) {
      fetch(url, {
        method: 'GET',
        headers: headers
      }).then((response) => {
        loading.close()
        if (response.ok) {
          response.json().then((result) => {
            resolve(result)
          })
        } else {
          response.json().then((error) => {
            // debugger
            Notification({title: '错误 ' + response.status, message: error.message || error.error, type: 'error'})
            reject(error)
          })
        }
      }).catch((err) => {
        loading.close()
        Notification({title: '错误 -1', message: '系统维护中，请稍后', type: 'error'})
        reject({error: err.message})
      })
    })
  },
  /**
   * 基于 fetch 封装的 POST请求  FormData 表单数据
   * @param url
   * @param formData
   * @param headers
   * @returns {Promise}
   */
  post(url, formData, headers) {
    if (!headers) {
      headers = {}
    }
    if (store.getters.token && store.getters.expire > new Date()) {
      // headers.Authorization = 'Bearer ' + store.getters.token
      headers['Authorization'] = 'Bearer ' + store.getters.token
    }
    var loading = Loading.service({fullscreen: true, text: '玩命加载中...'})
    return new Promise(function (resolve, reject) {
      fetch(url, {
        method: 'POST',
        headers: headers,
        body: formData
      }).then((response) => {
        loading.close()
        if (response.ok) {
          // https://developer.mozilla.org/en-US/docs/Web/API/Body/json
          response.json().then((result) => {
            resolve(result)
          })
        } else {
          response.json().then((error) => {
            if (!error) return
            Notification({title: '错误 ' + response.status, message: '系统维护中，请稍后', type: 'error'})
            reject(error)
            //reject(error)
          })
        }
      }).catch((err) => {
        loading.close()
        Notification({title: '错误 -1', message: '系统维护中，请稍后', type: 'error'})
        reject({error: err.message, message: err.message})
      })
    })
  },
  /**
   * 基于 fetch 封装的 POST请求  FormData 表单数据
   * @param url
   * @param params {}
   * @returns {Promise}
   */
  toFormData(params) {
    var body = ''
    for (var key in params) {
      if (body.length) {
        body += '&'
      }
      body += key + '='
      body += encodeURIComponent(params[key])
    }
    return body
  }
}

