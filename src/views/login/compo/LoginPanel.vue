<template>
  <div class="login-panel">
    <h2 class="title">Vue-CMS</h2>
    <el-tabs type="border-card" stretch class="demo-tabs" v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon>
              <User />
            </el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <LoginAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon>
              <Iphone />
            </el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <LoginPhone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <div class="foot">
      <el-button type="primary" class="login-btn" @click="handleLogin"
        >登录</el-button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import LoginAccount from "./LoginAccount.vue"
import LoginPhone from "./LoginPhone.vue"
import { User, Iphone } from "@element-plus/icons-vue"

const isKeepPassword = ref(false)
const accountRef = ref<InstanceType<typeof LoginAccount>>()
const phoneRef = ref<InstanceType<typeof LoginPhone>>()
const currentTab = ref("account")
const handleLogin = () => {
  if (currentTab.value == "account") {
    //执行账号登录
    accountRef.value?.loginAccount(isKeepPassword.value)
  } else {
    //手机登录
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  margin-bottom: 150px;
  width: 320px;
  .title {
    text-align: center;
  }
  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  .foot {
    .login-btn {
      width: 100%;
      margin-top: 10px;
    }
  }
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #035efb;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>
