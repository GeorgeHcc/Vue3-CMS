import { App } from "@vue/runtime-core"
//引入样式文件
import "element-plus/theme-chalk/base.css"
//按需引入组件
import { ElInput, ElAlert, ElForm } from "element-plus/lib/index"

const components = [ElInput, ElAlert, ElForm]
//注册组件的回调钩子
export default function registerElement(app: App) {
  for (const component of components) {
    app.component(component.name, component)
  }
}
