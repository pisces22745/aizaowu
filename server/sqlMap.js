// sql语句
let sqlMap = {
  // 用户
  user: {
    addUser: 'insert into demo_user(mobile, passwd) values (?, ?)'
  }
}

module.exports = sqlMap
