import apiRequest from "./request"
import { BASE_URL, TIME_OUT } from "./request/config"

const hynRequest = new apiRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log("请求拦截成功")
      return config
    }
  }
  // showLoading: true
})
hynRequest.request({
  method: "GET",
  url: "/login"
})
