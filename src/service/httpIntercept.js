"use strict";
import axios from "axios";
import qs from "qs";
/*axios实例*/
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL, // api的base_url
    timeout: 30000 // 请求超时时间
});

service.interceptors.request.use(
    config => {
        config.method === "post"
            ? (config.data = qs.stringify({ ...config.data }))
            : (config.params = { ...config.params });
        config.headers["Content-Type"] = "application/x-www-form-urlencoded";
        // config.headers["token"] = (tools.fetch("user") && tools.fetch("user").token) || "";
        // config.headers["shopId"] = (tools.fetch("user") && tools.fetch("user").shopId) || "";
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            // 如果http状态码正常，则直接返回数据
            return checkStatus(response);
        } else {
            return Promise.reject(response.data.error || null);
        }
    },
    error => {
        return Promise.reject(error || null);
    }
);

function checkStatus(response) {
    let { code, data ,message} = response.data;
    if (code === 401) {
        return;
    }
    if (code === 200) {
        return Promise.resolve(data);
    }else{
        return Promise.reject(message);
    }
}
export default service;
