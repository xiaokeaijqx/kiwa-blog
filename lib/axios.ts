'use clientw'
import axios from "axios";
import {toast} from "sonner";

const axiosInstance = axios.create({
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  }
});
// 请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    const token = typeof window !== 'undefined' && localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
)

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // 请求已发出，但服务器响应状态码不在 2xx 范围内
      if (error.response?.status === 401) {
        // 未登录
        toast.error('请先登录!');
      }
    }
    return Promise.reject(error);
  }
)
export default axiosInstance;