// sql语句
let sqlMap = {
  // 用户
  user: {
    addUser: 'insert into demo_user(mobile, passwd) values (?, ?)',
    updateUser: 'update demo_user set 列名称 = 新值 WHERE 列名称 = 某值'
  }
}

module.exports = sqlMap
