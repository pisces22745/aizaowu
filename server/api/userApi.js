var models = require('../db')
var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var $sql = require('../sqlMap')
var sendMail = require('../util/mail')
// 连接数据库
var conn = mysql.createConnection(models.mysql)

conn.connect()
var jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
}

// 增加用户接口,注册
router.post('/addUser', (req, res) => {
  var sql = $sql.user.addUser
  var params = req.body
  conn.query(sql, [params.email, params.passwd], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})
router.post('/sendEmailCode', (req, res) => {
  var code = Math.random().toString(36).substring(3, 7)
  var params = req.body
  sendMail(params.email, '爱造物验证码', 'Hi~您的注册验证码是' + code, function () {
    jsonWrite(res, {code: 0, msg: '发送成功', data: {}})
  }, function () {
    jsonWrite(res)
  })
})
module.exports = router
