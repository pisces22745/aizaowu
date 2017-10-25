/**
 * Created by UI150730 on 2017/4/17.
 */
import axios from 'axios/dist/axios.min';

let qs = require('qs');
let base = process.env.API_ROOT;
//获取登录用户的权限
export const addUser = params => {
    return axios.post(`${base}/api/user/addUser`, qs.stringify(params)).then(res => res.data);
};

