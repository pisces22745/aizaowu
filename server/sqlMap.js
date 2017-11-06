// sql语句
let sqlMap = {
  // 用户
  user: {
    addUser: 'insert into demo_user(email, passwd) values (?, ?)',
    isUserExist: 'SELECT * from demo_user WHERE email=?'
  }
}

module.exports = sqlMap
