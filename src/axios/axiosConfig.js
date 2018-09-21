import axios from "axios";
import iView from "iview";
import qs from "qs";

//发送请求之前
axios.interceptors.request.use((config) => {
  if (config.method === "post" && config.headers["Content-Type"] !== "application/json;charset=UTF-8") {
    config.data = qs.stringify(config.data);
  }
  return config;
}, (error) => {
  // eslint-disable-next-line
  return Promise.reject(error);
});

//响应数据
axios.interceptors.response.use((response) => {
  if (!response.data.success) {
    iView.Message.error(response.data.errorMessage);
  }
  return response;
}, (error) => {
  iView.Message.error("网络开小差......");
  // eslint-disable-next-line
  return Promise.reject(error);
});

export default axios;
