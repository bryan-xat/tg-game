import axios from 'axios'

const instance = axios.create({
  baseURL: ' https://api.satsbubble.com',
  headers: {
    'Content-Type': 'application/json',
  }
});


instance.interceptors.request.use(
  (request) => {
    return request;
  },
)

// 添加响应拦截器（可选）
instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;