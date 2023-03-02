import { AxiosRequestConfig, AxiosResponse } from "axios"

export interface hynInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}
export interface hynRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: hynInterceptors<T>
  showLoading?: boolean
}
