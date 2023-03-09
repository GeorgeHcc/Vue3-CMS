<template>
  <div class="login-phone">
    <el-form>
      <el-form-item>
        <el-input
          v-model="phone.number"
          placeholder="请输入手机号"
          show-password
          :prefix-icon="Iphone"
        />
      </el-form-item>
      <el-form-item>
        <el-input v-model="phone.validNum" placeholder="请输入验证码" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">发送</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue"
import { Iphone } from "@element-plus/icons-vue"
const phone = reactive({
  number: "",
  validNum: ""
})
</script>

<style scoped></style>
