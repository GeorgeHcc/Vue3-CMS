import axios from "axios"
axios.get("http://123.207.32.32:8000/home/multidata")
//1.axios 配置选项
//全局配置
axios.defaults.baseURL = "http://httpbin.org"
axios.defaults.timeout = 5000
// axios.defaults.headers = {}

axios
  .get("/get", {
    params: {
      name: "george"
    }
  })
  .then((res) => console.log(res.data))
//2. axios.all()  ->promise.all()
axios.all([axios.get("/get"), axios.post("./post")]).then((res) => {
  console.log(res[0].data)
  console.log(res[1].data)
})

//3. axios 拦截器
/**
 *
 * @param fn1  :请求发送成功的回调
 * @param fn2  :请求发送失败的回调
 * @returns fn1.arguments[0],fn2.arguments[0]
 */
// axios.interceptors.request.use(fn1, fn2)

axios.interceptors.request.use(
  (config) => {
    //do what you want do
    //1.给请求添加token
    //2.isloading 动画
    console.log("请求拦截成功")
    return config
  },
  (err) => {
    console.log("请求拦截失败")
    return err
  }
)
//数据响应成功的拦截
// axios.interceptors.response.use(fn1,fn2)
axios.interceptors.response.use(
  (res) => {
    console.log("响应成功的拦截")
    return res.data
  },
  (err) => {
    console.log("响应拦截失败")
    return err
  }
)
