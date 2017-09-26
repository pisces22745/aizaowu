/**
 * Created by UI150730 on 2017/4/17.
 */
import axios from 'axios/dist/axios.min';

let qs = require('qs');
// let base = 'http://192.168.0.173:9030/api';
let base = process.env.API_ROOT;
let header = {
    'content-type': 'application/x-www-form-urlencoded',
    'Authorization': localStorage.getItem('token')
};

//获取登录用户的权限
export const userprivileges = params => {
    header.Authorization = localStorage.getItem('token');
    return axios.post(`${base}/user/queryPermission`, qs.stringify(params), {headers: header}).then(res => res.data);
};

//登录
export const requestLogin = params => {
    return axios.post(`${base}/user/login`, qs.stringify(params), {headers: header}).then(res => res.data);
};

//工资单列表
export const payrollList = params => {
    return axios.post(`${base}/payroll/queryPayroll`, qs.stringify(params), {headers: header}).then(res => res.data);
};
//工资单管理列表
export const payrollListLog = params => {
    return axios.post(`${base}/payroll/queryPayrollLog`, qs.stringify(params), {headers: header}).then(res => res.data);
};

//工资单管理下载原始工资单
export const downPayDetail = params => {
    return axios.post(`${base}/payroll/downPayDetail`, qs.stringify(params), {headers: header}).then(res => res.data);
};

export const doCancel = params => {
    return axios.post(`${base}/payroll/doCancel`, qs.stringify(params), {headers: header}).then(res => res.data);
};

// 权限检测接口
export const checkAuth = params => {
    return axios.post(`${base}/auth/checkAuth`, qs.stringify(params), {headers: header}).then(res => res.data);
};

//一键发薪发送验证码
export const sendSms = params => {
    return axios.post(`${base}/payroll/sendSms`, qs.stringify(params), {headers: header}).then(res => res.data);
};

//一键发薪确认发薪
export const doPay = params => {
    return axios.post(`${base}/payroll/doPay`, qs.stringify(params), {headers: header}).then(res => res.data);
};

//一键发薪的详情
export const payrollDetail = params => {
    return axios.post(`${base}/payroll/queryDetail`, qs.stringify(params), {headers: header}).then(res => res.data);
};
//一键发薪的详情顶部数据实付
export const realPay = params => {
    return axios.post(`${base}/payroll/realPay`, qs.stringify(params), {headers: header}).then(res => res.data);
};
//一键发薪的详情顶部数据应付
export const shouldPay = params => {
    return axios.post(`${base}/payroll/shouldPay`, qs.stringify(params), {headers: header}).then(res => res.data);
};
//上传工资单页面
export const queryFeeType = params => {
    return axios.post(`${base}/payroll/queryFeeType`, qs.stringify(params), {headers: header}).then(res => res.data);
};
//资金明细列表
export const moneyDetail = params => {
    return axios.post(`${base}/funds/detail`, qs.stringify(params), {headers: header}).then(res => res.data);
};
//资金明细获取账户
export const getAccount = params => {
    return axios.post(`${base}/funds/account`, qs.stringify(params), {headers: header}).then(res => res.data);
};
//资金明细累计
export const getTotal = params => {
    return axios.post(`${base}/funds/total`, qs.stringify(params), {headers: header}).then(res => res.data);
};
//统计报表
export const statisticalForm = params => {
    return axios.post(`${base}/report/list`, qs.stringify(params), {headers: header}).then(res => res.data);
};
//首页统计报表
export const statisticalFormIndex = params => {
    return axios.post(`${base}/statisticalFormIndex`, qs.stringify(params), {headers: header}).then(res => res.data);
};
// 统计报表总计
export const summary = params => {
    return axios.post(`${base}/report/summary`, qs.stringify(params), {headers: header}).then(res => res.data);
};
// 统计操作日志
export const getLog = params => {
    return axios.post(`${base}/log/list`, qs.stringify(params), {headers: header}).then(res => res.data);
};
//退出
export const requestLogout = params => {
    return axios.post(`${base}/user/logout`, qs.stringify(params), {headers: header}).then(res => res.data);
};

//发布公告
// export const announce = params => {
//     return axios.post(`${base}/announce`, qs.stringify(params), {headers: header}).then(res => res.data);
// };
//
// export const announcement = params => {
//     return axios.post(`${base}/announcement`, qs.stringify(params), {headers: header}).then(res => res.data);
// };
//发布公告详情
// export const announceDetail = params => {
//     return axios.post(`${base}/announceDetail`, qs.stringify(params), {headers: header}).then(res => res.data);
// };
//系统通知
// export const notice = params => {
//     return axios.post(`${base}/notice`, qs.stringify(params), {headers: header}).then(res => res.data);
// };
//
// //系统通知详情
// export const noticeDetail = params => {
//     return axios.post(`${base}/noticeDetail`, qs.stringify(params), {headers: header}).then(res => res.data);
// };

// export const getUserList = params => {
//     return axios.post(`${base}/setting/userList`, qs.stringify(params), {headers: header}).then(res => res.data);
// };
//
// //删除用户
// export const removeUser = params => {
//     return axios.post(`${base}/setting/deleteUser`, qs.stringify(params), {headers: header}).then(res => res.data);
// };

// //获取被编辑用户信息
// export const editUser = params => {
//     return axios.post(`${base}/setting/userModifyDetail`, qs.stringify(params), {headers: header}).then(res => res.data);
// };

//编辑用户信息提交
// export const modifyUser = params => {
//     return axios.post(`${base}/setting/modifyUser`, qs.stringify(params), {headers: header}).then(res => res.data);
// };

//获取所有角色(比如会计等职位)
// export const getRolesList = params => {
//     return axios.post(`${base}/setting/getRolesList`, qs.stringify(params), {headers: header}).then(res => res.data);
// };

//新增用户
// export const addUserList = params => {
//     return axios.post(`${base}/setting/addUser`, qs.stringify(params), {headers: header}).then(res => res.data);
// };

//获取新闻消息列表
// export const getNewsList = params => {
//     return axios.post(`${base}/news/list`, qs.stringify(params), {headers: header}).then(res => res.data);
// };

//获取新闻消息详情
// export const getNewsDetails = params => {
//     return axios.post(`${base}/news/detail`, qs.stringify(params), {headers: header}).then(res => res.data);
// };

//设置
//企业信息
// export const getCompanyInfo = params => {
//     return axios.post(`${base}/setting/companyInfo`, qs.stringify(params), {headers: header}).then(res => res.data);
// };

//获取公司角色与权限名
// export const getRolesInfo = params => {
//     return axios.post(`${base}/setting/getRolesInfo`, qs.stringify(params), {headers: header}).then(res => res.data);
// };

//新增公司角色名
// export const addRole = params => {
//     return axios.post(`${base}/setting/addRole`, qs.stringify(params), {headers: header}).then(res => res.data);
// };
//
// //删除角色信息
// export const deleteRole = params => {
//     return axios.post(`${base}/setting/deleteRole`, qs.stringify(params), {headers: header}).then(res => res.data);
// };

//获取被编辑的公司角色信息详情
// export const getCompanyRoleVoInfo = params => {
//     return axios.post(`${base}/setting/getCompanyRoleVoInfo`, qs.stringify(params), {headers: header}).then(res => res.data);
// };
//
// //提交编辑后的角色信息详情
// export const modifyRole = params => {
//     return axios.post(`${base}/setting/modifyRole`, qs.stringify(params), {headers: header}).then(res => res.data);
// };

//修改密码
export const modifyPassword = params => {
    return axios.post(`${base}/user/modifypd`, qs.stringify(params), {headers: header}).then(res => res.data);
};

//发送邮箱验证码
export const sendCheckCodeEmail = params => {
    return axios.post(`${base}/user/sendEmail`, qs.stringify(params), {headers: header}).then(res => res.data);
};

//验证邮箱验证码:
export const checkEmailCode = params => {
    return axios.post(`${base}/user/checkEmailCode`, qs.stringify(params), {headers: header}).then(res => res.data);
};
//忘记密码修改密码
export const resetPassword = params => {
    return axios.post(`${base}/user/resetpw`, qs.stringify(params), {headers: header}).then(res => res.data);
};
//设置用户手机号码提醒
export const smsSave = params => {
    return axios.post(`${base}/notice/save`, qs.stringify(params), {headers: header}).then(res => res.data);
};
//设置用户手机号码提醒
export const smsList = params => {
    return axios.post(`${base}/notice/list`, qs.stringify(params), {headers: header}).then(res => res.data);
};
//忘记密码图形码
// export const imageCode = params => {
//     return axios.post(`${base}/user/imageCode`, qs.stringify(params), {headers: header}).then(res => res.data);
// };
//查看未读系统公告数量
// export const unreadNumber = params => {
//     return axios.post(`${base}/noticeUnreadNumber`, qs.stringify(params), {headers: header}).then(res => res.data);
// };
