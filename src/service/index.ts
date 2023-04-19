import apiRequest from "./request"
import { BASE_URL, TIME_OUT } from "./request/config"
import localCache from "@/utils/cache"
// import { DataType } from "./login/type"
const hynRequest = new apiRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache("token")
      if (token) {
        config.headers.Authorization = `Bears ${token}`
      }
      return config
    }
  }
  // showLoading: false
})
// hynRequest
//   .request<DataType>({
//     method: "post",
//     url: "/login"
//   })
//   .then((res) => {
//     console.log(res.data)
//   })
hynRequest.showLoading = false
export default hynRequest
