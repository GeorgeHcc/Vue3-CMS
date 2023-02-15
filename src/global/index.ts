import { ElButton } from "element-plus"
// import "element-plus/dist/index.css"
const components = [ElButton]
export default function register(app: any): void {
  components.forEach((component) => {
    app.use(component.name, component)
  })
}
