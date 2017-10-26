var nodemailer = require('nodemailer')
var smtpTransport = require('nodemailer-smtp-transport');
var config = {
  service: 'QQ',
  user: '578992047@qq.com',
  pass: 'pcpsdgpzudcwbffi'
}

smtpTransport = nodemailer.createTransport(smtpTransport({
  service: config.service,
  auth: {
    user: config.user,
    pass: config.pass
  }
}));

/**
 * @param {String} recipient 收件人
 * @param {String} subject 发送的主题
 * @param {String} html 发送的html内容
 */
var sendMail = function (recipient, subject, html, successHandler, errorHandler) {
  smtpTransport.sendMail({
    from: config.user,
    to: recipient,
    subject: subject,
    html: html
  }, function (error, response) {
    if (error) {
      errorHandler();
    }else{
      successHandler()
    }
  });
}

module.exports = sendMail;
