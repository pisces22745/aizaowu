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
  var addUserSql = $sql.user.addUser
  var isUserExistSql = $sql.user.isUserExist
  var params = req.body
  conn.query(isUserExistSql, [params.email], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      if (result.length > 0) {
        jsonWrite(res, {code: 1, msg: '该邮箱已注册', data: {}})
      } else {
        if (params.code === req.cookies[params.email]) {
          conn.query(addUserSql, [params.email, params.passwd], function (err, result) {
            if (err) {
              console.log(err)
            }
            if (result) {
              conn.query(isUserExistSql, [params.email], function (err, result) {
                if (err) {
                  console.log(err)
                }
                if (result) {
                  let temp = JSON.parse(JSON.stringify(result))[0]
                  jsonWrite(res, {
                    code: 0,
                    msg: '添加成功',
                    data: {id: temp.id, headerImg: temp.headimg, username: temp.user_name}
                  })
                }
              })
            }
          })
          res.clearCookie(params.email)
        } else {
          jsonWrite(res, {code: 1, msg: '验证码不正确', data: {}})
        }
      }
    }
  })
})
// 发送邮箱验证码
router.post('/sendEmailCode', (req, res) => {
  var code = Math.random().toString(36).substring(3, 7)
  var params = req.body
  res.cookie(params.email, code)
  sendMail(params.email, '爱造物验证码', 'Hi~您的注册验证码是' + code, function () {
    jsonWrite(res, {code: 0, msg: '发送成功', data: {}})
  }, function () {
    jsonWrite(res)
  })
})
// 登录
router.post('/login', (req, res) => {
  var params = req.body
  var isUserExistSql = $sql.user.isUserExist
  conn.query(isUserExistSql, [params.email], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result && result.length) {
      let temp = JSON.parse(JSON.stringify(result))[0]
      if (temp.passwd === params.pwd) {
        jsonWrite(res, {code: 0, msg: '登录成功', data: {}})
      } else {
        jsonWrite(res, {code: 1, msg: '密码错误', data: {}})
      }
    } else {
      jsonWrite(res, {code: 1, msg: '用户名不存在', data: {}})
    }
  })
})
// 图片上传
router.post('/uploadHeadImage', (req, res) => {
  var params = req.body
  var updateHeadImageById = $sql.user.updateHeadImageById
  var imgData = req.body
  console.log(req)
  // 过滤data:URL
  // var base64Data = imgData.replace(/^data:image\/\w+;base64,/, ' ')
  // var dataBuffer = new Buffer(base64Data, 'base64')
  // var time = new Date().getTime()
  // if (!fs.existsSync(__dirname + '/images/')) {
  //   fs.mkdirSync(__dirname + '/images/');
  // }
  // if (!fs.existsSync(__dirname + '/images/upload/')) {
  //   fs.mkdirSync(__dirname + '/images/upload/');
  // }
  // fs.writeFile(__dirname + '/images/upload/' + time + '.png', dataBuffer, function (err) {
  //   if (err) {
  //     res.send(err)
  //   } else {
  //     res.send({ code: 1, ms: '保存成功', data: 'http://' + getIp() + ':3000/upload/' + time + '.png'})
  //   }
  // })
  // conn.query(updateHeadImageById, [params.id], function (err, result) {
  //   if (err) {
  //     console.log(err)
  //   }
  //   if (result && result.length) {
  //     let temp = JSON.parse(JSON.stringify(result))[0]
  //     if (temp.passwd === params.pwd) {
  //       jsonWrite(res, {code: 0, msg: '登录成功', data: {}})
  //     } else {
  //       jsonWrite(res, {code: 1, msg: '密码错误', data: {}})
  //     }
  //   } else {
  //     jsonWrite(res, {code: 1, msg: '用户名不存在', data: {}})
  //   }
  // })
})
// 修改基础资料
router.post('/setBaseInfo', (req, res) => {
  var params = req.body
  var setBaseInfo = $sql.user.setBaseInfo
  console.log(params)
  conn.query(setBaseInfo, [params.nickname, params.birthday, params.sex, params.email, params.mobile, params.id], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      console.log(result)
      jsonWrite(res, {code: 0, msg: '修改成功', data: {}})
    } else {
      jsonWrite(res, {code: 1, msg: '系统错误', data: {}})
    }
  })
})
// 获取基础资料
router.get('/getBaseInfo', (req, res) => {
  var params = req.query
  var getBaseInfo = $sql.user.getBaseInfo
  conn.query(getBaseInfo, [params.id], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result && result.length) {
      let temp = JSON.parse(JSON.stringify(result))[0]
      jsonWrite(res, {code: 0, msg: '登录成功', data: temp})
    } else {
      jsonWrite(res, {code: 1, msg: '用户名不存在', data: {}})
    }
  })
})
module.exports = router
