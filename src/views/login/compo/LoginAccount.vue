<template>
  <div class="login-account">
    <el-form :model="account" :rules="rules">
      <el-form-item prop="name">
        <el-input
          v-model="account.name"
          placeholder="请输入账号"
          :prefix-icon="Avatar"
        />
      </el-form-item>
      <el-form-item prop="password">
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
// import type { FormRules } from "element-plus"
const account = reactive({
  name: "",
  password: ""
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
    { required: true, message: "请输入密码", trigger: "blur" },
    {
      pattern: /^[0-0a-zA-Z]{6,12}$/,
      message: "请输入6-12位字母或数字",
      trigger: "blur"
    }
  ]
})
const login = () => {
  ElMessage.success("ww")
  console.log("login success!")
}
</script>

<style scoped>
.el-form-item.is-error .el-input__wrapper {
  box-shadow: 0 0 0 1px greenyellow inset !important;
}
</style>
