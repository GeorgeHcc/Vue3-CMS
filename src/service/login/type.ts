export interface IAccount {
  user: string
  password: string
}
export interface IDataType<T = any> {
  code: number
  data: T
}
export interface ILoginResult {
  token: string
  userinfo: IUserInfo
}
export interface IUserInfo {
  id: number
  account: string
  realName: string
  age: number
  email: string
  phone: string
  avatar: string
  role: string
}
