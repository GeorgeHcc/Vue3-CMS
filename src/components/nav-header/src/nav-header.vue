<template>
  <div class="nav-header-wrap">
    <div class="nav-header">
      <div class="isCollapse" @click="switchCollapse">
        <el-icon v-show="isShow"><Fold /></el-icon>
        <el-icon v-show="!isShow"><Expand /></el-icon>
      </div>
    </div>
    <div class="user">
      <headerUser></headerUser>
    </div>
  </div>
</template>

<script setup lang="ts">
import headerUser from "./header-user.vue"
import navMenu from "@/components/nav-menu/src/nav-menu.vue"

const navMenuRef = ref<InstanceType<typeof navMenu>>()
const isShow = ref(false)
const switchCollapse = () => {
  isShow.value = !isShow.value
  console.log("menu:", navMenuRef.value)
}
</script>

<style lang="less" scoped>
.nav-header-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 !important;
  padding: 0 !important;
}
.user {
  position: absolute;
  right: 5vw;
}
</style>
