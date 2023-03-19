import apiRequest from "../request"
import { BASE_URL } from "../request/config"
export const accountLoginRequest = new apiRequest({
  url: "/login",
  method: "get",
  baseURL: BASE_URL
})
