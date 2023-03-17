<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "App",
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
