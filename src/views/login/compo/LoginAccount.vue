<template>
  <div class="login-account">
    <el-form :model="account">
      <el-form-item>
        <el-input
          v-model="account.name"
          placeholder="请输入账号"
          :prefix-icon="Avatar"
        />
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="account.password"
          type="password"
          placeholder="请输入密码"
          show-password
          :prefix-icon="Lock"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue"
import { Avatar, Lock } from "@element-plus/icons-vue"
// import { ElMessage } from "element-plus"

const account = reactive({
  name: "",
  password: ""
})
// const rules = reactive({})
const login = () => {
  ElMessage.success("ww")
  console.log("login success!")
}
</script>

<style scoped></style>
