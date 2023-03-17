<template>
  <div class="login-account">
    <el-form :model="account" :rules="rules" ref="formRef">
      <el-form-item prop="name">
        <el-input v-model="account.name" placeholder="请输入账号">
          <template #prefix>
            <el-icon>
              <Avatar />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="account.password"
          type="password"
          placeholder="请输入密码"
          show-password
        >
          <template #prefix>
            <el-icon>
              <Lock />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent } from "vue"
import { Avatar, Lock } from "@element-plus/icons-vue"
import type { ElForm } from "element-plus"
// import { rules } from "../config/rules-account"
import localCache from "@/utils/cache"
import { useStore } from "vuex"
import { useRouter } from "vue-router"
export default defineComponent({
  components: { Avatar, Lock },
  setup() {
    const route = useRouter()
    const store = useStore()
    const account = reactive({
      name: localCache.getCache("name") ?? " ",
      password: localCache.getCache("password") ?? " "
    })
    const rules = reactive({
      name: [
        { required: true, message: "请输入账号", trigger: "blur" },
        {
          pattern: /^[0-9a-zA-Z]{4,8}$/,
          message: "请输入4-8位字符或数字",
          trigger: "blur"
        }
      ],
      password: [
        { required: true, message: "请输入密码", trigger: "blur" }
        //   {
        //     pattern: /^[0-0a-zA-Z]{6,12}$/,
        //     message: "请输入6-12位字母或数字",
        //     trigger: "blur"
        //   }
      ]
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAccount = (isKeepPassword: boolean) => {
      console.log("formRef:", formRef.value)
      if (isKeepPassword) {
        localCache.setCache("name", account.name)
        localCache.setCache("password", account.password)
      }
      formRef.value?.validate((valid) => {
        if (valid) {
          ElMessage.success("欢迎登录！")
          route.push("/home")
          console.log("account login", valid)
        } else {
          console.log("valid failed")
        }
      })
    }
    store.dispatch("login/accountLoginAction")
    return {
      account,
      rules,
      formRef,
      loginAccount
    }
  }
})
// const account = reactive({
//   name: "",
//   password: ""
// })
// const rules = reactive({
//   name: [
//     { required: true, message: "请输入账号", trigger: "blur" },
//     {
//       pattern: /^[0-9a-zA-Z]{4,8}$/,
//       message: "请输入4-8位字符或数字",
//       trigger: "blur"
//     }
//   ],
//   password: [
//     { required: true, message: "请输入密码", trigger: "blur" },
//     {
//       pattern: /^[0-0a-zA-Z]{6,12}$/,
//       message: "请输入6-12位字母或数字",
//       trigger: "blur"
//     }
//   ]
// })

// const formRef = ref<InstanceType<typeof ElForm>>()
// const loginAccount = () => {
//   formRef.value?.validate((valid) => {
//     if (valid) {
//       console.log("account login")
//     }
//   })
// }
</script>

<style scoped>
.el-form-item.is-error .el-input__wrapper {
  box-shadow: 0 0 0 1px greenyellow inset !important;
}
</style>
