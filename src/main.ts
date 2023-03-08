import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "normalize.css"
// import "./assets/img"
// import "./service/index"
// import "./service/request/config"
// import { register } from "./global" //不再使用这种方式，现使用插件自动按需引入
// 全局引入
// import ElementPlus from "element-plus/lib/index"
// import "element-plus/dist/index.css"
// import "element-plus/theme-chalk/index.css"

const app = createApp(App)
app.use(store)
app.use(router)
app.mount("#app")
