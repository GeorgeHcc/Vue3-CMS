import hynRequest from "../"
import { IAccount, IDataType, ILoginResult } from "./type"
// import { BASE_URL } from "../request/config"

enum LoginApi {
  AccountLogin = "/login"
}
export function accountLoginRequest(account: IAccount) {
  console.log(account)
  return hynRequest.request<IDataType<ILoginResult>>({
    method: "get",
    url: LoginApi.AccountLogin,
    data: account
  })
}
