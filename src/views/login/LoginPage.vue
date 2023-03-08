<template>
  <div class="login">
    <Login-panel />
  </div>
</template>

<script setup lang="ts">
import LoginPanel from "./compo/LoginPanel.vue"
</script>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url("../../assets/img/login-bg.svg");
}
</style>
