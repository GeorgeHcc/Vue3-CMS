const TIME_OUT = 5000
let BASE_URL = ""
//根据process.env.NODE_ENV
if (process.env.NODE_ENV === "development") {
  BASE_URL = "https://mock.apifox.cn/m1/2458010-0-default"
  console.log(BASE_URL)
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "http://123.207.32.32:8080"
  console.log(BASE_URL)
} else {
  BASE_URL = "http://httpbin.org"
  console.log(BASE_URL)
}

export { BASE_URL, TIME_OUT }
