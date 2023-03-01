import { AxiosRequestConfig, AxiosResponse } from "axios"

export interface hynInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}
export interface hynRequestConfig extends AxiosRequestConfig {
  interceptors?: hynInterceptors
}
