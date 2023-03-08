<template>
  <div class="login-panel">
    <h2 class="title">Vue-CMS</h2>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <!-- <span class=""> -->
          <!-- <el-icon>
            <User />
          </el-icon> -->
          <span>账号登录</span>
          <!-- </span> -->
        </template>
        账号登录
      </el-tab-pane>
      <el-tab-pane label="手机登录">手机登录</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style lang="less">
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
}
</style>
