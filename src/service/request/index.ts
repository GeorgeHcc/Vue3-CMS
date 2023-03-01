import axios from "axios"
import type { AxiosInstance } from "axios"
import type { hynInterceptors, hynRequestConfig } from "./type"

class apiRequest {
  instance: AxiosInstance
  interceptors?: hynInterceptors

  constructor(config: hynRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    // //请求拦截
    // this.instance.interceptors.request.use(
    //   this.interceptors?.requestInterceptor,
    //   this.interceptors?.requestInterceptorCatch
    // )
    // //响应拦截
    // this.instance.interceptors.response.use(
    //   this.interceptors?.responseInterceptor,
    //   this.interceptors?.responseInterceptorCatch
    // )
    //添加所有实例的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log("request intercept suceess")
        return config
      },
      (err) => {
        console.log("request intercept faild")
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log("response intercept suceess")
        return res
      },
      (err) => {
        console.log("response intercept faild")
        return err
      }
    )
  }

  request(config: hynRequestConfig): void {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }
    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res)
      }
      console.log(res)
    })
  }
}

export default apiRequest
