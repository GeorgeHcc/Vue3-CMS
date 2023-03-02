import axios from "axios"
import type { AxiosInstance } from "axios"
import type { hynInterceptors, hynRequestConfig } from "./type"
import { ElLoading } from "element-plus"
// import type { LoadingInstance } from "element-plus/es/components/loading/src/loading"
const DEAFULT_LOADING = false
class apiRequest {
  instance: AxiosInstance
  interceptors?: hynInterceptors
  loading?: any
  showLoading?: boolean
  constructor(config: hynRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? true
    //当前实例的请求响应拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    //添加所有实例的拦截器（全局）
    this.instance.interceptors.request.use(
      (config) => {
        console.log("global request intercept suceess")
        if (this.showLoading) {
          this.loading = ElLoading.service({
            target: "HTML",
            lock: true,
            text: "正在加载数据...",
            background: "rgba(0,0,0,0.1)"
          })
        }
        return config
      },
      (err) => {
        console.log("global request intercept faild")
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        setTimeout(() => {
          this.loading?.close()
        }, 1000)
        console.log("global response intercept suceess")
        return res
      },
      (err) => {
        console.log("global response intercept faild")
        return err
      }
    )
  }

  request<T>(config: hynRequestConfig): Promise<T> {
    //是否存在拦截器
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      if (config.showLoading === false) {
        this.showLoading = false
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          //单个请求的对对数据的处理
          if (config.interceptors?.responseInterceptor) {
            // res = config.interceptors.responseInterceptor(res)
          }
          //将showloading设置为true
          this.showLoading = DEAFULT_LOADING
          console.log("request里的响应拦截器:", res)
          resolve(res)
          return res
        })
        .catch((err) => {
          //将showLoading设置为true，不会影响下一个请求
          this.showLoading = DEAFULT_LOADING
          reject(err)
          return err
        })
    })
  }
}

export default apiRequest
