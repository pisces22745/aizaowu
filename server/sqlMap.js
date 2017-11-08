// sql语句
let sqlMap = {
  // 用户
  user: {
    addUser: 'insert into demo_user(email, passwd) values (?, ?)',
    isUserExist: 'SELECT * from demo_user WHERE email=?',
    updateHeadImageById: 'UPDATE demo_user SET headimg = ? WHERE id = ?',
    getBaseInfo: 'SELECT nick_name,sex,birthday,email,mobile from demo_user WHERE id=10',
    setBaseInfo: 'UPDATE demo_user SET nick_name=?,sex=?,birthday=?,email=?,mobile=? WHERE id=?'
  }
}

module.exports = sqlMap
