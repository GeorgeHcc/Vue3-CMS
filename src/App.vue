<template>
  <div class="app">
    <login-page />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import LoginPage from "./views/login/LoginPage.vue"
export default defineComponent({
  name: "App",
  components: { LoginPage },
  setup() {
    return {}
  }
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
