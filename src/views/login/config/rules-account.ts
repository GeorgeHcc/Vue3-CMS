import { reactive } from "vue"
const rules = reactive<any>({
  name: [
    { required: true, message: "请输入账号", trigger: "blur" },
    {
      pattern: /^[0-9a-zA-Z]{4,8}$/,
      message: "请输入4-8位字符或数字",
      trigger: "blur"
    }
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    {
      pattern: /^[0-9a-zA-Z]{6,12}$/,
      message: "请输入6-12位字母或数字",
      trigger: "blur"
    }
  ]
})

export default rules
