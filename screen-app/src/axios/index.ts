import axios from "axios";
import { ElMessage } from "element-plus";
import router from "@/router";

axios.defaults.timeout = 100000; // 默认超时时间
axios.defaults.baseURL = '/api'; // 默认请求前缀

function getToken() { // 模拟token
    return "test";
}

let clock: any = null;

// http request拦截
axios.interceptors.request.use(config => {
    if (getToken()) {
        config.headers["tokenHeader"] = "bearer" + getToken();
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// http response拦截
axios.interceptors.response.use(res => {
    // 获取状态码
    const status: number = res.data.code;

    const msg: any = res.data.msg || "unknown error";

    if (status === 401) { //  401跳转到登录页面
        if (!clock) { // 限定时间内仅能执行一次
            ElMessage.error(msg);
        }
        clock = setTimeout(() => {
            clock = null;
        }, 2000);

        router.push({path: '/login'})
    } else {
        // 如果响应状态码不等于200，统一进行错误处理
        if (status !== 200) {
            ElMessage.error(msg);
            return Promise.reject(new Error(msg));
        }
    }
    return res;
}, error => {
    return Promise.reject(new Error(error));
});

export default axios;


