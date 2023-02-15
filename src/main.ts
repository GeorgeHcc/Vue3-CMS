import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
//全局引入
// import ElementPlus from "element-plus"
// import "element-plus/lib/theme-chalk/index.css"

import register from "./global"
const app = createApp(App)
createApp(App).use(store).use(router).mount("#app")
register(app)
