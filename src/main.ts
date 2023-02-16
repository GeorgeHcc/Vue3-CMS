import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
// import { register } from "./global"
// 全局引入
import ElementPlus from "element-plus/lib/index"
import "element-plus/dist/index.css"
// import "element-plus/theme-chalk/index.css"

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus, { size: "small", zIndex: 3000 })
  .mount("#app")
// register(app)
